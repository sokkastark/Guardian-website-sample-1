import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  ClipboardList, 
  ShieldAlert, 
  Award, 
  MessageSquareHeart, 
  BarChart3, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function SolutionsSection() {
  const [activeNode, setActiveNode] = useState(0);

  const satellites = [
    {
      id: 'pop-health',
      title: 'Population Health',
      angle: -90, // Top
      color: '#a855f7',
      icon: HeartPulse,
      desc: 'Stratify population risk and monitor longitudinal trajectories across chronic cohorts.',
    },
    {
      id: 'care-mgmt',
      title: 'Care Management',
      angle: -30, // Top Right
      color: '#10b981',
      icon: ClipboardList,
      desc: 'Orchestrate comprehensive care plans and transition workflows within 48 hours.',
    },
    {
      id: 'risk-adj',
      title: 'Risk Adjustment',
      angle: 30, // Bottom Right
      color: '#06b6d4',
      icon: ShieldAlert,
      desc: 'Pre-encounter clinical intelligence and compliant persistent condition recapture.',
    },
    {
      id: 'quality',
      title: 'Quality & Performance',
      angle: 90, // Bottom
      color: '#f97316',
      icon: Award,
      desc: 'Real-time HEDIS surveillance, automated gap closure prompts, and MIPS compliance.',
    },
    {
      id: 'engagement',
      title: 'Patient Engagement',
      angle: 150, // Bottom Left
      color: '#3b82f6',
      icon: MessageSquareHeart,
      desc: 'Targeted outreach overcoming SDOH barriers, transportation, and specialist booking.',
    },
    {
      id: 'analytics',
      title: 'Analytics & Intelligence',
      angle: 210, // Top Left
      color: '#8b5cf6',
      icon: BarChart3,
      desc: 'Executive cockpits, network utilization patterns, and predictive contract forecasts.',
    },
  ];

  return (
    <section 
      id="solutions" 
      className="relative py-24 sm:py-28 lg:py-32 bg-white text-[#1c1636] overflow-hidden select-none border-t border-[#f0edf7]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#7b3fc7]/5 via-[#ff7a57]/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 ambient-grid opacity-[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: Story Narrative & CTA Button
              Matches Master Reference Mockup
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 max-w-lg"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3edf9] border border-[#7b3fc7]/25 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>SOLUTIONS</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-[1.15] mb-6">
              Built around the work{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#ff7a57]">
                healthcare organizations need to get done.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed font-normal mb-8">
              From population health to quality, our solutions help you improve care, performance, and outcomes.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_28px_rgba(123,63,199,0.35)] hover:shadow-[0_8px_36px_rgba(123,63,199,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <span>Explore solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Active Satellite Summary Drawer */}
            <div className="mt-8 p-4 rounded-2xl bg-[#faf8fd] border border-[#ede7f6] text-xs text-[#524b6b]">
              <div className="flex items-center gap-2 font-bold text-[#1c1636] mb-1">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: satellites[activeNode].color }} />
                <span>{satellites[activeNode].title}</span>
              </div>
              <p>{satellites[activeNode].desc}</p>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: Radial Satellite Constellation Network
              Directly reproducing the Master Reference Mockup!
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center justify-center relative"
          >
            {/* The Constellation Canvas Container (520px x 520px) */}
            <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[520px] lg:h-[520px] flex items-center justify-center">
              
              {/* Outer Orbit Rings with Dashed SVG Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 520">
                <defs>
                  <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7b3fc7" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#7b3fc7" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Soft Radial Ambient Circle */}
                <circle cx="260" cy="260" r="210" fill="url(#ringGlow)" />
                <circle cx="260" cy="260" r="185" fill="none" stroke="#e8e2f2" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="260" cy="260" r="120" fill="none" stroke="#e8e2f2" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />

                {/* Radial Connector Rays from Center to 6 Satellite Positions */}
                {satellites.map((sat, i) => {
                  const rad = (sat.angle * Math.PI) / 180;
                  const x = 260 + 185 * Math.cos(rad);
                  const y = 260 + 185 * Math.sin(rad);
                  const isActive = activeNode === i;

                  return (
                    <g key={sat.id}>
                      <line
                        x1="260"
                        y1="260"
                        x2={x}
                        y2={y}
                        stroke={isActive ? sat.color : '#e2dbed'}
                        strokeWidth={isActive ? 2 : 1.2}
                        strokeDasharray={isActive ? 'none' : '3 3'}
                        className="transition-all duration-300"
                      />
                      {isActive && (
                        <circle cx={x} cy={y} r="6" fill={sat.color} opacity="0.3" className="animate-ping" />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* ─────────────────────────────────────────────
                  CENTRAL GUARDIAN ORB
                  ───────────────────────────────────────────── */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white shadow-[0_16px_48px_rgba(123,63,199,0.18)] border border-[#ede7f6] flex flex-col items-center justify-center p-3 text-center cursor-pointer"
              >
                {/* Guardian Gradient Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#ff7a57] via-[#7b3fc7] to-[#a855f7] flex items-center justify-center shadow-md mb-1 sm:mb-1.5">
                  <div className="w-4 h-4 rounded-full bg-white/90 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#7b3fc7]" />
                  </div>
                </div>

                <span className="text-xs sm:text-sm font-bold text-[#1c1636] tracking-tight">
                  guardian
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-[#7b3fc7] uppercase tracking-wider font-semibold">
                  Core Engine
                </span>
              </motion.div>

              {/* ─────────────────────────────────────────────
                  6 SURROUNDING SATELLITE NODES
                  ───────────────────────────────────────────── */}
              {satellites.map((sat, idx) => {
                const Icon = sat.icon;
                const rad = (sat.angle * Math.PI) / 180;
                // Responsive distance: 135px on small, 185px on desktop (relative to 520px viewBox)
                const distancePct = 35.5; // percentage from center
                const xPct = 50 + distancePct * Math.cos(rad);
                const yPct = 50 + distancePct * Math.sin(rad);
                const isActive = activeNode === idx;

                return (
                  <motion.button
                    key={sat.id}
                    onClick={() => setActiveNode(idx)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      left: `${xPct}%`,
                      top: `${yPct}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-30 flex flex-col items-center group focus:outline-none transition-all duration-300`}
                  >
                    {/* Circular Icon Node */}
                    <div
                      className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                        isActive
                          ? 'shadow-[0_8px_24px_rgba(123,63,199,0.3)] scale-110 ring-2 ring-offset-2'
                          : 'bg-white hover:bg-[#faf8fd] border border-[#ede7f6]'
                      }`}
                      style={{
                        backgroundColor: isActive ? sat.color : '#ffffff',
                        color: isActive ? '#ffffff' : sat.color,
                        ringColor: sat.color,
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Satellite Text Label */}
                    <div className="mt-1.5 sm:mt-2 text-center max-w-[90px] sm:max-w-[120px]">
                      <span className={`text-[10px] sm:text-xs font-bold tracking-tight block leading-tight transition-colors ${
                        isActive ? 'text-[#1c1636]' : 'text-[#524b6b] group-hover:text-[#1c1636]'
                      }`}>
                        {sat.title}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* ─────────────────────────────────────────────────────────
                HANDWRITTEN ANNOTATION (Matching Master Reference Mockup)
                ───────────────────────────────────────────────────────── */}
            <div className="w-full text-right pr-6 mt-2">
              <span className="font-['Caveat',cursive] text-2xl sm:text-3xl text-[#7b3fc7]/85 -rotate-3 inline-block tracking-wide">
                Connected solutions. Real impact.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
