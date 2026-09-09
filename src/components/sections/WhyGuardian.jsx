import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Database, 
  Users, 
  TrendingUp, 
  HeartHandshake,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function WhyGuardian() {
  const themes = [
    {
      number: '01',
      title: 'Healthcare Expertise',
      desc: 'Founded and governed by practicing physicians who understand real-world clinical workflows and frontline patient care realities.',
      icon: HeartHandshake,
    },
    {
      number: '02',
      title: 'Connected Technology',
      desc: 'Interoperable architecture that integrates across diverse EHR, lab, and claims vendors without rigid proprietary constraints.',
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Integrated Data',
      desc: 'Reconciling disparate clinical and claims records into an enriched, longitudinal Patient Master Chart single source of truth.',
      icon: Database,
    },
    {
      number: '04',
      title: 'Human Operational Support',
      desc: 'Certified Risk Coders, Care Managers, and Navigators who embed directly alongside your clinical and administrative teams.',
      icon: Users,
    },
    {
      number: '05',
      title: 'Value-Based Care Alignment',
      desc: 'Proven methodologies designed specifically around shared savings, quality measure scores, and downside risk contracts.',
      icon: TrendingUp,
    },
    {
      number: '06',
      title: 'Proven Healthcare Experience',
      desc: 'Decades of collective healthcare leadership delivering measurable improvements across MSOs, ACOs, and health plans.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-guardian" className="relative py-24 lg:py-32 bg-[#ede6f6] overflow-hidden border-t border-[#d6cde2]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[550px] bg-[#7b3fc7]/14 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[400px] bg-[#ff7a57]/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7b3fc7]/30 text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Why Guardian</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight mb-6">
            Built from healthcare.{' '}
            <span className="text-gradient-hero block sm:inline">Designed for action.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#35304c] leading-relaxed font-normal">
            We bridge the gap between complex healthcare data and frontline operational reality — combining 
            advanced intelligence with dedicated clinical specialists who help you succeed in value-based care.
          </p>
        </motion.div>

        {/* Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Human Storytelling Editorial Visual Anchor (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-[#d6cde2] shadow-[0_16px_48px_rgba(28,22,54,0.10)] flex flex-col justify-end min-h-[460px] lg:min-h-[580px]"
          >
            <img
              src="/images/healthcare-expert.webp"
              alt="Guardian Healthcare Physician Specialist"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Dark gradient base for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636] via-[#1c1636]/30 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1c1636] text-xs font-bold shadow-sm">
                <span>Physician-Led Foundation</span>
              </div>

              <blockquote className="text-white text-base sm:text-lg font-bold leading-snug">
                "We don't build software in a vacuum. Every tool is tested against actual care delivery workflows."
              </blockquote>

              <p className="text-xs text-purple-200 font-mono">
                Guardian Clinical Governance Board
              </p>
            </div>
          </motion.div>

          {/* Right Column: 6 Narrative Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {themes.map((theme, idx) => {
              const Icon = theme.icon;
              return (
                <motion.div
                  key={theme.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.09, ease: 'easeOut' }}
                  className="p-5 rounded-2xl bg-white border border-[#d6cde2] hover:border-[#7b3fc7] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_16px_rgba(28,22,54,0.05)] hover:shadow-[0_12px_28px_rgba(123,63,199,0.12)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-white text-[#7b3fc7] group-hover:bg-[#7b3fc7] group-hover:text-white transition-colors shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#adabb7]">
                        {theme.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#1c1636] mb-2 tracking-tight group-hover:text-[#7b3fc7] transition-colors">
                      {theme.title}
                    </h3>

                    <p className="text-xs text-[#35304c] leading-relaxed">
                      {theme.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#eeecf5] text-[10px] font-mono font-semibold text-[#7b3fc7] flex items-center justify-between">
                    <span>Guardian Standard</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
