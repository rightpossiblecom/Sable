# Sable — plan

Source: [aiaugments-collab/finance-ai](https://github.com/aiaugments-collab/finance-ai). Live site: [finance-ai-weld-gamma.vercel.app](https://finance-ai-weld-gamma.vercel.app). Upstream called itself FinAI / AI Financial Intelligence.

## 1. Brand

Three names considered:

1. **Sable** — locked. The private-house name. A dark antelope on the savanna, and the ink a family office still signs with. Short. Adult. Sounds like a bank that will still be here when the grandchildren open the ledger.
2. Meridian — the line across the continent. Clear, a little generic next to Atrium.
3. Kilele — Swahili for the peak. Strong, more civic than fiduciary.

**One line:** Sable is the household ledger for African families and firms — accounts, budgets, and receipts that keep wealth on the continent for the next generation.

## 2. What `/` is now vs what it should be

`/` is already marketing: blue–green gradient hero, Fortune 500 logo row, four capability cards, SLA stats, three-step framework, three enterprise price cards, purple CTA, dark footer.

- Keep `/` as marketing. Same sections, same rhythm. New name, Africa, generational-wealth copy.
- Keep `/dashboard` as the in-app home (their word). Do not redesign it. Seed it.
- Keep their rooms: `/account`, `/transaction`, `/budget`, `/analytics`, `/ai-assistant`, `/receipt-scanner`, `/ai-insights`, `/subscription`, `/settings`, `/admin`.

## 3. Landing (their layout, our copy)

| Section | Their rhythm | Our treatment |
| --- | --- | --- |
| Header | Fixed blur bar, wordmark, Features / Pricing / How it works, Client Portal / Request Demo | Sable wordmark. Full house map. **Log in** / **Sign up** |
| Hero badge | Next-Generation Financial Intelligence | The ledger African houses keep |
| Hero | AI Financial Intelligence | Wealth that stays on the continent |
| CTAs | Request Enterprise Demo / Schedule Consultation | Sign up / Log in |
| Preview frame | Executive Intelligence Suite | Household Intelligence Suite — Lagos, Accra, Nairobi desks |
| Logo row | Goldman, JPMorgan, BlackRock… | Access Bank, GTBank, Standard Bank, Equity, Absa |
| Features | Four enterprise AI cards | Same cards. Families, firms, land, trade |
| Stats | $2.4B AUM / 99.97% / 500 clients | Households, corridors, years the house intends to stand |
| How it works | Data → AI → Intelligence | Bring the books. Read the year. Keep the land. |
| Pricing | Professional / Enterprise / Plus in $ | House / Chamber / Family office. Naira-first |
| CTA | Revolutionize operations | Open a Sable account |
| Footer | Product + Company lists, many 404s | Full map. Lagos company voice. Privacy / Terms |

No leftover FinAI, Fortune 500, Goldman, “open-source”, or “Request Enterprise Demo” voice on the public site.

## 4. Every page in the marketing header and footer

Header and footer list **every** public page: Product, Team, **Dashboard**, **Accounts**, **Transactions**, **Budget**, **Analytics**, **Assistant**, **Scanner**, **Insights**, Pricing, About, Contact, plus Log in / Sign up. Privacy and Terms live in the footer only.

- `/product` — Sable intro, ≥4 shots of this UI, how it works, CTA to Sign up
- `/team` — ≥2 people (Adanna Okonkwo, Kwame Boateng, Naledi Mokoena), roles, bios, LinkedIn, photos
- `/about`, `/contact`, `/privacy`, `/terms` — new, same look
- `/pricing` — their existing in-app page (already in the repo). Landing also keeps `#pricing`

## 5. Login / signup

New routes `/login` and `/signup`. Their blue–indigo card, email + password, short loading state, cross-links. Any pair works. Old `/sign-in` and `/sign-up` redirect here.

After login or signup → **`/dashboard`**. Session is `localStorage` (`sable:session`) plus cookie `sable_session`. Logout clears both.

## 6. In-app home and screens we keep

| Route | Job |
| --- | --- |
| `/dashboard` | In-app home. Their dashboard. Do not redesign. Seed it. |
| `/account` | Portfolio list. Seeded. |
| `/account/[id]` | One book. Seeded transactions + chart. |
| `/transaction` | Transaction intelligence. Seeded. |
| `/budget` | Their strategic planning page. Already mocked. Leave the chrome. |
| `/analytics` | Their analytics. Leave it. |
| `/ai-assistant` | Their chat. Canned reply after a short delay. |
| `/receipt-scanner` | Their scanner. Canned Shoprite / Ikoyi receipt. |
| `/ai-insights` | Their insights. Leave it. |
| `/subscription` | Their license page. Leave it. |
| `/settings` | Their settings. Leave it. |
| `/admin` | Their admin. Seeded. Do not redesign. |

Do not rewrite the sidebar, cards, or tables.

## 7. What we mock

- Auth: any email + password. No Clerk, no OAuth.
- Ledger: Lagos / Accra / Nairobi / Johannesburg fixtures. Full lists. No empty states on the camera path.
- Create account / default switch / add transaction: canned success after a short delay.
- Receipt scan + AI assistant: canned result after a short delay.
- Prisma, Neon, Clerk, Gemini, Resend, ArcJet, Inngest: never required to boot.

## 8. What we delete so Vercel builds

- Required live `DATABASE_URL` / Clerk / Gemini / ArcJet constructors
- Hardcoded upstream secrets in `lib/env.js`, README, and admin settings
- ArcJet + Clerk middleware (cookie session instead)
- Docker as a boot requirement (none in this repo)
- GitHub Actions / Dependabot (none in this repo)

`DEMO_MODE` defaults on. `VERCEL=1` is also demo. Prisma generate uses a dummy localhost URL so the host does not need a database.

## 9. Product-page media

No README video. Capture from the local demo after the house boots: dashboard, accounts, transactions, assistant. Clean names under `public/product/`.
