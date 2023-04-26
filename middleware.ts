import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const checkProtectedRoute = (path: string) =>
  path.startsWith('/todos') || path.startsWith('/account');
const checkProtectedEndPoint = (path: string) => path.startsWith('/api/todos');

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (checkProtectedRoute(req.nextUrl.pathname) && !session) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/';
    return NextResponse.redirect(redirectUrl);
  } else if (checkProtectedEndPoint(req.nextUrl.pathname) && !session) {
    return NextResponse.redirect('/api/unauthorized');
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|assets).*)'],
};
