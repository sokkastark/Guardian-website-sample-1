import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Clock, 
  EyeOff, 
  AlertOctagon, 
  Sparkles, 
  ArrowRight,
  Split,
  Layers,
  FileSpreadsheet,
  Activity,
  CheckCircle2
} from 'lucide-react';

export default function DataChallenge() {
  const [activeSilo, setActiveSilo] = useState(0);

  const silos = [
    {
      id: 'ehrs',
      name: 'Disparate EHRs',
      tag: '14+ Formats',
      status: 'Disconnected Trajectory',
      icon: Database,
      friction: 'Patient medical history split across incompatible hospital and clinic records.',
      guardianFix: 'Unified ingestion via FHIR & HL7 auto-mapping.',
      color: 'border-[#ff7a57]/40 bg-[#fff2ee]/70 text-[#ff4312]',
    },
    {
      id: 'claims',
      name: 'Adjudicated Claims',
      tag: '90-Day Lag',
      status: 'Retrospective Only',
      icon: FileSpreadsheet,
      friction: 'Financial billing codes arrive months too late for timely clinical intervention.',
      guardianFix: 'Reconciled with real-time encounter records for current insight.',
      color: 'border-[#ff7a57]/40 bg-[#fff2ee]/70 text-[#ff4312]',
    },
    {
      id: 'adt',
      name: 'Hospital ADT Feeds',
      tag: 'Real-Time Alerts',
      status: 'Unmatched Silos',
      icon: Activity,
      friction: 'Emergency discharges go unnoticed until patient is readmitted.',
      guardianFix: 'Instant patient identity matching with automated outreach queues.',
      color: 'border-[#ff7a57]/40 bg-[#fff2ee]/70 text-[#ff4312]',
    },
    {
      id: 'labs',
      name: 'Diagnostic Labs',
      tag: 'Raw Output',
      status: 'Uncorrelated Values',
      icon: Layers,
      friction: 'Lab values sit isolated without longitudinal trend tracking.',
      guardianFix: 'Automated clinical threshold alerts and chronic gap detection.',
      color: 'border-[#ff7a57]/40 bg-[#fff2ee]/70 text-[#ff4312]',
    },
  ];

  const frictionPillars = [
    {
      icon: EyeOff,
      title: 'Clinical Blind Spots',
      desc: 'Undocumented chronic conditions and open care gaps remain completely invisible until adverse events happen.',
    },
    {
      icon: Clock,
      title: 'Delayed Interventions',
      desc: 'Claims-lag causes care teams and physicians to react weeks or months after discharge.',
    },
    {
      icon: AlertOctagon,
      title: 'Administrative Burden',
      desc: 'Clinicians and coordinators lose countless hours manually hunting down records across disconnected portals.',
    },
  ];

  return (
    <section id="challenge" className="relative py-24 lg:py-32 bg-[#ede7f6] overflow-hidden border-t border-[#dcd4e8]">
      {/* Background ambient lighting and subtle data grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff7a57]/12 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[650px] h-[450px] bg-[#7b3fc7]/14 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#ff7a57]/30 text-[#ff4312] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#ff7a57] animate-ping" />
            <span>The Healthcare Data Challenge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight leading-tight mb-6">
            Healthcare data is everywhere.{' '}
            <span className="text-[#5e5873] block sm:inline">Making sense of it is the challenge.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#35304c] leading-relaxed font-normal">
            Healthcare organizations work across multiple systems, data sources, teams, and workflows. 
            The opportunity is not simply to collect more data — it is to connect the right information, 
            understand what it means, and make it useful for the people responsible for care and performance.
          </p>
        </motion.div>

        {/* Panoramic Interactive Data Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="relative rounded-3xl bg-white border border-[#dcd4e8] p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(28,22,54,0.08)] mb-16 overflow-hidden"
        >
          
          {/* Infographic Upper Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#eeecf5] gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#fff2ee] text-[#ff4312]">
                <Split className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1c1636]">
                  The Data Fragmentation Reality
                </h3>
                <p className="text-xs text-[#727272]">
                  Interactive flow: select a silo to inspect the operational friction and Guardian convergence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#fff2ee] text-[#ff4312] border border-[#ff7a57]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4312]" />
                Siloed State
              </span>
              <ArrowRight className="w-4 h-4 text-[#adabb7]" />
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#f2ecf9] text-[#7b3fc7] border border-[#7b3fc7]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7]" />
                Guardian Convergence
              </span>
            </div>
          </div>

          {/* Core Infographic Visualization Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Tier: Dispersed Silo Stream Nodes (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#adabb7] font-semibold block mb-2">
                Dispersed Healthcare Feeds
              </span>

              {silos.map((silo, idx) => {
                const Icon = silo.icon;
                const isSelected = activeSilo === idx;

                return (
                  <button
                    key={silo.id}
                    onClick={() => setActiveSilo(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border relative group focus:outline-none flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-[#ff7a57] shadow-lg shadow-[#ff7a57]/15 translate-x-1 sm:translate-x-2'
                        : 'bg-[#f8f6fc]/80 hover:bg-white border-[#e1e1e5] hover:border-[#ff7a57]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                        isSelected ? 'bg-[#ff7a57] text-white shadow-sm' : 'bg-white border border-[#e1e1e5] text-[#35304c]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-[#1c1636] truncate">{silo.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#fff2ee] text-[#ff4312] border border-[#ff7a57]/20 font-semibold shrink-0">
                            {silo.tag}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#727272] block truncate">
                          {silo.status}
                        </span>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#ff4312] translate-x-1' : 'text-[#adabb7] group-hover:text-[#ff7a57]'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Middle & Right Tier: Interactive Convergence Prism (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#fbfafd] to-[#f4f0fa] border border-[#e1e1e5] p-6 sm:p-8 overflow-hidden shadow-inner">
                
                {/* Visual SVG Data Flow Lines */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7b3fc7]/8 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Active Silo Deep-Dive */}
                  <div className="bg-white p-5 rounded-2xl border border-[#ff7a57]/25 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase font-bold text-[#ff4312] tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#ff4312]" />
                        Identified Silo Impact: {silos[activeSilo].name}
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#727272] bg-[#f8f6fc] px-2.5 py-0.5 rounded-full">
                        {silos[activeSilo].tag}
                      </span>
                    </div>
                    <p className="text-sm text-[#1c1636] font-medium leading-relaxed mb-4">
                      {silos[activeSilo].friction}
                    </p>

                    {/* The Guardian Resolution */}
                    <div className="p-3.5 rounded-xl bg-[#f2ecf9] border border-[#7b3fc7]/20 flex items-start gap-3">
                      <div className="p-1 rounded-md bg-[#7b3fc7] text-white shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-[#7b3fc7] block mb-0.5">
                          Guardian Resolution
                        </span>
                        <span className="text-xs text-[#35304c] font-medium leading-relaxed block">
                          {silos[activeSilo].guardianFix}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Diagram Connector */}
                  <div className="flex items-center justify-between text-xs text-[#adabb7] px-2">
                    <span className="font-mono">Incompatible Raw Streams</span>
                    <span className="flex items-center gap-1 text-[#7b3fc7] font-semibold">
                      Normalized Ingestion Pipeline <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                    </span>
                  </div>

                  {/* Guardian Unified Master Chart Convergence Card */}
                  <div className="bg-white p-5 rounded-2xl border border-[#7b3fc7]/30 shadow-md flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-[#7b3fc7] text-white shadow-md shadow-[#7b3fc7]/20">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#1c1636]">
                          The Longitudinal Patient Master Chart
                        </h4>
                        <p className="text-xs text-[#727272]">
                          Single source of truth synthesizing all facilities, labs, and care teams
                        </p>
                      </div>
                    </div>

                    <a
                      href="#journey"
                      className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:text-[#9565d2] shrink-0"
                    >
                      <span>See Journey</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 3 Real Friction Pillars: Streamlined Visual Infographic Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frictionPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: 'easeOut' }}
                className="bg-white p-6 rounded-2xl border border-[#dcd4e8] hover:border-[#ff7a57] shadow-[0_8px_24px_rgba(28,22,54,0.06)] hover:shadow-[0_16px_36px_rgba(28,22,54,0.12)] transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#fff2ee] text-[#ff7a57] group-hover:bg-[#ff7a57] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1c1636] tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#35304c] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
