import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MarketingShell from "@/components/marketing-shell";
import { TEAM } from "@/constants/team";

export const metadata = {
  title: "Team — Sable",
  description:
    "Sable is led from Lagos, Accra, and Johannesburg — a family-office desk, not a side-project finance app.",
};

export default function TeamPage() {
  return (
    <MarketingShell>
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm font-medium text-blue-700 tracking-wide uppercase mb-4">
            The team
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            A house, not a product team
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Sable is run from Lagos, Accra, and Johannesburg. We sit with families who already own land, firms, and a corridor — and we keep the year in one ledger.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((person) => (
            <article
              key={person.name}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={96}
                height={96}
                className="rounded-full w-20 h-20 object-cover"
              />
              <h2 className="text-2xl font-bold text-gray-900 mt-5">{person.name}</h2>
              <p className="text-sm font-medium text-blue-600 mt-1">{person.role}</p>
              <p className="text-sm text-gray-500 mt-1">{person.location}</p>
              <p className="text-gray-600 leading-relaxed mt-4">{person.bio}</p>
              <Link
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 mt-5"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
