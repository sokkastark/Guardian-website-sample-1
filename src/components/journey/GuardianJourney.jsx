import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutGrid, 
  Search, 
  ShieldCheck, 
  Workflow, 
  TrendingUp, 
  ArrowRight
} from 'lucide-react';
import InteractiveWaveTerrain from './InteractiveWaveTerrain';
import FallingDataPills from './FallingDataPills';

export default function GuardianJourney() {
  const [activeStep, setActiveStep] = useState(2); // Step 03 IDENTIFY default active

  const steps = [
    {
      id: 'connect',
      number: '01',
      title: 'CONNECT',
      desc: 'Bring healthcare data together.',
      icon: LayoutGrid,
      color: 'from-[#38bdf8] to-[#2563eb]',
      glow: 'rgba(56, 189, 248, 0.45)',
      accent: 'text-cyan-400',
    },
    {
      id: 'understand',
      number: '02',
      title: 'UNDERSTAND',
      desc: 'Create the complete patient picture.',
      icon: Search,
      color: 'from-[#6366f1] to-[#8b5cf6]',
      glow: 'rgba(99, 102, 241, 0.45)',
      accent: 'text-indigo-400',
    },
    {
      id: 'identify',
      number: '03',
      title: 'IDENTIFY',
      desc: 'Find the opportunities that matter.',
      icon: ShieldCheck,
      color: 'from-[#ff7a57] via-[#9333ea] to-[#7b3fc7]',
      glow: 'rgba(255, 122, 87, 0.65)',
      accent: 'text-[#ff7a57]',
      isFeatured: true,
    },
    {
      id: 'act',
      number: '04',
      title: 'ACT',
      desc: 'Turn insight into care.',
      icon: Workflow,
      color: 'from-[#0d9488] to-[#059669]',
      glow: 'rgba(13, 148, 136, 0.45)',
      accent: 'text-teal-400',
    },
    {
      id: 'outcome',
      number: '05',
      title: 'OUTCOME',
      desc: 'Measure what changes.',
      icon: TrendingUp,
      color: 'from-[#a855f7] to-[#ec4899]',
      glow: 'rgba(168, 85, 247, 0.45)',
      accent: 'text-fuchsia-400',
    },
  ];

  return (
    <section 
      id="journey" 
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#120b24] via-[#1a1136] to-[#140b28] text-white overflow-hidden border-t border-purple-500/20 select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          LAYER 0: INTERACTIVE 3D DATA WAVE TERRAIN & GLOBAL SPOTLIGHT
          Smooth, non-intrusive living backdrop responding everywhere
          ───────────────────────────────────────────────────────────── */}
      <InteractiveWaveTerrain />

      {/* Atmospheric Velvet Plum & Coral Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[550px] bg-gradient-to-tr from-[#7b3fc7]/30 via-[#9565d2]/15 to-transparent blur-[150px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[450px] bg-[#38bdf8]/14 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#ff7a57]/15 blur-[150px] rounded-full" />
        <div className="absolute inset-0 ambient-grid opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            HEADER ROW: Title, Subtitle, & "See how it works" CTA
            Bold, clean, high-contrast typography
            ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span>The Guardian Journey</span>
            </div>

            {/* Headline with Glowing Warm Action Accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4 text-white drop-shadow-sm">
              From fragmented data{' '}
              <span className="text-white block sm:inline">
                to meaningful{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-[#ff7a57]">
                  action.
                </span>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal">
              We connect the pieces, create clarity, surface opportunities, and help care teams take action — for better outcomes.
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="shrink-0"
          >
            <a
              href="#platform"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_28px_rgba(147,51,234,0.5)] hover:shadow-[0_8px_36px_rgba(147,51,234,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
            >
              <span>See how it works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            ELEVATED PLATFORM CONSOLE STAGE
            Grounds and highlights the 5 Step Medallions so they stand out boldly
            ───────────────────────────────────────────────────────────── */}
        <div className="relative rounded-[36px] sm:rounded-[48px] lg:rounded-full bg-white/[0.035] border border-white/12 backdrop-blur-2xl px-6 sm:px-10 lg:px-16 pt-10 sm:pt-12 pb-12 sm:pb-14 shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
          
          {/* Continuous Glowing Fiber-Optic Sine Ribbon (Desktop) */}
          <div className="hidden lg:block absolute top-[88px] left-20 right-20 h-10 pointer-events-none z-10">
            <svg className="w-full h-full" viewBox="0 0 1000 40" preserveAspectRatio="none" fill="none">
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                  <stop offset="25%" stopColor="#6366f1" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ff7a57" stopOpacity="1" />
                  <stop offset="75%" stopColor="#0d9488" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.85" />
                </linearGradient>
                <filter id="waveGlow" x="-10%" y="-50%" width="120%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer soft ambient laser glow */}
              <path
                d="M 50 20 Q 150 5, 250 20 T 500 20 T 750 20 T 950 20"
                stroke="url(#waveGrad)"
                strokeWidth="8"
                strokeOpacity="0.4"
                filter="url(#waveGlow)"
              />
              
              {/* Crisp core electric fiber thread */}
              <path
                d="M 50 20 Q 150 5, 250 20 T 500 20 T 750 20 T 950 20"
                stroke="url(#waveGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Animated electric particle pulse drifting along the ribbon */}
              <circle r="3.5" fill="#ffffff" filter="url(#waveGlow)">
                <animateMotion
                  path="M 50 20 Q 150 5, 250 20 T 500 20 T 750 20 T 950 20"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* 5 Step Medallions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-start relative z-20">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              const isFeatured = step.isFeatured;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Illuminated Circular Glass Medallion */}
                  <div className="relative mb-6">
                    
                    {/* Ambient Glow Aura */}
                    <div
                      className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 pointer-events-none ${
                        isSelected || isFeatured ? 'opacity-90 scale-135' : 'opacity-25 group-hover:opacity-60'
                      }`}
                      style={{
                        backgroundColor: step.glow,
                      }}
                    />

                    {/* Central Glass Circle */}
                    <div
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-xl ${
                        isFeatured
                          ? 'bg-gradient-to-br from-[#ff7a57]/40 via-[#9333ea]/50 to-[#241242] border-2 border-[#ff7a57] shadow-[0_0_40px_rgba(255,122,87,0.55)] scale-110'
                          : isSelected
                          ? 'bg-white/25 border-2 border-white shadow-[0_0_32px_rgba(255,255,255,0.4)] scale-105'
                          : 'bg-white/10 hover:bg-white/15 border border-white/20 group-hover:border-white/40 group-hover:scale-105'
                      }`}
                    >
                      {/* Step Glyphs */}
                      {isFeatured ? (
                        /* Featured Guardian Shield Node */
                        <div className="relative flex items-center justify-center">
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#ff7a57] to-[#7b3fc7] text-white shadow-xl">
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                          </div>
                        </div>
                      ) : (
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-md transition-transform group-hover:scale-110`}>
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Step Number & Title */}
                  <div className="space-y-1.5 max-w-[210px]">
                    <span className={`text-xs font-mono font-bold tracking-widest uppercase block ${step.accent}`}>
                      {step.number}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isSelected || isFeatured ? 'text-white' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-purple-100/85 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            LAYER 3: FALLING FRAGMENTED DATA PILLS
            Situated directly below the 5-step console stage,
            cascades down into full view when the section is centered
            ───────────────────────────────────────────────────────────── */}
        <div className="mt-8 lg:mt-10 relative">
          <FallingDataPills />
        </div>

      </div>
    </section>
  );
}
