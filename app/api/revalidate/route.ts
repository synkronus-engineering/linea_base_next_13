import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // revalidate?ecret=MySecret&path=pathToRevalidate
  const secret = request.nextUrl.searchParams.get('secret') || 'none-secret';
  if (secret !== process.env.PVR_REV_TOKEN)
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  const path = request.nextUrl.searchParams.get('path') || '/';
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
