import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Stethoscope, LineChart, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function ImpactSection() {
  const verifiedPillars = [
    {
      label: 'Clinical Pedigree',
      headline: 'Physician-Network Roots',
      desc: 'Founded and guided by practicing clinicians to solve real-world clinical workflow, care gap, and documentation challenges.',
      icon: Stethoscope,
      badge: 'Clinician-Founded',
    },
    {
      label: 'Operational Governance',
      headline: 'Full-Stack Delivery',
      desc: 'Pairing advanced data integration technology with dedicated operational specialists who execute care plans directly alongside your teams.',
      icon: ShieldCheck,
      badge: 'Dedicated Teams',
    },
    {
      label: 'Performance Model',
      headline: 'Value-Based Alignment',
      desc: 'Purpose-built specifically to support downside risk, ACO shared savings, and payer quality incentive programs.',
      icon: Award,
      badge: 'Shared Accountability',
    },
    {
      label: 'Longitudinal Architecture',
      headline: 'Connected Intelligence',
      desc: 'Reconciling claims lag with real-time EHR and ADT events into an enriched, actionable patient timeline.',
      icon: LineChart,
      badge: 'Master Chart',
    },
  ];

  return (
    <section id="impact" className="relative py-16 sm:py-20 bg-gradient-to-br from-[#1c1636] via-[#241846] to-[#2d1b54] text-white overflow-hidden border-t border-white/10">
      {/* Deep brand environment ambient lighting & data mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[500px] bg-[#7b3fc7]/25 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-[#ff7a57]/15 blur-[150px] rounded-full" />
        <div className="absolute inset-0 ambient-grid opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-[#ff7a57]" />
            <span>Proven Healthcare Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Healthcare experience that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">
              delivers results.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal">
            Guardian connects technology with healthcare operational expertise to deliver measurable, 
            sustainable value across clinical, financial, and regulatory benchmarks.
          </p>
        </motion.div>

        {/* High-Impact Proof Composition: Image Anchor + 4 Verified Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8 sm:mb-10">
          
          {/* Left Column: Authentic VBC Experience Photo Anchor (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-end min-h-[420px] lg:min-h-[500px]"
          >
            <img
              src="/images/vbc-experience.webp"
              alt="Guardian Value-Based Care Experience"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636] via-[#1c1636]/40 to-transparent" />

            {/* Overlaid Editorial Banner */}
            <div className="relative z-10 p-6 sm:p-8">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff7a57] uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Value-Based Care Foundation</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Physician-Led Operational Rigor
                </h4>
                <p className="text-xs text-purple-100/90 leading-relaxed">
                  Every algorithm, queue, and workflow is vetted by clinicians who understand real-world patient complexity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Verified Structural Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {verifiedPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.headline}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: 'easeOut' }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-white/10 text-purple-200 group-hover:bg-[#7b3fc7] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase text-purple-200/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 font-semibold">
                        {pillar.badge}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-purple-200 block mb-1">
                      {pillar.label}
                    </span>

                    <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                      {pillar.headline}
                    </h3>

                    <p className="text-xs text-purple-100/80 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-xs text-purple-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" />
                    <span>Clinically Validated Foundation</span>
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
