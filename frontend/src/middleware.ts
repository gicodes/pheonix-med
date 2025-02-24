import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware hit for:", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;
  const authCookie = request.cookies.get("authState")?.value;
  const parsedAuthState = authCookie ? JSON.parse(authCookie) : null;

  if (pathname.startsWith("/dashboard")) {
    if (parsedAuthState?.role!== "nurse" || parsedAuthState?.role!== "doctor") {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  if (pathname.startsWith("/dashboard/admin/console")) {
    if (parsedAuthState?.role !== "admin") {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};