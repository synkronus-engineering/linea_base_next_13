import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
}
