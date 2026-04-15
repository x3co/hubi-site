import Image from "next/image";
import Reveal from "./Reveal";
import type { Dict } from "@/i18n/dictionaries";

export default function Hero({ t }: { t: Dict }) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 bg-grid">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-1 text-xs text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {t.hero.pill}
            </span>
          </Reveal>
          <Reveal delay={80} as="h1" className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
            {t.hero.titlePre}
            <span className="gradient-text">{t.hero.titleGrad}</span>
            {t.hero.titleEnd}
          </Reveal>
          <Reveal delay={160} as="p" className="mt-6 text-lg md:text-xl text-ink/70 max-w-xl">
            {t.hero.subtitle}
          </Reveal>
          <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-brand transition"
            >
              {t.hero.ctaPrimary} <span aria-hidden>→</span>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium hover:border-brand hover:text-brand transition"
            >
              {t.hero.ctaSecondary}
            </a>
          </Reveal>

          <Reveal delay={320} className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {t.hero.stats.map((s) => (
              <div key={s.k}>
                <div className="text-2xl md:text-3xl font-semibold text-ink">{s.k}</div>
                <div className="text-xs text-ink/60 mt-1">{s.v}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] w-full max-w-xl mx-auto">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand/20 via-accent/10 to-transparent blur-2xl" />
            <Image
              src="/images/hero-illustration.png"
              alt="Hubi team illustration"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
