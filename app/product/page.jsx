import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MarketingShell from "@/components/marketing-shell";

export const metadata = {
  title: "Product — Sable",
  description:
    "Sable is the household ledger for African families and firms. See the dashboard, the books, the year, and the assistant.",
};

const SHOTS = [
  {
    src: "/product/dashboard.png",
    title: "The desk",
    copy: "Four books on one screen. Operating, reserve, Accra, and title — the year at a glance.",
  },
  {
    src: "/product/accounts.png",
    title: "The books",
    copy: "Victoria Island, Family Reserve, Accra Trading Desk, Land Trust. No empty shelf.",
  },
  {
    src: "/product/transactions.png",
    title: "The year",
    copy: "School fees, Shoprite, Kilimani rent, the Lekki survey. Every movement that should outlive a chat thread.",
  },
  {
    src: "/product/assistant.png",
    title: "The clerk",
    copy: "Ask about land, budget, or reserve. The assistant reads these books, not a generic market slide.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Open the house",
    copy: "Sign up. The books are already seated — a Lagos operating line, a reserve, an Accra desk, and a land trust.",
  },
  {
    step: "02",
    title: "Read what left",
    copy: "Scan a receipt. Post a fee. Watch the month sit against the line the family agreed.",
  },
  {
    step: "03",
    title: "Keep what should stay",
    copy: "Move surplus into reserve and title. That is how wealth stays on the continent.",
  },
];

export default function ProductPage() {
  return (
    <MarketingShell>
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm font-medium text-blue-700 tracking-wide uppercase mb-4">
            The product
          </p>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight mb-6">
            The ledger a house can still open in thirty years
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            African wealth leaks through three banks, a lawyer’s inbox, and a WhatsApp group. Sable puts the household and the firm on one desk — so land, school, and trade compound for the children.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SHOTS.map((shot) => (
              <figure
                key={shot.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-50 to-green-50">
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    fill
                    unoptimized
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{shot.title}</h3>
                  <p className="text-gray-600 mt-2">{shot.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">How the house works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl border border-blue-100 p-6">
                <p className="text-sm font-semibold text-blue-600">{item.step}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-8"
              >
                Sign up
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
