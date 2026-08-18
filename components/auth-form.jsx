"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { nameFromEmail, writeDemoSession } from "@/lib/demo-auth";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";

export default function AuthForm({ mode = "login" }) {
  const router = useRouter();
  const params = useSearchParams();
  const nextPath = params.get("next") || "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isSignup = mode === "signup";

  const enter = async (event) => {
    event.preventDefault();
    if (!email.trim() || !password) {
      toast.error("Enter your email and password.");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Enter a valid email address.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    writeDemoSession({
      email: email.trim(),
      name: nameFromEmail(email.trim()),
    });
    router.push(nextPath);
    router.refresh();
  };

  return (
    <form onSubmit={enter} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-neutral-500">
          Work email
        </label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@familyoffice.ng"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm text-neutral-500">
          Password
        </label>
        <Input
          id="password"
          type="password"
          autoComplete={isSignup ? "new-password" : "current-password"}
          placeholder="••••••••"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-black hover:bg-neutral-800 text-white py-6 rounded-full"
      >
        {loading ? (
          <LoaderIcon className="w-4 h-4 animate-spin" />
        ) : isSignup ? (
          "Open an account"
        ) : (
          "Log in"
        )}
      </Button>
      <p className="text-sm text-gray-500 text-center">
        {isSignup ? (
          <>
            Already on the house?{" "}
            <Link href="/login" className="text-ink font-medium underline underline-offset-4">
              Log in
            </Link>
          </>
        ) : (
          <>
            New to Sable?{" "}
            <Link href="/signup" className="text-ink font-medium underline underline-offset-4">
              Sign up
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
