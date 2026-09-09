import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Lock, Network, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  const certifications = [
    {
      name: 'CMS MIPS Certified Registry',
      badge: 'Federal Accreditation',
      icon: Award,
      image: '/images/cert-cms.webp',
      desc: 'Official Centers for Medicare & Medicaid Services qualified clinical data registry for quality measure capture and submission.',
      validation: 'CMS Qualified Clinical Data Registry (QCDR)',
    },
    {
      name: 'eHealth Exchange Implementer',
      badge: 'National Network',
      icon: Network,
      image: '/images/cert-ehealth.webp',
      desc: 'Active participant in the largest public-private health information exchange network across the United States.',
      validation: 'Nationwide Clinical Interoperability',
    },
    {
      name: 'CareQuality Implementer',
      badge: 'Universal Framework',
      icon: ShieldCheck,
      image: '/images/cert-carequality.webp',
      desc: 'Active participant in the trusted exchange framework connecting disparate EHR networks and healthcare provider systems.',
      validation: 'Universal Exchange Framework Compliant',
    },
    {
      name: 'HITRUST e1 Certified',
      badge: 'Information Security',
      icon: Lock,
      image: null,
      desc: 'Rigorous independent validation of cybersecurity maturity, privacy governance, and protection of Protected Health Information (PHI).',
      validation: 'Verified Information Security Baseline',
    },
  ];

  return (
    <section id="trust" className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-[#e1e1e5]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/2 right-1/3 w-[500px] h-[350px] bg-[#7b3fc7]/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/20 text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Compliance & Accreditation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight mb-4">
            Built for healthcare.{' '}
            <span className="text-gradient-hero">Trusted by healthcare organizations.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#35304c] leading-relaxed max-w-2xl mx-auto font-normal">
            Guardian adheres to the highest national healthcare standards for clinical data integrity, 
            universal interoperability, and cybersecurity.
          </p>
        </motion.div>

        {/* 4 Official Accreditation Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: 'easeOut' }}
                className="bg-white p-6 rounded-3xl border border-[#e1e1e5] shadow-xs hover:border-[#7b3fc7]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {cert.image ? (
                      <div className="h-10 w-auto flex items-center">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="h-9 w-auto object-contain max-w-[110px]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="p-2.5 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] group-hover:bg-[#7b3fc7] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    )}

                    <span className="text-[10px] font-mono font-bold text-[#7b3fc7] bg-[#f2ecf9] border border-[#7b3fc7]/20 px-2.5 py-0.5 rounded-full">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#1c1636] mb-2 tracking-tight">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-[#35304c] leading-relaxed mb-4">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#eeecf5] flex items-center gap-1.5 text-[11px] text-[#7b3fc7] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{cert.validation}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
