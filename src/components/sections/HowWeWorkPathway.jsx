import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Healthcare Expertise',
    desc: 'Frontline clinical guidance and managed care depth.',
    icon: Stethoscope,
    color: '#7b3fc7'
  },
  {
    title: 'Connected Technology',
    desc: 'Interoperable data pipelines and real-time registries.',
    icon: Cpu,
    color: '#3b82f6'
  },
  {
    title: 'Hands-on Collaboration',
    desc: 'Care managers, coders, and clinical teams working as one.',
    icon: HeartHandshake,
    color: '#ff7a57'
  },
  {
    title: 'Meaningful Action',
    desc: 'Closed care gaps and superior patient outcomes.',
    icon: CheckCircle2,
    color: '#10b981'
  }
];

export default function HowWeWorkPathway() {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#1c1636] border-t border-[#edeaf2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1636]">
            Technology works better with <span className="text-gradient-hero">people behind it.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#554e6d] mt-3 font-normal leading-relaxed">
            Healthcare expertise, technology, and collaboration come together to help Guardian move from information to action.
          </p>
        </div>

        {/* Connected Visual Pathway (No Cards!) */}
        <div className="relative">
          
          {/* Continuous Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#7b3fc7] via-[#3b82f6] to-[#10b981] opacity-30 z-0" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex md:flex-col items-start md:items-center text-left md:text-center group"
              >
                {/* Node Dot / Icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 shrink-0 mr-4 md:mr-0 md:mb-5"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Typography */}
                <div>
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#727272] mb-1">
                    Phase 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1636] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554e6d] mt-1.5 leading-relaxed font-normal max-w-[220px] md:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
