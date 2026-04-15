import Image from "next/image";
import type { Dict } from "@/i18n/dictionaries";

export default function Footer({ t }: { t: Dict }) {
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
            <p className="mt-1 text-white/60 max-w-md text-sm">{t.footer.tagline}</p>
            <div className="mt-5">
              <a
                href="mailto:community@hubigroup.com"
                className="text-sm text-white/90 hover:text-accent underline-offset-4 hover:underline"
              >
                community@hubigroup.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand-dark px-5 py-2.5 text-sm font-medium transition"
          >
            {t.footer.cta}
          </a>
          <nav className="flex flex-wrap gap-5 text-sm text-white/60">
            <a href="#services" className="hover:text-white">{t.footer.nav.services}</a>
            <a href="#how" className="hover:text-white">{t.footer.nav.how}</a>
            <a href="#faq" className="hover:text-white">{t.footer.nav.faq}</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-xs text-white/50 flex flex-wrap justify-between gap-3">
          <p>© {new Date().getFullYear()} Hubi Group — {t.footer.rights}</p>
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
