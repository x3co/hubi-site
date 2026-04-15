import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamMosaic from "@/components/TeamMosaic";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Logos from "@/components/Logos";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getDict, locales, type Locale } from "@/i18n/dictionaries";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: { title: t.meta.title, description: t.meta.description },
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es" },
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getDict(locale);
  const loc = locale as Locale;

  return (
    <>
      <Header t={t} locale={loc} />
      <main className="flex-1">
        <Hero t={t} />
        <TeamMosaic t={t} />
        <Services t={t} />
        <HowWeWork t={t} />
        <Logos t={t} />
        <div id="candidates" className="py-16 md:py-24 bg-surface text-center">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {t.candidates.titlePre}
              <span className="gradient-text">{t.candidates.titleGrad}</span>
            </h2>
            <p className="mt-4 text-ink/70 text-lg">{t.candidates.body}</p>
          </div>
        </div>
        <FAQ t={t} />
        <CTA t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
