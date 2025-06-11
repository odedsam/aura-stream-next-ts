import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

const SESSION_COOKIE = 'session'

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
}

export async function middleware(req: NextRequest) {
  const sessionId = req.cookies.get(SESSION_COOKIE)?.value
  if (!sessionId) return redirectToLogin(req)

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  })

  if (!session || new Date(session.expiresAt) < new Date())
    return redirectToLogin(req)

  return NextResponse.next()
}

function redirectToLogin(req: NextRequest) {
  return NextResponse.redirect(new URL('/login', req.url))
}
