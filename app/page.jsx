import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Flame, TrendingUp } from "lucide-react";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { HEADER_LINKS } from "@/lib/nav";

const features = [
  {
    title: "A mind on the books",
    description:
      "Read a year of spend, school fees, and land payments the way a family office reads a corridor.",
  },
  {
    title: "Four books. One desk.",
    description:
      "Operating, reserve, trading, and title. Lagos, Accra, Nairobi, and Johannesburg together.",
  },
  {
    title: "Trade that compounds",
    description:
      "See what the Accra desk and the Kilimani rent are building, then move the surplus into land.",
  },
  {
    title: "A record that lasts",
    description:
      "Receipts and title stay in the ledger. The children should not inherit a folder of transfers.",
  },
];

const pricingPlans = [
  {
    name: "House",
    price: "₦180k",
    period: "/mo",
    description: "The family ledger for a household that already owns more than one book.",
    features: [
      "Four household books",
      "Receipt reading",
      "Budget alerts",
      "Naira, cedi, shilling",
      "Monthly house letter",
    ],
    highlighted: false,
  },
  {
    name: "Chamber",
    price: "₦650k",
    period: "/mo",
    description: "The firm desk — operators, warehouses, and a reserve that outlives one founder.",
    features: [
      "Unlimited books",
      "Corridor analytics",
      "Family-office seating",
      "A named clerk",
      "Title calendars",
    ],
    highlighted: true,
  },
  {
    name: "Family office",
    price: "Custom",
    period: "",
    description: "A private Sable for houses that already sit across the continent.",
    features: [
      "Private deployment",
      "Counsel and title",
      "Multi-desk architecture",
      "Executive ledger",
      "Lagos and Joburg partners",
    ],
    highlighted: false,
  },
];

