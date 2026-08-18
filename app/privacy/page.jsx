import MarketingShell from "@/components/marketing-shell";

export const metadata = {
  title: "Privacy — Sable",
  description: "How Sable treats the household ledger.",
};

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sable is a household ledger. The books you open here — accounts, receipts, school fees, title — belong to the house that signed in. We do not sell a family’s year to a broker in another hemisphere.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This desk is a working house, not a live bank connection. Do not post a real card, a real BVN, or a password you use at a licensed institution.
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
