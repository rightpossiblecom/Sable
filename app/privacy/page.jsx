import MarketingShell from "@/components/marketing-shell";

export const metadata = {
  title: "Privacy — Sable",
  description: "How Sable treats the household ledger.",
};

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">Privacy</h1>
          <p className="text-neutral-500 leading-relaxed mb-4">
            Sable is a household ledger. The books you open here belong to the house that signed in. We do not sell a family’s year to a broker in another hemisphere.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            This desk is a working house, not a live bank connection. Do not post a real card, a real BVN, or a password you use at a licensed institution.
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
