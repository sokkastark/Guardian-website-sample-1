import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileSpreadsheet, Activity, Radio, Network } from 'lucide-react';

export default function HeroDataPills({ mouseX = 0, mouseY = 0, maxItems = null }) {
  const pills = [
    {
      id: 'ehr',
      label: 'EHR',
      sub: 'Patient Records',
      icon: Database,
      color: 'from-[#0284c7] to-[#38bdf8]',
      shadow: 'shadow-[#0284c7]/30',
      iconBg: 'bg-[#0284c7]',
    },
    {
      id: 'claims',
      label: 'Claims',
      sub: 'Medical & Pharmacy',
      icon: FileSpreadsheet,
      color: 'from-[#ea580c] to-[#fb923c]',
      shadow: 'shadow-[#ea580c]/30',
      iconBg: 'bg-[#ea580c]',
    },
    {
      id: 'labs',
      label: 'Labs',
      sub: 'Results & Reports',
      icon: Activity,
      color: 'from-[#7c3aed] to-[#a855f7]',
      shadow: 'shadow-[#7c3aed]/30',
      iconBg: 'bg-[#7c3aed]',
    },
    {
      id: 'adt',
      label: 'ADT',
      sub: 'Admissions, Discharges',
      icon: Radio,
      color: 'from-[#059669] to-[#34d399]',
      shadow: 'shadow-[#059669]/30',
      iconBg: 'bg-[#059669]',
    },
    {
      id: 'hie',
      label: 'HIE',
      sub: 'Health Information',
      icon: Network,
      color: 'from-[#0891b2] to-[#22d3ee]',
      shadow: 'shadow-[#0891b2]/30',
      iconBg: 'bg-[#0891b2]',
    },
  ];

  const displayPills = maxItems ? pills.slice(0, maxItems) : pills;

  return (
    <div
      className="relative pointer-events-auto select-none"
      style={{
        perspective: '1200px',
      }}
    >
      {/* 3D Perspective Plane for Left Pills */}
      <div
        className="will-change-transform flex flex-col gap-2.5 sm:gap-3"
        style={{
          transform: `translate3d(${mouseX * 36}px, ${mouseY * 26}px, 25px) rotateX(${-mouseY * 8}deg) rotateY(${mouseX * 10}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {displayPills.map((pill, idx) => {
          const Icon = pill.icon;
          return (
            <motion.div
              key={pill.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.08, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, x: 4 }}
              className="relative overflow-hidden flex items-center gap-3 p-2 sm:p-2.5 pr-4 rounded-2xl bg-[#1c2438]/60 backdrop-blur-xl border border-white/25 hover:border-white/45 shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition-all cursor-default group"
            >
              {/* Holographic light reflection sheen that shifts with mouse */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-40 bg-gradient-to-tr from-transparent via-white/5 to-cyan-200/15"
                style={{
                  transform: `translate3d(${mouseX * -18}px, ${mouseY * -18}px, 0)`,
                }}
              />

              <div className={`relative z-10 w-9 h-9 rounded-xl ${pill.iconBg} bg-gradient-to-br ${pill.color} flex items-center justify-center text-white shrink-0 shadow-md ${pill.shadow}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="relative z-10 min-w-0">
                <span className="text-xs font-bold text-white block tracking-tight group-hover:text-purple-200 transition-colors">
                  {pill.label}
                </span>
                <span className="text-[10px] text-white/75 block truncate font-medium">
                  {pill.sub}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
