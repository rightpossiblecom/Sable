import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import AuthForm from "@/components/auth-form";

export const metadata = {
  title: "Log in — Sable",
  description: "Log in to the Sable household ledger.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-md px-4">
          <div className="rounded-[2rem] bg-soft p-8">
            <Link href="/" className="text-xl font-semibold">
              Sable
            </Link>
            <h1 className="text-3xl font-semibold mt-5">Welcome back</h1>
            <p className="text-neutral-500 mt-2 mb-8">
              Open the books. The house is waiting.
            </p>
            <Suspense>
              <AuthForm mode="login" />
            </Suspense>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
