import MarketingShell from "@/components/marketing-shell";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact — Sable",
  description: "Write the Sable house in Lagos.",
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-sm font-medium text-blue-700 tracking-wide uppercase mb-4">
            Contact
          </p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Write the house</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Family offices, operators, and counsel sit with us in Lagos. Open an account, or send the desk a note.
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Desk:</span> Victoria Island, Lagos
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Letter:</span> house@sable.africa
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Corridor:</span> Accra · Nairobi · Johannesburg
            </p>
            <Link href="/signup">
              <Button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
