"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="relative overflow-hidden rounded-[32px] bg-ink text-white p-10 md:p-16">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Looking for <span className="gradient-text">top talent</span> in Latin America?
              </h2>
              <p className="mt-5 text-white/70 text-lg max-w-md">
                Tell us about the role. We&apos;ll get back within 24 hours with a shortlist strategy.
              </p>
            </div>

            {sent ? (
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
                <div className="text-5xl">🎉</div>
                <p className="mt-4 font-semibold text-xl">Thanks — we&apos;ll be in touch soon.</p>
                <p className="mt-2 text-white/60 text-sm">We received your details.</p>
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
                  placeholder="First name"
                  className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:border-brand"
                />
                <input
                  required
                  name="lastName"
                  placeholder="Last name"
                  className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:border-brand"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Work email"
                  className="col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:border-brand"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone (optional)"
                  className="col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  className="col-span-2 mt-1 rounded-xl bg-brand hover:bg-brand-dark transition px-6 py-3.5 font-medium"
                >
                  Get Started — it&apos;s free
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
