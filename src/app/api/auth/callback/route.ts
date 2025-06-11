import { createSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

const PROVIDERS = {
  facebook: {
    tokenUrl: 'https://graph.facebook.com/v18.0/oauth/access_token',
    profileUrl: 'https://graph.facebook.com/me?fields=id,name,email',
    clientId: process.env.FACEBOOK_CLIENT_ID!,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    redirectUri: process.env.FACEBOOK_REDIRECT_URI!,
    getProfileUrl: (token: string) =>
      `https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`,
    getTokenUrl: (code: string) =>
      `https://graph.facebook.com/v18.0/oauth/access_token?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.FACEBOOK_REDIRECT_URI}&client_secret=${process.env.FACEBOOK_CLIENT_SECRET}&code=${code}`,
  },
  google: {
    tokenUrl: 'https://oauth2.googleapis.com/token',
    profileUrl: 'https://www.googleapis.com/oauth2/v2/userinfo',
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    redirectUri: process.env.GOOGLE_REDIRECT_URI!,
    getTokenUrl: async (code: string) => {
      const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code,
          client_id: process.env.GOOGLE_CLIENT_ID!,
          client_secret: process.env.GOOGLE_CLIENT_SECRET!,
          redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
          grant_type: 'authorization_code',
        }),
      });
      return res.json();
    },
    getProfileUrl: (token: string) =>
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`,
  },
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const providerKey = searchParams.get('provider');
  if (!code || !providerKey) return redirect('/login?error=invalid');

  const provider = PROVIDERS[providerKey as keyof typeof PROVIDERS];
  if (!provider) return redirect('/login?error=provider');

  let accessToken = '';

  if (providerKey === 'google') {
    const tokenData = await provider.getTokenUrl(code);
    accessToken = tokenData.access_token;
  } else {
    const tokenUrl = provider.getTokenUrl(code) as string;
    const tokenRes = await fetch(tokenUrl);
    const tokenData = await tokenRes.json();
    accessToken = tokenData.access_token;
  }

  if (!accessToken) return redirect('/login?error=token');

  const profileRes = await fetch(provider.getProfileUrl(accessToken));
  const profile = await profileRes.json();
  const email = profile.email;
  if (!email) return redirect('/login?error=noemail');

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, hashedPassword: '' },
  });

  await createSession(user.id);
  return redirect('/dashboard');
}
