import Image from "next/image";
import Reveal from "./Reveal";
import type { Dict } from "@/i18n/dictionaries";

const IMAGES = [
  "/images/job-ads-image.png",
  "/images/multiple-job-boards-img.png",
  "/images/great-applications-img.png",
];

export default function HowWeWork({ t }: { t: Dict }) {
  return (
    <section id="how" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal as="p" className="text-sm uppercase tracking-[0.2em] text-brand font-medium">
            {t.how.kicker}
          </Reveal>
          <Reveal delay={80} as="h2" className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            {t.how.titlePre}
            <span className="gradient-text">{t.how.titleGrad}</span>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {t.how.steps.map((s, i) => {
            const mirror = i % 2 === 1;
            return (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  mirror ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]">
                  <Image src={IMAGES[i]} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-6" />
                </Reveal>
                <Reveal delay={100}>
                  <div className="text-5xl font-semibold text-brand">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-4 text-lg text-ink/75">{s.lead}</p>
                  <p className="mt-3 text-ink/60">{s.body}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
