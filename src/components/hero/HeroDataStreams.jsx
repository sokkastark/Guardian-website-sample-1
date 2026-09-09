import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Activity, Radio } from 'lucide-react';

export default function HeroDataStreams({ mouseX = 0, mouseY = 0 }) {
  const sources = [
    { id: 'ehr', label: 'EHR', icon: Database, color: 'from-[#7b3fc7] to-[#9565d2]', top: '10%', left: '0%' },
    { id: 'claims', label: 'Claims', icon: FileText, color: 'from-[#ff7a57] to-[#ff4312]', top: '34%', left: '-2%' },
    { id: 'labs', label: 'Labs', icon: Activity, color: 'from-[#60319d] to-[#7b3fc7]', top: '58%', left: '0%' },
    { id: 'adt', label: 'ADT', icon: Radio, color: 'from-[#9565d2] to-[#ff7a57]', top: '82%', left: '4%' },
  ];

  return (
    <div className="relative w-full h-[520px] lg:h-[600px] flex items-center justify-center pointer-events-none select-none">
      {/* Background Ambient SVG Connecting Lines */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 750 600"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7b3fc7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff7a57" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9565d2" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7b3fc7" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Curved Flow Paths converging to right */}
        {/* Stream 1: EHR to Right */}
        <path
          d="M 120 90 C 220 90, 260 220, 360 220"
          stroke="url(#streamGrad1)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          className="opacity-70"
        />
        <motion.circle
          r="4.5"
          fill="#7b3fc7"
          filter="url(#glow)"
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            offsetPath: 'path("M 120 90 C 220 90, 260 220, 360 220")',
          }}
        />

        {/* Stream 2: Claims to Right */}
        <path
          d="M 110 220 C 200 220, 250 250, 360 250"
          stroke="url(#streamGrad2)"
          strokeWidth="2.5"
          strokeDasharray="8 6"
          className="opacity-80"
        />
        <motion.circle
          r="4.5"
          fill="#ff7a57"
          filter="url(#glow)"
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 2.8,
            delay: 0.8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            offsetPath: 'path("M 110 220 C 200 220, 250 250, 360 250")',
          }}
        />

        {/* Stream 3: Labs to Right */}
        <path
          d="M 120 360 C 220 360, 260 300, 360 280"
          stroke="url(#streamGrad1)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          className="opacity-70"
        />
        <motion.circle
          r="4.5"
          fill="#9565d2"
          filter="url(#glow)"
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 3.5,
            delay: 1.4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            offsetPath: 'path("M 120 360 C 220 360, 260 300, 360 280")',
          }}
        />

        {/* Stream 4: ADT to Right */}
        <path
          d="M 130 500 C 230 500, 270 340, 360 310"
          stroke="url(#streamGrad2)"
          strokeWidth="2"
          strokeDasharray="8 8"
          className="opacity-70"
        />
        <motion.circle
          r="4.5"
          fill="#7b3fc7"
          filter="url(#glow)"
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 3,
            delay: 2.1,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            offsetPath: 'path("M 130 500 C 230 500, 270 340, 360 310")',
          }}
        />
      </svg>

      {/* Source Data Pills (Layer 2) */}
      <div className="absolute inset-0 pointer-events-auto">
        {sources.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * idx }}
              style={{
                top: item.top,
                left: item.left,
                transform: `translate(${mouseX * (6 + idx * 2)}px, ${mouseY * (6 + idx * 2)}px)`,
              }}
              className="absolute z-10"
            >
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/95 border border-[#e1e1e5] shadow-md shadow-[#1c1636]/5 hover:border-[#7b3fc7]/50 transition-colors group cursor-default">
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${item.color} shadow-xs`}>
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wide text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[9px] text-[#adabb7] font-medium">Stream Connected</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-ping ml-1" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
