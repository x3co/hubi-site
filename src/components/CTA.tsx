"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import type { Dict } from "@/i18n/dictionaries";

export default function CTA({ t }: { t: Dict }) {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="relative overflow-hidden rounded-[32px] bg-ink text-white p-10 md:p-16">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {t.cta.titlePre}
                <span className="gradient-text">{t.cta.titleGrad}</span>
                {t.cta.titleEnd}
              </h2>
              <p className="mt-5 text-white/70 text-lg max-w-md">{t.cta.body}</p>
            </div>

            {sent ? (
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
                <div className="text-5xl">🎉</div>
                <p className="mt-4 font-semibold text-xl">{t.cta.form.thanks}</p>
                <p className="mt-2 text-white/60 text-sm">{t.cta.form.thanksSub}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid grid-cols-2 gap-3"
              >
                <input
                  required
                  name="firstName"
                  placeholder={t.cta.form.firstName}
                  className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:border-brand"
                />
                <input
                  required
                  name="lastName"
                  placeholder={t.cta.form.lastName}
                  className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:border-brand"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={t.cta.form.email}
                  className="col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:border-brand"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder={t.cta.form.phone}
                  className="col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  className="col-span-2 mt-1 rounded-xl bg-brand hover:bg-brand-dark transition px-6 py-3.5 font-medium"
                >
                  {t.cta.form.submit}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
