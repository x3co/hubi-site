import Image from "next/image";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: "/images/icon-executive.png",
    title: "Executive",
    tagline: "Top-notch leadership hires",
    bullets: [
      "Success fee calculated over annual gross salary",
      "Specialized headhunting for C-level & director roles",
      "We act as your executive recruiter",
      "Free replacement guarantee — 6 months",
    ],
  },
  {
    icon: "/images/mes-3.png",
    title: "Staff Augmentation",
    tagline: "Your recruiting team, on demand",
    bullets: [
      "Monthly retained contract",
      "Outsourced unit designed for massive recruitment",
      "We become an extension of your People team",
      "Free replacement guarantee — 6 months",
    ],
    highlighted: true,
  },
  {
    icon: "/images/icon-recruiter.png",
    title: "Recruiter",
    tagline: "Senior hires, success-based",
    bullets: [
      "Success fee calculated over annual gross salary",
      "Recruitment services for senior positions",
      "We help your team with day-to-day recruiting",
      "Free replacement guarantee — 6 months",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal as="p" className="text-sm uppercase tracking-[0.2em] text-brand font-medium">
            Our Services
          </Reveal>
          <Reveal delay={80} as="h2" className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            We help scale your <span className="gradient-text">pharma teams</span> in Latin America
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 120}
              className={`group relative flex flex-col rounded-3xl p-7 border transition hover:-translate-y-1 hover:shadow-xl ${
                s.highlighted
                  ? "bg-ink text-white border-ink shadow-[0_20px_60px_-20px_rgba(107,75,255,0.6)]"
                  : "bg-white border-black/10"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl grid place-items-center ${
                  s.highlighted ? "bg-white/10" : "bg-surface"
                }`}
              >
                <Image src={s.icon} alt="" width={36} height={36} className="object-contain" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
              <p className={`mt-1 text-sm ${s.highlighted ? "text-white/60" : "text-ink/60"}`}>
                {s.tagline}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        s.highlighted ? "bg-accent" : "bg-brand"
                      }`}
                    />
                    <span className={s.highlighted ? "text-white/80" : "text-ink/75"}>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#candidates"
                className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${
                  s.highlighted ? "text-accent" : "text-brand"
                }`}
              >
                Learn more <span aria-hidden>→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
