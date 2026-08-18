export const DEMO_SESSION_COOKIE = "sable_session";
export const DEMO_SESSION_STORAGE = "sable:session";

export function parseDemoSession(raw) {
  if (!raw) return null;

  try {
    const data = JSON.parse(decodeURIComponent(raw));
    if (!data?.email) return null;
    return {
      email: String(data.email),
      name: String(data.name || "Amara Okonkwo"),
    };
  } catch {
    return null;
  }
}

export function serializeDemoSession(session) {
  return encodeURIComponent(JSON.stringify(session));
}

export function writeDemoSession(session) {
  const value = serializeDemoSession(session);
  document.cookie = `${DEMO_SESSION_COOKIE}=${value}; Path=/; Max-Age=${60 * 60 * 24 * 30}; SameSite=Lax`;
  window.localStorage.setItem(DEMO_SESSION_STORAGE, JSON.stringify(session));
}

export function clearDemoSession() {
  document.cookie = `${DEMO_SESSION_COOKIE}=; Path=/; Max-Age=0`;
  window.localStorage.removeItem(DEMO_SESSION_STORAGE);
}

export function readDemoSessionFromDocument() {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${DEMO_SESSION_COOKIE}=`));

  if (match) {
    return parseDemoSession(match.slice(DEMO_SESSION_COOKIE.length + 1));
  }

  try {
    const stored = window.localStorage.getItem(DEMO_SESSION_STORAGE);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function nameFromEmail(email) {
  const local = email.split("@")[0] || "amara";
  const parts = local.replace(/[._-]+/g, " ").trim().split(" ").filter(Boolean);
  const first = parts[0]
    ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1)
    : "Amara";
  const last = parts[1]
    ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1)
    : "Okonkwo";
  return `${first} ${last}`;
}
