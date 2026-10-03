import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BreakTheLoop } from "@/components/sections/BreakTheLoop";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Join } from "@/components/sections/Join";
import { Problem } from "@/components/sections/Problem";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhoItsFor } from "@/components/sections/WhoItsFor";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <WhatWeDo />
        <HowItWorks />
        <BreakTheLoop />
        <WhoItsFor />
        <Join />
      </main>
      <Footer />
    </>
  );
}
