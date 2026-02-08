import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  const isLoggedIn = req.cookies.get('better-auth.session_token');

  const { pathname } = req.nextUrl;

  const notAuth = ['/sign-in', '/sign-up'];
  const mustAuth = ['/profile'];

  if (isLoggedIn && notAuth.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!isLoggedIn && mustAuth.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }
}
