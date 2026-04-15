import Image from "next/image";
import Reveal from "./Reveal";
import type { Dict } from "@/i18n/dictionaries";

const ICONS = ["/images/icon-executive.png", "/images/mes-3.png", "/images/icon-recruiter.png"];

export default function Services({ t }: { t: Dict }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal as="p" className="text-sm uppercase tracking-[0.2em] text-brand font-medium">
            {t.services.kicker}
          </Reveal>
          <Reveal delay={80} as="h2" className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            {t.services.titlePre}
            <span className="gradient-text">{t.services.titleGrad}</span>
            {t.services.titleEnd}
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => {
            const highlighted = i === 1;
            return (
              <Reveal
                key={s.title}
                delay={i * 120}
                className={`group relative flex flex-col rounded-3xl p-7 border transition hover:-translate-y-1 hover:shadow-xl ${
                  highlighted
                    ? "bg-ink text-white border-ink shadow-[0_20px_60px_-20px_rgba(107,75,255,0.6)]"
                    : "bg-white border-black/10"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl grid place-items-center ${
                    highlighted ? "bg-white/10" : "bg-surface"
                  }`}
                >
                  <Image src={ICONS[i]} alt="" width={36} height={36} className="object-contain" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className={`mt-1 text-sm ${highlighted ? "text-white/60" : "text-ink/60"}`}>
                  {s.tagline}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          highlighted ? "bg-accent" : "bg-brand"
                        }`}
                      />
                      <span className={highlighted ? "text-white/80" : "text-ink/75"}>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#candidates"
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${
                    highlighted ? "text-accent" : "text-brand"
                  }`}
                >
                  {t.services.learnMore} <span aria-hidden>→</span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
