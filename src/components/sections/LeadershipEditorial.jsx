import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

export const leadershipMembers = [
  {
    id: 'sandeep-bajaj',
    name: 'Dr. Sandeep Bajaj, MD',
    role: 'Founder & Chief Executive Officer',
    discipline: 'Clinical Vision & Governance',
    image: '/images/team/Sandeep Bajaj, MD.png',
    credentials: 'Board-Certified Interventional Cardiologist & Internist',
    experience: '35+ Years Healthcare Practice',
    shortBio: 'Board-certified cardiologist and healthcare operator leading Guardian’s mission to connect clinical insight with frontline action.',
    quote: 'Healthcare technology is only valuable when it serves the clinicians and patients living with its results.'
  },
  {
    id: 'satya-thottappillil',
    name: 'Satya Thottappillil',
    role: 'Chief Technology Officer',
    discipline: 'Platform & Technology',
    image: '/images/team/Satya Thottappillil.png',
    credentials: 'Enterprise Healthtech Systems Architect',
    experience: '20+ Years Distributed Systems',
    shortBio: 'Enterprise IT strategist specializing in managed care systems, high-scale clinical data exchange, and secure cloud pipelines.',
    quote: 'Architecture should make complex health data instantly intuitive at the bedside.'
  },
  {
    id: 'joseph-macau',
    name: 'Joseph Macau, CGMA',
    role: 'Chief Financial Officer',
    discipline: 'Finance & Fiscal Governance',
    image: '/images/team/Joseph Macau, CGMA.png',
    credentials: 'Chartered Global Management Accountant',
    experience: '25+ Years Healthcare Economics',
    shortBio: 'Oversees Guardian’s financial architecture, risk modeling, and capital allocation for risk-bearing healthcare partnerships.',
    quote: 'Aligning clinical performance with fiscal viability secures lasting care models.'
  },
  {
    id: 'richard-cairl',
    name: 'Richard Cairl, PhD',
    role: 'VP of Clinical Operations',
    discipline: 'Clinical Systems & Medicare Advantage',
    image: '/images/team/Richard Cairl.png',
    credentials: 'PhD Healthcare Systems Researcher',
    experience: '30+ Years Clinical Operations',
    shortBio: 'Focuses on scaling Medicare Advantage quality attainments, clinical operations, and structured community health interventions.',
    quote: 'Sustainable healthcare relies on structured, empathetic community workflows.'
  },
  {
    id: 'ganesh-ramachandran',
    name: 'Ganesh Ramachandran',
    role: 'VP of Operations',
    discipline: 'Operations & Service Delivery',
    image: '/images/team/Ganesh Ramachandran.png',
    credentials: 'Cross-Functional Healthtech Operator',
    experience: '25+ Years Healthtech Interface',
    shortBio: 'Directs cross-functional service delivery, client success, and operational scalability across provider networks.',
    quote: 'Rigorous process discipline makes advanced healthcare software truly work.'
  },
  {
    id: 'enrique-diaz-granados',
    name: 'Enrique Diaz Granados',
    role: 'VP of Business Development',
    discipline: 'Managed Care & Partnerships',
    image: '/images/team/Enrique Diaz Granados.png',
    credentials: 'Former Humana, Wellcare & Aetna Executive',
    experience: '30+ Years Managed Care',
    shortBio: 'Managed care veteran leading strategic partnerships across Medicare Advantage plans, MSOs, and Accountable Care Organizations.',
    quote: 'Trust between health plans and provider groups drives patient outcomes.'
  },
  {
    id: 'vikram-saini',
    name: 'Vikram Saini, MD',
    role: 'Director of Legal Affairs & Compliance',
    discipline: 'Governance & Compliance',
    image: '/images/team/Vikram Saini.png',
    credentials: 'Physician & Healthcare Legal Counsel',
    experience: 'Regulatory Risk & Governance',
    shortBio: 'Directs regulatory compliance, HIPAA privacy frameworks, and value-based risk contracts with clinical and legal expertise.',
    quote: 'Uncompromising compliance protects both patient trust and organizational health.'
  },
  {
    id: 'david-weavil',
    name: 'David Weavil',
    role: 'Advisor for Growth',
    discipline: 'Growth & Strategic Advisory',
    image: '/images/team/David Weavil.png',
    credentials: 'Diagnostics Industry Leader & Advisor',
    experience: '30+ Years Diagnostics Leadership',
    shortBio: 'Senior healthcare advisor guiding commercial market expansion, technological innovations, and strategic alliances.',
    quote: 'True innovation bridges the gap between laboratory insight and clinic reality.'
  }
];

