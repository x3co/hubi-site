"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dict, Locale } from "@/i18n/dictionaries";

export default function Header({ t, locale }: { t: Dict; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV = [
    { href: "#services", label: t.nav.services },
    { href: "#how", label: t.nav.how },
    { href: "#candidates", label: t.nav.candidates },
    { href: "#faq", label: t.nav.faq },
  ];

  const switchTo = (l: Locale) =>
    pathname.replace(/^\/(en|es)/, `/${l}`) || `/${l}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2" aria-label="Hubi Group">
          <Image
            src="/images/Imagotipo-principal-contraste-claro.jpg"
            alt="Hubi Group"
            width={135}
            height={32}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/80">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand transition">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center rounded-full border border-black/10 bg-white/60 backdrop-blur p-0.5 text-xs">
            {(["en", "es"] as Locale[]).map((l) => (
              <Link
                key={l}
                href={switchTo(l)}
                className={`px-2.5 py-1 rounded-full uppercase font-medium transition ${
                  locale === l ? "bg-ink text-white" : "text-ink/60 hover:text-ink"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2.5 text-sm font-medium shadow-[0_8px_24px_-8px_rgba(107,75,255,0.6)] hover:bg-brand-dark transition"
          >
            {t.nav.cta}
            <span aria-hidden>→</span>
          </a>
          <button
            className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-black/10"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur">
          <nav className="px-5 py-4 flex flex-col gap-3 text-ink">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b border-black/5 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              {(["en", "es"] as Locale[]).map((l) => (
                <Link
                  key={l}
                  href={switchTo(l)}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase font-medium border ${
                    locale === l ? "bg-ink text-white border-ink" : "border-black/10 text-ink/70"
                  }`}
                >
                  {l}
                </Link>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-brand text-white px-5 py-3 font-medium"
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
