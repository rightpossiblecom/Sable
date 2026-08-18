export const ENV = {
  DATABASE_URL:
    process.env.DATABASE_URL || "postgresql://demo:demo@localhost:5432/sable",
  DIRECT_URL:
    process.env.DIRECT_URL || "postgresql://demo:demo@localhost:5432/sable",
  NODE_ENV: process.env.NODE_ENV || "development",
  DEMO_MODE:
    process.env.DEMO_MODE ||
    process.env.NEXT_PUBLIC_DEMO_MODE ||
    process.env.VERCEL ||
    "1",
};

export const {
  DATABASE_URL,
  DIRECT_URL,
  NODE_ENV,
  DEMO_MODE,
} = ENV;

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
export const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
export const ARCJET_KEY = process.env.ARCJET_KEY || "";
export const NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "";
export const CLERK_SECRET_KEY = "";
export const NEXT_PUBLIC_CLERK_SIGN_IN_URL = "/login";
export const NEXT_PUBLIC_CLERK_SIGN_UP_URL = "/signup";
export const NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = "/dashboard";
export const NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = "/dashboard";
export const INNGEST_EVENT_KEY = process.env.INNGEST_EVENT_KEY || "";
export const INNGEST_SIGNING_KEY = process.env.INNGEST_SIGNING_KEY || "";

export const isUsingFallbacks = () => [];
export const logEnvironmentWarnings = () => {};
