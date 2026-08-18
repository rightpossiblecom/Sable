import MarketingShell from "@/components/marketing-shell";
import Link from "next/link";

export const metadata = {
  title: "Contact — Sable",
  description: "Write the Sable house in Lagos.",
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-sm text-neutral-400 mb-4">Contact</p>
          <h1 className="text-5xl font-semibold tracking-tight">Write the house</h1>
          <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
            Family offices, operators, and counsel sit with us in Lagos.
          </p>
          <div className="mt-8 rounded-[2rem] bg-soft p-8 space-y-5">
            <p>
              <span className="block text-sm text-neutral-400">Desk</span>
              Victoria Island, Lagos
            </p>
            <p>
              <span className="block text-sm text-neutral-400">Letter</span>
              house@sable.africa
            </p>
            <p>
              <span className="block text-sm text-neutral-400">Corridor</span>
              Accra · Nairobi · Johannesburg
            </p>
            <Link
              href="/signup"
              className="inline-flex mt-2 px-6 py-3 rounded-full bg-black text-white text-sm"
            >
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
