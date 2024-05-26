import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("user");
  const url = request.nextUrl;

  // If the request is for the login page and the user cookie is set, redirect to /admin
  if (url.pathname === "/admin/login" && cookie) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // If the request is for an admin page other than the login page and the user cookie is not set, redirect to /admin/login
  if (
    url.pathname.startsWith("/admin") &&
    !url.pathname.startsWith("/admin/login") &&
    !cookie
  ) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Allow the request to proceed if the above conditions are not met
  return NextResponse.next();
}

// Matcher configuration to apply middleware only to the desired paths
export const config = {
  matcher: ["/admin/:path*"],
};
