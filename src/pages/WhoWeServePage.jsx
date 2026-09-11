import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Stethoscope, 
  Building2, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export default function WhoWeServePage() {

  const commonFoundation = [
    { label: 'CONNECTED DATA', desc: 'Bring information together across the healthcare ecosystem.' },
    { label: 'CLINICAL CONTEXT', desc: 'Understand the patient and population picture.' },
    { label: 'ACTIONABLE INTELLIGENCE', desc: 'Identify what needs attention.' },
    { label: 'WORKFLOW', desc: 'Move insight into the work.' },
    { label: 'OUTCOME', desc: 'Measure progress and performance.' }
  ];

  const providerNeeds = [
    'A more complete view of the patient',
    'Visibility into risk and care opportunities',
    'Information that supports care coordination',
    'Tools and workflows that help teams prioritize action',
    'Insight into quality and performance'
  ];

  const providerSolutions = [
    { title: 'Population Health', desc: 'Understand populations and focus attention on the patients and opportunities that matter.' },
    { title: 'Care Management', desc: 'Support care teams with patient context, coordination, and follow-up.' },
    { title: 'Risk Adjustment', desc: 'Support risk-related review, documentation, and coding activities.' },
    { title: 'Quality & Performance', desc: 'Identify quality opportunities and bring performance information into view.' },
    { title: 'Patient Engagement', desc: 'Support outreach, navigation, and meaningful patient interactions.' }
  ];

  const payerNeeds = [
    'Connected information across populations and networks',
    'Visibility into quality and performance opportunities',
    'Insight into utilization and patient needs',
    'Information that supports informed network decisions',
    'Actionable intelligence for value-based care programs'
  ];

  const payerSolutions = [
    { title: 'Population Health', desc: 'Understand population needs, risk, utilization, and opportunities.' },
    { title: 'Risk Adjustment', desc: 'Support visibility into patient risk and documentation opportunities.' },
    { title: 'Quality & Performance', desc: 'Connect quality information with performance-focused workflows.' },
    { title: 'Analytics & Intelligence', desc: 'Turn healthcare information into insight for population and network decisions.' },
    { title: 'Patient Engagement', desc: 'Support patient outreach and engagement activities across the care journey.' }
  ];

  const dataToActionSequence = [
    { step: 'DATA', desc: 'Healthcare information is connected.' },
    { step: 'INTELLIGENCE', desc: 'Patient, population, risk, quality, and performance signals become clearer.' },
    { step: 'PRIORITY', desc: 'Teams can focus on the opportunities that matter.' },
    { step: 'ACTION', desc: 'Workflows support care, engagement, coordination, and performance.' },
    { step: 'OUTCOME', desc: 'Organizations can evaluate progress and performance.' }
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-to-b from-[#120b24] via-[#1a1233] to-[#241744] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-gradient-to-tr from-[#7b3fc7]/25 via-[#9565d2]/15 to-transparent blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-1/4 w-[550px] h-[380px] bg-[#ff7a57]/15 blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
              <Users className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>WHO WE SERVE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Different roles. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">One connected view of healthcare.</span>
            </h1>

            <p className="text-base sm:text-xl text-purple-100/90 leading-relaxed max-w-3xl mb-10 font-normal">
              Guardian helps providers and payers turn connected healthcare data into intelligence, coordinated action, and better-informed decisions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#providers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_20px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Provider Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#payers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>Explore Payer Solutions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE SHARED CHALLENGE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-3">
              Perspective & Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-6">
              Healthcare organizations see different parts of the picture.
            </h2>
            <p className="text-base sm:text-lg text-[#35304c] leading-relaxed mb-4">
              Providers are focused on patients, care teams, quality, risk, and day-to-day care delivery. Payers are focused on populations, networks, quality, utilization, and performance.
            </p>
            <p className="text-base sm:text-lg text-[#727272] leading-relaxed">
              Both depend on timely, connected healthcare information—and both need to turn that information into action.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7b3fc7] mb-6">
              The Common Foundation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {commonFoundation.map((item, idx) => (
                <div key={item.label} className="border-t sm:border-t-0 sm:border-l border-[#e1e1e5] pt-4 sm:pt-0 sm:pl-4 first:border-0 first:pl-0">
                  <span className="text-xs font-mono text-[#adabb7] block mb-1">0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">{item.label}</h4>
                  <p className="text-xs text-[#727272]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: PROVIDERS
          ───────────────────────────────────────────────────────────── */}
      <section id="providers" className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-4">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>FOR PROVIDERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight mb-6">
            Give care teams the information to act.
          </h2>

          <p className="text-base sm:text-lg text-[#727272] leading-relaxed max-w-3xl mb-12">
            Providers need a clear view of the patients and populations they care for. Guardian connects healthcare information and brings relevant intelligence into workflows that support care coordination, risk, quality, patient engagement, and performance.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-lg font-bold text-[#1c1636] mb-4">What providers need:</h3>
              <div className="space-y-3">
                {providerNeeds.map((need) => (
                  <div key={need} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#35304c]">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-bold text-[#1c1636]">How Guardian supports providers</h3>
              <p className="text-sm sm:text-base text-[#727272] leading-relaxed">
                Guardian combines connected healthcare data, platform capabilities, and healthcare services to help provider organizations move from identifying an opportunity to taking action.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Connected information</h4>
                  <p className="text-xs text-[#727272]">Bring relevant patient and population information together.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Clinical intelligence</h4>
                  <p className="text-xs text-[#727272]">Help teams understand risks, gaps, needs, and opportunities.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Care workflows</h4>
                  <p className="text-xs text-[#727272]">Put information into the work performed by care teams.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Operational support</h4>
                  <p className="text-xs text-[#727272]">Complement technology with healthcare expertise and services.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#7b3fc7] hover:underline"
                >
                  <span>Explore Provider Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Provider Solution Areas */}
          <div className="pt-10 border-t border-[#e1e1e5]">
            <h3 className="text-xl font-bold text-[#1c1636] mb-6">Support across the provider workflow</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {providerSolutions.map((sol) => (
                <div key={sol.title} className="p-6 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                  <h4 className="text-base font-bold text-[#1c1636] mb-2">{sol.title}</h4>
                  <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: PAYERS
          ───────────────────────────────────────────────────────────── */}
      <section id="payers" className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff2ee] text-[#ff7a57] text-xs font-semibold tracking-wide uppercase mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>FOR PAYERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight mb-6">
            Turn network data into better performance.
          </h2>

          <p className="text-base sm:text-lg text-[#727272] leading-relaxed max-w-3xl mb-12">
            Payers need visibility across members, providers, networks, quality, utilization, and performance. Guardian connects healthcare information and intelligence to help payer organizations understand what is happening and focus attention where action is needed.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs">
              <h3 className="text-lg font-bold text-[#1c1636] mb-4">What payers need:</h3>
              <div className="space-y-3">
                {payerNeeds.map((need) => (
                  <div key={need} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7a57] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#35304c]">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-bold text-[#1c1636]">How Guardian supports payers</h3>
              <p className="text-sm sm:text-base text-[#727272] leading-relaxed">
                Guardian helps payer organizations connect healthcare information with the intelligence and workflows needed to support quality, performance, and informed decision-making.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Network visibility</h4>
                  <p className="text-xs text-[#727272]">Bring information together to create a clearer view across the healthcare network.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Population intelligence</h4>
                  <p className="text-xs text-[#727272]">Understand patients, populations, risk, quality, and utilization.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Performance insight</h4>
                  <p className="text-xs text-[#727272]">Identify opportunities that can inform improvement efforts.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Action support</h4>
                  <p className="text-xs text-[#727272]">Connect intelligence to the teams and workflows responsible for follow-through.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff7a57] hover:underline"
                >
                  <span>Explore Payer Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Payer Solution Areas */}
          <div className="pt-10 border-t border-[#e1e1e5]">
            <h3 className="text-xl font-bold text-[#1c1636] mb-6">Information for the decisions behind network performance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {payerSolutions.map((sol) => (
                <div key={sol.title} className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
                  <h4 className="text-base font-bold text-[#1c1636] mb-2">{sol.title}</h4>
                  <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: PROVIDERS + PAYERS (CONVERGENCE)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Convergence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Different priorities. Connected healthcare information.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Providers and payers operate from different perspectives, but better healthcare performance depends on many of the same foundations: connected information, clinical context, actionable intelligence, coordinated workflows, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-lg font-bold text-[#7b3fc7] mb-2">Providers</h3>
              <p className="text-sm text-[#35304c]">Focus on the patient, care team, care delivery, quality, and performance.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-lg font-bold text-[#ff7a57] mb-2">Payers</h3>
              <p className="text-sm text-[#35304c]">Focus on members, networks, quality, utilization, and performance.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#f2ecf9] border border-[#7b3fc7]/30">
              <h3 className="text-lg font-bold text-[#1c1636] mb-2">Guardian</h3>
              <p className="text-sm text-[#35304c]">Connect the information and capabilities that help both sides move from insight to action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: FROM DATA TO ACTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#eae4f4]/40 border-b border-[#d6cde2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-2">
              The same connected foundation supports different decisions.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dataToActionSequence.map((item, idx) => (
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
          SECTION 7: TECHNOLOGY + SERVICES
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
              A connected platform, backed by healthcare expertise.
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Guardian combines its healthcare platform with services that support the people and workflows using it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Platform</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Connects healthcare data and creates usable intelligence.</p>
            </div>
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Solutions</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Apply that intelligence to the work providers and payers need to accomplish.</p>
            </div>
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Services</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Add healthcare expertise and operational support where it is needed.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/platform" className="inline-flex items-center gap-2 text-xs font-semibold text-[#7b3fc7] hover:underline">
              <span>Explore the Platform</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-[#7b3fc7] hover:underline">
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8f6fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Turn healthcare data into better action.
              </h2>
              <p className="text-sm sm:text-base text-purple-100/90 mb-8">
                Whether you deliver care or manage healthcare networks, Guardian connects information, intelligence, and expertise around the work that matters.
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
