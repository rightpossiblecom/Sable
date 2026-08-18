import { cookies } from "next/headers";
import { DEMO_USER } from "@/lib/demo-data";
import { DEMO_SESSION_COOKIE, parseDemoSession } from "@/lib/demo-auth";
import { isDemoMode } from "@/lib/demo";

export const checkUser = async () => {
  if (isDemoMode()) {
    try {
      const store = await cookies();
      const session = parseDemoSession(store.get(DEMO_SESSION_COOKIE)?.value);
      if (!session) return null;
      return {
        ...DEMO_USER,
        email: session.email,
        name: session.name,
      };
    } catch {
      return { ...DEMO_USER };
    }
  }

  return null;
};
