import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  Mail,
  CheckCircle2
} from 'lucide-react';

export default function ResourcesPage() {

  const categories = [
    {
      num: '01',
      title: 'Insights',
      desc: 'Perspectives on healthcare data, technology, value-based care, care management, risk, quality, patient engagement, and healthcare performance.',
      icon: Sparkles
    },
    {
      num: '02',
      title: 'Case Studies',
      desc: 'Real-world examples showing how healthcare organizations use technology, data, and expertise to address specific challenges.',
      icon: TrendingUp
    },
    {
      num: '03',
      title: 'Guides',
      desc: 'Practical resources designed to help teams understand healthcare concepts, workflows, technologies, and opportunities.',
      icon: BookOpen
    }
  ];

  const insightTopics = [
    'Healthcare data and interoperability',
    'Value-based care',
    'Population health',
    'Care management',
    'Risk adjustment',
    'Quality and performance',
    'Patient engagement',
    'Healthcare technology and intelligence'
  ];

  const caseStudyStructure = [
    { label: 'The challenge', desc: 'The specific clinical or operational hurdle faced by the organization.' },
    { label: 'The healthcare context', desc: 'The organizational and regulatory environment.' },
    { label: 'The Guardian approach', desc: 'How Guardian was deployed to address the problem.' },
    { label: 'Technology & services involved', desc: 'The exact platform tools and embedded staff utilized.' },
    { label: 'The action taken', desc: 'Day-to-day workflow execution and care team engagement.' },
    { label: 'The measurable outcome', desc: 'Quantified clinical and operational results, where approved.' }
  ];

  const guideStructure = [
    { label: 'The question or challenge', desc: 'Framing the healthcare problem clearly.' },
    { label: 'Key concepts', desc: 'Core principles and definitions required for clarity.' },
    { label: 'Practical considerations', desc: 'Real-world hurdles, EHR constraints, and workflow realities.' },
    { label: 'Recommended approach', desc: 'Proven step-by-step methodologies.' },
    { label: 'How Guardian can help', desc: 'How platform capabilities and staff accelerate success.' }
  ];

  const insightToActionSteps = [
    { step: 'LEARN', desc: 'Understand the issue.' },
    { step: 'UNDERSTAND', desc: 'Put it into healthcare context.' },
    { step: 'IDENTIFY', desc: 'Recognize the opportunity.' },
    { step: 'APPLY', desc: 'Translate knowledge into action.' },
    { step: 'OUTCOME', desc: 'Measure what changes.' }
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
              <BookOpen className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>GUARDIAN RESOURCES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Ideas and insights for a <span className="text-gradient-hero">changing healthcare landscape.</span>
            </h1>

            <p className="text-base sm:text-xl text-purple-100/90 leading-relaxed max-w-3xl mb-10 font-normal">
              Explore healthcare insights, practical guidance, and real-world stories that help organizations understand the challenges behind data, care, quality, risk, and performance.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#insights"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_20px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Insights</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>View Case Studies</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: RESOURCE INTRODUCTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-3">
              Knowledge Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-6">
              Useful information for the work ahead.
            </h2>
            <p className="text-base sm:text-lg text-[#35304c] leading-relaxed mb-4">
              Healthcare is changing quickly. New data sources, evolving care models, quality requirements, technology, and patient expectations create new challenges for healthcare organizations.
            </p>
            <p className="text-base sm:text-lg text-[#727272] leading-relaxed">
              Guardian resources are designed to help healthcare leaders and teams understand those challenges, explore practical approaches, and learn from experience.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: RESOURCE CATEGORIES
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Browse by Format
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Explore by what you need to know.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="p-8 rounded-3xl bg-[#f8f6fc] border border-[#e1e1e5] shadow-xs flex flex-col justify-between hover:border-[#7b3fc7]/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#7b3fc7]">{cat.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-white text-[#7b3fc7] flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1c1636] mb-3">{cat.title}</h3>
                    <p className="text-sm text-[#727272] leading-relaxed mb-6">{cat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: FEATURED CONTENT (APPROVED TEMPLATE)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#eae4f4]/40 border-b border-[#d6cde2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Curated Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              Explore what matters now.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#7b3fc7] font-semibold block mb-2">Featured Insight</span>
                <h3 className="text-xl font-bold text-[#1c1636] mb-3">Connecting Fragmented Healthcare Data</h3>
                <p className="text-xs sm:text-sm text-[#727272] leading-relaxed mb-6">
                  An in-depth perspective on how longitudinal data aggregation transforms patient context across independent health systems.
                </p>
              </div>
              <div className="pt-4 border-t border-[#e1e1e5]">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7b3fc7] hover:underline">
                  <span>Read the Insight</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#ff7a57] font-semibold block mb-2">Featured Case Study</span>
                <h3 className="text-xl font-bold text-[#1c1636] mb-3">ED Utilization Reduction in Value-Based Care</h3>
                <p className="text-xs sm:text-sm text-[#727272] leading-relaxed mb-6">
                  Examining the workflow and real-time ADT intervention protocols that support patient follow-up and care loop closure.
                </p>
              </div>
              <div className="pt-4 border-t border-[#e1e1e5]">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff7a57] hover:underline">
                  <span>Read the Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#7b3fc7] font-semibold block mb-2">Featured Guide</span>
                <h3 className="text-xl font-bold text-[#1c1636] mb-3">Risk Adjustment Documentation Playbook</h3>
                <p className="text-xs sm:text-sm text-[#727272] leading-relaxed mb-6">
                  Practical guidance for clinicians and coding teams on maintaining ethical documentation integrity and HCC capture.
                </p>
              </div>
              <div className="pt-4 border-t border-[#e1e1e5]">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7b3fc7] hover:underline">
                  <span>Read the Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: INSIGHTS & TOPIC AREAS
          ───────────────────────────────────────────────────────────── */}
      <section id="insights" className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Understand the forces shaping healthcare.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian insights explore the intersection of healthcare data, clinical intelligence, technology, care delivery, and organizational performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {insightTopics.map((topic) => (
              <div key={topic} className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5] flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
                <span className="text-xs font-medium text-[#35304c]">{topic}</span>
              </div>
            ))}
          </div>

          <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-semibold text-[#7b3fc7] hover:underline">
            <span>Explore All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: CASE STUDIES & GUIDES FRAMEWORK
          ───────────────────────────────────────────────────────────── */}
      <section id="case-studies" className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Case Studies Architecture */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
                  Evidence Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
                  See healthcare technology in action.
                </h2>
                <p className="text-sm text-[#727272] leading-relaxed">
                  Case studies show the challenge, the approach, the work involved, and the outcome—giving readers a clear view of how Guardian capabilities are applied in real healthcare environments.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636]">
                  Case Study Blueprint
                </h4>
                {caseStudyStructure.map((item) => (
                  <div key={item.label} className="border-t border-[#e1e1e5] pt-3">
                    <span className="text-xs font-bold text-[#7b3fc7] block">{item.label}</span>
                    <span className="text-xs text-[#727272]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guides Architecture */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff7a57] block mb-2">
                  Practical Guidance
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
                  Practical knowledge for healthcare teams.
                </h2>
                <p className="text-sm text-[#727272] leading-relaxed">
                  Guides provide accessible, useful information for organizations working through healthcare data, care delivery, quality, risk, performance, and technology challenges.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636]">
                  Guide Blueprint
                </h4>
                {guideStructure.map((item) => (
                  <div key={item.label} className="border-t border-[#e1e1e5] pt-3">
                    <span className="text-xs font-bold text-[#ff7a57] block">{item.label}</span>
                    <span className="text-xs text-[#727272]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: FROM INSIGHT TO ACTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mb-3">
              Information is only useful when it helps someone do something.
            </h2>
            <p className="text-sm sm:text-base text-[#727272] leading-relaxed">
              The best resource does more than explain a topic. It helps a healthcare organization understand a challenge, identify an opportunity, and determine what action could come next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {insightToActionSteps.map((item, idx) => (
              <div key={item.step} className="p-6 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <span className="text-xs font-mono text-[#adabb7] block mb-1">0{idx + 1}</span>
                <h4 className="text-sm font-bold text-[#7b3fc7] mb-2">{item.step}</h4>
                <p className="text-xs text-[#727272]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: NEWSLETTER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#eae4f4]/40 border-b border-[#d6cde2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white text-[#7b3fc7] flex items-center justify-center mx-auto mb-4 shadow-xs">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
            Stay connected to healthcare insights.
          </h2>
          <p className="text-sm text-[#727272] mb-6 max-w-lg mx-auto">
            Receive approved Guardian insights, resources, and healthcare intelligence updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your professional email"
              className="w-full px-5 py-3 rounded-full border border-[#e1e1e5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
            />
            <button
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#7b3fc7] text-white text-sm font-medium hover:bg-[#9565d2] transition-all shrink-0"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8f6fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Have a healthcare challenge worth exploring?
              </h2>
              <p className="text-sm sm:text-base text-purple-100/90 mb-8">
                Talk with Guardian about the data, technology, and expertise behind your healthcare priorities.
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
