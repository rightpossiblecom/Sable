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
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-28 pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Sable
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mt-4">Open the house</h1>
            <p className="text-gray-600 mt-2 mb-8">
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
