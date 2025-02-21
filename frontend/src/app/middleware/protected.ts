import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    const authState = request.cookies.get("authState")?.value;
    const parsedAuthState = authState ? JSON.parse(authState) : null;

    if (!parsedAuthState?.isAuthenticated) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};