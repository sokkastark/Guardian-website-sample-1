import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  HeartHandshake, 
  FileCheck2, 
  Compass, 
  Briefcase, 
  CheckCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function PeopleTechnology() {
  const [activeRole, setActiveRole] = useState(0);

  const roles = [
    {
      id: 'executives',
      role: 'Account Executives',
      focus: 'Strategic Alignment & Contract Governance',
      icon: Briefcase,
      badge: 'Executive Leadership',
      desc: 'Dedicated healthcare leaders who partner with your executive team to oversee value-based care performance, contract milestones, and data integration.',
      responsibilities: [
        'Executive value-based contract governance & upside monitoring',
        'Performance milestone tracking across payer agreements',
        'Cross-system workflow alignment between clinical & financial leadership',
      ],
      uiCallout: 'Executive Governance Cockpit',
    },
    {
      id: 'coders',
      role: 'Risk Coders',
      focus: 'Clinical Documentation Integrity',
      icon: FileCheck2,
      badge: 'Certified Specialists',
      desc: 'Certified clinical documentation specialists who review longitudinal encounter histories to ensure accurate RAF capture and compliant condition documentation.',
      responsibilities: [
        'Pre-encounter clinical documentation review prior to patient visits',
        'Annual persistent chronic condition recapture validation',
        'Strict CMS and commercial risk adjustment coding compliance',
      ],
      uiCallout: 'Point-of-Care EHR Prep Notes',
    },
    {
      id: 'managers',
      role: 'Care Managers',
      focus: 'Clinical Care Plan Orchestration',
      icon: HeartHandshake,
      badge: 'Clinical Coordination',
      desc: 'Experienced clinicians who work with physicians to design and execute tailored care plans for complex, rising-risk, and high-utilization patient cohorts.',
      responsibilities: [
        'Evidence-based chronic condition management protocols',
        'Post-discharge transition of care coordination within 48 hours',
        'Physician communication and longitudinal care plan reviews',
      ],
      uiCallout: 'Patient Care Trajectory Dashboard',
    },
    {
      id: 'navigators',
      role: 'Care Navigators',
      focus: 'Direct Patient Engagement',
      icon: Compass,
      badge: 'Patient Advocates',
      desc: 'Empathetic operational navigators who connect directly with patients to schedule preventive exams, overcome transportation barriers, and close care gaps.',
      responsibilities: [
        'Proactive patient outreach and in-network appointment booking',
        'Resolution of social determinants of health (SDOH) barriers',
        'Closed-loop verification of completed screenings and referrals',
      ],
      uiCallout: 'Targeted Patient Outreach Queue',
    },
  ];

  const currentRole = roles[activeRole];
  const CurrentIcon = currentRole.icon;

  return (
    <section id="people-tech" className="relative py-16 sm:py-20 bg-white overflow-hidden border-t border-[#e1e1e5]">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[500px] bg-[#7b3fc7]/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#ff7a57]/4 blur-[130px] rounded-full" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/20 text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>People + Technology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight mb-4">
            Technology is only valuable{' '}
            <span className="text-gradient-hero block sm:inline">when people can act on it.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#35304c] leading-relaxed font-normal">
            Guardian combines technology with healthcare expertise and operational support — helping teams 
            turn information into action across the healthcare journey.
          </p>
        </motion.div>

        {/* Human + Technology Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-10">
          
          {/* Left Column: Authentic Healthcare Photography Anchor (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-[#e1e1e5] shadow-xl shadow-[#1c1636]/5 flex flex-col justify-end min-h-[460px] lg:min-h-[560px]"
          >
            {/* Real Healthcare Team Photo */}
            <img
              src="/images/care-team-collaboration.jpg"
              alt="Guardian Healthcare Care Team Collaborating"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />

            {/* Subtle Gradient Veil for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636]/95 via-[#1c1636]/35 to-transparent" />

            {/* Floating Glass UI Callouts Overlaid on Photo */}
            <div className="relative z-10 p-6 sm:p-8 space-y-3">
              {/* Glass Pill 1: Live Synergy */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-[#1c1636] text-xs font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#7b3fc7] animate-pulse" />
                <span>Embedded Operational Specialists</span>
              </div>

              {/* Glass Card: Technology + Human Metric */}
              <div className="p-4 rounded-2xl bg-[#1c1636]/80 backdrop-blur-md border border-white/15 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-purple-200 font-bold tracking-wider">
                    Care Coordination Synergy
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#7b3fc7] text-white">
                    Zero Clinician Friction
                  </span>
                </div>
                <p className="text-xs text-purple-100 leading-relaxed">
                  Clinicians focus on patients while Guardian's operational teams handle outreach, gap closure, and risk documentation prep.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Operational Roles Interactive System (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-4"
          >
            
            {/* Role Selection Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {roles.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeRole === idx;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveRole(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 focus:outline-none flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#7b3fc7] border-[#7b3fc7] text-white shadow-lg shadow-[#7b3fc7]/25 scale-[1.02]'
                        : 'bg-white hover:bg-[#f8f6fc] border-[#e1e1e5] text-[#35304c] hover:border-[#7b3fc7]/30 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#7b3fc7]'}`} />
                      <span className={`text-[9px] font-mono font-bold uppercase ${
                        isSelected ? 'text-purple-200' : 'text-[#adabb7]'
                      }`}>
                        0{idx + 1}
                      </span>
                    </div>
                    <span className={`text-xs font-bold leading-tight ${
                      isSelected ? 'text-white' : 'text-[#1c1636]'
                    }`}>
                      {item.role}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Role Detailed Spotlight Card */}
            <div className="flex-1 bg-[#f8f6fc] rounded-3xl border border-[#e1e1e5] p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#eeecf5] gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white text-[#7b3fc7] shadow-2xs border border-[#e1e1e5]">
                        <CurrentIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-[#1c1636] tracking-tight">
                            {currentRole.role}
                          </h3>
                          <span className="text-[10px] font-mono font-bold text-[#7b3fc7] bg-[#f2ecf9] border border-[#7b3fc7]/20 px-2 py-0.5 rounded-full">
                            {currentRole.badge}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-[#7b3fc7] block mt-0.5">
                          {currentRole.focus}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-[#727272] bg-white border border-[#e1e1e5] px-3 py-1 rounded-full self-start sm:self-auto shadow-2xs">
                      {currentRole.uiCallout}
                    </span>
                  </div>

                  <p className="text-sm text-[#35304c] leading-relaxed">
                    {currentRole.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#adabb7] block mb-2">
                      Key Operational Deliverables
                    </span>
                    {currentRole.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#35304c]">
                        <CheckCircle className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{resp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 mt-6 border-t border-[#eeecf5] flex items-center justify-between text-xs text-[#727272]">
                <span>Operational Governance & Oversight</span>
                <span className="text-[#7b3fc7] font-bold flex items-center gap-1">
                  Physician-Approved Protocols <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Full-Stack Operational Extension Banner */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="bg-[#f8f6fc] p-6 sm:p-8 rounded-3xl border border-[#e1e1e5] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#7b3fc7] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#7b3fc7]/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#1c1636]">Full-Stack Operational Extension</h4>
              <p className="text-xs sm:text-sm text-[#35304c]">
                Guardian does not merely license software; our operational specialists embed directly alongside your care teams.
              </p>
            </div>
          </div>
          <a
            href="mailto:support@itsguardian.com"
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#1c1636] hover:text-[#7b3fc7] bg-white hover:bg-[#f2ecf9] border border-[#e1e1e5] transition-all shrink-0 shadow-2xs active:scale-95"
          >
            Explore Team Integration
          </a>
        </motion.div>

      </div>
    </section>
  );
}
