import Link from "next/link";
import { FOOTER_LEGAL, MARKETING_LINKS } from "@/lib/nav";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Sable
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              The household ledger for African families and firms. Accounts, budgets, and receipts that keep wealth on the continent for the next generation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">House</h4>
            <ul className="space-y-2 text-gray-400">
              {MARKETING_LINKS.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {MARKETING_LINKS.slice(7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LEGAL.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Log in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white transition-colors">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sable. Lagos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
