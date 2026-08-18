import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import AuthForm from "@/components/auth-form";

export const metadata = {
  title: "Sign up — Sable",
  description: "Open a Sable account for the family ledger.",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-md px-4">
          <div className="rounded-[2rem] bg-soft p-8">
            <Link href="/" className="text-xl font-semibold">
              Sable
            </Link>
            <h1 className="text-3xl font-semibold mt-5">Open the house</h1>
            <p className="text-neutral-500 mt-2 mb-8">
              A ledger for the family, the firm, and the land that should outlive you.
            </p>
            <Suspense>
              <AuthForm mode="signup" />
            </Suspense>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
