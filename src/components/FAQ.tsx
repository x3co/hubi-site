"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const GENERAL = [
  {
    q: "How much time does it take to receive qualified candidates from HUBI?",
    a: "We commit to sending candidates every 3 to 4 days until the position is closed.",
  },
  {
    q: "What does a Free Replacement Guarantee mean?",
    a: "At Hubi we commit to sharing the best-fitting talent. That is why we offer a replacement on every hire recommended by us.",
  },
  {
    q: "Do you do massive recruitment?",
    a: "We put at your service a team of specialized consultants for massive recruitment needs at a fixed monthly price, including a minimum number of hires we commit to recommend.",
  },
  {
    q: "What kind of positions do you typically recruit for?",
    a: "From executive / C-level positions to engineering, operations, R&D, sales, production, quality and legal mid-to-senior roles.",
  },
  {
    q: "Do you have experience in niche industries?",
    a: "We are specialized in the pharmaceutical industry across Latin America, and have collaborated with the leading companies in the sector.",
  },
  {
    q: "How long does the recruitment process typically take?",
    a: "On average, the whole process — from briefing to signed contract — takes less than 24 days, depending on role seniority.",
  },
];

const SPECIFIC = [
  {
    q: "What profiles do you typically recruit?",
    a: "From technicians and scientists to high-level managers with experience in international business management.",
  },
  {
    q: "How do you find and attract qualified candidates?",
    a: "Accurate market segmentation backed by a comprehensive database, job-specific competency tests, and advanced technological tools to identify the best talent.",
  },
  {
    q: "Do I pay a commission when I hire a candidate?",
    a: "Yes, we offer various commission schemes tailored to our clients’ needs through a specialized consultation.",
  },
  {
    q: "What is your screening process?",
    a: "Rigorous, transparent process: multiple technical and psychometric filters with qualitative and quantitative stages to identify the most promising candidates.",
  },
  {
    q: "How long does the process take?",
    a: "Recruitment processes are usually completed within 2 to 4 weeks, depending on the complexity of the position.",
  },
  {
    q: "Can you help with job descriptions and job postings?",
    a: "Yes — we consult on creating accurate, attractive job descriptions based on organizational and market analysis.",
  },
];

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

export default function FAQ() {
  const [tab, setTab] = useState<"general" | "specific">("general");
  const items = tab === "general" ? GENERAL : SPECIFIC;
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center">
          <Reveal as="p" className="text-sm uppercase tracking-[0.2em] text-brand font-medium">
            FAQ
          </Reveal>
          <Reveal delay={80} as="h2" className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Questions? <span className="gradient-text">We have answers.</span>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-black/10 bg-white p-1 text-sm">
            {(["general", "specific"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full capitalize transition ${
                  tab === t ? "bg-ink text-white" : "text-ink/70 hover:text-ink"
                }`}
              >
                {t}
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
