import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamMosaic from "@/components/TeamMosaic";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Logos from "@/components/Logos";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TeamMosaic />
        <Services />
        <HowWeWork />
        <Logos />
        <div id="candidates" className="py-16 md:py-24 bg-surface text-center">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              More top candidates with <span className="gradient-text">less effort</span>
            </h2>
            <p className="mt-4 text-ink/70 text-lg">
              A user-friendly hunting method that delivers immediate results.
            </p>
          </div>
        </div>
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
