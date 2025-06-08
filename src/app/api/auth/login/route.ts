import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { prisma } from '@/lib';
import { randomUUID } from 'crypto';

const SESSION_COOKIE = 'session_id';

export const hashPassword = (password: string) => bcrypt.hash(password, 12);
export const verifyPassword = (input: string, hash: string) => bcrypt.compare(input, hash);

export const createUser = async (email: string, password: string) => {
  const hashed = await hashPassword(password);
  return prisma.user.create({ data: { email, hashedPassword: hashed } });
};

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const createSession = async (userId: string) => {
  const session = await prisma.session.create({
    data: {
      id: randomUUID(),
      userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, session.id, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return session;
};

export const getSessionUser = async () => {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionId) return null;

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date()) return null;
  return session.user;
};

export const deleteSession = async () => {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE)?.value;
  if (sessionId) {
    await prisma.session.delete({ where: { id: sessionId } });
    cookieStore.delete(SESSION_COOKIE);
  }
};
