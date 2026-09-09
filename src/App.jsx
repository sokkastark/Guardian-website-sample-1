import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import DataChallenge from './components/sections/DataChallenge';
import GuardianJourney from './components/journey/GuardianJourney';
import PlatformSection from './components/sections/PlatformSection';
import PeopleTechnology from './components/sections/PeopleTechnology';
import SolutionsSection from './components/sections/SolutionsSection';
import AudienceSwitcher from './components/sections/AudienceSwitcher';
import ImpactSection from './components/sections/ImpactSection';
import WhyGuardian from './components/sections/WhyGuardian';
import ResourcesSection from './components/sections/ResourcesSection';
import TrustSection from './components/sections/TrustSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#35304c] flex flex-col selection:bg-[#f2ecf9] selection:text-[#7b3fc7]">
      {/* Sticky Global Navigation */}
      <Header />

      {/* Main Narrative Sections */}
      <main className="flex-1">
        {/* Section 01: Interactive Hero with Layered Mouse Parallax */}
        <Hero />

        {/* Section 02: The Healthcare Data Challenge */}
        <DataChallenge />

        {/* Section 03: The Guardian Journey (Connect -> Understand -> Identify -> Act -> Outcome) */}
        <GuardianJourney />

        {/* Section 04: Guardian Platform (6 Connected Capabilities) */}
        <PlatformSection />

        {/* Section 05: People + Technology (4 Operational Service Roles) */}
        <PeopleTechnology />

        {/* Section 06: Healthcare Solutions (6 Value-Based Care Modules) */}
        <SolutionsSection />

        {/* Section 07: Who We Serve (Providers & Payers Interactive Switcher) */}
        <AudienceSwitcher />

        {/* Section 08: Impact (Proven Clinical & Operational Delivery) */}
        <ImpactSection />

        {/* Section 09: Why Guardian (6 Core Themes) */}
        <WhyGuardian />

        {/* Section 10: Resources & Case Studies (MSO & ED Utilization) */}
        <ResourcesSection />

        {/* Section 11: Trust & Certifications (CMS MIPS, HITRUST, CareQuality) */}
        <TrustSection />
      </main>

      {/* Global Footer with Unified Conversion Banner */}
      <Footer />
    </div>
  );
}
