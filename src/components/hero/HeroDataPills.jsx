import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileSpreadsheet, Activity, Radio, Network } from 'lucide-react';

export default function HeroDataPills({ mouseX = 0, mouseY = 0 }) {
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

  return (
    <div
      className="flex flex-col gap-2.5 sm:gap-3 pointer-events-auto select-none will-change-transform"
      style={{
        transform: `translate3d(${mouseX * 16}px, ${mouseY * 14}px, 0px)`,
      }}
    >
      {pills.map((pill, idx) => {
        const Icon = pill.icon;
        return (
          <motion.div
            key={pill.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 + idx * 0.08, ease: 'easeOut' }}
            whileHover={{ scale: 1.04, x: 4 }}
            className="flex items-center gap-3 p-2 sm:p-2.5 pr-4 rounded-2xl bg-[#1c2438]/55 backdrop-blur-xl border border-white/20 hover:border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all cursor-default group"
          >
            <div className={`w-9 h-9 rounded-xl ${pill.iconBg} bg-gradient-to-br ${pill.color} flex items-center justify-center text-white shrink-0 shadow-md ${pill.shadow}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
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
  );
}