export default function SableLanding() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <section className="pt-28 pb-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm text-neutral-400 mb-4">Household ledger</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Wealth that stays
            <br />
            <span className="text-neutral-400">on the continent</span>
          </h1>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl px-4 h-[420px] md:h-[540px]">
          <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[280px] md:w-[340px] h-[380px] md:h-[480px] rounded-[2.2rem] overflow-hidden shadow-2xl shadow-black/20 border-8 border-black bg-black">
            <Image
              src="/product/dashboard.png"
              alt="Sable desk"
              fill
              unoptimized
              className="object-cover object-left-top"
            />
          </div>

          <div className="hidden md:flex absolute left-6 top-16 w-56 rounded-3xl bg-white p-4 shadow-xl shadow-black/10 items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-soft overflow-hidden">
              <Image
                src="/team/adanna.jpg"
                alt=""
                width={40}
                height={40}
                className="object-cover w-10 h-10"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Amara Okonkwo</p>
              <p className="text-xs text-neutral-400">Lagos house</p>
            </div>
          </div>

          <div className="hidden md:block absolute right-8 top-10 w-52 rounded-3xl bg-white p-4 shadow-xl shadow-black/10 text-left">
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
              <Flame size={14} className="text-orange-400" />
              Reserve
            </div>
            <p className="text-2xl font-semibold">$1.86M</p>
            <div className="mt-3 h-1.5 rounded-full bg-soft overflow-hidden">
              <div className="h-full w-4/5 rounded-full bg-mint" />
            </div>
          </div>

          <div className="hidden md:block absolute left-10 bottom-8 w-48 rounded-3xl bg-white p-4 shadow-xl shadow-black/10 text-left">
            <p className="text-xs text-neutral-400 mb-1">This month</p>
            <p className="text-sm font-medium">School fees on the line</p>
            <p className="text-xs text-neutral-400 mt-2">Corona · $42,000</p>
          </div>

          <div className="hidden md:block absolute right-6 bottom-16 w-52 rounded-3xl bg-white p-4 shadow-xl shadow-black/10 text-left">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-neutral-400">Accra desk</p>
              <TrendingUp size={14} className="text-mint" />
            </div>
            <div className="flex items-end gap-1 h-12">
              {[40, 55, 35, 70, 48, 82, 64].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full bg-mint/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 mt-6">
          <div className="flex gap-2 overflow-x-auto no-scrollbar justify-start md:justify-center py-2">
            {HEADER_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 px-4 py-2 rounded-full text-sm ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-soft text-neutral-600 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              A ledger
              <br />
              <span className="text-neutral-400">built for the house</span>
            </h2>
            <p className="mt-6 text-neutral-500 leading-relaxed max-w-md">
              African wealth leaks through three banks and a WhatsApp group. Sable keeps land, school, and trade on one desk — so the children inherit the books, not the mess.
            </p>
            <Link
              href="/signup"
              className="inline-flex mt-8 px-6 py-3 rounded-full bg-black text-white text-sm hover:bg-neutral-800"
            >
              Sign up
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden bg-soft p-4 shadow-xl shadow-black/5">
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/product/accounts.png"
                  alt="Sable books"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -right-2 bottom-8 w-40 rounded-3xl bg-white p-4 shadow-xl shadow-black/10">
              <p className="text-3xl">⌂</p>
              <p className="text-sm font-medium mt-2">Land stays in the family</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] overflow-hidden relative min-h-[520px] bg-midnight text-white">
          <Image
            src="/banner.jpeg"
            alt=""
            fill
            className="object-cover opacity-40"
          />
          <div className="relative z-10 p-8 md:p-14 flex flex-col justify-between min-h-[520px]">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                A house that
                <br />
                outlives one founder
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Families and firms from Lagos to Johannesburg already keep the year in one place.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {[
                { title: "House", copy: "The family books" },
                { title: "Chamber", copy: "The firm desk" },
                { title: "Land trust", copy: "Title for the children" },
              ].map((card) => (
                <div key={card.title} className="rounded-3xl bg-white text-black p-5">
                  <div className="w-12 h-12 rounded-2xl bg-soft mb-4 overflow-hidden relative">
                    <Image
                      src="/product/dashboard.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <p className="font-medium">{card.title}</p>
                  <p className="text-sm text-neutral-400 mt-1">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-12">
            Keep the year
            <span className="text-neutral-400"> in one place</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { src: "/product/transactions.png", title: "The year" },
              { src: "/product/assistant.png", title: "The clerk" },
              { src: "/product/dashboard.png", title: "The desk" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-soft p-3 h-[420px] overflow-hidden"
              >
                <div className="relative h-full rounded-[1.5rem] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="pb-24">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[2rem] bg-soft p-8">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-neutral-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-semibold tracking-tight mb-10">
            How a house <span className="text-neutral-400">keeps the money</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Bring the books",
                copy: "Open operating, reserve, trading, and title. Shoprite, GTBank, and the Lekki survey sit in the same house.",
              },
              {
                n: "02",
                title: "Read the year",
                copy: "The assistant reads spend against the line and keeps school fees on the calendar.",
              },
              {
                n: "03",
                title: "Keep the land",
                copy: "Move surplus from Accra and Kilimani into reserve and title. That is how a house still matters.",
              },
            ].map((step) => (
              <div key={step.n} className="rounded-[2rem] border border-black/5 p-8">
                <p className="text-sm text-neutral-400 mb-4">{step.n}</p>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-neutral-500 leading-relaxed">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-12">
            Seats in the house
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] p-8 ${
                  plan.highlighted
                    ? "bg-black text-white"
                    : "bg-soft text-black"
                }`}
              >
                <p className="text-sm text-neutral-400">{plan.name}</p>
                <p className="mt-4 text-4xl font-semibold">
                  {plan.price}
                  <span className="text-lg font-normal text-neutral-400">
                    {plan.period}
                  </span>
                </p>
                <p className={`mt-4 text-sm leading-relaxed ${plan.highlighted ? "text-white/60" : "text-neutral-500"}`}>
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check size={16} className={plan.highlighted ? "text-mint" : "text-black"} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.name === "Chamber" ? "/contact" : "/signup"}
                  className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm ${
                    plan.highlighted
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {plan.name === "Chamber" ? "Contact the house" : "Sign up"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
