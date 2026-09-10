import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  FileText, 
  HeartHandshake, 
  Compass, 
  ArrowRight, 
  Workflow, 
  Award,
  HeartPulse
} from 'lucide-react';

export default function ServicesPage() {
  const coreRoles = [
    {
      num: '01',
      title: 'Account Executives',
      shortDesc: 'A dedicated point of connection between Guardian and the organizations we support.',
      fullDesc: 'Account Executives help maintain alignment between Guardian capabilities and organizational needs, helping teams navigate priorities, communication, and ongoing engagement.',
      icon: Award
    },
    {
      num: '02',
      title: 'Risk Coders',
      shortDesc: 'Experienced support for the work behind accurate risk information.',
      fullDesc: 'Risk Coders work with healthcare information and documentation to support risk-related review and coding activities, helping organizations identify and address opportunities within their patient populations.',
      icon: FileText
    },
    {
      num: '03',
      title: 'Care Managers',
      shortDesc: 'Support for teams working directly with patient needs and care opportunities.',
      fullDesc: 'Care Managers help translate patient information and identified opportunities into coordinated care activities, supporting patients and care teams throughout the care journey.',
      icon: HeartHandshake
    },
    {
      num: '04',
      title: 'Care Navigators',
      shortDesc: 'Helping patients move through the healthcare journey.',
      fullDesc: 'Care Navigators support patient engagement and coordination by helping connect patients with the appropriate care, resources, and next steps.',
      icon: Compass
    }
  ];

  const connectionStages = [
    { step: 'CONNECT', desc: 'Healthcare information comes together.' },
    { step: 'UNDERSTAND', desc: 'The patient and population picture becomes clearer.' },
    { step: 'IDENTIFY', desc: 'Risks, gaps, needs, and opportunities become visible.' },
    { step: 'SUPPORT', desc: 'Experienced teams help translate insight into workflow.' },
    { step: 'ACT', desc: 'Care and operational activities move forward.' },
    { step: 'OUTCOME', desc: 'Organizations can measure progress and performance.' }
  ];

  const careJourneySteps = [
    { name: 'Identify', desc: 'Recognize the patients, gaps, risks, and opportunities that require attention.' },
    { name: 'Prioritize', desc: 'Focus teams and resources on the work that matters.' },
    { name: 'Engage', desc: 'Connect with patients and care teams.' },
    { name: 'Coordinate', desc: 'Support communication, follow-up, and care activities.' },
    { name: 'Document', desc: 'Capture the work and information needed for ongoing care and performance.' },
    { name: 'Follow through', desc: 'Continue the work beyond the initial intervention.' }
  ];

  const servicesByNeed = [
    {
      title: 'Risk & Documentation',
      desc: 'Support risk-related review, coding, and documentation activities.',
      icon: FileText
    },
    {
      title: 'Care & Coordination',
      desc: 'Support care teams as they identify needs, coordinate activity, and follow up.',
      icon: HeartPulse
    },
    {
      title: 'Patient Engagement',
      desc: 'Support outreach, navigation, and patient-facing activities.',
      icon: Users
    },
    {
      title: 'Operational Support',
      desc: 'Provide experienced support around the workflows that keep healthcare programs moving.',
      icon: Workflow
    }
  ];

  const builtAroundAudiences = [
    { role: 'For care teams', benefit: 'Relevant information and support for patient-centered work.' },
    { role: 'For operations', benefit: 'Experienced support for ongoing program workflows.' },
    { role: 'For leadership', benefit: 'A stronger connection between information, execution, and performance.' },
    { role: 'For patients', benefit: 'Support that helps move care forward.' }
  ];

  const servicesPlusSolutions = [
    { area: 'Population Health', desc: 'Support population-level identification and prioritization.' },
    { area: 'Care Management', desc: 'Support coordinated care activities and follow-up.' },
    { area: 'Risk Adjustment', desc: 'Support risk-related review and coding workflows.' },
    { area: 'Quality & Performance', desc: 'Support teams working on quality and performance opportunities.' },
    { area: 'Patient Engagement', desc: 'Support patient outreach, navigation, and coordination.' }
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
              <Users className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>GUARDIAN SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Technology that doesn’t <span className="text-gradient-hero">stop at the screen.</span>
            </h1>

            <p className="text-base sm:text-xl text-purple-100/90 leading-relaxed max-w-3xl mb-10 font-normal">
              Guardian combines healthcare technology with experienced teams who help organizations turn information into action across the work that matters most.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#roles"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_20px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Our Services</span>
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
          SECTION 2: THE HUMAN SIDE OF HEALTHCARE INTELLIGENCE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-3">
              Operational Realities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-6">
              Insight only matters when someone can act on it.
            </h2>
            <p className="text-base sm:text-lg text-[#35304c] leading-relaxed mb-4">
              Healthcare organizations need more than connected data and intelligent technology. They need people who understand the work behind care, risk, quality, and patient engagement.
            </p>
            <p className="text-base sm:text-lg text-[#727272] leading-relaxed">
              Guardian brings technology and healthcare expertise together to help organizations move from identified opportunity to meaningful action.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Technology</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Connects information and surfaces opportunities.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Expertise</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Brings healthcare knowledge into the work.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Workflow</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Moves identified opportunities into action.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">People</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Support the teams responsible for delivering that action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: OUR SERVICES (THE 4 CORE ROLES)
          ───────────────────────────────────────────────────────────── */}
      <section id="roles" className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Our Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Healthcare expertise, built into the workflow.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian’s services are designed to complement the platform and support the people responsible for turning healthcare information into action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreRoles.map((role) => {
              const RoleIcon = role.icon;
              return (
                <div key={role.title} className="p-8 rounded-3xl bg-[#f8f6fc] border border-[#e1e1e5] flex flex-col justify-between hover:border-[#7b3fc7]/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#7b3fc7]">{role.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-white text-[#7b3fc7] flex items-center justify-center shadow-xs">
                        <RoleIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#1c1636] mb-2">{role.title}</h3>
                    <p className="text-sm font-semibold text-[#7b3fc7] mb-3">{role.shortDesc}</p>
                    <p className="text-xs sm:text-sm text-[#727272] leading-relaxed mb-6">{role.fullDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-[#e1e1e5]">
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7b3fc7] hover:underline">
                      <span>Explore {role.title} Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: HOW SERVICES CONNECT TO THE PLATFORM
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#eae4f4]/40 border-b border-[#d6cde2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
              The platform finds the opportunity. People help move it forward.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian’s technology provides the connected information and intelligence. Our services help bring that intelligence into the work performed by healthcare teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {connectionStages.map((stage, idx) => (
              <div key={stage.step} className="p-5 rounded-2xl bg-white border border-[#e1e1e5]">
                <span className="text-xs font-mono text-[#adabb7] block mb-1">0{idx + 1}</span>
                <h4 className="text-xs font-bold text-[#7b3fc7] mb-2">{stage.step}</h4>
                <p className="text-xs text-[#727272]">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: SERVICES ACROSS THE CARE JOURNEY
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Action Map
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              Support where action happens.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careJourneySteps.map((item) => (
              <div key={item.name} className="p-6 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <h3 className="text-base font-bold text-[#1c1636] mb-2">{item.name}</h3>
                <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: SERVICES BY NEED
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Operational Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              Support for the work behind better performance.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesByNeed.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1c1636] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: WHY THE COMBINATION MATTERS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mb-4">
            Technology alone cannot close the loop.
          </h2>
          <p className="text-base text-[#727272] leading-relaxed max-w-3xl mx-auto mb-6">
            A dashboard can identify a gap. A connected patient record can provide context. Intelligence can show where attention is needed. But meaningful change requires people, workflows, and follow-through. Guardian brings these pieces together so organizations can move from information to action.
          </p>
          <div className="inline-block p-4 rounded-xl bg-[#f2ecf9] border border-[#7b3fc7]/20 text-sm font-semibold text-[#7b3fc7]">
            Connected technology. Healthcare expertise. Practical execution.
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: BUILT AROUND HEALTHCARE WORK
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
              Services designed for real healthcare workflows.
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Guardian’s services are built around the practical work required across value-based care, risk, quality, care management, and patient engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {builtAroundAudiences.map((aud) => (
              <div key={aud.role} className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
                <h3 className="text-base font-bold text-[#7b3fc7] mb-2">{aud.role}</h3>
                <p className="text-xs sm:text-sm text-[#35304c]">{aud.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: SERVICES + SOLUTIONS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
              Extend the value of Guardian solutions.
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Guardian services can complement solution areas across the organization, helping connect platform capabilities to the people and workflows that use them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {servicesPlusSolutions.map((item) => (
              <div key={item.area} className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <h4 className="text-sm font-bold text-[#1c1636] mb-2">{item.area}</h4>
                <p className="text-xs text-[#727272]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8f6fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Turn insight into action.
              </h2>
              <p className="text-sm sm:text-base text-purple-100/90 mb-8">
                Bring connected technology and healthcare expertise together around the work that matters.
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
