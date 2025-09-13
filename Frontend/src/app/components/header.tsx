"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/use-cases", label: "Use Case" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/Icon.png" alt="logo" width={40} height={40} />
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Positivus
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="text-lg hover:opacity-70 transition"
            >
              {it.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="text-lg border border-black rounded-2xl px-5 py-2 hover:bg-black hover:text-white transition"
          >
            Request a quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon */}
          <svg
            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/20"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/images/Icon.png" alt="logo" width={32} height={32} />
              <span className="text-xl font-extrabold">Positivus</span>
            </div>
            <button
              className="p-2 rounded-lg border"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navItems.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="text-lg"
                onClick={() => setOpen(false)}
              >
                {it.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="mt-2 text-lg border border-black rounded-2xl px-5 py-3 text-center hover:bg-black hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
          </nav>

          <div className="mt-auto text-sm text-gray-500">© {new Date().getFullYear()} Positivus</div>
        </div>
      </div>
    </header>
  );
}
