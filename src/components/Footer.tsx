import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-10 md:grid-cols-[1fr_auto] items-start">
        <div className="flex items-start gap-5">
          <Image
            src="/images/Iso-principal-perfil-redes-sociales.png"
            alt="Hubi Group"
            width={72}
            height={72}
            className="rounded-2xl"
          />
          <div>
            <p className="text-xl font-semibold">Hubi Group</p>
            <p className="mt-1 text-white/60 max-w-md text-sm">
              We build your dream team — specialized pharma recruiting across Latin America.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <a href="mailto:community@hubigroup.com" className="hover:text-accent">
                community@hubigroup.com
              </a>
              <a href="tel:+570000000000" className="text-white/70 hover:text-white">
                +57 000 000 0000
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand-dark px-5 py-2.5 text-sm font-medium transition"
          >
            Get Started FREE →
          </a>
          <nav className="flex flex-wrap gap-5 text-sm text-white/60">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#how" className="hover:text-white">How we work</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-xs text-white/50 flex flex-wrap justify-between gap-3">
          <p>© {new Date().getFullYear()} Hubi Group — All rights reserved.</p>
          <p>Designed and engineered with care.</p>
        </div>
      </div>
    </footer>
  );
}
