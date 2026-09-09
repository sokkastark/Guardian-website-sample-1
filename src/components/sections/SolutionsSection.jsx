import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartPulse, 
  ClipboardList, 
  ShieldAlert, 
  Award, 
  MessageSquareHeart, 
  BarChart3, 
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Sparkles,
  GitCommit
} from 'lucide-react';

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: 'pop-health',
      title: 'Population Health',
      subtitle: 'Stratify risk and monitor longitudinal trajectories',
      desc: 'Stratify risk across complex patient populations, monitor chronic condition cohorts, and track longitudinal health trajectories to prevent acute escalations.',
      icon: HeartPulse,
      tags: ['Risk Stratification', 'Cohort Monitoring', 'Longitudinal Trends'],
      deliverables: [
        'Automated patient risk tiering based on clinical & claims history',
        'Cohort surveillance for diabetes, hypertension, and CHF',
        'Cross-payer population benchmark analytics',
      ],
      color: '#7b3fc7',
    },
    {
      id: 'care-mgmt',
      title: 'Care Management',
      subtitle: 'Orchestrate tailored multi-site care plans',
      desc: 'Orchestrate comprehensive care plans, coordinate post-discharge transitions of care within 48 hours, and synchronize care teams across sites.',
      icon: ClipboardList,
      tags: ['Care Plans', 'Transition of Care', 'Team Coordination'],
      deliverables: [
        'Evidence-based chronic care management protocols',
        'Post-discharge transition coordination to prevent readmissions',
        'Multi-disciplinary care team task synchronization',
      ],
      color: '#ff7a57',
    },
    {
      id: 'risk-adj',
      title: 'Risk Adjustment',
      subtitle: 'Accurate, compliant documentation and RAF capture',
      desc: 'Deliver pre-encounter clinical intelligence, verify persistent chronic conditions, and ensure compliant, accurate RAF capture without provider burden.',
      icon: ShieldAlert,
      tags: ['RAF Accuracy', 'Condition Recapture', 'Documentation Prep'],
      deliverables: [
        'Pre-encounter clinical documentation packet for physicians',
        'Annual persistent condition recapture verification',
        'CMS and commercial coding compliance audits',
      ],
      color: '#60319d',
    },
    {
      id: 'quality',
      title: 'Quality & Performance',
      subtitle: 'Real-time HEDIS surveillance and proactive gap closure',
      desc: 'Surveil HEDIS and CMS quality measures in real time, automate proactive gap-closure prompts, and maximize value-based incentives.',
      icon: Award,
      tags: ['HEDIS Surveillance', 'CMS Registry', 'Gap Closure'],
      deliverables: [
        'Continuous year-round measure performance tracking',
        'CMS Qualified Clinical Data Registry (QCDR) submission',
        'Point-of-care gap-closure alerts integrated into EHR queues',
      ],
      color: '#ff4312',
    },
    {
      id: 'engagement',
      title: 'Patient Engagement',
      subtitle: 'Direct outreach overcoming SDOH and booking barriers',
      desc: 'Empower Care Navigators with targeted outreach tools to overcome patient transportation, scheduling, and social determinants of health barriers.',
      icon: MessageSquareHeart,
      tags: ['Navigator Outreach', 'Appointment Booking', 'SDOH Resolution'],
      deliverables: [
        'Empathetic phone, SMS, and telehealth outreach campaigns',
        'Direct in-network specialist scheduling and transportation booking',
        'Closed-loop verification of completed preventive appointments',
      ],
      color: '#7b3fc7',
    },
    {
      id: 'analytics',
      title: 'Analytics & Intelligence',
      subtitle: 'Executive cockpits and predictive healthcare insights',
      desc: 'Executive performance dashboards, network utilization patterns, and predictive insights to guide strategic healthcare and clinical leadership.',
      icon: BarChart3,
      tags: ['Executive KPIs', 'Utilization Trends', 'Predictive Insights'],
      deliverables: [
        'Real-time executive KPI dashboards for ACOs and MSOs',
        'Emergency department utilization pattern detection',
        'Contract financial performance and shared savings forecasts',
      ],
      color: '#9565d2',
    },
  ];

  const current = solutions[activeSolution];
  const CurrentIcon = current.icon;

  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-[#ede6f6] overflow-hidden border-t border-[#d6cde2]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[550px] bg-[#7b3fc7]/14 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[650px] h-[450px] bg-[#ff7a57]/12 blur-[150px] rounded-full" />
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
            <Briefcase className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Connected Healthcare Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight mb-6">
            Built around the work{' '}
            <span className="text-gradient-hero">healthcare organizations need to get done.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#35304c] leading-relaxed font-normal">
            Modular, interconnected solutions engineered to integrate directly into clinical operations, 
            empower multidisciplinary care teams, and drive value-based contract success.
          </p>
        </motion.div>

        {/* Connected Guardian Ecosystem Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 6 Connected Ecosystem Nodes (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-6 space-y-2.5"
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5e5873] flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-[#7b3fc7]" />
                Interconnected Solution Nodes
              </span>
              <span className="text-xs text-[#7b3fc7] font-semibold">Select node to inspect</span>
            </div>

            {solutions.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeSolution === idx;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSolution(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border relative group focus:outline-none flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-[#7b3fc7] shadow-[0_8px_24px_rgba(123,63,199,0.18)] translate-x-1 sm:translate-x-2'
                      : 'bg-white/90 hover:bg-white border-[#d6cde2] hover:border-[#7b3fc7]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 transition-all ${
                        isSelected
                          ? 'bg-[#7b3fc7] text-white shadow-md shadow-[#7b3fc7]/25'
                          : 'bg-[#f2ecf9] text-[#7b3fc7] group-hover:bg-[#7b3fc7] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold tracking-tight transition-colors ${
                          isSelected ? 'text-[#1c1636]' : 'text-[#35304c] group-hover:text-[#1c1636]'
                        }`}>
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#adabb7] uppercase">
                          Module 0{idx + 1}
                        </span>
                      </div>
                      <p className={`text-xs truncate transition-colors ${
                        isSelected ? 'text-[#35304c]' : 'text-[#727272]'
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-[#7b3fc7] translate-x-1' : 'text-[#adabb7] group-hover:text-[#7b3fc7]'
                  }`} />

                  {/* Active Indicator Left Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeSolutionBar"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-[#7b3fc7] rounded-r-full"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Detailed Ecosystem Spotlight Console (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="h-full bg-white rounded-3xl border border-[#d6cde2] p-6 sm:p-8 shadow-[0_16px_48px_rgba(28,22,54,0.08)] flex flex-col justify-between relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Spotlight Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#eeecf5]">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#f2ecf9] text-[#7b3fc7]">
                        <CurrentIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#7b3fc7] uppercase tracking-wider block font-bold">
                          Ecosystem Module 0{activeSolution + 1}
                        </span>
                        <h3 className="text-xl font-bold text-[#1c1636] tracking-tight">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#f8f6fc] border border-[#e1e1e5] text-[#35304c]">
                      Connected
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#35304c] leading-relaxed">
                    {current.desc}
                  </p>

                  {/* Tags Pill Bar */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#f2ecf9] text-[#7b3fc7] border border-[#7b3fc7]/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 3 Key Functional Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#adabb7] block mb-2">
                      Operational Capabilities
                    </span>
                    {current.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#35304c]">
                        <div className="p-0.5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] mt-0.5 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug font-medium">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Integrated Architecture Ribbon */}
              <div className="pt-6 mt-6 border-t border-[#eeecf5] flex items-center justify-between text-xs text-[#727272]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#7b3fc7]" />
                  <span>Integrated with Guardian Master Engine</span>
                </div>
                <a
                  href="#audiences"
                  className="font-bold text-[#7b3fc7] hover:text-[#9565d2] flex items-center gap-1"
                >
                  <span>Who We Serve</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
