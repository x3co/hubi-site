import Image from "next/image";
import Reveal from "./Reveal";

const LOGOS = [
  "logo-canterbury_1logo-canterbury.png",
  "logo-good-food.png",
  "logo-etixx_1logo-etixx.png",
  "logo-iconnect.png",
  "logo-mso_1logo-mso.png",
  "logo-park_1logo-park.png",
];

export default function Logos() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="py-16 border-y border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="p" className="text-center text-sm uppercase tracking-[0.2em] text-ink/50">
          Trusted by teams increasing their hiring success
        </Reveal>
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-16 marquee-track w-max">
            {row.map((logo, i) => (
              <div key={i} className="relative h-10 w-36 opacity-70 hover:opacity-100 transition">
                <Image
                  src={`/images/${logo}`}
                  alt=""
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
