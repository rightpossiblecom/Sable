import MarketingShell from "@/components/marketing-shell";

export const metadata = {
  title: "About — Sable",
  description:
    "Sable is a Lagos-born household ledger for African families and firms who intend to still own the land in thirty years.",
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-sm text-neutral-400 mb-4">About</p>
          <h1 className="text-5xl font-semibold tracking-tight">
            Built for wealth
            <span className="text-neutral-400"> that should stay</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
            Most finance apps on the continent are wallets. Sable is a house. We keep the operating line, the reserve, the trading desk, and the title in one ledger so a family in Lagos or a firm in Accra does not lose the year.
          </p>
          <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
            The product is a tool. The story is generational wealth — land, school, trade, and a book the grandchildren can still open.
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
