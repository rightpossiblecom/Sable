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
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm text-neutral-400 mb-4">The team</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            A house,
            <span className="text-neutral-400"> not a product team</span>
          </h1>
          <p className="mt-6 text-neutral-500 leading-relaxed">
            Run from Lagos, Accra, and Johannesburg. We sit with families who already own land, firms, and a corridor.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-5">
          {TEAM.map((person) => (
            <article key={person.name} className="rounded-[2rem] bg-soft p-7">
              <Image
                src={person.image}
                alt={person.name}
                width={80}
                height={80}
                className="w-16 h-16 rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold mt-6">{person.name}</h2>
              <p className="text-sm text-neutral-400 mt-1">
                {person.role} · {person.location}
              </p>
              <p className="text-neutral-500 leading-relaxed mt-4">{person.bio}</p>
              <Link
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm mt-5 font-medium"
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
