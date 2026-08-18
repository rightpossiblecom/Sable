import MarketingShell from "@/components/marketing-shell";

export const metadata = {
  title: "Terms — Sable",
  description: "Terms for using the Sable house.",
};

export default function TermsPage() {
  return (
    <MarketingShell>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sable is an institutional desk for African families and firms. The public house is a working ledger with seeded books. It is not a licensed bank, broker, or payment institution.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By opening an account you agree to use the desk as a house tool — to read the year, keep the land, and plan for the next generation — not as a live rail for client money.
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
