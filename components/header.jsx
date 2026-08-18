"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MARKETING_LINKS } from "@/lib/nav";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent shrink-0"
        >
          Sable
        </Link>

        <div className="hidden lg:flex items-center flex-wrap justify-center gap-x-5 gap-y-2">
          {MARKETING_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <Link href="/login">
            <Button
              variant="outline"
              className="border-gray-300 hover:border-blue-400 hover:text-blue-600"
            >
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
