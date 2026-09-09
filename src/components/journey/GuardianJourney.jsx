import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitMerge, 
  UserCheck, 
  Search, 
  Send, 
  TrendingUp, 
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import JourneyCanvas from './JourneyCanvas';

export default function GuardianJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages = [
    {
      id: 'connect',
      number: '01',
      title: 'CONNECT',
      label: 'Data Sources Converge',
      summary: 'EHRs, Claims, Labs, and ADT feeds stream into one secure pipeline.',
      icon: GitMerge,
      color: '#7b3fc7',
    },
    {
      id: 'understand',
      number: '02',
      title: 'UNDERSTAND',
      label: 'Patient Master Chart',
      summary: 'Fragmented records reconcile into a single longitudinal patient picture.',
      icon: UserCheck,
      color: '#9565d2',
    },
    {
      id: 'identify',
      number: '03',
      title: 'IDENTIFY',
      label: 'Surfacing Opportunities',
      summary: 'Clinical intelligence identifies open quality care gaps and risk recapture needs.',
      icon: Search,
      color: '#ff7a57',
    },
    {
      id: 'act',
      number: '04',
      title: 'ACT',
      label: 'Care Teams Take Action',
      summary: 'Care Navigators and Risk Coders execute coordinated outreach and clinical prep.',
      icon: Send,
      color: '#7b3fc7',
    },
    {
      id: 'outcome',
      number: '05',
      title: 'OUTCOME',
      label: 'Measurable Impact',
      summary: 'Closed-loop verification, protected patients, and rewarded value-based care.',
      icon: TrendingUp,
      color: '#ff4312',
    },
  ];

  const currentStage = stages[activeStageIndex];

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : stages.length - 1));
  };

  return (
    <section id="journey" className="relative py-24 lg:py-32 bg-white overflow-hidden border-t border-[#e1e1e5]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-[#7b3fc7]/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#ff7a57]/4 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/20 text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#7b3fc7]" />
              <span>The Continuous Guardian Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight mb-4">
              From fragmented healthcare data{' '}
              <span className="text-gradient-hero">to meaningful action.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#35304c] leading-relaxed font-normal">
              Guardian connects the entire healthcare journey — transforming disconnected clinical data into 
              longitudinal patient intelligence, operational action, and measurable clinical outcomes.
            </p>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#e1e1e5] bg-white hover:bg-[#f8f6fc] text-[#1c1636] hover:text-[#7b3fc7] transition-all shadow-xs focus:outline-none"
              aria-label="Previous Journey Stage"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono font-bold text-[#727272] px-3 py-2 bg-[#f8f6fc] rounded-full border border-[#e1e1e5]">
              Stage 0{activeStageIndex + 1} / 05
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#7b3fc7]/30 bg-[#7b3fc7] hover:bg-[#9565d2] text-white transition-all shadow-md shadow-[#7b3fc7]/25 focus:outline-none"
              aria-label="Next Journey Stage"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Continuous Horizontal Interactive Journey Rail */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="relative mb-8 pt-6 pb-6 px-3 overflow-x-auto no-scrollbar"
        >
          <div className="min-w-[680px] sm:min-w-full">
            
            {/* SVG Connecting Track Line */}
            <div className="relative flex items-center justify-between">
              <div className="absolute left-10 right-10 top-7 -translate-y-1/2 h-1 bg-[#eeecf5] -z-1 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#7b3fc7] via-[#9565d2] to-[#ff7a57]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(activeStageIndex / (stages.length - 1)) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>

              {/* 5 Continuous Journey Nodes */}
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeStageIndex === idx;
                const isPassed = activeStageIndex > idx;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className="relative flex flex-col items-center group focus:outline-none p-1"
                  >
                    {/* Node Dot / Icon Circle */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative z-10 ${
                        isActive
                          ? 'bg-[#7b3fc7] text-white shadow-xl shadow-[#7b3fc7]/30 scale-105 ring-4 ring-[#f2ecf9]'
                          : isPassed
                          ? 'bg-white border-2 border-[#7b3fc7] text-[#7b3fc7] shadow-xs'
                          : 'bg-white border-2 border-[#e1e1e5] text-[#adabb7] group-hover:border-[#7b3fc7]/40 group-hover:text-[#1c1636]'
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ff7a57] border-2 border-white shadow-xs" />
                      )}
                    </div>

                    {/* Step Label */}
                    <div className="mt-3 text-center">
                      <span className={`text-[10px] font-bold block uppercase tracking-wider ${
                        isActive ? 'text-[#7b3fc7]' : 'text-[#adabb7]'
                      }`}>
                        {stage.number} • {stage.title}
                      </span>
                      <span className={`text-xs font-bold block transition-colors ${
                        isActive ? 'text-[#1c1636]' : 'text-[#727272] group-hover:text-[#1c1636]'
                      }`}>
                        {stage.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* Dynamic Continuous Journey Viewport Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
        >
          <JourneyCanvas 
            activeStage={currentStage.id} 
            stageInfo={currentStage}
            onNext={handleNext}
            isLast={activeStageIndex === stages.length - 1}
          />
        </motion.div>

      </div>
    </section>
  );
}
