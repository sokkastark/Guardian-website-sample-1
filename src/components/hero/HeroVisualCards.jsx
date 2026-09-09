import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight,
  MoreHorizontal,
  ArrowRight,
  Eye,
  Calendar,
  Pill,
  Activity,
  Target
} from 'lucide-react';

export default function HeroVisualCards({ mouseX = 0, mouseY = 0 }) {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = ['Overview', 'Care Gaps', 'Claims', 'Medications'];

  return (
    <div
      className="relative w-full max-w-[285px] sm:max-w-[305px] xl:max-w-[320px] ml-auto lg:translate-x-4 xl:translate-x-8 flex flex-col gap-2.5 select-none pointer-events-auto"
      style={{
        perspective: '1200px',
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          CARD 1: Eleanor Vance Patient Master Record (Holographic HUD)
          Outer div handles direct rAF mouse parallax & 3D tilt with zero CSS lag.
          Smaller, sleeker, positioned to the right so clinician's face is 100% clear!
          ───────────────────────────────────────────────────────────── */}
      <div
        className="will-change-transform"
        style={{
          transform: `translate3d(${mouseX * 38}px, ${mouseY * 28}px, 30px) rotateX(${-mouseY * 8}deg) rotateY(${mouseX * 10}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-3 sm:p-3.5 rounded-[20px] bg-[#162035]/80 backdrop-blur-2xl border border-white/30 shadow-[0_16px_45px_rgba(0,0,0,0.5)] text-white hover:border-white/50 transition-colors"
        >
          {/* Holographic light reflection sheen that shifts with mouse */}
          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none opacity-40 bg-gradient-to-tr from-transparent via-white/5 to-cyan-200/15"
            style={{
              transform: `translate3d(${mouseX * -20}px, ${mouseY * -20}px, 0)`,
            }}
          />

          {/* Patient Profile Bar */}
          <div className="relative flex items-center justify-between pb-2.5 border-b border-white/15 gap-2">
            <div className="flex items-center gap-2 min-w-0">
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full ring-2 ring-white/30 overflow-hidden bg-gradient-to-tr from-[#7b3fc7] to-[#38bdf8] p-0.5 shrink-0 shadow-md">
                <img
                  src="/images/healthcare-expert.webp"
                  alt="Eleanor Vance"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-[13px] font-bold text-white tracking-tight truncate">
                  Eleanor Vance
                </h3>
                <div className="flex items-center gap-1 text-[10px] text-white/70 leading-none">
                  <span>Female • 67 yrs</span>
                  <span>•</span>
                  <span className="font-mono text-[9.5px] text-white/80">GDN-45871</span>
                </div>
              </div>
            </div>

            {/* Risk Score Pill */}
            <div className="text-right shrink-0">
              <div className="flex items-center justify-end gap-0.5 text-[9px] font-semibold text-white/70 mb-0.5">
                <span>Risk Score</span>
                <ChevronRight className="w-2.5 h-2.5 text-white/50" />
              </div>
              <div className="flex items-center gap-1 justify-end">
                <span className="text-sm font-black text-white tracking-tight">0.86</span>
                <span className="inline-flex items-center gap-1 text-[8.5px] font-bold px-1.5 py-0.5 rounded-full bg-[#991b1b]/75 text-[#fca5a5] border border-[#ef4444]/40">
                  <span className="w-1 h-1 rounded-full bg-[#ef4444] animate-pulse" />
                  High Risk
                </span>
              </div>
            </div>
          </div>

          {/* Tab Navigation Strip */}
          <div className="relative flex items-center justify-between pt-2 pb-1.5 border-b border-white/10 text-[10px]">
            <div className="flex items-center gap-2.5">
              {tabs.map((tab) => {
                const isSelected = activeTab === tab.toLowerCase().replace(' ', '-');
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                    className={`relative font-semibold transition-colors pb-1 focus:outline-none ${
                      isSelected ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {tab}
                    {isSelected && (
                      <motion.div
                        layoutId="heroHudTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7b3fc7] to-[#38bdf8] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <button className="text-white/50 hover:text-white p-0.5">
              <MoreHorizontal className="w-3 h-3" />
            </button>
          </div>

          {/* Clinical Priority Action Rows */}
          <div className="relative space-y-1.5 pt-2">
            {/* Row 1: Retinal Screening */}
            <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1 rounded-md bg-[#7b3fc7]/30 text-purple-300 shrink-0 border border-[#7b3fc7]/40">
                  <Eye className="w-3 h-3" />
                </div>
                <span className="text-[10.5px] font-semibold text-white truncate">Retinal Screening</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#ef4444]/25 text-[#fca5a5] border border-[#ef4444]/40 shrink-0">
                <span className="w-1 h-1 rounded-full bg-[#ef4444]" />
                Due
              </span>
            </div>

            {/* Row 2: Annual Wellness Visit */}
            <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1 rounded-md bg-[#ea580c]/30 text-orange-300 shrink-0 border border-[#ea580c]/40">
                  <Calendar className="w-3 h-3" />
                </div>
                <span className="text-[10.5px] font-semibold text-white truncate">Annual Wellness Visit</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#10b981]/25 text-[#6ee7b7] border border-[#10b981]/40 shrink-0">
                <span className="w-1 h-1 rounded-full bg-[#10b981]" />
                Scheduled
              </span>
            </div>

            {/* Row 3: Medication Adherence */}
            <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1 rounded-md bg-[#f59e0b]/30 text-amber-300 shrink-0 border border-[#f59e0b]/40">
                  <Pill className="w-3 h-3" />
                </div>
                <span className="text-[10.5px] font-semibold text-white truncate">Medication Adherence</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#f59e0b]/25 text-[#fcd34d] border border-[#f59e0b]/40 shrink-0">
                <span className="w-1 h-1 rounded-full bg-[#f59e0b]" />
                At Risk
              </span>
            </div>

            {/* Row 4: Care Gap HbA1c */}
            <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1 rounded-md bg-[#7b3fc7]/30 text-purple-300 shrink-0 border border-[#7b3fc7]/40">
                  <Activity className="w-3 h-3" />
                </div>
                <span className="text-[10.5px] font-semibold text-white truncate">Care Gap: HbA1c</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#ef4444]/25 text-[#fca5a5] border border-[#ef4444]/40 shrink-0">
                <span className="w-1 h-1 rounded-full bg-[#ef4444]" />
                Open
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CARD 2: Care Opportunity Alert (Holographic HUD)
          Outer div handles rAF mouse parallax with differential depth.
          ───────────────────────────────────────────────────────────── */}
      <div
        className="will-change-transform"
        style={{
          transform: `translate3d(${mouseX * 26}px, ${mouseY * 20}px, 15px) rotateX(${-mouseY * 7}deg) rotateY(${mouseX * 8}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-2.5 sm:p-3 rounded-[16px] bg-[#162035]/80 backdrop-blur-2xl border border-white/30 shadow-[0_14px_35px_rgba(0,0,0,0.45)] text-white hover:border-white/50 transition-colors"
        >
          {/* Holographic light reflection sheen */}
          <div
            className="absolute inset-0 rounded-[16px] pointer-events-none opacity-40 bg-gradient-to-tr from-transparent via-white/5 to-purple-300/15"
            style={{
              transform: `translate3d(${mouseX * -14}px, ${mouseY * -14}px, 0)`,
            }}
          />

          <div className="relative flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#7b3fc7] to-[#a855f7] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#7b3fc7]/40 border border-white/20">
                <Target className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] font-bold text-white tracking-tight">
                  Care Opportunity
                </h4>
                <p className="text-[10px] text-white/85 leading-tight truncate">
                  Annual Diabetic Eye Exam due
                </p>
                <p className="text-[8.5px] text-white/60 leading-tight truncate">
                  Incomplete gap in EHR record
                </p>
              </div>
            </div>

            <a
              href="#journey"
              className="w-7 h-7 rounded-full bg-[#7b3fc7] hover:bg-[#9565d2] text-white flex items-center justify-center transition-all shrink-0 shadow-md shadow-[#7b3fc7]/40 border border-white/20 active:scale-95 hover:scale-105"
              aria-label="Inspect Care Opportunity"
            >
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
