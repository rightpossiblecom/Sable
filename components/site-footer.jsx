import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FOOTER_LEGAL, HEADER_LINKS, HOUSE_LINKS } from "@/lib/nav";

export default function SiteFooter() {
  return (
    <footer className="bg-midnight text-white overflow-hidden">
      <div className="border-b border-white/10 py-10 overflow-hidden">
        <div className="flex whitespace-nowrap text-5xl md:text-7xl font-semibold tracking-tight">
          <span className="mx-6">Keep the land</span>
          <span className="mx-6 text-white/25">•</span>
          <span className="mx-6 text-white/40">Keep the land</span>
          <span className="mx-6 text-white/25">•</span>
          <span className="mx-6">Keep the land</span>
          <span className="mx-6 text-white/25">•</span>
          <span className="mx-6 text-white/40">Keep the land</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-2xl font-semibold leading-snug max-w-sm">
            Wealth that stays on the continent.
          </p>
          <Link
            href="/signup"
            className="inline-flex mt-6 px-6 py-2.5 rounded-full bg-white text-black text-sm hover:bg-neutral-200"
          >
            Sign up
          </Link>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-white/60">
          <div>
            <p className="text-white mb-4">Company</p>
            <ul className="space-y-2">
              {HEADER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white mb-4">Desk</p>
            <ul className="space-y-2">
              {HOUSE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white mb-4">Support</p>
            <ul className="space-y-2">
              {FOOTER_LEGAL.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/login" className="hover:text-white">
                  Log in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 flex items-center justify-between text-xs text-white/40">
        <p>© {new Date().getFullYear()} Sable. Victoria Island, Lagos.</p>
        <Link
          href="/"
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
        >
          <ArrowUp size={16} />
        </Link>
      </div>
    </footer>
  );
}
