"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Reveal from "./Reveal";
import type { Dict } from "@/i18n/dictionaries";

type Status = "idle" | "sending" | "sent" | "error";

export default function CTA({ t }: { t: Dict }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale || "en";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      botcheck: String(fd.get("botcheck") || ""),
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          data.error === "Too many requests"
            ? "Too many attempts — please wait a minute."
            : "Something went wrong. Please try again or email community@hubigroup.com"
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

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

            {status === "sent" ? (
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
                <div className="text-5xl">🎉</div>
                <p className="mt-4 font-semibold text-xl">{t.cta.form.thanks}</p>
                <p className="mt-2 text-white/60 text-sm">{t.cta.form.thanksSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
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
                  disabled={status === "sending"}
                  className="col-span-2 mt-1 rounded-xl bg-brand hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed transition px-6 py-3.5 font-medium"
                >
                  {status === "sending" ? "..." : t.cta.form.submit}
                </button>
                {status === "error" && (
                  <p className="col-span-2 text-sm text-red-300 text-center">{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
