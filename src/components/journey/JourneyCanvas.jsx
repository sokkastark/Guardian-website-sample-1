import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitMerge, 
  UserCheck, 
  Search, 
  Send, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle,
  Activity, 
  FileCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Database,
  Building2,
  Calendar,
  Layers,
  ShieldCheck,
  Stethoscope,
  ChevronRight
} from 'lucide-react';

export default function JourneyCanvas({ activeStage, onNext }) {
  return (
    <div className="relative w-full rounded-3xl bg-white border border-[#e1e1e5] shadow-xl shadow-[#7b3fc7]/8 overflow-hidden">
      
      {/* Top Application Window Bar (Healthcare SaaS Chrome) */}
      <div className="bg-[#f8f6fc] px-5 sm:px-8 py-3.5 border-b border-[#eeecf5] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a57]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#9565d2]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#7b3fc7]/80" />
          </div>
          <span className="text-xs font-semibold text-[#1c1636] hidden sm:inline">
            Guardian Clinical Intelligence Engine
          </span>
          <span className="text-xs text-[#adabb7] hidden sm:inline">•</span>
          <span className="text-xs font-medium text-[#727272]">
            Patient: Eleanor Vance (ID: GHS-984210)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7b3fc7] animate-pulse" />
          <span className="text-xs font-semibold text-[#7b3fc7]">
            Real-Time Pipeline
          </span>
        </div>
      </div>

      {/* Main Viewport Content Area */}
      <div className="p-6 sm:p-8 lg:p-10 relative">
        <AnimatePresence mode="wait">
          
          {/* ================= STAGE 1: CONNECT ================= */}
          {activeStage === 'connect' && (
            <motion.div
              key="stage-connect"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#eeecf5] gap-2">
                <div>
                  <span className="text-xs font-bold text-[#7b3fc7] uppercase tracking-wider block mb-0.5">
                    Data Ingestion Tier
                  </span>
                  <h3 className="text-xl font-bold text-[#1c1636]">
                    Healthcare data sources come together.
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full self-start sm:self-auto border border-[#7b3fc7]/20">
                  4 Active Feeds Synchronized
                </span>
              </div>

              {/* 4 Multi-Source Streams */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Hospital EHRs', spec: 'HL7 / FHIR v4', status: 'Continuous Sync', desc: 'Inpatient & Ambulatory records', icon: Database },
                  { name: 'Adjudicated Claims', spec: 'X12 837 / 835', status: 'Latency Solved', desc: '90-day historic lag reconciled', icon: Layers },
                  { name: 'Diagnostic Labs', spec: 'LOINC / Discrete', status: 'Biometrics Streamed', desc: 'Real-time lab result tracking', icon: Activity },
                  { name: 'Hospital ADT Feeds', spec: 'HL7 v2.5 Events', status: 'Instant Alerts', desc: 'Emergency discharge notifications', icon: Building2 },
                ].map((feed) => {
                  const FeedIcon = feed.icon;
                  return (
                    <div
                      key={feed.name}
                      className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5] hover:border-[#7b3fc7]/40 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-white text-[#7b3fc7] shadow-xs">
                            <FeedIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-bold text-[#7b3fc7] bg-[#f2ecf9] px-2 py-0.5 rounded-full">
                            {feed.spec}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#1c1636] mb-1">{feed.name}</h4>
                        <p className="text-xs text-[#727272] mb-3">{feed.desc}</p>
                      </div>
                      <span className="text-xs font-semibold text-[#1c1636] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7]" />
                        {feed.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Flow Action Bar */}
              <div className="p-4 rounded-2xl bg-[#f2ecf9] border border-[#7b3fc7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white text-[#7b3fc7] shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1c1636] block">Multi-Source Stream Harmonization</span>
                    <span className="text-xs text-[#35304c]">Data standardized into Guardian's longitudinal patient picture</span>
                  </div>
                </div>
                <button
                  onClick={onNext}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-md shadow-[#7b3fc7]/20 transition-all shrink-0 active:scale-95"
                >
                  <span>Next: Understand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= STAGE 2: UNDERSTAND ================= */}
          {activeStage === 'understand' && (
            <motion.div
              key="stage-understand"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#eeecf5] gap-2">
                <div>
                  <span className="text-xs font-bold text-[#7b3fc7] uppercase tracking-wider block mb-0.5">
                    Longitudinal Master Chart
                  </span>
                  <h3 className="text-xl font-bold text-[#1c1636]">
                    Information becomes a more complete patient picture.
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full self-start sm:self-auto border border-[#7b3fc7]/20">
                  Single Source of Truth
                </span>
              </div>

              {/* Master Patient Header */}
              <div className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#eeecf5]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#7b3fc7] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-[#7b3fc7]/20">
                      EV
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-[#1c1636]">Eleanor Vance</h4>
                        <span className="text-xs text-[#727272]">68 yrs • Female • DOB: 1958-04-12</span>
                      </div>
                      <span className="text-xs font-semibold text-[#7b3fc7]">
                        Attributed Provider: Dr. Marcus Vance • Oakridge Family Health
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1c1636] bg-white px-3 py-1 rounded-full border border-[#e1e1e5]">
                    Medicare Advantage
                  </span>
                </div>

                {/* Synthesized Records Across 3 Care Settings */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-[#e1e1e5]">
                    <span className="text-[11px] font-semibold text-[#727272] uppercase block mb-1">Diagnoses List</span>
                    <span className="text-xs font-bold text-[#1c1636] block">Type 2 Diabetes • Hypertension</span>
                    <span className="text-[11px] text-[#7b3fc7]">Verified across 3 clinics</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-[#e1e1e5]">
                    <span className="text-[11px] font-semibold text-[#727272] uppercase block mb-1">Active Medications</span>
                    <span className="text-xs font-bold text-[#1c1636] block">Metformin 500mg • Lisinopril 20mg</span>
                    <span className="text-[11px] text-[#7b3fc7]">Reconciled without duplicates</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-[#e1e1e5]">
                    <span className="text-[11px] font-semibold text-[#727272] uppercase block mb-1">Latest Biomarkers</span>
                    <span className="text-xs font-bold text-[#1c1636] block">HbA1c: 7.8% • eGFR: 68 mL/min</span>
                    <span className="text-[11px] text-[#ff4312]">Persistence flagged for review</span>
                  </div>
                </div>
              </div>

              {/* Flow Action Bar */}
              <div className="p-4 rounded-2xl bg-[#f2ecf9] border border-[#7b3fc7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#35304c]">
                  Raw clinical encounters across disparate facilities are synthesized into one continuous record.
                </span>
                <button
                  onClick={onNext}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-md shadow-[#7b3fc7]/20 transition-all shrink-0 active:scale-95"
                >
                  <span>Next: Identify</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= STAGE 3: IDENTIFY (ELEVATED CLINICAL COCKPIT) ================= */}
          {activeStage === 'identify' && (
            <motion.div
              key="stage-identify"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Cockpit Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#eeecf5] gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#fff2ee] text-[#ff4312]">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#ff4312] uppercase tracking-wider block mb-0.5">
                      Clinical Intelligence Engine
                    </span>
                    <h3 className="text-xl font-bold text-[#1c1636]">
                      Meaningful opportunities are surfaced.
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#fff2ee] text-[#ff4312] border border-[#ff7a57]/30">
                    <span className="w-2 h-2 rounded-full bg-[#ff4312] animate-ping" />
                    2 High-Priority Interventions
                  </span>
                </div>
              </div>

              {/* Patient Opportunity Context Banner */}
              <div className="p-3.5 rounded-xl bg-[#f8f6fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#7b3fc7]" />
                  <span className="font-bold text-[#1c1636]">Eleanor Vance (GHS-984210)</span>
                  <span className="text-[#727272]">• Attributed: Oakridge Family Health</span>
                </div>
                <div className="flex items-center gap-3 font-medium text-[#727272]">
                  <span>CMS Risk Score: <strong className="text-[#1c1636]">1.42 (High)</strong></span>
                  <span>• Active Surveillance: <strong className="text-[#7b3fc7]">42 Measures</strong></span>
                </div>
              </div>

              {/* 2 Elevated Opportunity Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                
                {/* Opportunity 1: HEDIS Quality Measure Gap */}
                <div className="p-5 rounded-2xl bg-[#fffaf8] border border-[#ff7a57]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#fff2ee] text-[#ff4312]">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#ff4312] uppercase tracking-wider">
                          Quality Care Gap
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#ff4312] bg-white px-2.5 py-0.5 rounded-full border border-[#ff7a57]/30">
                        14 Months Overdue
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#1c1636] mb-1.5">
                      Diabetic Retinal Eye Exam (DRE)
                    </h4>
                    
                    <p className="text-xs text-[#35304c] leading-relaxed mb-3">
                      Patient has Type 2 Diabetes with no recorded retinal screening across hospital EHRs or network claims in 14 months.
                    </p>

                    <div className="p-3 rounded-xl bg-white border border-[#ff7a57]/20 text-xs space-y-1">
                      <div className="flex items-center justify-between text-[#727272]">
                        <span>Measure Benchmark:</span>
                        <strong className="text-[#1c1636]">HEDIS Measure #117</strong>
                      </div>
                      <div className="flex items-center justify-between text-[#727272]">
                        <span>Clinical Outcome:</span>
                        <span className="font-semibold text-[#ff4312]">Prevents Irreversible Vision Loss</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ff7a57]/20 flex items-center justify-between text-xs">
                    <span className="text-[#727272]">Scheduled Action:</span>
                    <span className="font-bold text-[#ff4312]">Assign Care Navigator Outreach</span>
                  </div>
                </div>

                {/* Opportunity 2: Risk Adjustment Recapture Gap */}
                <div className="p-5 rounded-2xl bg-[#faf7fd] border border-[#7b3fc7]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#f2ecf9] text-[#7b3fc7]">
                          <Activity className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#7b3fc7] uppercase tracking-wider">
                          Risk Recapture Flag
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#7b3fc7] bg-white px-2.5 py-0.5 rounded-full border border-[#7b3fc7]/30">
                        Documentation Gap
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#1c1636] mb-1.5">
                      Chronic Kidney Disease (CKD Stage II)
                    </h4>

                    <p className="text-xs text-[#35304c] leading-relaxed mb-3">
                      Diagnostic lab eGFR persistence verified across multiple labs; condition not yet documented in current calendar year visit.
                    </p>

                    <div className="p-3 rounded-xl bg-white border border-[#7b3fc7]/20 text-xs space-y-1">
                      <div className="flex items-center justify-between text-[#727272]">
                        <span>CMS Category:</span>
                        <strong className="text-[#1c1636]">CMS-HCC 138 (+0.237 RAF)</strong>
                      </div>
                      <div className="flex items-center justify-between text-[#727272]">
                        <span>Clinical Outcome:</span>
                        <span className="font-semibold text-[#7b3fc7]">Accurate Clinical Severity Profiling</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#7b3fc7]/20 flex items-center justify-between text-xs">
                    <span className="text-[#727272]">Scheduled Action:</span>
                    <span className="font-bold text-[#7b3fc7]">Pre-Encounter EHR Provider Alert</span>
                  </div>
                </div>

              </div>

              {/* Flow Action Bar */}
              <div className="p-4 rounded-2xl bg-[#f2ecf9] border border-[#7b3fc7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#35304c]">
                  Algorithmic surveillance transforms retrospective data into prioritized, actionable interventions.
                </span>
                <button
                  onClick={onNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-md shadow-[#7b3fc7]/25 transition-all shrink-0 active:scale-95"
                >
                  <span>Proceed to Step 04: Act</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= STAGE 4: ACT ================= */}
          {activeStage === 'act' && (
            <motion.div
              key="stage-act"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#eeecf5] gap-2">
                <div>
                  <span className="text-xs font-bold text-[#7b3fc7] uppercase tracking-wider block mb-0.5">
                    Operational Execution
                  </span>
                  <h3 className="text-xl font-bold text-[#1c1636]">
                    Healthcare teams can take action.
                  </h3>
                </div>
                <span className="text-xs font-semibold text-white bg-[#7b3fc7] px-3.5 py-1.5 rounded-full self-start sm:self-auto">
                  Care Workflows Dispatched
                </span>
              </div>

              {/* Dual Action Queues */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#7b3fc7] uppercase tracking-wider block mb-1">
                      Care Navigator Outreach
                    </span>
                    <h4 className="text-base font-bold text-[#1c1636] mb-2">
                      Patient Direct Engagement
                    </h4>
                    <p className="text-xs text-[#35304c] leading-relaxed mb-4">
                      Navigator contacts Eleanor Vance directly to resolve transportation barriers and schedule an in-network diabetic retinal evaluation.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#e1e1e5] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1c1636] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#7b3fc7]" />
                      Specialist Appointment
                    </span>
                    <span className="font-bold text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-0.5 rounded-md">
                      Confirmed Oct 14
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#fff2ee]/80 border border-[#ff7a57]/30 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#ff4312] uppercase tracking-wider block mb-1">
                      Risk Coder & Physician Prep
                    </span>
                    <h4 className="text-base font-bold text-[#1c1636] mb-2">
                      Pre-Encounter Documentation Packet
                    </h4>
                    <p className="text-xs text-[#35304c] leading-relaxed mb-4">
                      Certified Risk Coder compiles persistent lab evidence into provider prep notes ahead of the upcoming PCP visit.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#ff7a57]/20 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1c1636] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#ff4312]" />
                      Point-of-Care Alert
                    </span>
                    <span className="font-bold text-[#ff4312] bg-[#fff2ee] px-2.5 py-0.5 rounded-md">
                      Ready in EHR Queue
                    </span>
                  </div>
                </div>
              </div>

              {/* Flow Action Bar */}
              <div className="p-4 rounded-2xl bg-[#f2ecf9] border border-[#7b3fc7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#35304c]">
                  Human healthcare specialists and technology execute care plans in lockstep.
                </span>
                <button
                  onClick={onNext}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-md shadow-[#7b3fc7]/20 transition-all shrink-0 active:scale-95"
                >
                  <span>Next: Outcome</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= STAGE 5: OUTCOME ================= */}
          {activeStage === 'outcome' && (
            <motion.div
              key="stage-outcome"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#eeecf5] gap-2">
                <div>
                  <span className="text-xs font-bold text-[#7b3fc7] uppercase tracking-wider block mb-0.5">
                    Closed-Loop Result
                  </span>
                  <h3 className="text-xl font-bold text-[#1c1636]">
                    The effect of action can be measured.
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full self-start sm:self-auto border border-[#7b3fc7]/20">
                  Verified Result Recorded
                </span>
              </div>

              {/* Resolution Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-[#f2ecf9]/60 border border-[#7b3fc7]/30 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-[#7b3fc7] text-white shadow-md shadow-[#7b3fc7]/20">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1c1636]">
                        Diabetic Retinal Exam Completed & Closed
                      </h4>
                      <p className="text-xs text-[#727272]">
                        Encounter documented • Reconciled back into Patient Master Chart
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#7b3fc7] text-white self-start sm:self-auto shadow-xs">
                    Care Gap Closed
                  </span>
                </div>

                {/* 3 Outcome Impact Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#eeecf5] text-center">
                  <div className="bg-white p-4 rounded-xl border border-[#e1e1e5]">
                    <span className="text-[11px] font-semibold text-[#727272] uppercase block mb-1">Quality Measure</span>
                    <span className="text-lg font-bold text-[#7b3fc7] block">100% Compliant</span>
                    <span className="text-[11px] text-[#727272]">HEDIS Metric Attained</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#e1e1e5]">
                    <span className="text-[11px] font-semibold text-[#727272] uppercase block mb-1">Patient Safety</span>
                    <span className="text-lg font-bold text-[#1c1636] block">Protected</span>
                    <span className="text-[11px] text-[#727272]">Early Retinal Detection</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#e1e1e5]">
                    <span className="text-[11px] font-semibold text-[#727272] uppercase block mb-1">Value-Based Care</span>
                    <span className="text-lg font-bold text-[#ff7a57] block">Rewarded</span>
                    <span className="text-[11px] text-[#727272]">Shared Savings Accrued</span>
                  </div>
                </div>
              </div>

              {/* Flow Action Bar */}
              <div className="p-4 rounded-2xl bg-[#f2ecf9] border border-[#7b3fc7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#35304c]">
                  Continuous transformation accomplished: from raw data to an identified need, human coordination, and validated clinical outcomes.
                </span>
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-md shadow-[#7b3fc7]/20 transition-all shrink-0 active:scale-95"
                >
                  <span>Explore Platform</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
