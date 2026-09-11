import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Sparkles, 
  Server, 
  UserCheck, 
  BrainCircuit, 
  Workflow, 
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  HeartPulse
} from 'lucide-react';

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState('risk');
  const [activeCapability, setActiveCapability] = useState('master-chart');

  const capabilities = [
    { id: 'integration', label: 'Data Integration', icon: Database, tab: 'claims' },
    { id: 'enrichment', label: 'Data Enrichment', icon: Sparkles, tab: 'conditions' },
    { id: 'services', label: 'Information Services', icon: Server, tab: 'timeline' },
    { id: 'master-chart', label: 'Patient Master Chart', icon: UserCheck, tab: 'timeline' },
    { id: 'intelligence', label: 'Clinical Intelligence', icon: BrainCircuit, tab: 'gaps' },
    { id: 'workflow', label: 'Workflow / Action', icon: Workflow, tab: 'risk' },
  ];

  const handleCapabilityClick = (cap) => {
    setActiveCapability(cap.id);
    setActiveTab(cap.tab);
  };

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    const matchingCap = capabilities.find(c => c.tab === tabKey);
    if (matchingCap) {
      setActiveCapability(matchingCap.id);
    }
  };

  return (
    <section 
      id="platform" 
      className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#fbfafd] via-white to-[#f7f5fb] overflow-hidden border-t border-[#e8e4ef] select-none"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[550px] bg-[#7b3fc7]/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[450px] bg-[#ff7a57]/6 blur-[150px] rounded-full" />
        <div className="absolute inset-0 ambient-grid opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            TOP ROW: Left Story Copy & Right Floating SaaS Dashboard
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Story, Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/20 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>OUR PLATFORM</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-[1.12] mb-5">
              One connected view <br className="hidden sm:inline" />
              of healthcare.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5e5873] leading-relaxed max-w-lg mb-8 font-normal">
              Guardian unifies data, enriches it with clinical intelligence, and delivers the insights care teams need — all in one connected platform.
            </p>

            {/* CTA Button */}
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_24px_rgba(123,63,199,0.35)] hover:shadow-[0_8px_32px_rgba(123,63,199,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
            >
              <span>Explore the platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: Floating Interactive SaaS Interface */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Main Application Window */}
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#e5e0ee] shadow-[0_24px_64px_rgba(28,22,54,0.12)] p-5 sm:p-7 overflow-hidden">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#f0ecf6]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="text-[11px] font-mono text-[#8a849b] ml-2 hidden sm:inline">
                    Patient Overview • Master Risk View
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono text-[#8a849b] font-medium">
                    Live Feed • HL7/FHIR
                  </span>
                </div>
              </div>

              {/* Patient Profile Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#f0ecf6]">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img
                      src="/images/challenge/senior-patient.jpg"
                      alt="Eleanor Vance"
                      className="w-13 h-13 rounded-2xl object-cover border-2 border-white shadow-md shadow-[#7b3fc7]/10"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-base sm:text-lg font-bold text-[#1c1636] tracking-tight">
                        Eleanor Vance
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f2ecf9] text-[#7b3fc7] border border-[#7b3fc7]/20">
                        Attributed
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#727272] mt-0.5 font-medium">
                      <span>Female • 64 yrs</span>
                      <span className="hidden sm:inline">•</span>
                      <span>ID: #GR-98421</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-[#1c1636] font-semibold">Dr. M. Ross</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="text-[11px] font-mono text-[#8a849b] uppercase">Payer:</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#f8f6fc] border border-[#e8e4ef] text-xs font-semibold text-[#1c1636]">
                    Medicare Advantage
                  </span>
                </div>
              </div>

              {/* Sub-Navigation Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 border-b border-[#f0ecf6] scrollbar-none text-xs">
                {[
                  { key: 'timeline', label: 'Timeline' },
                  { key: 'gaps', label: 'Care Gaps', count: 3 },
                  { key: 'risk', label: 'Risk' },
                  { key: 'conditions', label: 'Conditions', count: 5 },
                  { key: 'medications', label: 'Medications', count: 4 },
                  { key: 'claims', label: 'Claims' },
                ].map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => handleTabClick(tab.key)}
                      className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all ${
                        isActive
                          ? 'bg-[#7b3fc7] text-white shadow-sm shadow-[#7b3fc7]/30'
                          : 'bg-[#f8f6fc] hover:bg-[#f0ecf6] text-[#5e5873]'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.count !== undefined && (
                        <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#e8e4ef] text-[#7b3fc7]'
                        }`}>
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Panes */}
              <AnimatePresence mode="wait">
                {activeTab === 'risk' && (
                  <motion.div
                    key="risk"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4"
                  >
                    {/* Risk Score Metric Card */}
                    <div className="sm:col-span-7 p-4 rounded-2xl bg-[#faf9fc] border border-[#eeecf5]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#8a849b]">Risk Score</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fee2e2] text-[#dc2626] border border-[#fca5a5]/30">
                          High Risk
                        </span>
                      </div>

                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight">
                          0.86
                        </span>
                        <span className="text-xs text-[#dc2626] font-semibold flex items-center">
                          <TrendingUp className="w-3.5 h-3.5 mr-0.5 inline" /> +0.14 vs prev yr
                        </span>
                      </div>

                      {/* Glowing Risk Trajectory Sparkline */}
                      <div className="h-16 w-full">
                        <svg className="w-full h-full" viewBox="0 0 240 60" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="riskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#ff7a57" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#ff7a57" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 45 Q 40 38, 80 40 T 140 28 T 190 20 T 240 12 L 240 60 L 0 60 Z"
                            fill="url(#riskGrad)"
                          />
                          <path
                            d="M 0 45 Q 40 38, 80 40 T 140 28 T 190 20 T 240 12"
                            stroke="#ff7a57"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <circle cx="240" cy="12" r="4" fill="#ff7a57" />
                        </svg>
                      </div>
                    </div>

                    {/* Secondary Metrics */}
                    <div className="sm:col-span-5 space-y-3">
                      <div className="p-3.5 rounded-2xl bg-[#faf9fc] border border-[#eeecf5]">
                        <span className="text-[11px] font-mono text-[#8a849b] block uppercase">Open Care Gaps</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xl font-bold text-[#1c1636]">3 Priority</span>
                          <span className="w-2 h-2 rounded-full bg-[#ff7a57] animate-ping" />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#faf9fc] border border-[#eeecf5]">
                        <span className="text-[11px] font-mono text-[#8a849b] block uppercase">Next Scheduled</span>
                        <span className="text-xs font-semibold text-[#7b3fc7] block mt-1">
                          Care Manager Call • Nov 04
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'gaps' && (
                  <motion.div
                    key="gaps"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    {[
                      { name: 'Diabetic Eye Exam (Retinal)', due: 'Overdue by 42 days', priority: 'High', color: '#dc2626' },
                      { name: 'Colorectal Cancer Screening (Cologuard)', due: 'Due in 30 days', priority: 'Medium', color: '#f59e0b' },
                      { name: 'Annual Wellness Visit (AWV)', due: 'Scheduled for Nov 14', priority: 'Active', color: '#7b3fc7' },
                    ].map((gap, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#faf9fc] border border-[#eeecf5] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <AlertCircle className="w-4 h-4 shrink-0" style={{ color: gap.color }} />
                          <div>
                            <span className="font-bold text-[#1c1636] block">{gap.name}</span>
                            <span className="text-[11px] text-[#727272]">{gap.due}</span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-[#eeecf5]" style={{ color: gap.color }}>
                          {gap.priority}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'timeline' && (
                  <motion.div
                    key="timeline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2"
                  >
                    {[
                      { event: 'Comprehensive Metabolic Panel (CMP) Ingested', date: 'Oct 28, 2026', type: 'Lab Feed' },
                      { event: 'Emergency Room Discharge Alert (Mercy Hospital)', date: 'Oct 22, 2026', type: 'ADT Alert' },
                      { event: 'Atorvastatin 20mg Refill Confirmed', date: 'Oct 15, 2026', type: 'Rx Claim' },
                    ].map((item, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#eeecf5] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <Clock className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0" />
                          <span className="font-medium text-[#1c1636]">{item.event}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#8a849b] shrink-0">{item.date}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {(activeTab === 'conditions' || activeTab === 'medications' || activeTab === 'claims') && (
                  <motion.div
                    key="others"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 rounded-2xl bg-[#faf9fc] border border-[#eeecf5] text-xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#1c1636]">Synthesized Longitudinal Entities</span>
                      <span className="text-[10px] font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2 py-0.5 rounded-full font-bold">SNOMED / ICD-10 Mapped</span>
                    </div>
                    <p className="text-[#5e5873] text-xs leading-relaxed">
                      All historical clinical records across disparate EHR instances, claims repositories, and pharmacy PBMs have been normalized into this single patient chart.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* ─────────────────────────────────────────────────────────
                LAYERED FLOATING CARD 1: Care Opportunity (Top Right)
                ───────────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16, x: 16 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -top-6 sm:-top-8 -right-3 sm:-right-6 w-64 sm:w-72 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#7b3fc7]/25 p-4 shadow-[0_16px_40px_rgba(123,63,199,0.18)] z-20"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-[#f2ecf9] text-[#7b3fc7]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1c1636] block leading-tight">
                    Care Opportunity
                  </span>
                  <span className="text-[10px] font-mono text-[#ff7a57] font-semibold uppercase">
                    Recapture Screening
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#5e5873] leading-tight mb-3">
                High-priority diabetic retinal exam gap identified via claims lag reconciliation.
              </p>

              <button
                onClick={() => handleTabClick('gaps')}
                className="w-full py-2 rounded-xl bg-[#f2ecf9] hover:bg-[#7b3fc7] text-[#7b3fc7] hover:text-white font-semibold text-xs transition-colors duration-200 shadow-2xs flex items-center justify-center gap-1.5 group cursor-pointer"
              >
                <span>Schedule Outreach</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* ─────────────────────────────────────────────────────────
                LAYERED FLOATING CARD 2: Recent Activity Ledger (Bottom Right)
                ───────────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16, x: -12 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 sm:-bottom-8 -left-3 sm:-left-6 w-64 sm:w-72 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#e5e0ee] p-4 shadow-[0_16px_40px_rgba(28,22,54,0.12)] z-20 hidden md:block"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-[#1c1636] block">
                  Recent Activity
                </span>
                <span className="text-[10px] font-mono text-[#7b3fc7] font-semibold">
                  Chronological
                </span>
              </div>

              <div className="space-y-2 text-[11px]">
                {[
                  { title: 'Lab Result received', date: 'Oct 28', color: 'bg-[#38bdf8]' },
                  { title: 'Care gap identified', date: 'Oct 22', color: 'bg-[#a855f7]' },
                  { title: 'Care manager outreach', date: 'Oct 18', color: 'bg-[#ff7a57]' },
                  { title: 'Appointment scheduled', date: 'Oct 14', color: 'bg-[#10b981]' },
                ].map((act, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[#5e5873]">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${act.color}`} />
                      <span className="font-medium">{act.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8a849b]">{act.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM CAPABILITY RIBBON: 6 Interactive Pill Badges
            Directly matching the master reference mockup!
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="pt-6 border-t border-[#eeecf5]"
        >
          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 lg:gap-3 xl:gap-3.5 flex-nowrap overflow-x-auto scrollbar-none py-2 px-1">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isActive = activeCapability === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => handleCapabilityClick(cap)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#7b3fc7] border-2 border-[#7b3fc7] shadow-[0_4px_18px_rgba(123,63,199,0.22)] scale-105'
                      : 'bg-white hover:bg-[#faf9fc] text-[#5e5873] hover:text-[#1c1636] border border-[#e1e1e5] hover:border-[#7b3fc7]/40 shadow-xs'
                  }`}
                >
                  <div className={`p-1.5 rounded-full shrink-0 ${isActive ? 'bg-[#f2ecf9] text-[#7b3fc7]' : 'bg-[#f8f6fc] text-[#8a849b]'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{cap.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
