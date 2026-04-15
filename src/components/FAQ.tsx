"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import type { Dict } from "@/i18n/dictionaries";

type QA = { q: string; a: string };

function Item({ item, i }: { item: QA; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal
      delay={i * 60}
      className={`rounded-2xl border border-black/10 bg-white transition ${
        open ? "shadow-[0_10px_30px_-15px_rgba(107,75,255,0.3)]" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
      >
        <span className="font-semibold text-ink">{item.q}</span>
        <span
          className={`mt-1 inline-grid place-items-center h-7 w-7 rounded-full border border-black/10 text-ink transition ${
            open ? "rotate-45 bg-brand text-white border-brand" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-ink/70">{item.a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQ({ t }: { t: Dict }) {
  const [tab, setTab] = useState<"general" | "specific">("general");
  const items = tab === "general" ? t.faq.general : t.faq.specific;
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center">
          <Reveal as="p" className="text-sm uppercase tracking-[0.2em] text-brand font-medium">
            {t.faq.kicker}
          </Reveal>
          <Reveal delay={80} as="h2" className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            {t.faq.titlePre}
            <span className="gradient-text">{t.faq.titleGrad}</span>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-black/10 bg-white p-1 text-sm">
            {(["general", "specific"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setTab(k)}
                className={`px-5 py-2 rounded-full capitalize transition ${
                  tab === k ? "bg-ink text-white" : "text-ink/70 hover:text-ink"
                }`}
              >
                {t.faq.tabs[k]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <Item key={it.q} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
