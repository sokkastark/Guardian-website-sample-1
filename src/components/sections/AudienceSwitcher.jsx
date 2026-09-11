import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Stethoscope, 
  CheckCircle, 
  ArrowRight, 
  Users,
  Activity,
  FileSpreadsheet,
  AlertCircle,
  TrendingUp,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function AudienceSwitcher() {
  const [activeTab, setActiveTab] = useState('providers');

  const content = {
    providers: {
      headline: 'Give care teams the information to act.',
      description:
        'Help providers connect patient information, identify clinical opportunities, coordinate multidisciplinary care, and support superior value-based care performance.',
      tag: 'Physician Groups • ACOs • Health Systems',
      icon: Stethoscope,
      accentColor: '#7b3fc7',
      pillars: [
        {
          title: 'Pre-Encounter Preparation',
          desc: 'Deliver prioritized clinical summaries directly into physician workflows prior to patient visits.',
        },
        {
          title: 'Care Gap Closure Alerts',
          desc: 'Flag preventive and chronic care gaps at the point of care with real-time verification.',
        },
        {
          title: 'Longitudinal Master Chart',
          desc: 'Access patient records synthesized across all external hospital systems and diagnostic facilities.',
        },
        {
          title: 'Operational Staff Extension',
          desc: 'Embedded Risk Coders and Care Navigators handling outreach, documentation, and scheduling.',
        },
      ],
      deliverables: [
        'Reduced administrative burden for physicians & care teams',
        'Higher quality score attainment in ACO shared savings contracts',
        'Streamlined chronic disease management without EHR friction',
      ],
      mockup: {
        title: 'Point-of-Care EHR Pre-Encounter Prep',
        badge: 'Clinician Queue Ready',
        patient: 'Eleanor Vance (Age 68 • GHS-984210)',
        primaryAlert: 'Diabetic Eye Exam Due (14 Months Elapsed)',
        secondaryAlert: 'Persistent CKD Stage II Documentation Needed',
        status: 'Navigator booked specialist for Oct 14',
      },
    },
    payers: {
      headline: 'Turn network data into better performance.',
      description:
        'Help payers connect data, understand network and patient patterns, coordinate action, and support clinical quality and financial performance benchmarks.',
      tag: 'Health Plans • MSOs • Risk-Bearing Entities',
      icon: Building2,
      accentColor: '#ff7a57',
      pillars: [
        {
          title: 'Cross-Network Data Synthesis',
          desc: 'Bridge the gap between adjudicated claims lag and real-time clinical encounter information.',
        },
        {
          title: 'Population Risk Stratification',
          desc: 'Identify rising-risk cohorts and intervene before emergency department utilization escalates.',
        },
        {
          title: 'HEDIS & Star Ratings Support',
          desc: 'Continuous surveillance and proactive gap closure throughout the calendar year.',
        },
        {
          title: 'Network Performance Intelligence',
          desc: 'Transparent analytics on provider engagement, referral patterns, and contract outcomes.',
        },
      ],
      deliverables: [
        'Enhanced Medical Loss Ratio (MLR) performance & downside protection',
        'Timely ADT notification follow-up preventing costly readmissions',
        'Stronger provider collaboration and shared accountability',
      ],
      mockup: {
        title: 'Cross-Network HEDIS & Utilization Cockpit',
        badge: 'Network Surveillance',
        patient: 'Regional MSO Network (14 Clinic Facilities)',
        primaryAlert: 'HEDIS Quality Measure Surveillance: 89% Compliance',
        secondaryAlert: 'Emergency ADT Alert: Post-Discharge Outreach Active',
        status: 'MLR Performance Tracking on Target',
      },
    },
  };

  const current = content[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="audiences" className="relative py-16 sm:py-20 bg-white overflow-hidden border-t border-[#e1e1e5]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[550px] bg-[#7b3fc7]/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[400px] bg-[#ff7a57]/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/20 text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Who We Serve</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight mb-4">
            Tailored intelligence for{' '}
            <span className="text-gradient-hero">Providers & Payers.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#35304c] leading-relaxed font-normal">
            Guardian supports different healthcare perspectives with dedicated workflows engineered for clinical care teams and network healthcare payers.
          </p>
        </motion.div>

        {/* Perspective Switcher Toggle Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="inline-flex p-1.5 rounded-full bg-white border border-[#e1e1e5] mb-8 sm:mb-10 shadow-xs"
        >
          <button
            onClick={() => setActiveTab('providers')}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none ${
              activeTab === 'providers'
                ? 'bg-[#7b3fc7] text-white shadow-md shadow-[#7b3fc7]/25'
                : 'text-[#35304c] hover:text-[#7b3fc7]'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>For Healthcare Providers</span>
          </button>

          <button
            onClick={() => setActiveTab('payers')}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none ${
              activeTab === 'payers'
                ? 'bg-[#7b3fc7] text-white shadow-md shadow-[#7b3fc7]/25'
                : 'text-[#35304c] hover:text-[#7b3fc7]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>For Payers & Plans</span>
          </button>
        </motion.div>

        {/* Dynamic Perspective Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
            {/* Left Column: Narrative & Operational Pillars (6 cols) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#e1e1e5] shadow-[0_12px_36px_rgba(28,22,54,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#f2ecf9] text-[#7b3fc7] shadow-2xs">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#7b3fc7] uppercase font-bold tracking-wider block">
                      Target Healthcare Audience
                    </span>
                    <span className="text-xs font-semibold text-[#727272]">{current.tag}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-4 tracking-tight leading-snug">
                  {current.headline}
                </h3>

                <p className="text-sm text-[#35304c] leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* 4 Pillars in a Clean 2x2 Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {current.pillars.map((pillar, idx) => (
                    <div
                      key={pillar.title}
                      className="bg-[#f8f6fc] p-3.5 rounded-xl border border-[#e1e1e5]"
                    >
                      <span className="text-[10px] font-mono font-bold text-[#7b3fc7] block mb-1">
                        Pillar 0{idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-[#1c1636] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-[#727272] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proven Value Drivers Strip */}
              <div className="pt-6 border-t border-[#eeecf5] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#adabb7] block mb-2">
                  Verified Value Drivers
                </span>
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#35304c]">
                    <CheckCircle className="w-4 h-4 text-[#7b3fc7] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Workflow / Product UI Simulation (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-[#e1e1e5] p-6 sm:p-8 shadow-[0_16px_48px_rgba(28,22,54,0.06)] flex flex-col justify-between relative overflow-hidden">
              
              <div>
                {/* Workflow Simulation Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#eeecf5] mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#7b3fc7] uppercase tracking-wider block">
                      Dedicated Perspective UI
                    </span>
                    <h4 className="text-base font-bold text-[#1c1636]">
                      {current.mockup.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#f2ecf9] text-[#7b3fc7] border border-[#7b3fc7]/20">
                    {current.mockup.badge}
                  </span>
                </div>

                {/* Simulated Product UI Environment */}
                <div className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5] space-y-4 mb-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#eeecf5] text-xs">
                    <span className="font-bold text-[#1c1636]">{current.mockup.patient}</span>
                    <span className="text-[10px] text-[#727272] font-mono">Live Sync</span>
                  </div>

                  {/* Primary Alert */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#ff7a57]/30 flex items-start gap-3 shadow-2xs">
                    <div className="p-1 rounded-md bg-[#fff2ee] text-[#ff4312] shrink-0 mt-0.5">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-[#1c1636] block">
                        {current.mockup.primaryAlert}
                      </span>
                      <span className="text-[11px] text-[#727272]">
                        Point-of-care verification prompt dispatched
                      </span>
                    </div>
                  </div>

                  {/* Secondary Alert */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#7b3fc7]/30 flex items-start gap-3 shadow-2xs">
                    <div className="p-1 rounded-md bg-[#f2ecf9] text-[#7b3fc7] shrink-0 mt-0.5">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-[#1c1636] block">
                        {current.mockup.secondaryAlert}
                      </span>
                      <span className="text-[11px] text-[#727272]">
                        Clinical documentation prep note queued
                      </span>
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className="p-3 rounded-xl bg-[#f2ecf9] border border-[#7b3fc7]/20 flex items-center justify-between text-xs font-medium text-[#7b3fc7]">
                    <span>{current.mockup.status}</span>
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-xs text-[#727272] leading-relaxed">
                  Switching between Provider and Payer views reveals tailored operational interfaces designed to streamline clinical action and optimize value-based contracts.
                </p>
              </div>

              {/* Bottom Connection Link */}
              <div className="pt-6 mt-6 border-t border-[#eeecf5] flex items-center justify-between text-xs text-[#727272]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#7b3fc7]" />
                  <span>Configured for Value-Based Healthcare</span>
                </div>
                <a
                  href="#impact"
                  className="font-bold text-[#7b3fc7] hover:text-[#9565d2] flex items-center gap-1"
                >
                  <span>See Proven Impact</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
