import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  FileSpreadsheet, 
  Activity, 
  FlaskConical, 
  Share2, 
  ArrowRight
} from 'lucide-react';

export default function DataChallenge() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Diverse healthcare portraits: doctors, nurses, patients, and lab specialists
  const peopleNodes = [
    {
      id: 'nurse-1',
      title: 'Triage Nurse',
      image: '/images/challenge/nurse.jpg',
      x: 64,
      y: 12,
      size: 'w-16 h-16 sm:w-20 sm:h-20',
      delay: 0,
      aspect: 'rounded-2xl',
    },
    {
      id: 'doctor-coat',
      title: 'Attending Physician',
      image: '/images/challenge/doctor-coat.jpg',
      x: 80,
      y: 20,
      size: 'w-18 h-22 sm:w-22 sm:h-28',
      delay: 0.15,
      aspect: 'rounded-2xl',
    },
    {
      id: 'senior-patient',
      title: 'Chronic Care Patient',
      image: '/images/challenge/senior-patient.jpg',
      x: 14,
      y: 54,
      size: 'w-20 h-22 sm:w-24 sm:h-28',
      delay: 0.25,
      aspect: 'rounded-2xl',
    },
    {
      id: 'doctor-glasses',
      title: 'Specialist Physician',
      image: '/images/challenge/doctor-glasses.jpg',
      x: 86,
      y: 52,
      size: 'w-16 h-20 sm:w-20 sm:h-24',
      delay: 0.35,
      aspect: 'rounded-2xl',
    },
    {
      id: 'lab-scientist',
      title: 'Diagnostic Lab Scientist',
      image: '/images/challenge/lab-scientist.jpg',
      x: 36,
      y: 12,
      size: 'w-14 h-14 sm:w-16 sm:h-16',
      delay: 0.45,
      aspect: 'rounded-2xl',
    },
    {
      id: 'young-patient',
      title: 'Outpatient Care',
      image: '/images/challenge/young-patient.jpg',
      x: 74,
      y: 84,
      size: 'w-18 h-22 sm:w-22 sm:h-28',
      delay: 0.3,
      aspect: 'rounded-2xl',
    },
    {
      id: 'care-team',
      title: 'Care Coordination',
      image: '/images/healthcare-team.webp',
      x: 54,
      y: 64,
      size: 'w-14 h-12 sm:w-16 sm:h-14',
      delay: 0.5,
      aspect: 'rounded-xl',
    },
    {
      id: 'clinical-check',
      title: 'Primary Consultation',
      image: '/images/healthcare-expert.webp',
      x: 10,
      y: 78,
      size: 'w-14 h-14 sm:w-16 sm:h-16',
      delay: 0.6,
      aspect: 'rounded-xl',
    },
  ];

  // Core healthcare data stream nodes
  const dataBadges = [
    {
      id: 'claims',
      label: 'Claims',
      sub: 'Adjudicated',
      icon: FileSpreadsheet,
      bg: 'bg-gradient-to-br from-[#ff7a57] via-[#ff6538] to-[#ea580c]',
      ring: 'ring-4 ring-[#ff7a57]/30 shadow-[0_8px_32px_rgba(255,122,87,0.45)]',
      x: 51,
      y: 38,
      delay: 0.1,
      isCenter: true,
    },
    {
      id: 'ehr',
      label: 'EHR',
      sub: 'Records',
      icon: Database,
      bg: 'bg-gradient-to-br from-[#38bdf8] via-[#2563eb] to-[#1d4ed8]',
      ring: 'ring-2 ring-blue-400/40 shadow-[0_6px_24px_rgba(37,99,235,0.35)]',
      x: 21,
      y: 32,
      delay: 0.2,
      isCenter: false,
    },
    {
      id: 'labs',
      label: 'Labs',
      sub: 'Results',
      icon: FlaskConical,
      bg: 'bg-gradient-to-br from-[#9333ea] to-[#6b21a8]',
      ring: 'ring-2 ring-purple-400/40 shadow-[0_6px_24px_rgba(147,51,234,0.35)]',
      x: 69,
      y: 56,
      delay: 0.3,
      isCenter: false,
    },
    {
      id: 'adt',
      label: 'ADT',
      sub: 'Feeds',
      icon: Activity,
      bg: 'bg-gradient-to-br from-[#0d9488] to-[#047857]',
      ring: 'ring-2 ring-teal-400/40 shadow-[0_6px_24px_rgba(13,148,136,0.35)]',
      x: 42,
      y: 82,
      delay: 0.4,
      isCenter: false,
    },
    {
      id: 'hie',
      label: 'HIE',
      sub: 'Exchange',
      icon: Share2,
      bg: 'bg-gradient-to-br from-[#6366f1] to-[#4338ca]',
      ring: 'ring-2 ring-indigo-400/40 shadow-[0_6px_24px_rgba(99,102,241,0.35)]',
      x: 88,
      y: 75,
      delay: 0.5,
      isCenter: false,
    },
  ];

  return (
    <section id="challenge" className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-[#edf4ff] via-[#faf8fe] to-[#f4edfd] overflow-hidden border-t border-[#e2e8f5]">
      
      {/* ─────────────────────────────────────────────────────────────
          LIVING AMBIENT LIGHTING SPOT EFFECTS
          Creates the luminous, soft blue & violet atmospheric glow
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Sky Blue Light Spot on Left (makes white background feel alive) */}
        <div className="absolute -top-12 -left-20 w-[700px] h-[700px] bg-[#38bdf8]/18 blur-[150px] rounded-full" />
        
        {/* Luminous Royal Purple/Violet Spotlight in Upper-Center */}
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[550px] bg-[#7b3fc7]/10 blur-[170px] rounded-full" />
        
        {/* Soft Warm Coral/Peach Glow behind the central Claims cluster */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[450px] bg-[#ff7a57]/14 blur-[140px] rounded-full" />
        
        {/* Subtle Cyan Accent at Bottom Right */}
        <div className="absolute bottom-0 right-10 w-[450px] h-[400px] bg-[#0d9488]/10 blur-[160px] rounded-full" />
        
        {/* Faint high-tech ambient grid with soft radial fade */}
        <div className="absolute inset-0 ambient-grid opacity-[0.08]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: Narrative & Action (5 cols)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 max-w-xl"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/25 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-5 shadow-2xs backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>The Challenge</span>
            </div>

            {/* Headline with Signature Purple Accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-[1.15] mb-5">
              Healthcare data is everywhere.{' '}
              <span className="text-[#7b3fc7] block sm:inline">Making sense of it is the challenge.</span>
            </h2>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-[#554f6c] leading-relaxed mb-8 font-normal">
              Critical information is scattered across systems, formats, and care settings. 
              Without a connected view, it's harder to see the full picture, identify opportunities, and take action.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="#journey"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#1c1636] bg-white/95 hover:bg-white border border-[#dcd9e8] hover:border-[#7b3fc7]/50 shadow-[0_4px_16px_rgba(28,22,54,0.06)] hover:shadow-[0_8px_24px_rgba(123,63,199,0.18)] transition-all duration-300 group backdrop-blur-xs"
              >
                <span>See the bigger picture</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: Dense Scattered Constellation Network (7 cols)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-7 relative w-full h-[520px] sm:h-[560px] lg:h-[600px] rounded-3xl flex items-center justify-center select-none"
          >
            {/* Editorial Handwritten Annotation with Ink Arrow */}
            <div className="absolute top-0 right-2 sm:right-6 flex flex-col items-end z-30 pointer-events-none">
              <span className="font-['Caveat',cursive] text-xl sm:text-2xl text-[#1c1636]/80 -rotate-3 leading-tight tracking-wide font-medium">
                Disconnected data.<br />Missed opportunities.
              </span>
              <svg className="w-14 h-8 text-[#7b3fc7]/70 mt-0.5 -rotate-6" viewBox="0 0 50 30" fill="none">
                <path d="M4 6 C 18 16, 32 18, 44 24 M 35 26 L 45 24 L 41 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                DENSE INTRICATE SVG BEZIER NETWORK WEB & FIBER THREADS
                ───────────────────────────────────────────────────────────── */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 500 500" preserveAspectRatio="none">
              <defs>
                <linearGradient id="glowOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7a57" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#7b3fc7" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="glowBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ff7a57" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="glowPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="glowTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
                </linearGradient>
                
                {/* Radial Glow Filter for Hub */}
                <radialGradient id="hubHalo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff7a57" stopOpacity="0.35" />
                  <stop offset="60%" stopColor="#ff7a57" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ff7a57" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Central Glowing Halo behind Claims Hub */}
              <circle cx="255" cy="190" r="95" fill="url(#hubHalo)" />

              {/* Radiating Primary Fiber Threads from Central Claims Hub (255, 190) */}
              <path d="M 255 190 Q 285 120 320 60" stroke="url(#glowOrange)" strokeWidth="1.8" fill="none" />
              <path d="M 255 190 Q 340 130 400 100" stroke="#ff7a57" strokeOpacity="0.45" strokeWidth="1.6" fill="none" />
              <path d="M 255 190 Q 300 230 345 280" stroke="url(#glowPurple)" strokeWidth="1.8" fill="none" />
              <path d="M 255 190 Q 360 210 430 260" stroke="#7b3fc7" strokeOpacity="0.4" strokeWidth="1.6" strokeDasharray="3 3" fill="none" />
              <path d="M 255 190 Q 180 175 105 160" stroke="url(#glowBlue)" strokeWidth="1.8" fill="none" />
              <path d="M 255 190 Q 215 110 180 60" stroke="#38bdf8" strokeOpacity="0.45" strokeWidth="1.5" fill="none" />
              <path d="M 255 190 Q 160 220 70 270" stroke="#ff7a57" strokeOpacity="0.45" strokeWidth="1.6" fill="none" />
              <path d="M 255 190 Q 255 260 270 320" stroke="#7b3fc7" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
              <path d="M 255 190 Q 230 310 210 410" stroke="url(#glowTeal)" strokeWidth="1.8" fill="none" />

              {/* Inter-node Cross-connecting Web Threads (creates the dense organic web) */}
              <path d="M 105 160 Q 140 100 180 60" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="4 4" fill="none" />
              <path d="M 180 60 Q 250 40 320 60" stroke="#7b3fc7" strokeOpacity="0.35" strokeWidth="1.4" fill="none" />
              <path d="M 320 60 Q 370 70 400 100" stroke="#ff7a57" strokeOpacity="0.35" strokeWidth="1.4" fill="none" />
              <path d="M 400 100 Q 425 180 430 260" stroke="#7b3fc7" strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="4 4" fill="none" />
              <path d="M 105 160 Q 80 210 70 270" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1.4" fill="none" />
              <path d="M 70 270 Q 130 345 210 410" stroke="#0d9488" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
              <path d="M 70 270 Q 55 330 50 390" stroke="#0d9488" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
              <path d="M 50 390 Q 130 415 210 410" stroke="#0d9488" strokeOpacity="0.35" strokeWidth="1.4" fill="none" />
              <path d="M 345 280 Q 400 265 430 260" stroke="#9333ea" strokeOpacity="0.4" strokeWidth="1.4" fill="none" />
              <path d="M 345 280 Q 310 350 270 320" stroke="#7b3fc7" strokeOpacity="0.35" strokeWidth="1.3" strokeDasharray="4 4" fill="none" />
              <path d="M 210 410 Q 285 415 370 420" stroke="url(#glowTeal)" strokeWidth="1.6" fill="none" />
              <path d="M 345 280 Q 360 360 370 420" stroke="#6366f1" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
              <path d="M 370 420 Q 410 400 440 375" stroke="#6366f1" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="3 3" fill="none" />
              <path d="M 430 260 Q 445 320 440 375" stroke="#7b3fc7" strokeOpacity="0.3" strokeWidth="1.2" fill="none" />
              
              {/* Outer Dissolving Filament Streams (spreading beyond borders) */}
              <path d="M 105 160 Q 40 140 0 130" stroke="#38bdf8" strokeOpacity="0.2" strokeWidth="1.2" fill="none" />
              <path d="M 70 270 Q 20 280 0 290" stroke="#ff7a57" strokeOpacity="0.2" strokeWidth="1.2" fill="none" />
              <path d="M 320 60 Q 340 20 360 0" stroke="#7b3fc7" strokeOpacity="0.2" strokeWidth="1.2" fill="none" />
              <path d="M 400 100 Q 460 90 500 85" stroke="#ff7a57" strokeOpacity="0.2" strokeWidth="1.2" fill="none" />
              <path d="M 430 260 Q 470 265 500 270" stroke="#7b3fc7" strokeOpacity="0.2" strokeWidth="1.2" fill="none" />
              <path d="M 440 375 Q 475 390 500 400" stroke="#6366f1" strokeOpacity="0.2" strokeWidth="1.2" fill="none" />
              <path d="M 210 410 Q 200 460 190 500" stroke="#0d9488" strokeOpacity="0.2" strokeWidth="1.2" fill="none" />
              <path d="M 370 420 Q 390 470 405 500" stroke="#6366f1" strokeOpacity="0.2" strokeWidth="1.2" fill="none" />

              {/* Animated Floating Data Signal Packets along paths */}
              <circle cx="280" cy="140" r="2.5" fill="#ff7a57" opacity="0.8">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="180" cy="180" r="2.5" fill="#38bdf8" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="235" r="2.5" fill="#9333ea" opacity="0.8">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="3.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="230" cy="300" r="2.5" fill="#0d9488" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="365" cy="350" r="2.5" fill="#6366f1" opacity="0.8">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.4s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* ─────────────────────────────────────────────────────────────
                HEALTHCARE PORTRAITS (8 Real Clinical & Patient Faces)
                ───────────────────────────────────────────────────────────── */}
            {peopleNodes.map((person) => (
              <motion.div
                key={person.id}
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4.2 + person.delay * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: person.delay,
                }}
                style={{
                  position: 'absolute',
                  left: `${person.x}%`,
                  top: `${person.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="z-20 group"
                onMouseEnter={() => setHoveredNode(person.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className={`relative ${person.size} ${person.aspect} overflow-hidden bg-white border-2 border-white/90 shadow-[0_8px_24px_rgba(28,22,54,0.12)] group-hover:shadow-[0_16px_36px_rgba(123,63,199,0.28)] group-hover:scale-108 group-hover:border-[#7b3fc7]/60 transition-all duration-300 cursor-pointer`}>
                  <img
                    src={person.image}
                    alt={person.title}
                    className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  {/* Subtle translucent vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636]/30 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Tooltip on Hover */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1c1636] text-white text-[10px] font-medium px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-sm">
                    {person.title}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ─────────────────────────────────────────────────────────────
                HEALTHCARE DATA BADGES (EHR, Claims, Labs, ADT, HIE)
                ───────────────────────────────────────────────────────────── */}
            {dataBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.id}
                  animate={{
                    y: badge.isCenter ? [0, -4, 0] : [0, 6, 0],
                    scale: badge.isCenter ? [1, 1.03, 1] : 1,
                  }}
                  transition={{
                    duration: badge.isCenter ? 3 : 3.6 + badge.delay * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: badge.delay,
                  }}
                  style={{
                    position: 'absolute',
                    left: `${badge.x}%`,
                    top: `${badge.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`z-25 group ${badge.isCenter ? 'z-30' : 'z-20'}`}
                  onMouseEnter={() => setHoveredNode(badge.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-2xl ${badge.bg} text-white shadow-lg ${badge.ring} group-hover:scale-112 group-hover:shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-xs`}
                  >
                    <div className="p-1 rounded-lg bg-white/20">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs sm:text-sm font-bold font-mono tracking-wide leading-none">{badge.label}</span>
                      <span className="text-[9px] text-white/80 font-medium leading-tight">{badge.sub}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