export default function LeadershipEditorial() {
  const [selectedLeaderId, setSelectedLeaderId] = useState('sandeep-bajaj');
  const activeLeader = leadershipMembers.find((m) => m.id === selectedLeaderId) || leadershipMembers[0];

  return (
    <section className="py-20 sm:py-28 bg-[#faf8fc] text-[#1c1636] border-t border-[#edeaf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Executive Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1636] leading-tight">
            Guided by clinical depth and operational experience.
          </h2>
          <p className="text-base sm:text-lg text-[#554e6d] mt-4 font-normal leading-relaxed">
            Guardian was founded by practicing clinicians and managed care operators who understand healthcare realities from the inside out.
          </p>
        </div>

        {/* Editorial Showcase: Large Portrait on Left + Interactive Typographic Roster on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: Large Portrait with Magazine-Style Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start lg:sticky lg:top-32">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-t from-[#1b1435] via-[#2a1d4a] to-[#3a2768] border border-[#2b2150]/20 shadow-2xl flex items-end justify-center">
              
              {/* Dynamic Backplate Glow */}
              <div className="absolute inset-4 rounded-3xl bg-[#7b3fc7]/20 blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLeader.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative w-full h-full flex items-end justify-center"
                >
                  <img
                    src={activeLeader.image}
                    alt={activeLeader.name}
                    className="w-full h-full object-cover object-top filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100a26] via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Overlay Name & Discipline */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff7a57] block mb-1">
                      {activeLeader.discipline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {activeLeader.name}
                    </h3>
                    <p className="text-xs text-purple-200/90 font-medium mt-0.5">
                      {activeLeader.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quote / Editorial Excerpt below portrait */}
            <div className="w-full max-w-[380px] mt-6 p-5 rounded-2xl bg-white border border-[#e8e6f0] shadow-xs">
              <p className="text-xs sm:text-sm italic text-[#554e6d] font-serif leading-relaxed">
                “{activeLeader.quote}”
              </p>
              <div className="mt-2 text-[11px] font-medium text-[#7b3fc7]">
                {activeLeader.credentials}
              </div>
            </div>
          </div>

          {/* RIGHT: Clean Editorial Roster (Typographic List with Fine Dividers) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-wider text-[#727272] pb-3 border-b-2 border-[#1c1636] flex items-center justify-between">
              <span>Executive Leadership Roster</span>
              <span>Select to view profile</span>
            </div>

            <div className="divide-y divide-[#e8e6f0]">
              {leadershipMembers.map((member) => {
                const isSelected = member.id === selectedLeaderId;
                return (
                  <div
                    key={member.id}
                    onClick={() => setSelectedLeaderId(member.id)}
                    onMouseEnter={() => setSelectedLeaderId(member.id)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isSelected}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedLeaderId(member.id);
                      }
                    }}
                    className={`group py-5 px-4 -mx-4 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected 
                        ? 'bg-white shadow-md border-l-4 border-[#7b3fc7] pl-5' 
                        : 'hover:bg-white/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className={`text-lg sm:text-xl font-bold transition-colors ${
                          isSelected ? 'text-[#7b3fc7]' : 'text-[#1c1636] group-hover:text-[#7b3fc7]'
                        }`}>
                          {member.name}
                        </h4>
                        {member.id === 'sandeep-bajaj' && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#f2ecf9] text-[#7b3fc7]">
                            Founder
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#554e6d] mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <span className="text-[11px] font-medium text-[#727272] hidden sm:inline">
                        {member.discipline}
                      </span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'text-[#7b3fc7] translate-x-1' : 'text-[#adabb7] group-hover:text-[#7b3fc7]'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
