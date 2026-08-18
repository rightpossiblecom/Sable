import Image from "next/image";
import Link from "next/link";
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
    copy: "Four books on one screen. Operating, reserve, Accra, and title.",
  },
  {
    src: "/product/accounts.png",
    title: "The books",
    copy: "Victoria Island, Family Reserve, Accra Trading Desk, Land Trust.",
  },
  {
    src: "/product/transactions.png",
    title: "The year",
    copy: "School fees, Shoprite, Kilimani rent, the Lekki survey.",
  },
  {
    src: "/product/assistant.png",
    title: "The clerk",
    copy: "Ask about land, budget, or reserve. The assistant reads these books.",
  },
];

export default function ProductPage() {
  return (
    <MarketingShell>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm text-neutral-400 mb-4">The product</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            The ledger a house
            <br />
            <span className="text-neutral-400">can still open</span>
          </h1>
          <p className="mt-6 text-neutral-500 leading-relaxed max-w-2xl mx-auto">
            African wealth leaks through three banks and a WhatsApp group. Sable puts the household and the firm on one desk.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-5">
          {SHOTS.map((shot) => (
            <figure key={shot.title} className="rounded-[2rem] bg-soft p-3">
              <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-black">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="text-xl font-semibold">{shot.title}</h3>
                <p className="text-neutral-500 mt-2">{shot.copy}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mx-auto max-w-6xl px-4 mt-10">
          <Link
            href="/signup"
            className="inline-flex px-6 py-3 rounded-full bg-black text-white text-sm"
          >
            Sign up
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}
