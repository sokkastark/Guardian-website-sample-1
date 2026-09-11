import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Sparkles, 
  Server, 
  UserCheck, 
  BrainCircuit, 
  Workflow, 
  Layers, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

export default function PlatformSection() {
  const [activeLayer, setActiveLayer] = useState('master-chart');

  const capabilities = [
    {
      id: 'integration',
      tier: 'Data Ingestion Tier',
      title: 'Data Integration',
      subtitle: 'Harmonize across all clinical & financial sources',
      icon: Database,
      desc: 'Automated ingestion across EHRs, 90-day lag adjudicated claims, diagnostic lab feeds, and hospital ADT alerts into one secure pipeline.',
      color: '#7b3fc7',
      pillars: [
        'Automated ingestion of multi-facility feeds',
        'Secure HL7, FHIR, and API connectivity',
        'Real-time event capture and batch processing',
      ],
      flowLabel: 'EHRs, Claims, Labs, ADT Feeds',
      flowOutput: 'Normalized Raw Clinical Data',
    },
    {
      id: 'enrichment',
      tier: 'Data Processing Tier',
      title: 'Data Enrichment',
      subtitle: 'Transform raw data into clinical clarity',
      icon: Sparkles,
      desc: 'Standardize unstructured clinical text, map diverse coding ontologies (SNOMED, RxNorm, ICD-10, LOINC), and resolve patient identities across networks.',
      color: '#ff7a57',
      pillars: [
        'Deterministic & probabilistic patient identity matching',
        'Standardized clinical terminology mapping',
        'Noise reduction and duplicate record reconciliation',
      ],
      flowLabel: 'Entity Resolution Engine',
      flowOutput: 'Standardized Clinical Records',
    },
    {
      id: 'information-services',
      tier: 'Governance & Security Tier',
      title: 'Information Services',
      subtitle: 'Secure, accessible healthcare data exchange',
      icon: Server,
      desc: 'Enterprise-grade data management architecture ensuring real-time accessibility, rigorous HIPAA/HITRUST governance, and nationwide interoperability.',
      color: '#60319d',
      pillars: [
        'Granular role-based clinical access controls',
        'Comprehensive immutable audit trails and data governance',
        'Interoperable exchange with partner networks and HIEs',
      ],
      flowLabel: 'HITRUST & HIPAA Framework',
      flowOutput: 'Secure Clinical Access Fabric',
    },
    {
      id: 'master-chart',
      tier: 'Core Intelligence Tier',
      title: 'Patient Master Chart',
      subtitle: 'The longitudinal clinical single source of truth',
      icon: UserCheck,
      desc: 'One unified view synthesizing encounters, active medications, diagnoses, and care trajectories across all sites of care.',
      color: '#7b3fc7',
      pillars: [
        'Cross-facility chronological encounter timeline',
        'Synthesized problem list and active medication reconciliation',
        'Attribution tracking and care team transparency',
      ],
      flowLabel: 'Synthesized Longitudinal Profile',
      flowOutput: 'Complete 360° Patient Picture',
    },
    {
      id: 'clinical-intelligence',
      tier: 'Opportunity Engine Tier',
      title: 'Clinical Intelligence',
      subtitle: 'Actionable clinical opportunity detection',
      icon: BrainCircuit,
      desc: 'Algorithmic surveillance engines that continuously scan records to detect open care gaps, risk adjustment recapture priorities, and clinical interventions.',
      color: '#ff7a57',
      pillars: [
        'Automated HEDIS and CMS quality measure surveillance',
        'RAF coding gap analysis and recapture flags',
        'Stratified clinical prioritization queues for care teams',
      ],
      flowLabel: 'Algorithmic Clinical Rules',
      flowOutput: 'Prioritized Care Interventions',
    },
    {
      id: 'workflow',
      tier: 'Execution Tier',
      title: 'Workflow / Action',
      subtitle: 'Direct operational care execution',
      icon: Workflow,
      desc: 'Turn clinical intelligence into executed care with specialized queues and dispatching for Care Navigators, Risk Coders, and Physicians.',
      color: '#7b3fc7',
      pillars: [
        'Automated task dispatching to operational service roles',
        'Closed-loop referral and appointment tracking',
        'Executive performance dashboards and outcome metrics',
      ],
      flowLabel: 'Care Team Action Queues',
      flowOutput: 'Closed Loops & Verified Outcomes',
    },
  ];

  const current = capabilities.find((c) => c.id === activeLayer) || capabilities[3];
  const CurrentIcon = current.icon;

  const architectureFlow = [
    { label: 'Healthcare Data', desc: 'EHR, Claims, Labs, ADT' },
    { label: 'Guardian Engine', desc: 'Harmonize & Enrich' },
    { label: 'Patient Intelligence', desc: 'Master Chart & Analytics' },
    { label: 'Workflow Action', desc: 'Navigators, Coders, Care Teams' },
  ];

  return (
    <section id="platform" className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f8f6fc] via-[#f3eef9]/50 to-white overflow-hidden border-t border-[#e1e1e5]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[550px] bg-[#7b3fc7]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[650px] h-[450px] bg-[#ff7a57]/10 blur-[150px] rounded-full" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7b3fc7]/30 text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Guardian Platform Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight mb-4">
            One connected view{' '}
            <span className="text-gradient-hero">of healthcare.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#35304c] leading-relaxed font-normal">
            Guardian brings together healthcare data, information, intelligence, and workflow so organizations 
            can move from disconnected information to a more complete understanding of the patient and 
            the work that needs to be done.
          </p>
        </motion.div>

        {/* Top Product Architecture Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mb-8 rounded-2xl bg-white border border-[#e1e1e5] p-5 sm:p-6 shadow-[0_12px_36px_rgba(28,22,54,0.05)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {architectureFlow.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-9 h-9 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#1c1636] block">{step.label}</span>
                    <span className="text-[11px] text-[#5e5873]">{step.desc}</span>
                  </div>
                </div>

                {idx < architectureFlow.length - 1 && (
                  <div className="hidden md:flex items-center text-[#7b3fc7] px-2">
                    <ArrowRight className="w-4 h-4 text-[#7b3fc7]/60" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Central Architecture Console & Interactive Layer Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 6 Interactive Architecture Layers (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-6 space-y-2.5"
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#adabb7] font-semibold">
                Platform Capability Layers
              </span>
              <span className="text-xs text-[#7b3fc7] font-medium">Select to inspect architecture</span>
            </div>

            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isActive = activeLayer === cap.id;

              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveLayer(cap.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border relative group focus:outline-none flex items-center justify-between ${
                    isActive
                      ? 'bg-white border-[#7b3fc7] shadow-[0_8px_24px_rgba(123,63,199,0.18)] translate-x-1 sm:translate-x-2'
                      : 'bg-white/90 hover:bg-white border-[#d6cde2] hover:border-[#7b3fc7]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 transition-all ${
                        isActive
                          ? 'bg-[#7b3fc7] text-white shadow-md shadow-[#7b3fc7]/25'
                          : 'bg-[#f2ecf9] text-[#7b3fc7] group-hover:bg-[#7b3fc7] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold tracking-tight transition-colors ${
                          isActive ? 'text-[#1c1636]' : 'text-[#35304c] group-hover:text-[#1c1636]'
                        }`}>
                          {cap.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#adabb7] uppercase hidden sm:inline">
                          {cap.tier}
                        </span>
                      </div>
                      <p className={`text-xs truncate transition-colors ${
                        isActive ? 'text-[#35304c]' : 'text-[#727272]'
                      }`}>
                        {cap.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? 'text-[#7b3fc7] translate-x-1' : 'text-[#adabb7] group-hover:text-[#7b3fc7]'
                  }`} />

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="platformActiveTab"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-[#7b3fc7] rounded-r-full"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Architectural Layer Deep-Dive Console (6 cols) */}
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
                  {/* Layer Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#eeecf5]">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#f2ecf9] text-[#7b3fc7]">
                        <CurrentIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#7b3fc7] uppercase tracking-wider block font-bold">
                          {current.tier}
                        </span>
                        <h3 className="text-xl font-bold text-[#1c1636] tracking-tight">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#f8f6fc] border border-[#e1e1e5] text-[#35304c]">
                      Layer Active
                    </span>
                  </div>

                  {/* Descriptive text */}
                  <p className="text-sm text-[#35304c] leading-relaxed">
                    {current.desc}
                  </p>

                  {/* Input / Output Data Flow Badge */}
                  <div className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#727272] block mb-0.5">Input Stream</span>
                      <span className="font-semibold text-[#1c1636]">{current.flowLabel}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#7b3fc7] hidden sm:block shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#727272] block mb-0.5">Synthesized Output</span>
                      <span className="font-semibold text-[#7b3fc7]">{current.flowOutput}</span>
                    </div>
                  </div>

                  {/* 3 Pillars with Checkmarks */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#adabb7] block mb-2">
                      Core Functional Architecture
                    </span>
                    {current.pillars.map((pillar, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#35304c]">
                        <div className="p-0.5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug font-medium">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Integrated Architecture Ribbon */}
              <div className="pt-6 mt-6 border-t border-[#eeecf5] flex items-center justify-between text-xs text-[#727272]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#7b3fc7]" />
                  <span>Integrated into Guardian Core Engine</span>
                </div>
                <a
                  href="#solutions"
                  className="font-bold text-[#7b3fc7] hover:text-[#9565d2] flex items-center gap-1"
                >
                  <span>See Solutions</span>
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
