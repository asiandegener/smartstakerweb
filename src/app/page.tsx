"use client";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { WhatIsSection } from "@/components/WhatIsSection";
import { SleekSection } from "@/components/SleekSection";
import { InlineCTABanner } from "@/components/InlineCTABanner";
import { PerformanceSection } from "@/components/PerformanceSection";
import { UniversalSupportSection } from "@/components/UniversalSupportSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SSPRFPromo } from "@/components/SSPRFPromo";
import { FAQSection } from "@/components/FAQSection";
import { GuidesSection } from "@/components/GuidesSection";
import { CTASection } from "@/components/CTASection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsStrip />
        <WhatIsSection />
        <SleekSection />
        <InlineCTABanner />
        <PerformanceSection />
        <UniversalSupportSection />
        <TestimonialsSection />
        <SSPRFPromo />
        <FAQSection />
        <GuidesSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}
