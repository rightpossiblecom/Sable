"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { HEADER_LINKS } from "@/lib/nav";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-t-2 border-black">
      <div className="mx-auto max-w-6xl px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-black">
          Sable
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black hover:text-neutral-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className="px-4 py-2 text-sm text-black">
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 text-sm rounded-full bg-black text-white hover:bg-neutral-800"
          >
            Sign up
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-black"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute top-0 right-0 h-full w-[min(100%,380px)] bg-white shadow-2xl flex flex-col">
            <div className="h-20 px-6 flex items-center justify-between border-b border-black/5">
              <p className="text-lg font-semibold">Menu</p>
              <button
                type="button"
                className="p-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 px-6 py-8 space-y-1">
              {HEADER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl font-semibold tracking-tight hover:text-neutral-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pb-8 flex gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-full border border-black/10 text-sm"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-full bg-black text-white text-sm"
              >
                Sign up
              </Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
