import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const shows = await prisma.tvShow.findMany()
  return NextResponse.json(shows)
}

export async function POST(request: Request) {
  const data = await request.json()
  if (!data.title) return NextResponse.json({ error: 'Title is required' }, { status: 400 })

  const newShow = await prisma.tvShow.create({
    data: {
      title: data.title,
      description: data.description,
    },
  })
  return NextResponse.json(newShow, { status: 201 })
}
