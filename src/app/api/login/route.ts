import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Simulate DB check
  if (email && password) {
    const user = {
      id: '1',
      email,
      name: email.split('@')[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };

    return NextResponse.json({ user }, { status: 200 });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
