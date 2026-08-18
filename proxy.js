import { NextResponse } from "next/server";
import { DEMO_SESSION_COOKIE } from "@/lib/demo-auth";

const PROTECTED_PREFIXES = [
  "/dashboard",
  "/account",
  "/transaction",
  "/admin",
  "/budget",
  "/analytics",
  "/ai-assistant",
  "/receipt-scanner",
  "/ai-insights",
  "/subscription",
  "/settings",
];

function isProtected(pathname) {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  const session = request.cookies.get(DEMO_SESSION_COOKIE)?.value;
  if (session) {
    return NextResponse.next();
  }

  const login = request.nextUrl.clone();
  login.pathname = "/login";
  login.searchParams.set("next", pathname);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
