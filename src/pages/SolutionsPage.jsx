import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Activity, 
  FileText, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  HeartPulse,
  LineChart,
  CheckCircle2,
  Lock
} from 'lucide-react';

export default function SolutionsPage() {
  const progressionSteps = [
    { label: 'SEE', desc: 'Bring the right healthcare information into view.' },
    { label: 'UNDERSTAND', desc: 'Create context around patients, populations, and performance.' },
    { label: 'PRIORITIZE', desc: 'Identify the opportunities that need attention.' },
    { label: 'ACT', desc: 'Support the teams and workflows responsible for action.' },
    { label: 'MEASURE', desc: 'Track the results that matter.' }
  ];

  const solutionsList = [
    {
      id: 'pop-health',
      num: '01',
      title: 'Population Health',
      headline: 'See the bigger picture across your population.',
      overview: 'Turn population-level information into a clearer view of risk, care needs, gaps, and opportunities.',
      description: 'Population health requires more than a collection of patient records. Guardian brings healthcare information together to help organizations understand populations, identify opportunities, and focus resources where they can make a difference.',
      icon: Users,
      supports: [
        'Population-level visibility',
        'Risk and care opportunity identification',
        'Care gap awareness',
        'Utilization and performance insight'
      ]
    },
    {
      id: 'care-mgmt',
      num: '02',
      title: 'Care Management',
      headline: 'Give care teams the information to act.',
      overview: 'Give care teams the information and support they need to coordinate care and respond to patient needs.',
      description: 'Care management depends on timely information and coordinated action. Guardian helps bring relevant patient information into view so care teams can better understand needs, coordinate activity, and support follow-up.',
      icon: HeartPulse,
      supports: [
        'Patient-level context',
        'Care opportunity identification',
        'Care coordination',
        'Follow-up and intervention workflows'
      ]
    },
    {
      id: 'risk-adj',
      num: '03',
      title: 'Risk Adjustment',
      headline: 'Make patient risk more visible.',
      overview: 'Support the identification, documentation, and management of patient risk information.',
      description: 'Accurate understanding of patient risk depends on complete and accessible healthcare information. Guardian supports risk-related workflows by bringing relevant clinical information into the hands of teams responsible for review, documentation, and action.',
      icon: FileText,
      supports: [
        'Risk information visibility',
        'Documentation opportunities',
        'Patient-level review',
        'Risk-related workflow support'
      ]
    },
    {
      id: 'quality-perf',
      num: '04',
      title: 'Quality & Performance',
      headline: 'Turn quality information into improvement opportunities.',
      overview: 'Bring quality and performance information together to help organizations identify gaps and focus improvement efforts.',
      description: 'Quality performance is shaped by what organizations can see, prioritize, and act on. Guardian helps connect healthcare information with quality and performance workflows so teams can identify gaps and focus their efforts.',
      icon: ShieldCheck,
      supports: [
        'Quality gap identification',
        'Performance visibility',
        'Patient and population insight',
        'Action-oriented reporting'
      ]
    },
    {
      id: 'patient-eng',
      num: '05',
      title: 'Patient Engagement',
      headline: 'Make every patient interaction more informed.',
      overview: 'Support meaningful interactions between patients, care teams, and healthcare organizations.',
      description: 'Patient engagement is more meaningful when teams have the context they need before, during, and after an interaction. Guardian connects patient information with engagement and care workflows to support timely, informed action.',
      icon: Activity,
      supports: [
        'Patient information access',
        'Patient outreach',
        'Care coordination',
        'Follow-up activity'
      ]
    },
    {
      id: 'analytics-intel',
      num: '06',
      title: 'Analytics & Intelligence',
      headline: 'Find what matters in the data.',
      overview: 'Turn connected healthcare information into insights that help teams understand what is happening and where action may be needed.',
      description: 'Healthcare data becomes valuable when organizations can turn it into insight. Guardian brings connected information into views and workflows that help teams understand patients, populations, utilization, quality, risk, and performance.',
      icon: LineChart,
      supports: [
        'Patient intelligence',
        'Population insight',
        'Risk and quality information',
        'Utilization insight',
        'Performance reporting'
      ]
    }
  ];

  const howSolutionsWork = [
    { step: 'Connect', desc: 'Bring healthcare information together.' },
    { step: 'Understand', desc: 'Create context around patients and populations.' },
    { step: 'Identify', desc: 'Find risks, gaps, needs, and opportunities.' },
    { step: 'Act', desc: 'Support care and operational workflows.' },
    { step: 'Outcome', desc: 'Measure progress and performance.' }
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0d1527] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/5 w-[650px] h-[450px] bg-[#7b3fc7]/25 blur-[160px] rounded-full" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#ff7a57]/15 blur-[140px] rounded-full" />
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
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>GUARDIAN SOLUTIONS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Built around the work healthcare organizations <span className="text-gradient-hero">need to get done.</span>
            </h1>

            <p className="text-base sm:text-xl text-purple-100/90 leading-relaxed max-w-3xl mb-10 font-normal">
              Guardian brings connected healthcare data, clinical intelligence, technology, and healthcare expertise together to support the decisions and actions that move care and performance forward.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#solutions-overview"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_20px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Our Solutions</span>
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
          SECTION 2: THE CHALLENGE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-3">
              The Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-6">
              Healthcare organizations have the data. The challenge is turning it into action.
            </h2>
            <p className="text-base sm:text-lg text-[#35304c] leading-relaxed mb-4">
              Healthcare teams are expected to manage risk, close care gaps, improve quality, coordinate care, engage patients, and understand performance—often across disconnected information and workflows.
            </p>
            <p className="text-base sm:text-lg text-[#727272] leading-relaxed">
              Guardian solutions are designed to connect the information behind those challenges with the people and processes responsible for acting on them.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7b3fc7] mb-6">
              From Information to Action
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {progressionSteps.map((step, idx) => (
                <div key={step.label} className="border-t sm:border-t-0 sm:border-l border-[#e1e1e5] pt-4 sm:pt-0 sm:pl-4 first:border-0 first:pl-0">
                  <span className="text-xs font-mono text-[#adabb7] block mb-1">0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">{step.label}</h4>
                  <p className="text-xs text-[#727272]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: SOLUTIONS OVERVIEW & DEEP DIVES
          ───────────────────────────────────────────────────────────── */}
      <section id="solutions-overview" className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Solutions designed for the moments that matter.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian’s solution portfolio brings together technology and healthcare expertise across key areas of value-based care.
            </p>
          </div>

          <div className="space-y-10">
            {solutionsList.map((sol) => {
              const SolIcon = sol.icon;
              return (
                <div 
                  key={sol.id} 
                  id={sol.id}
                  className="p-8 sm:p-10 rounded-3xl bg-[#f8f6fc] border border-[#e1e1e5] hover:border-[#7b3fc7]/40 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#7b3fc7]">{sol.num}</span>
                        <div className="w-10 h-10 rounded-xl bg-white text-[#7b3fc7] flex items-center justify-center shadow-xs">
                          <SolIcon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1c1636] mb-2">{sol.title}</h3>
                      <p className="text-sm font-semibold text-[#7b3fc7] mb-4">{sol.headline}</p>
                      <p className="text-xs text-[#727272] leading-relaxed">{sol.overview}</p>
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-sm sm:text-base text-[#35304c] leading-relaxed">
                        {sol.description}
                      </p>

                      <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1c1636] mb-3">
                          What it supports:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {sol.supports.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-[#35304c]">
                              <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: HOW SOLUTIONS WORK TOGETHER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#eae4f4]/40 border-b border-[#d6cde2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Connected Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              One connected foundation. Multiple opportunities to act.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian solutions are connected by the same underlying healthcare data and intelligence foundation. Organizations can use the capabilities that match their needs while maintaining a connected view across the care journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howSolutionsWork.map((item, idx) => (
              <div key={item.step} className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
                <span className="text-xs font-mono text-[#adabb7] block mb-1">0{idx + 1}</span>
                <h4 className="text-sm font-bold text-[#7b3fc7] mb-2">{item.step}</h4>
                <p className="text-xs text-[#727272] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TECHNOLOGY + SERVICES
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
              Solutions backed by more than technology.
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Guardian combines platform capabilities with healthcare expertise and operational services. Technology helps connect and organize information; experienced teams help turn that information into practical action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Technology</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Connected data, intelligence, workflows, and reporting.</p>
            </div>
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Healthcare expertise</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Knowledge of the work behind care and value-based performance.</p>
            </div>
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Operational support</h3>
              <p className="text-xs sm:text-sm text-[#727272]">People who can support the activities required to move from insight to action.</p>
            </div>
          </div>

          <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-[#7b3fc7] hover:underline">
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: WHO WE SERVE & TRUST
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
                Who We Serve
              </h2>
              <p className="text-xs sm:text-sm text-[#727272]">
                Solutions for organizations responsible for better care and better performance.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
                <h3 className="text-base font-bold text-[#7b3fc7] mb-2">Providers</h3>
                <p className="text-xs sm:text-sm text-[#727272] mb-4">
                  Give care teams the information and support they need to understand patients, coordinate care, and act on opportunities.
                </p>
                <Link to="/who-we-serve" className="text-xs font-semibold text-[#7b3fc7] hover:underline">
                  Explore Provider Solutions →
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
                <h3 className="text-base font-bold text-[#ff7a57] mb-2">Payers</h3>
                <p className="text-xs sm:text-sm text-[#727272] mb-4">
                  Bring network and patient information together to support quality, performance, and informed decision-making.
                </p>
                <Link to="/who-we-serve" className="text-xs font-semibold text-[#ff7a57] hover:underline">
                  Explore Payer Solutions →
                </Link>
              </div>
            </div>
          </div>

          {/* Proof & Trust Credentials */}
          <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold text-[#1c1636] uppercase tracking-wider">
              Built from Healthcare Experience:
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
          SECTION 7: FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8f6fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Find the opportunity. Take action.
              </h2>
              <p className="text-sm sm:text-base text-purple-100/90 mb-8">
                Connect the data. Understand what matters. Give your teams the tools and support to act.
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
                  to="/platform"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Explore the Platform</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
