import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
}
