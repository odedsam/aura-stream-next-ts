import { NextResponse } from 'next/server';
import { findUserByEmail, verifyPassword, createSession } from '@/lib/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await findUserByEmail(email);
  if (!user || !user.hashedPassword) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const valid = await verifyPassword(password, user.hashedPassword);
  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  await createSession(user.id);
  return NextResponse.json({ success: true });
}
