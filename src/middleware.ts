import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ru", "kz"],

  // Used when no locale matches
  defaultLocale: "ru",
});
// Matcher configuration to apply middleware only to the desired paths
export const config = {
  matcher: ["/", "/(ru|kz)/:path*"],
};
