import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight, Clock, FileText } from 'lucide-react';

export default function ResourcesSection() {
  const resources = [
    {
      type: 'Case Study',
      title: 'Local Group KPI Dashboard Development for MSO',
      desc: 'How Guardian designed and deployed centralized executive KPI dashboards for a regional Management Services Organization, consolidating multi-clinic metrics, RAF coding capture, and financial benchmarks into one cockpit.',
      readTime: '6 min read',
      tag: 'MSO Operations',
      image: '/images/case-study-kpi.webp',
    },
    {
      type: 'Case Study',
      title: 'Enhanced Emergency Department Utilization Management',
      desc: 'Deploying real-time hospital ADT alerts coupled with embedded Care Navigator outreach within 24 hours of discharge to prevent readmissions and streamline post-acute transitions.',
      readTime: '5 min read',
      tag: 'Care Coordination',
      image: '/images/case-study-ed.webp',
    },
    {
      type: 'Executive Guide',
      title: 'Closing Chronic Care Gaps in Value-Based Contracts',
      desc: 'A practical framework for healthcare leaders to bridge the gap between retrospective claims data and actionable point-of-care clinical workflows during routine patient encounters.',
      readTime: '8 min read',
      tag: 'Quality & HEDIS',
      image: null, // editorial card treatment
    },
  ];

  return (
    <section id="resources" className="relative py-16 sm:py-20 bg-[#f8f6fc] overflow-hidden border-t border-[#e1e1e5]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[700px] h-[550px] bg-[#7b3fc7]/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-[#ff7a57]/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7b3fc7]/30 text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#7b3fc7]" />
              <span>Intelligence & Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight">
              See healthcare data{' '}
              <span className="text-gradient-hero">in action.</span>
            </h2>
          </div>

          <a
            href="mailto:support@itsguardian.com"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#7b3fc7] hover:text-[#9565d2] transition-colors"
          >
            <span>Request case analyses</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Resources Grid with Rich Visual Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              className="bg-white rounded-3xl border border-[#e1e1e5] shadow-[0_8px_28px_rgba(28,22,54,0.04)] hover:border-[#7b3fc7] hover:shadow-[0_20px_48px_rgba(123,63,199,0.12)] transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Header Preview */}
                {item.image ? (
                  <div className="relative h-48 w-full overflow-hidden bg-[#f2ecf9] border-b border-[#eeecf5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#7b3fc7] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-[#e1e1e5]">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 w-full bg-gradient-to-br from-[#f2ecf9] to-[#fff2ee] border-b border-[#eeecf5] p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#ff4312] bg-white px-2.5 py-1 rounded-full shadow-xs border border-[#ff7a57]/20">
                        {item.type}
                      </span>
                      <FileText className="w-5 h-5 text-[#7b3fc7]" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#7b3fc7]">
                      Clinical Governance Whitepaper
                    </span>
                  </div>
                )}

                {/* Content Box */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-[#727272] mb-3">
                    <span className="font-semibold text-[#7b3fc7]">{item.tag}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#1c1636] mb-3 tracking-tight group-hover:text-[#7b3fc7] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#35304c] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Read Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#eeecf5] flex items-center justify-between text-xs font-semibold text-[#7b3fc7] group-hover:text-[#9565d2]">
                  <span>Explore analysis</span>
                  <div className="p-1.5 rounded-full bg-[#f8f6fc] group-hover:bg-[#f2ecf9] text-[#7b3fc7] transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
