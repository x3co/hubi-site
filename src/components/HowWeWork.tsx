import Image from "next/image";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    image: "/images/job-ads-image.png",
    title: "Data with a personal touch",
    lead: "We picture our business as a people business — where each situation and each person matters.",
    body: "This is why we build strong, long-term relationships with our talent network.",
  },
  {
    n: "02",
    image: "/images/multiple-job-boards-img.png",
    title: "Quality beats quantity",
    lead: "We focus on bringing the best-fitting solution rather than a short-term fix.",
    body: "We use hiring funnels and review your recruiting pipeline and progress at a glance.",
  },
  {
    n: "03",
    image: "/images/great-applications-img.png",
    title: "Determined to be agile",
    lead: "Multi-post to the most relevant boards and see an increase in qualified candidates immediately.",
    body: "Each assignment is different — we adapt our operation to your business needs using a proven talent-attraction method.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal as="p" className="text-sm uppercase tracking-[0.2em] text-brand font-medium">
            How we work
          </Reveal>
          <Reveal delay={80} as="h2" className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Find the perfect person <span className="gradient-text">every time</span>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {STEPS.map((s, i) => {
            const mirror = i % 2 === 1;
            return (
              <div
                key={s.n}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  mirror ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]">
                  <Image src={s.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-6" />
                </Reveal>
                <Reveal delay={100}>
                  <div className="text-5xl font-semibold text-brand">{s.n}</div>
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
