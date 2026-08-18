import MarketingShell from "@/components/marketing-shell";

export const metadata = {
  title: "Terms — Sable",
  description: "Terms for using the Sable house.",
};

export default function TermsPage() {
  return (
    <MarketingShell>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">Terms</h1>
          <p className="text-neutral-500 leading-relaxed mb-4">
            Sable is an institutional desk for African families and firms. The public house is a working ledger with seeded books. It is not a licensed bank, broker, or payment institution.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            By opening an account you agree to use the desk as a house tool — to read the year, keep the land, and plan for the next generation.
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
