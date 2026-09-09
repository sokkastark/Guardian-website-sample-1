import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Layers } from 'lucide-react';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import HeroDataPills from './HeroDataPills';
import HeroVisualCards from './HeroVisualCards';

export default function Hero() {
  // Normalized mouse coords from -1 to +1 with smooth spring damping
  const { x: mouseX, y: mouseY } = useMouseParallax(0.06);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden flex flex-col justify-center bg-[#0d1527] text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          LAYER 0: Panoramic Hospital Skyline Background (Far Depth)
          Moves with INVERSE parallax relative to mouse position
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-[6%] -left-[6%] w-[112%] h-[112%] will-change-transform"
          style={{
            transform: `translate3d(${mouseX * -24}px, ${mouseY * -18}px, 0px) scale(1.04)`,
          }}
        >
          <img
            src="/images/hero-skyline-bg.jpg"
            alt="Modern Healthcare Tower with City Skyline View"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Ambient Darkened Gradient Veil ensuring text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/90 via-[#0d1527]/60 to-transparent w-full lg:w-[60%] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527]/80 via-transparent to-[#0d1527]/30 z-10" />

        {/* Ambient Glowing Accents */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/20 blur-[150px] rounded-full pointer-events-none z-10" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#ff7a57]/15 blur-[140px] rounded-full pointer-events-none z-10" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LAYER 2: Main Character (Clinician Cutout) (Midplane Anchor)
          Positioned in FRONT of the left data pills (Layer 3)
          and BEHIND the holographic cards (Layer 1).
          STAYS ANCHORED STILL per user request, with face 100% visible.
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-[30%] sm:left-[32%] lg:left-[34%] xl:left-[36%] pointer-events-none z-20 hidden lg:block">
        <div
          className="relative will-change-transform"
          style={{
            // Clinician stays anchored still with micro-dampened stability
            transform: `translate3d(${mouseX * 1.5}px, ${mouseY * 1.5}px, 0px)`,
          }}
        >
          <img
            src="/images/hero-clinician-cutout.png"
            alt="Guardian Healthcare Physician Specialist"
            className="h-[520px] sm:h-[580px] lg:h-[640px] xl:h-[700px] w-auto max-w-none object-contain object-bottom drop-shadow-[0_24px_45px_rgba(0,0,0,0.5)]"
            loading="eager"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CONTENT GRID:
          - Left Column: Narrative Text (z-30)
          - Center-Left Column: 5 Data Stream Pills (Layer 3: z-10, behind doctor)
          - Right Column: Holographic Glass HUD Cards (Layer 1: z-30, in front of doctor)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Typography & Narrative CTAs (STAYS STILL, z-30) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col items-start pt-4 lg:pt-0 relative z-30"
            style={{
              transform: 'translate3d(0px, 0px, 0px)',
            }}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping" />
              <span>Healthcare Intelligence</span>
            </div>

            {/* Headline matching user's reference mockup */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-white tracking-tight leading-[1.12] mb-5">
              <span className="block text-white">Healthcare data,</span>
              <span className="block mt-1">
                turned into <span className="text-[#a855f7]">action.</span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed max-w-md mb-8 font-normal">
              Guardian connects healthcare data, clinical intelligence, technology, and healthcare expertise to help organizations make better decisions and take meaningful action.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-medium text-sm text-white bg-gradient-to-r from-[#7b3fc7] to-[#9333ea] hover:from-[#9333ea] hover:to-[#a855f7] shadow-[0_4px_20px_rgba(147,51,234,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Guardian</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-medium text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-xs transition-all duration-300 active:scale-95"
              >
                <span>Talk to us</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-white/15 w-full max-w-md">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-200/60 block mb-2.5">
                Healthcare Standards & Certifications
              </span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-purple-200/90">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span className="font-medium text-[11px]">CMS MIPS Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#fb923c]" />
                  <span className="font-medium text-[11px]">HITRUST e1 Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span className="font-medium text-[11px]">CareQuality</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LAYER 3: Center-Left Column: 5 Data Stream Holographic Pills (BEHIND DOCTOR, z-10) */}
          <div className="lg:col-span-3 xl:col-span-3 hidden sm:flex items-center justify-start lg:pl-2 relative z-10">
            <HeroDataPills mouseX={mouseX} mouseY={mouseY} />
          </div>

          {/* LAYER 1: Right Column: Holographic Glass HUD Cards (IN FRONT OF DOCTOR, z-30, aligned with doctor's gaze & tablet) */}
          <div className="lg:col-span-5 xl:col-span-5 relative w-full flex items-center justify-end z-30 pt-8 sm:pt-12 lg:pt-16 xl:pt-20">
            <HeroVisualCards mouseX={mouseX} mouseY={mouseY} />
          </div>

        </div>
      </div>
    </section>
  );
}
