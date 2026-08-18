import MarketingShell from "@/components/marketing-shell";

export const metadata = {
  title: "About — Sable",
  description:
    "Sable is a Lagos-born household ledger for African families and firms who intend to still own the land in thirty years.",
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm font-medium text-blue-700 tracking-wide uppercase mb-4">
            About
          </p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Built for wealth that should stay
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Most “finance apps” on the continent are wallets. Sable is a house. We keep the operating line, the reserve, the trading desk, and the title in one ledger so a family in Lagos or a firm in Accra does not lose the year to three banks and a lawyer’s inbox.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The product is a tool. The story is generational wealth — land, school, trade, and a book the grandchildren can still open.
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
