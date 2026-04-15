import Image from "next/image";
import Reveal from "./Reveal";
import type { Dict } from "@/i18n/dictionaries";

const IMAGES_A = ["team-2", "Rectangle-101", "team-6", "team-5", "Rectangle-100", "team-3"];
const IMAGES_B = ["team-4", "team-1", "team-3", "team-2", "Rectangle-102", "Rectangle-95"];

function Tile({ src, size = "md", i = 0 }: { src: string; size?: "sm" | "md" | "lg"; i?: number }) {
  const dims = size === "sm" ? "aspect-square" : size === "lg" ? "aspect-[4/5]" : "aspect-[3/4]";
  return (
    <Reveal delay={i * 80} className={`relative w-full ${dims} overflow-hidden rounded-2xl bg-white/60`}>
      <Image
        src={`/images/${src}.jpg`}
        alt=""
        fill
        sizes="(max-width: 768px) 45vw, 20vw"
        className="object-cover hover:scale-[1.04] transition duration-700"
      />
    </Reveal>
  );
}

export default function TeamMosaic({ t }: { t: Dict }) {
  return (
    <section className="relative py-20 md:py-28 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal as="h2" className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink">
            {t.team.titlePre}
            <span className="gradient-text">{t.team.titleGrad}</span>
            {t.team.titleEnd}
          </Reveal>
          <Reveal delay={120} as="div" className="mt-8 space-y-3 text-xl md:text-2xl text-ink/60 leading-snug">
            {t.team.lines.map((line, i) =>
              typeof line === "string" ? (
                <p key={i}>{line}</p>
              ) : (
                <p key={i}>
                  {line.pre}
                  <span className="text-ink font-semibold">{line.strong}</span>
                </p>
              )
            )}
          </Reveal>
          <Reveal delay={240} className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-brand transition"
            >
              {t.team.cta}
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-3 md:gap-4 pt-10">
            {IMAGES_A.map((src, i) => (
              <Tile key={src + i} src={src} size={i % 3 === 1 ? "sm" : i % 3 === 2 ? "lg" : "md"} i={i} />
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            {IMAGES_B.map((src, i) => (
              <Tile key={src + i} src={src} size={i % 3 === 0 ? "lg" : i % 3 === 2 ? "sm" : "md"} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
