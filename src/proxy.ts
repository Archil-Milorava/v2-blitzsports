// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  const isLoggedIn = req.cookies.get('better-auth.session_token');

  const { pathname } = req.nextUrl;

  const authPages = ['/sign-in', '/sign-up'];

  if (isLoggedIn && authPages.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}