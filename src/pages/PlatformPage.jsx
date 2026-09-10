import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Database, 
  Sparkles, 
  UserCheck, 
  Workflow, 
  TrendingUp, 
  ShieldCheck, 
  Server, 
  ArrowRight,
  BrainCircuit,
  Lock,
  Network,
  Activity,
  CheckCircle2,
  Users,
  FileText,
  Clock,
  HeartPulse,
  LineChart
} from 'lucide-react';

export default function PlatformPage() {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      id: 'connect',
      step: '01',
      title: 'CONNECT',
      subtitle: 'Bring healthcare data together.',
      desc: 'Guardian connects information from across the healthcare ecosystem to create a stronger foundation for care.',
      icon: Database,
      tag: 'Data Ingestion'
    },
    {
      id: 'understand',
      step: '02',
      title: 'UNDERSTAND',
      subtitle: 'Create the complete patient picture.',
      desc: 'Connected data becomes more useful when it can be understood in context. Guardian brings patient information together to help teams understand the healthcare journey rather than isolated encounters.',
      icon: Sparkles,
      tag: 'Clinical Context'
    },
    {
      id: 'identify',
      step: '03',
      title: 'IDENTIFY',
      subtitle: 'Turn information into clinical intelligence.',
      desc: 'Guardian organizes and enriches healthcare information to help identify risk, care gaps, quality opportunities, utilization patterns, patient needs, and performance opportunities.',
      icon: UserCheck,
      tag: 'Opportunity Detection'
    },
    {
      id: 'act',
      step: '04',
      title: 'ACT',
      subtitle: 'Put intelligence into the workflow.',
      desc: 'Guardian helps translate identified needs into workflows that support care planning, outreach, coordination, follow-up, and documentation.',
      icon: Workflow,
      tag: 'Operational Dispatch'
    },
    {
      id: 'outcome',
      step: '05',
      title: 'OUTCOME',
      subtitle: 'Measure what action changes.',
      desc: 'When information, intelligence, and intervention work together, organizations can track progress across care, quality, risk, utilization, and performance.',
      icon: TrendingUp,
      tag: 'Continuous Value'
    }
  ];

  const foundationTiers = [
    {
      num: '01',
      title: 'Data Integration',
      headline: 'Connect the healthcare ecosystem.',
      description: 'Bring information together from the systems and sources that contribute to the patient’s healthcare journey.',
      icon: Database,
      items: [
        'Healthcare interoperability',
        'Data aggregation',
        'Data exchange',
        'Connected care environments'
      ]
    },
    {
      num: '02',
      title: 'Data Enrichment',
      headline: 'Make healthcare data more useful.',
      description: 'Transform connected information into structured, meaningful data that can support analysis, identification, and action.',
      icon: Sparkles,
      items: [
        'Data quality and organization',
        'Clinical context',
        'Risk information',
        'Quality information',
        'Care opportunities'
      ]
    },
    {
      num: '03',
      title: 'Information Services',
      headline: 'Put the right information where it matters.',
      description: 'Turn connected and enriched information into usable views, reports, and workflows for healthcare teams.',
      icon: Server,
      items: [
        'Patient intelligence',
        'Dashboards and reporting',
        'Care coordination',
        'Operational insight',
        'Decision support'
      ]
    }
  ];

  const carePlanSequence = [
    { label: 'DATA', desc: 'Healthcare information is brought together.', icon: Database },
    { label: 'CLINICAL INTELLIGENCE', desc: 'Patterns, risks, and opportunities become visible.', icon: BrainCircuit },
    { label: 'CARE PLAN', desc: 'Patient needs inform an appropriate plan of action.', icon: FileText },
    { label: 'INTERVENTION', desc: 'Care teams engage, coordinate, and follow up.', icon: HeartPulse },
    { label: 'OUTCOME', desc: 'Progress and performance can be measured.', icon: LineChart }
  ];

  const platformInAction = [
    {
      title: 'Population Health',
      desc: 'Understand populations and identify opportunities for better care and performance.',
      icon: Users
    },
    {
      title: 'Care Management',
      desc: 'Give care teams the information they need to coordinate care and support patient needs.',
      icon: HeartPulse
    },
    {
      title: 'Risk Adjustment',
      desc: 'Identify and manage opportunities related to patient risk and documentation.',
      icon: FileText
    },
    {
      title: 'Quality & Performance',
      desc: 'Turn healthcare information into insight that supports quality and performance.',
      icon: ShieldCheck
    },
    {
      title: 'Patient Engagement',
      desc: 'Connect patients and care teams with the information and support needed to move care forward.',
      icon: Activity
    }
  ];

  const audienceMoments = [
    { role: 'For patients', impact: 'A connected view of the healthcare journey.' },
    { role: 'For care teams', impact: 'The information needed to understand risks, gaps, and care needs.' },
    { role: 'For operations', impact: 'Insight to help manage workflows and performance.' },
    { role: 'For leadership', impact: 'A connected foundation for healthcare and organizational insight.' }
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0d1527] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 right-1/4 w-[700px] h-[500px] bg-[#7b3fc7]/25 blur-[160px] rounded-full" />
          <div className="absolute bottom-10 left-1/4 w-[550px] h-[380px] bg-[#ff7a57]/15 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1527]/70 to-[#0d1527]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE GUARDIAN PLATFORM</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              One connected view <span className="text-gradient-hero">of healthcare.</span>
            </h1>

            <p className="text-base sm:text-xl text-purple-100/90 leading-relaxed max-w-3xl mb-10 font-normal">
              Guardian connects healthcare data across the care journey, transforms it into meaningful clinical intelligence, and puts the right information into the hands of the people who need to act.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_20px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>Talk to Guardian</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE HEALTHCARE DATA CHALLENGE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-3">
              The Reality
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] leading-tight mb-6">
              Healthcare data is everywhere. Making sense of it is the challenge.
            </h2>
            <p className="text-base sm:text-lg text-[#35304c] leading-relaxed mb-4">
              Healthcare organizations work across multiple systems, sources, and teams. Clinical records, claims, lab results, ADT events, assessments, and other healthcare information can exist in different places, making it difficult to build a timely and complete understanding of a patient’s needs.
            </p>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian brings those signals together to help organizations move from fragmented information to a connected view of the patient.
            </p>
          </div>

          {/* Three challenges grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs relative overflow-hidden group hover:border-[#7b3fc7]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#fff2ee] text-[#ff7a57] flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1636] mb-3">Fragmented data</h3>
              <p className="text-sm text-[#727272] leading-relaxed">
                Information lives across systems and organizations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs relative overflow-hidden group hover:border-[#7b3fc7]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1636] mb-3">Incomplete context</h3>
              <p className="text-sm text-[#727272] leading-relaxed">
                Individual data points do not always reveal the complete patient story.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs relative overflow-hidden group hover:border-[#7b3fc7]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#f8f6fc] text-[#35304c] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1636] mb-3">Delayed action</h3>
              <p className="text-sm text-[#727272] leading-relaxed">
                Insights have limited value when they do not reach the right team at the right time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE GUARDIAN PLATFORM JOURNEY
          ───────────────────────────────────────────────────────────── */}
      <section id="journey" className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-3">
              <Network className="w-3.5 h-3.5" />
              <span>The Guardian Platform Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              From healthcare data to meaningful action.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Explore how Guardian moves information seamlessly through five interconnected stages.
            </p>
          </div>

          <div className="space-y-4">
            {journeySteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#f8f6fc] border-[#7b3fc7] shadow-md'
                      : 'bg-white border-[#e1e1e5] hover:border-[#7b3fc7]/40'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-4 flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#7b3fc7] text-white'
                            : 'bg-[#f2ecf9] text-[#7b3fc7]'
                        }`}
                      >
                        {step.step}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#adabb7] block">
                          {step.tag}
                        </span>
                        <h3 className="text-xl font-bold text-[#1c1636] flex items-center gap-2">
                          <StepIcon className="w-4 h-4 text-[#7b3fc7]" />
                          <span>{step.title}</span>
                        </h3>
                        <p className="text-xs font-medium text-[#7b3fc7]">{step.subtitle}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <p className="text-sm sm:text-base text-[#35304c] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: PATIENT MASTER CHART
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0d1527] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[450px] bg-[#7b3fc7]/20 blur-[160px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-4 border border-white/15">
                <UserCheck className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>PATIENT INTELLIGENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Create the complete patient picture.
              </h2>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed mb-6">
                Guardian’s Patient Master Chart brings patient information together across the healthcare continuum, providing a dynamic view that can be updated as new information becomes available.
              </p>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-white mb-6">
                One patient. One connected view. More context for action.
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Interactive Patient Master Chart HUD visualization */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7b3fc7] to-[#ff7a57] flex items-center justify-center font-bold text-white">
                      PMC
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Patient Master Chart</h4>
                      <span className="text-[11px] text-purple-300">Longitudinal Identity Resolved</span>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Real-Time Active
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/80 font-medium">Multi-facility EHR Records</span>
                    <span className="text-xs text-purple-300 font-mono">Harmonized</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/80 font-medium">Historical Adjudicated Claims</span>
                    <span className="text-xs text-purple-300 font-mono">Synthesized</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/80 font-medium">Diagnostic Lab Feeds & ADT Alerts</span>
                    <span className="text-xs text-purple-300 font-mono">Continuous Stream</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#7b3fc7]/20 border border-[#7b3fc7]/40 flex items-center justify-between">
                    <span className="text-xs text-white font-semibold">Care Team Workflow Dispatching</span>
                    <span className="text-xs text-[#ff7a57] font-mono font-bold">Action Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TECHNOLOGY FOUNDATION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-3">
              Core Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              The technology behind connected healthcare.
            </h2>
            <p className="text-base sm:text-lg text-[#727272] leading-relaxed">
              Guardian’s platform brings together three core capabilities that move healthcare information from source systems toward usable intelligence and action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {foundationTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div 
                  key={tier.num}
                  className="p-8 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs flex flex-col justify-between hover:border-[#7b3fc7]/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#7b3fc7]">{tier.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center">
                        <TierIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#1c1636] mb-1">{tier.title}</h3>
                    <p className="text-xs font-semibold text-[#7b3fc7] mb-3">{tier.headline}</p>
                    <p className="text-sm text-[#727272] leading-relaxed mb-6">{tier.description}</p>

                    <div className="pt-4 border-t border-[#e1e1e5] space-y-2">
                      {tier.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-[#35304c]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: FROM DATA TO CARE PLAN
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Action Progression
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              From identifying the problem to taking action.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {carePlanSequence.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#adabb7]">0{idx + 1}</span>
                      <ItemIcon className="w-5 h-5 text-[#7b3fc7]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-2">{item.label}</h3>
                    <p className="text-xs text-[#727272] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: PLATFORM IN ACTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#eae4f4]/50 border-b border-[#d6cde2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              Built to support the work that matters.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformInAction.map((item) => {
              const ActionIcon = item.icon;
              return (
                <div key={item.title} className="p-7 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mb-4">
                    <ActionIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1636] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: TECHNOLOGY + PEOPLE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
                The Critical Synergy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] leading-tight mb-4">
                The platform doesn’t work alone.
              </h2>
              <p className="text-sm sm:text-base text-[#727272] leading-relaxed">
                Technology is most valuable when healthcare teams can act on the information it provides. Guardian combines connected technology with healthcare expertise and operational support to move insight into action.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <h4 className="text-sm font-bold text-[#1c1636] mb-1">Technology</h4>
                <p className="text-xs text-[#727272]">Connects and organizes healthcare information.</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <h4 className="text-sm font-bold text-[#1c1636] mb-1">Clinical intelligence</h4>
                <p className="text-xs text-[#727272]">Helps teams understand what matters.</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <h4 className="text-sm font-bold text-[#1c1636] mb-1">Workflow</h4>
                <p className="text-xs text-[#727272]">Moves insight into the work that needs to happen.</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <h4 className="text-sm font-bold text-[#1c1636] mb-1">People</h4>
                <p className="text-xs text-[#727272]">Supports the teams responsible for acting on it.</p>
              </div>
              <div className="sm:col-span-2 p-5 rounded-2xl bg-[#f2ecf9] border border-[#7b3fc7]/20">
                <h4 className="text-sm font-bold text-[#7b3fc7] mb-1">Outcome</h4>
                <p className="text-xs text-[#35304c]">Creates a path to measure the impact of action.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: INTEROPERABILITY & TRUST
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Interoperability
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Designed for the healthcare ecosystem.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian’s platform is built around healthcare data exchange and interoperability, supporting the flow of information across systems and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Interoperability</h3>
              <p className="text-xs text-[#727272]">Connect healthcare information across systems and organizations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Data exchange</h3>
              <p className="text-xs text-[#727272]">Move information where it needs to go across the connected care environment.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Healthcare-ready infrastructure</h3>
              <p className="text-xs text-[#727272]">Support the information needs of healthcare organizations and the teams that use it.</p>
            </div>
          </div>

          {/* Credentials Bar */}
          <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold text-[#1c1636] uppercase tracking-wider">
              Verified Healthcare Credentials:
            </span>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#35304c] font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> CMS MIPS Certified Registry</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> eHealth Exchange Implementer</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> CareQuality Exchange Implementer</span>
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#ff7a57]" /> HITRUST e1 Certification</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: ONE PLATFORM. MULTIPLE MOMENTS OF ACTION.
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636]">
              One Platform. Multiple Moments of Action.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceMoments.map((item) => (
              <div key={item.role} className="p-6 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <h3 className="text-sm font-bold text-[#7b3fc7] mb-2">{item.role}</h3>
                <p className="text-xs sm:text-sm text-[#35304c]">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8f6fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Turn connected data into action.
              </h2>
              <p className="text-sm sm:text-base text-purple-100/90 mb-8">
                Connect the data. Understand the patient. Identify the opportunity. Take action.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1c1636] font-medium text-sm hover:bg-[#f2ecf9] transition-all"
                >
                  <span>Talk to Guardian</span>
                  <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
