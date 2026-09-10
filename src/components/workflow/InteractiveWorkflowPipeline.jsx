import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function InteractiveWorkflowPipeline({
  steps = [],
  contextType = 'default',
  _category = 'Solutions',
  title = 'Workflow'
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!steps || steps.length === 0) return null;

  const currentStep = steps[activeIdx] || steps[0];

  // Helper to render contextual demo content in the simulated preview pane
  const renderSimulatedContent = () => {
    switch (contextType) {
      case 'patient-intelligence':
        return renderPatientMasterChart(activeIdx, currentStep);
      case 'care-management':
        return renderCareManagementPreview(activeIdx, currentStep);
      case 'risk-adjustment':
        return renderRiskAdjustmentPreview(activeIdx, currentStep);
      case 'population-health':
        return renderPopulationHealthPreview(activeIdx, currentStep);
      case 'quality-performance':
        return renderQualityPreview(activeIdx, currentStep);
      case 'data-integration':
        return renderDataIntegrationPreview(activeIdx, currentStep);
      case 'providers':
        return renderProviderWorklistPreview(activeIdx, currentStep);
      case 'payers':
        return renderPayerNetworkPreview(activeIdx, currentStep);
      case 'services':
        return renderServicesModelPreview(activeIdx, currentStep);
      default:
        return renderDefaultWorkflowPreview(activeIdx, currentStep, title);
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-[#e1e1e5] shadow-xl shadow-[#1c1636]/5 overflow-hidden">
      
      {/* Simulation Top Bar */}
      <div className="bg-[#1c1636] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-purple-200/80 border-l border-white/15 pl-3">
            Guardian Platform // {title}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-purple-200 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Conceptual Platform Simulation · Demo Data
          </span>
          <span className="text-purple-300/80 font-mono hidden sm:inline">
            Step {activeIdx + 1} of {steps.length}
          </span>
        </div>
      </div>

      {/* Main Split Layout: Left Stepper Rail | Right Interactive Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#e1e1e5]">
        
        {/* Left Interactive Stepper Rail */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-[#faf9fc] flex flex-col justify-center space-y-2">
          <div className="flex items-center justify-between px-3 mb-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#adabb7] font-semibold">
              Data to Action Progression
            </p>
            <span className="text-[10px] text-[#7b3fc7] font-medium hidden sm:inline">
              Click any stage
            </span>
          </div>

          {steps.map((s, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={s.step || s.title || idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3fc7] cursor-pointer ${
                  isActive
                    ? 'bg-white shadow-md shadow-[#7b3fc7]/8 border-l-4 border-l-[#7b3fc7] border-y border-r border-[#e1e1e5]'
                    : 'hover:bg-white/60 text-[#727272] border border-transparent'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors ${
                    isActive
                      ? 'bg-[#7b3fc7] text-white shadow-sm shadow-[#7b3fc7]/30'
                      : 'bg-[#f2ecf9] text-[#7b3fc7]'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-sm font-bold tracking-tight ${
                        isActive ? 'text-[#1c1636]' : 'text-[#35304c]'
                      }`}
                    >
                      {s.step || s.title}
                    </p>
                    {isActive && (
                      <span className="text-[10px] font-mono text-[#7b3fc7] font-semibold uppercase tracking-wider bg-[#f2ecf9] px-2 py-0.5 rounded">
                        Simulating
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#727272] mt-1 line-clamp-2 leading-relaxed font-normal">
                    {s.description || s.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Live Workflow Preview Pane */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx + contextType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="space-y-6"
            >
              {renderSimulatedContent()}
            </motion.div>
          </AnimatePresence>

          {/* Stepper Navigation Footer */}
          <div className="pt-6 mt-6 border-t border-[#e1e1e5] flex items-center justify-between text-xs text-[#727272]">
            <div className="flex items-center gap-2">
              <span className="text-[#adabb7] font-mono">Current Stage:</span>
              <span className="px-2.5 py-1 rounded-md bg-[#faf9fc] border border-[#e1e1e5] font-semibold text-[#1c1636]">
                {currentStep.step || currentStep.title}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                className="px-3.5 py-1.5 rounded-lg border border-[#e1e1e5] text-[#35304c] hover:bg-[#faf9fc] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors font-medium text-xs"
              >
                Previous
              </button>
              <button
                disabled={activeIdx === steps.length - 1}
                onClick={() => setActiveIdx((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-3.5 py-1.5 rounded-lg bg-[#7b3fc7] text-white hover:bg-[#9565d2] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors font-medium text-xs shadow-xs"
              >
                Next Step →
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 1: PATIENT INTELLIGENCE (Patient Master Chart)
   ───────────────────────────────────────────────────────────────────────────── */
function renderPatientMasterChart(idx, step) {
  // Stage-specific content for the Patient Master Chart
  const stages = [
    {
      badge: 'Data Aggregation Active',
      headline: 'Ingesting Multi-Source Patient Records',
      summary: 'Aggregating ambulatory encounters, inpatient admissions, and pharmacy claims across disparate EHR sites.',
      details: [
        { label: 'Ingested Streams', value: 'Ambulatory EHR, Inpatient ADT, Claims File' },
        { label: 'Identity Resolution', value: 'Master Patient Index (MPI) Matched' },
        { label: 'Record Status', value: 'Aggregated Without Encounter Silos' }
      ],
      actionBox: 'Ingestion pipeline synchronized: 3 clinical sources unified into longitudinal profile.'
    },
    {
      badge: 'Master Record Synthesized',
      headline: 'Unified Longitudinal Patient Profile',
      summary: 'Organizing disparate clinical events into a single, comprehensive patient timeline.',
      details: [
        { label: 'Historical Span', value: 'Multi-Year Clinical Encounter History' },
        { label: 'Problem List', value: 'Synthesized and Reconciled Across Care Sites' },
        { label: 'Medication Roster', value: 'Cross-Encounter Drug Reconciliation Complete' }
      ],
      actionBox: 'Chronological timeline assembled: Fragmented history replaced with unified clinical view.'
    },
    {
      badge: 'Clinical Opportunities Detected',
      headline: 'Care Opportunity & Documentation Scan',
      summary: 'Scanning unified longitudinal record to surface open preventive opportunities and documentation needs.',
      details: [
        { label: 'Preventive Care Opportunity', value: 'Annual Wellness Screening Overdue' },
        { label: 'Chronic Documentation', value: 'Historical Condition Requiring Re-Assessment' },
        { label: 'Clinical Context', value: 'Cross-referenced against recent encounter notes' }
      ],
      actionBox: 'Opportunities surfaced automatically for clinical care team review.'
    },
    {
      badge: 'Worklist Stratified',
      headline: 'Clinical Prioritization & Queue Routing',
      summary: 'Ranking opportunities by clinical urgency and routing to the designated care team worklist.',
      details: [
        { label: 'Urgency Tier', value: 'High Impact Clinical Follow-up' },
        { label: 'Assigned Worklist', value: 'Attributed Primary Care Team Queue' },
        { label: 'Encounter Alignment', value: 'Prepped for Upcoming Scheduled Visit' }
      ],
      actionBox: 'Opportunity assigned to primary care coordinator and physician schedule.'
    },
    {
      badge: 'Point-of-Care Action',
      headline: 'Frontline Clinical Encounter Prep',
      summary: 'Delivering synthesized patient context and actionable alerts directly into clinical workflow.',
      details: [
        { label: 'Provider Briefing', value: '1-Page Clinical Encounter Summary Ready' },
        { label: 'Care Coordinator Action', value: 'Patient Outreach Protocol Dispatched' },
        { label: 'Care Plan Alignment', value: 'Preventive Measure Scheduled with Patient' }
      ],
      actionBox: 'Workflow executed: Care coordinator confirmed appointment and prep.'
    },
    {
      badge: 'Longitudinal Measurement',
      headline: 'Care Continuity & Closure Tracking',
      summary: 'Monitoring completed actions, updating the longitudinal record, and confirming measure compliance.',
      details: [
        { label: 'Encounter Outcome', value: 'Annual Wellness Assessment Completed' },
        { label: 'Opportunity Status', value: 'Closed & Documented in Master Chart' },
        { label: 'Quality Ledger', value: 'Performance Metric Satisfied for Attribution Year' }
      ],
      actionBox: 'Master chart updated in real time. Longitudinal continuity maintained.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      {/* Patient Header Card */}
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f2ecf9] text-[#7b3fc7] font-bold flex items-center justify-center text-sm font-mono shadow-xs">
            PMC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-[#1c1636]">Patient Record #PMC-8429</h4>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
                Patient Master Chart
              </span>
            </div>
            <p className="text-xs text-[#727272]">Attributed Cohort · Longitudinal Profile Active</p>
          </div>
        </div>
        <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
          Unified Profile
        </span>
      </div>

      {/* Dynamic Stage Preview Card */}
      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        {/* Structured Data Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Simulation Note */}
        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.actionBox}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 2: CARE MANAGEMENT (Patient + Care Plan)
   ───────────────────────────────────────────────────────────────────────────── */
function renderCareManagementPreview(idx, step) {
  const stages = [
    {
      badge: 'Cohort Identification',
      headline: 'Patient Intake & Admission Notification',
      summary: 'Connecting hospital event feeds and primary care referrals to identify patients requiring active coordination.',
      details: [
        { label: 'Trigger Event', value: 'Post-Acute Discharge Alert' },
        { label: 'Attributed Provider', value: 'Primary Care Medical Group' },
        { label: 'Care Status', value: 'Transitional Care Management Needed' }
      ],
      action: 'Patient automatically placed in care coordinator intake queue.'
    },
    {
      badge: 'Holistic Synthesis',
      headline: 'Patient Assessment & Barrier Analysis',
      summary: 'Assembling complete medical, behavioral, and social determinant context to establish an individual baseline.',
      details: [
        { label: 'Clinical Assessment', value: 'Chronic Condition Management Plan' },
        { label: 'Social Factors', value: 'Transportation Support Identified' },
        { label: 'Care Team', value: 'Dedicated Care Manager Assigned' }
      ],
      action: 'Biopsychosocial care plan draft created with customized goals.'
    },
    {
      badge: 'Risk Signal Detected',
      headline: 'Care Gap & Medication Review',
      summary: 'Highlighting high-risk medication reconciliation needs and open clinical touchpoints.',
      details: [
        { label: 'Prescription Gap', value: 'Post-Discharge Med Reconciliation Due' },
        { label: 'Specialist Follow-Up', value: 'Cardiology Consultation Required' },
        { label: 'Risk Tier', value: 'Moderate-to-High Transitional Acuity' }
      ],
      action: 'Care gaps highlighted with clear action protocols for coordinator.'
    },
    {
      badge: 'Worklist Stratified',
      headline: 'Coordinated Outreach Prioritization',
      summary: 'Sorting patients by clinical vulnerability to ensure time-sensitive outreach occurs within 48 hours.',
      details: [
        { label: 'Priority Ranking', value: 'High Priority (Within 48h Protocol)' },
        { label: 'Outreach Channel', value: 'Phone & Patient Portal Engagement' },
        { label: 'Care Plan Target', value: 'Prevent Avoidable Emergency Re-Visit' }
      ],
      action: 'Scheduled on care manager daily task list.'
    },
    {
      badge: 'Action in Motion',
      headline: 'Frontline Care Team Engagement',
      summary: 'Care manager connects with patient, reviews discharge instructions, and confirms post-discharge appointment.',
      details: [
        { label: 'Patient Touchpoint', value: 'Telephonic Outreach Completed' },
        { label: 'Transportation', value: 'Ride Assistance Coordinated for Clinic' },
        { label: 'Med Reconciliation', value: 'Clinician Validated Medication List' }
      ],
      action: 'Patient engaged: 7-day follow-up clinic visit confirmed.'
    },
    {
      badge: 'Outcome Verified',
      headline: 'Readmission Mitigation & Goal Closure',
      summary: 'Measuring 30-day care stability, evaluating care plan goal achievement, and reporting performance.',
      details: [
        { label: '30-Day Status', value: 'Avoidable Readmission Successfully Mitigated' },
        { label: 'Care Plan Goals', value: '85% Milestones Achieved' },
        { label: 'Program Outcome', value: 'Stepped Down to Maintenance Monitoring' }
      ],
      action: 'Care coordination episode closed successfully in platform registry.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">Care Plan Queue #CP-2041</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
              Care Management
            </span>
          </div>
          <p className="text-xs text-[#727272]">Patient: Demo Record #PMC-8429 · Assigned Coordinator: Team Alpha</p>
        </div>
        <span className="text-xs font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-full border border-[#d6cde2] font-medium">
          Active Care Episode
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 3: RISK ADJUSTMENT (Patient + Risk/Coding Context)
   ───────────────────────────────────────────────────────────────────────────── */
function renderRiskAdjustmentPreview(idx, step) {
  const stages = [
    {
      badge: 'Clinical Data Stream',
      headline: 'Multi-Facility Chart & Claim Aggregation',
      summary: 'Ingesting progress notes, specialist consults, and diagnostic claims across all network clinics.',
      details: [
        { label: 'Chart Source', value: 'Multi-Site Ambulatory & Hospital Feeds' },
        { label: 'Documentation Span', value: 'Trailing 12-Month Encounter Records' },
        { label: 'Ingestion Status', value: 'Processed & Normalized for Review' }
      ],
      action: 'Records staged in certified coder review workspace.'
    },
    {
      badge: 'Synthesized History',
      headline: 'Longitudinal Clinical Timeline Synthesis',
      summary: 'Reconciling historical documentation into an organized, chronological clinical review view.',
      details: [
        { label: 'Historical Conditions', value: 'Multi-Encounter Problem List' },
        { label: 'Lab Corroboration', value: 'Diagnostic Lab Tests Cross-Referenced' },
        { label: 'Chronology', value: 'Structured by Encounter Date & Specialty' }
      ],
      action: 'Complete clinical context prepared for documentation evaluation.'
    },
    {
      badge: 'Opportunity Surfaced',
      headline: 'Clinical Opportunity & Suspect Signal Detection',
      summary: 'Identifying conditions documented historically that require annual clinical assessment and coding validation.',
      details: [
        { label: 'Opportunity Detected', value: 'Chronic Condition Suspect Flag' },
        { label: 'Documentation Basis', value: 'Historical Medication & Progress Note Text' },
        { label: 'Review Requirement', value: 'Physician Point-of-Care Assessment' }
      ],
      action: 'Suspect opportunity queued for coder and provider validation.'
    },
    {
      badge: 'Review Prioritization',
      headline: 'Certified Coder Worklist Prioritization',
      summary: 'Sorting review tasks by audit confidence, documentation strength, and upcoming appointment schedules.',
      details: [
        { label: 'Coder Worklist', value: 'Pre-Encounter Review Priority Tier 1' },
        { label: 'Audit Standard', value: 'Official Coding Guidelines Alignment' },
        { label: 'Scheduled Encounter', value: 'Attributed Provider Visit Next Week' }
      ],
      action: 'Coder confirms documentation evidence ahead of patient visit.'
    },
    {
      badge: 'Point-of-Care Summary',
      headline: 'Provider Encounter Briefing & Documentation',
      summary: 'Supplying attending clinician with pre-visit documentation summary to ensure accurate clinical assessment.',
      details: [
        { label: 'Clinical Summary', value: 'Point-of-Care Context Card Prepared' },
        { label: 'Clinician Action', value: 'Condition Evaluated & Documented in EHR' },
        { label: 'Coder Verification', value: 'Post-Visit Documentation Matched' }
      ],
      action: 'Accurate clinical diagnosis documented with appropriate medical specificity.'
    },
    {
      badge: 'Compliance Verified',
      headline: 'Audit-Ready Documentation & Performance Ledger',
      summary: 'Validating that submitted documentation meets all regulatory and audit-readiness standards.',
      details: [
        { label: 'Audit Readiness', value: 'Complete Substantiating Documentation' },
        { label: 'Risk Profile Accuracy', value: 'Validated for Measurement Year' },
        { label: 'Quality Assurance', value: '100% Coder Peer Review Completed' }
      ],
      action: 'Accurate risk profile recorded with full audit integrity.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">Risk Documentation Queue #RA-802</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
              Risk Adjustment
            </span>
          </div>
          <p className="text-xs text-[#727272]">Batch #2026-Q1 · Coder Validation Queue · Audit Ready</p>
        </div>
        <span className="text-xs font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-full border border-[#d6cde2] font-medium">
          Audit-Ready Workflow
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 4: POPULATION HEALTH (Population Overview & Stratification)
   ───────────────────────────────────────────────────────────────────────────── */
function renderPopulationHealthPreview(idx, step) {
  const stages = [
    {
      badge: 'Network Aggregation',
      headline: 'Multi-Practice Population Ingestion',
      summary: 'Ingesting claims, eligibility files, and clinical encounters across the complete attributed patient population.',
      details: [
        { label: 'Attributed Network', value: '42 Medical Practices Connected' },
        { label: 'Patient Universe', value: 'Unified Cross-Payer Population' },
        { label: 'Data Latency', value: 'Continuous Daily Synchronization' }
      ],
      action: 'Enterprise data layer unified across network providers.'
    },
    {
      badge: 'Attribution Engine',
      headline: 'Patient-to-Provider Attribution Matching',
      summary: 'Aligning patients with primary care practices using transparent attribution algorithms.',
      details: [
        { label: 'Attribution Status', value: '98.4% Members Attributed to PCP' },
        { label: 'Network Integrity', value: 'Out-of-Network Utilization Monitored' },
        { label: 'Cohort Baseline', value: 'Chronic Disease Prevalence Calculated' }
      ],
      action: 'Accurate attribution rosters distributed to medical groups.'
    },
    {
      badge: 'Stratification Complete',
      headline: 'Multi-Tier Risk Cohort Segmentation',
      summary: 'Segmenting population into low, rising, and high-complexity tiers to identify actionable clinical cohorts.',
      details: [
        { label: 'Rising-Risk Cohort', value: 'Early Intervention Group Identified' },
        { label: 'High Complexity', value: 'Multi-Chronic Disease Management Tier' },
        { label: 'Preventive Cohort', value: 'Routine Health Maintenance Targets' }
      ],
      action: 'Risk tiers mapped with dedicated clinical intervention strategies.'
    },
    {
      badge: 'Resource Prioritization',
      headline: 'Intervention Resource Allocation',
      summary: 'Targeting care management resources toward cohorts where timely intervention delivers highest clinical impact.',
      details: [
        { label: 'Targeting Focus', value: 'Rising-Risk Diabetic & Hypertensive' },
        { label: 'Capacity Allocation', value: 'Care Coordinator Workloads Balanced' },
        { label: 'Practice Ranking', value: 'Practice-Level Opportunity Scores Generated' }
      ],
      action: 'Practice worklists organized by highest health improvement yield.'
    },
    {
      badge: 'Network Campaign Active',
      headline: 'Frontline Practice Worklist Dispatch',
      summary: 'Equipping clinic teams and navigators with targeted patient lists for wellness visits and chronic follow-up.',
      details: [
        { label: 'Dispatched Lists', value: '42 Clinic Rosters Delivered' },
        { label: 'Outreach Protocol', value: 'Care Coordinator Phone & Message Campaign' },
        { label: 'Schedule Saturation', value: 'Wellness Visit Schedules Optimized' }
      ],
      action: 'Frontline clinics executing personalized patient outreach.'
    },
    {
      badge: 'Performance Analytics',
      headline: 'Network Trend & Outcomes Dashboard',
      summary: 'Tracking total cost of care trends, hospitalization reduction, and preventive screening adherence.',
      details: [
        { label: 'ED Utilization', value: 'Reduction Trend Monitored' },
        { label: 'Preventive Screenings', value: 'Significant Uptick in Annual Wellness' },
        { label: 'Network Performance', value: 'Value-Based Contract Milestones On Track' }
      ],
      action: 'Executive and clinical scorecards published for network leadership.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">Population Overview & Risk Stratification</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
              Population Health
            </span>
          </div>
          <p className="text-xs text-[#727272]">Attributed Network Dashboard · Multi-Practice Cohort View</p>
        </div>
        <span className="text-xs font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-full border border-[#d6cde2] font-medium">
          Multi-Cohort Visibility
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 5: QUALITY & PERFORMANCE (Quality Opportunity Monitor)
   ───────────────────────────────────────────────────────────────────────────── */
function renderQualityPreview(idx, step) {
  const stages = [
    {
      badge: 'Measure Specifications',
      headline: 'Standardized Measure Ingestion',
      summary: 'Ingesting clinical quality measure definitions and administrative encounter specifications.',
      details: [
        { label: 'Quality Frameworks', value: 'Value-Based Program Measure Catalog' },
        { label: 'Specification Engine', value: 'Clinical & Administrative Logic Loaded' },
        { label: 'Update Frequency', value: 'Synchronized with Annual Standards' }
      ],
      action: 'Measure rule engine initialized across provider rosters.'
    },
    {
      badge: 'Eligible Population',
      headline: 'Denominator Population Calculation',
      summary: 'Evaluating patient rosters to determine active denominators for each quality measure.',
      details: [
        { label: 'Attributed Patients', value: 'Eligible Denominators Calculated' },
        { label: 'Exclusion Filters', value: 'Clinical Contraindications Screened' },
        { label: 'Measurement Window', value: 'Active Performance Year Evaluated' }
      ],
      action: 'Eligible population rosters verified across clinical sites.'
    },
    {
      badge: 'Care Gaps Flagged',
      headline: 'Open Quality Opportunity Detection',
      summary: 'Identifying patients due for screenings, diabetic eye exams, blood pressure control, and immunizations.',
      details: [
        { label: 'Screening Gaps', value: 'Colorectal & Breast Screenings Due' },
        { label: 'Chronic Monitoring', value: 'Blood Pressure & Diabetes Gaps Flagged' },
        { label: 'Opportunity Pool', value: 'Quantified by Practice and Provider' }
      ],
      action: 'Care gaps cataloged for clinic and care coordinator attention.'
    },
    {
      badge: 'Impact Prioritization',
      headline: 'Prioritized Gap Closure Worklists',
      summary: 'Sorting gap closures by clinic schedule and contract weighting to maximize health outcomes and scores.',
      details: [
        { label: 'Priority Tier', value: 'Patients with Upcoming Scheduled Visits' },
        { label: 'Measure Weight', value: 'High-Impact Clinical Quality Measures' },
        { label: 'Action Route', value: 'Direct Notification to Medical Assistant' }
      ],
      action: 'Daily clinic appointment schedule flagged with open gap checklist.'
    },
    {
      badge: 'Point-of-Care Alert',
      headline: 'Frontline Provider & Staff Gap Closure',
      summary: 'Delivering clear, non-intrusive gap reminders at the moment of care, supported by patient outreach.',
      details: [
        { label: 'Clinical Reminder', value: 'Surfaced During Rooming & Vital Check' },
        { label: 'Order Assistance', value: 'Lab / Imaging Order Placed in EHR' },
        { label: 'Outreach Follow-up', value: 'Navigator Contacted Unscheduled Patients' }
      ],
      action: 'Clinical team completed screening order during encounter.'
    },
    {
      badge: 'Ledger Updated',
      headline: 'Performance Scorecard & Star Projections',
      summary: 'Tracking real-time numerator updates, projected Star ratings, and quality incentive earnings.',
      details: [
        { label: 'Gap Status', value: 'Numerator Documented & Closed' },
        { label: 'Score Projection', value: 'Performance Quartile Advanced' },
        { label: 'Incentive Ledger', value: 'Value-Based Target Milestones Achieved' }
      ],
      action: 'Measure closed in longitudinal record and performance registry.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">Quality Opportunity Monitor</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
              Quality & Performance
            </span>
          </div>
          <p className="text-xs text-[#727272]">Performance Gap Tracking · Value-Based Measure Hub</p>
        </div>
        <span className="text-xs font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-full border border-[#d6cde2] font-medium">
          Measure Readiness
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 6: DATA INTEGRATION (Unified Data Pipeline)
   ───────────────────────────────────────────────────────────────────────────── */
function renderDataIntegrationPreview(idx, step) {
  const stages = [
    {
      badge: 'Feed Connected',
      headline: 'Multi-Source Healthcare Ingestion',
      summary: 'Connecting disparate EHR systems, ADT hospitalization feeds, and administrative claims files.',
      details: [
        { label: 'Feeds Connected', value: 'Ambulatory EHR, Hospital ADT, Claims' },
        { label: 'Ingestion Mode', value: 'Continuous Streaming & Batch Feeds' },
        { label: 'Security Standard', value: 'Enterprise Healthcare Compliant' }
      ],
      action: 'Data ingestion streams active and monitored.'
    },
    {
      badge: 'MPI Identity Matched',
      headline: 'Semantic Normalization & Identity Matching',
      summary: 'Harmonizing varied clinical codes and resolving patient identities across disparate healthcare databases.',
      details: [
        { label: 'MPI Match Rate', value: 'Deterministic & Probabilistic Index' },
        { label: 'Semantic Standard', value: 'Clinical Terminology Normalization' },
        { label: 'Deduplication', value: 'Redundant Records Merged Cleanly' }
      ],
      action: 'Master patient identity established across all data streams.'
    },
    {
      badge: 'Data Audit Verified',
      headline: 'Data Completeness & Anomaly Detection',
      summary: 'Auditing ingested records for missing demographic elements, coding irregularities, and feed interruptions.',
      details: [
        { label: 'Data Integrity', value: 'Field-Level Completeness Verification' },
        { label: 'Anomaly Alerting', value: 'Automated Feed Discrepancy Checks' },
        { label: 'Data Quality Score', value: 'High Confidence Clinical Ingestion' }
      ],
      action: 'Quality audit passed: clean dataset staged for downstream services.'
    },
    {
      badge: 'Queue Prioritized',
      headline: 'Real-Time Event Routing & Alert Triage',
      summary: 'Prioritizing time-critical events—such as emergency department admissions—for instant clinical notification.',
      details: [
        { label: 'Critical Stream', value: 'Emergency & Inpatient Discharge Feeds' },
        { label: 'Triage Priority', value: 'Immediate Clinical Care Routing' },
        { label: 'Batch Processing', value: 'Standard Claims Staged for Analytics' }
      ],
      action: 'Discharge events routed to frontline care managers within minutes.'
    },
    {
      badge: 'Platform Dispatched',
      headline: 'Application Suite & Clinical API Delivery',
      summary: 'Delivering unified clinical records to Guardian intelligence modules and client downstream applications.',
      details: [
        { label: 'Destination Modules', value: 'Patient Master Chart, Care Management' },
        { label: 'Data Freshness', value: 'Real-Time Synchronized' },
        { label: 'Workflow Ready', value: 'Available at Provider Point-of-Care' }
      ],
      action: 'Clean records successfully served to frontline clinical tools.'
    },
    {
      badge: 'Telemetry Active',
      headline: 'Pipeline Latency & Reliability Metrics',
      summary: 'Monitoring stream uptime, transaction throughput, and data freshness across all connected partners.',
      details: [
        { label: 'Stream Latency', value: 'Low Latency Ingestion Verified' },
        { label: 'System Uptime', value: 'Enterprise High Availability' },
        { label: 'Audit Trail', value: 'Full Transaction Traceability Maintained' }
      ],
      action: 'Continuous telemetry confirms operational reliability.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">Unified Data Pipeline</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
              Data Integration
            </span>
          </div>
          <p className="text-xs text-[#727272]">Multi-Source Healthcare Interoperability · Master Record Pipeline</p>
        </div>
        <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
          Streams Active
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 7: PROVIDERS (Care Team Worklist)
   ───────────────────────────────────────────────────────────────────────────── */
function renderProviderWorklistPreview(idx, step) {
  const stages = [
    {
      badge: 'EHR Connection',
      headline: 'Practice Integration Without Workflow Disruption',
      summary: 'Connecting clinic electronic health records and billing feeds without altering frontline provider routines.',
      details: [
        { label: 'Integration Impact', value: 'Zero Practice Downtime' },
        { label: 'EHR Compatibility', value: 'Compatible With Leading Ambulatory EHRs' },
        { label: 'Clinical Flow', value: 'Integrated into Routine Provider Day' }
      ],
      action: 'Practice feeds synchronized with Guardian platform.'
    },
    {
      badge: 'Patient Synthesis',
      headline: 'Pre-Visit Longitudinal Briefing',
      summary: 'Assembling cross-facility history, outside specialist visits, and recent hospital encounters for each patient.',
      details: [
        { label: 'Longitudinal View', value: 'Outside Records Synthesized' },
        { label: 'Prep Time Saved', value: 'Reduced Manual Chart Review Time' },
        { label: 'Provider Focus', value: 'Clinical Context Summarized on 1 Screen' }
      ],
      action: 'Point-of-care summary ready for scheduled morning clinic.'
    },
    {
      badge: 'Care Opportunity',
      headline: 'Point-of-Care Opportunity Identification',
      summary: 'Highlighting open preventive screenings, chronic lab renewals, and documentation gaps prior to rooming.',
      details: [
        { label: 'Identified Needs', value: 'Overdue Preventive Lab & Screening' },
        { label: 'Documentation Flag', value: 'Condition Evaluation Required' },
        { label: 'Team Notification', value: 'Medical Assistant Order Checklist Ready' }
      ],
      action: 'Clinical staff alerted during patient intake.'
    },
    {
      badge: 'Daily Prioritization',
      headline: 'Schedule Prioritization & Patient Handoffs',
      summary: 'Annotating provider appointment schedule to focus team attention on patients with complex care needs.',
      details: [
        { label: 'Daily Schedule', value: 'Priority Annotations on Patient List' },
        { label: 'Team Roles', value: 'Coordinator Assigned to High-Risk Visits' },
        { label: 'Workflow Efficiency', value: 'Targeted Action Before Patient Leaves' }
      ],
      action: 'Care team aligned on visit priorities.'
    },
    {
      badge: 'Encounter Execution',
      headline: 'Seamless Clinical Documentation & Order Completion',
      summary: 'Physician conducts visit with clear decision support; staff coordinates orders and scheduled follow-ups.',
      details: [
        { label: 'Visit Outcome', value: 'Screening Ordered & Condition Documented' },
        { label: 'Care Coordination', value: 'Navigator Handed Follow-up Referral' },
        { label: 'Documentation', value: 'Complete Clinical Specificity Recorded' }
      ],
      action: 'Encounter concluded with 100% care gap addressal.'
    },
    {
      badge: 'Value Scorecard',
      headline: 'Practice Value-Based Performance Tracking',
      summary: 'Monitoring practice quality score progression, patient satisfaction, and shared savings milestones.',
      details: [
        { label: 'Practice Score', value: 'Value-Based Quality Targets Advanced' },
        { label: 'Shared Savings', value: 'Performance Metric Milestones Met' },
        { label: 'Physician Burden', value: 'Documented Reduction in Administrative Fatigue' }
      ],
      action: 'Monthly performance reports published for practice leadership.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">Care Team Worklist</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
              Providers
            </span>
          </div>
          <p className="text-xs text-[#727272]">Clinic Day Operations Hub · Attributed Patient Schedule</p>
        </div>
        <span className="text-xs font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-full border border-[#d6cde2] font-medium">
          Clinician Ready
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 8: PAYERS (Network Performance Oversight)
   ───────────────────────────────────────────────────────────────────────────── */
function renderPayerNetworkPreview(idx, step) {
  const stages = [
    {
      badge: 'Network Streams Connected',
      headline: 'Clinical & Claims Multi-Payer Ingestion',
      summary: 'Bridging participating provider EHR records with health plan claims files to eliminate information delays.',
      details: [
        { label: 'Network Scope', value: 'Multi-Provider Clinical Feeds' },
        { label: 'Claims Adjudication', value: 'Historical Claims History Ingested' },
        { label: 'Information Lag', value: 'Shortened from Months to Real Time' }
      ],
      action: 'Payer and provider datasets aligned in shared workspace.'
    },
    {
      badge: 'Aligned Roster',
      headline: 'Network Attribution & Cohort Alignment',
      summary: 'Harmonizing membership rosters with attributed provider networks to ensure transparency.',
      details: [
        { label: 'Member Roster', value: 'Cross-Network Attribution Reconciled' },
        { label: 'Contract Mapping', value: 'Value-Based Program Rules Applied' },
        { label: 'Provider Consensus', value: 'Mutual Roster Agreement Verified' }
      ],
      action: 'Attribution discrepancies resolved across plan and practice.'
    },
    {
      badge: 'Variation Signal',
      headline: 'Network Leakage & Care Variation Detection',
      summary: 'Pinpointing out-of-network utilization trends, care disparities, and unaddressed chronic conditions.',
      details: [
        { label: 'Care Variation', value: 'Practice-Level Quality Discrepancies Flagged' },
        { label: 'Leakage Pattern', value: 'Specialist Referrals Leaving Preferred Network' },
        { label: 'Cost Drivers', value: 'Avoidable Readmission Drivers Identified' }
      ],
      action: 'High-impact collaborative intervention opportunities identified.'
    },
    {
      badge: 'Strategic Alignment',
      headline: 'Provider Collaboration Prioritization',
      summary: 'Ranking joint care initiatives by medical cost ratio impact and Star rating potential.',
      details: [
        { label: 'Prioritized Groups', value: 'High-Volume Medical Practices' },
        { label: 'Target Initiatives', value: 'Preventive Screening & Chronic Care Support' },
        { label: 'Incentive Alignment', value: 'Value-Based Shared Savings Tracked' }
      ],
      action: 'Shared action plans deployed to provider leadership.'
    },
    {
      badge: 'Collaborative Action',
      headline: 'Joint Clinical & Care Management Dispatch',
      summary: 'Equipping provider teams with health plan resources, care navigation, and patient wellness support.',
      details: [
        { label: 'Care Navigation', value: 'Guardian Navigators Embedded with Practices' },
        { label: 'Member Outreach', value: 'Coordinated Preventive Health Campaign' },
        { label: 'Provider Support', value: 'Point-of-Care Data Feeds Activated' }
      ],
      action: 'Provider-payer partnership executing synchronized patient care.'
    },
    {
      badge: 'Network Results',
      headline: 'Quality Performance & Financial Stewardship',
      summary: 'Measuring network HEDIS measure achievement, medical loss ratio improvements, and overall patient health.',
      details: [
        { label: 'Quality Gains', value: 'HEDIS Measure Star Ratings Improved' },
        { label: 'Financial Impact', value: 'Avoidable Medical Costs Reduced' },
        { label: 'Partnership Value', value: 'Sustainable Value-Based Economics' }
      ],
      action: 'Executive network dashboard delivers verified program results.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">Payer Network Performance</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
              Payers & Plans
            </span>
          </div>
          <p className="text-xs text-[#727272]">Network Performance Oversight · Value-Based Contract Suite</p>
        </div>
        <span className="text-xs font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-full border border-[#d6cde2] font-medium">
          Network Connected
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 9: SERVICES (People + Technology Model)
   ───────────────────────────────────────────────────────────────────────────── */
function renderServicesModelPreview(idx, step) {
  const stages = [
    {
      badge: 'Team Onboarding',
      headline: 'Guardian Specialists Embedded with Client',
      summary: 'Pairing experienced healthcare specialists—care managers, coders, navigators—with client operational teams.',
      details: [
        { label: 'Assigned Specialists', value: 'Dedicated Risk Coders & Care Managers' },
        { label: 'Integration Model', value: 'Seamless Extension of Existing Staff' },
        { label: 'Operational Scope', value: 'Value-Based Workflows & Queue Execution' }
      ],
      action: 'Specialized personnel integrated with partner operational rhythms.'
    },
    {
      badge: 'Workflow Audit',
      headline: 'Operational Process & Platform Alignment',
      summary: 'Analyzing client clinical routines and tuning Guardian platform queues to eliminate workflow bottlenecks.',
      details: [
        { label: 'Current State Review', value: 'Staffing Capacity & Backlog Analysis' },
        { label: 'Platform Optimization', value: 'Customized Worklist Protocols' },
        { label: 'Target Alignment', value: 'Clear Clinical & Quality Milestones Set' }
      ],
      action: 'Operational baseline and SLA framework established.'
    },
    {
      badge: 'Bottleneck Identified',
      headline: 'Opportunity & Capacity Gap Identification',
      summary: 'Isolating chart backlogs, missed patient follow-ups, and documentation discrepancies for specialized focus.',
      details: [
        { label: 'Review Backlog', value: 'Unreviewed Encounters Staged for Coders' },
        { label: 'Outreach Gap', value: 'Patients Needing Care Navigation Queued' },
        { label: 'Staff Relief', value: 'Administrative Burden Lifted from Providers' }
      ],
      action: 'Targeted queues routed to dedicated Guardian specialists.'
    },
    {
      badge: 'Execution Tiers',
      headline: 'Prioritized Service Delivery Allocation',
      summary: 'Deploying specialist hours toward the highest-acuity patients and highest-yield value-based milestones.',
      details: [
        { label: 'Daily Worklist', value: 'Prioritized Certified Coding Review' },
        { label: 'Clinical Triage', value: 'High-Vulnerability Patient Outreach First' },
        { label: 'Throughput Target', value: 'Eliminating Operational Lag within 30 Days' }
      ],
      action: 'Specialists managing prioritized daily queues.'
    },
    {
      badge: 'Active Operations',
      headline: 'Frontline People + Technology Execution',
      summary: 'Specialists actively review charts, validate codes, reach out to patients, and coordinate clinical handoffs.',
      details: [
        { label: 'Coder Throughput', value: 'Daily Chart Audits Completed with Precision' },
        { label: 'Care Navigation', value: 'Patients Scheduled & Barriers Addressed' },
        { label: 'Provider Support', value: 'Clean Context Delivered to Clinic Floor' }
      ],
      action: 'Operational workflow running with enhanced capacity and accuracy.'
    },
    {
      badge: 'Measurable Impact',
      headline: 'Operational Throughput & Outcomes Verification',
      summary: 'Documenting increased productivity, higher coding compliance, improved patient engagement, and verified ROI.',
      details: [
        { label: 'Backlog Status', value: 'Eliminated with Sustainable Cadence' },
        { label: 'Quality Score', value: 'Audit Compliance & Gap Closure Validated' },
        { label: 'Client Satisfaction', value: 'Clinical Staff Relieved of Administrative Fatigue' }
      ],
      action: 'Monthly executive operational briefing confirms service milestones.'
    }
  ];

  const currentStage = stages[idx] || stages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">Specialized Service Hub</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
              People + Technology
            </span>
          </div>
          <p className="text-xs text-[#727272]">Embedded Healthcare Specialists · Operational Scalability</p>
        </div>
        <span className="text-xs font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-full border border-[#d6cde2] font-medium">
          Specialists Assigned
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {currentStage.details.map((d, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
              <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
                {d.label}
              </span>
              <span className="text-xs font-semibold text-[#1c1636] block">
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIMULATED VIEW 10: DEFAULT HEALTHCARE WORKFLOW
   ───────────────────────────────────────────────────────────────────────────── */
function renderDefaultWorkflowPreview(idx, step, title) {
  const defaultStages = [
    {
      badge: 'Data Connectivity',
      headline: 'Connecting Siloed Healthcare Information',
      summary: 'Bringing together multi-source records, claims feeds, and organizational data into a unified foundation.',
      action: 'Data ingested, secured, and harmonized across active channels.'
    },
    {
      badge: 'Contextual Synthesis',
      headline: 'Transforming Information into Longitudinal Context',
      summary: 'Structuring fragmented points of data into a coherent, longitudinal understanding of patient and population health.',
      action: 'Clinical and operational datasets structured into actionable models.'
    },
    {
      badge: 'Intelligence Detection',
      headline: 'Pinpointing High-Impact Opportunities',
      summary: 'Surfacing clinical gaps, coding discrepancies, and care coordination touchpoints automatically.',
      action: 'Specific healthcare opportunities detected across patient rosters.'
    },
    {
      badge: 'Prioritized Routing',
      headline: 'Clinical and Operational Prioritization',
      summary: 'Triaging opportunities by urgency, impact, and designated care team workflow to ensure immediate focus.',
      action: 'Prioritized task queues dispatched to responsible clinical specialists.'
    },
    {
      badge: 'Frontline Delivery',
      headline: 'Point-of-Care & Clinical Execution',
      summary: 'Enabling doctors, care managers, and navigators to take decisive action supported by intelligent decision tools.',
      action: 'Intervention completed with coordinated patient and clinician engagement.'
    },
    {
      badge: 'Verified Impact',
      headline: 'Longitudinal Measurement & Outcomes Tracking',
      summary: 'Measuring the clinical, operational, and financial results of every intervention over time.',
      action: 'Continuous improvement loop updates performance metrics in real time.'
    }
  ];

  const currentStage = defaultStages[idx] || defaultStages[0];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-[#1c1636]">{title} Workflow</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-[#7b3fc7] font-semibold">
              Live Pipeline
            </span>
          </div>
          <p className="text-xs text-[#727272]">Data → Intelligence → Action Progression</p>
        </div>
        <span className="text-xs font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-full border border-[#d6cde2] font-medium">
          Action Ready
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#7b3fc7] font-semibold">
            Stage {idx + 1}: {step.step || step.title}
          </span>
          <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            {currentStage.badge}
          </span>
        </div>
        <h5 className="text-sm font-bold text-[#1c1636]">
          {currentStage.headline}
        </h5>
        <p className="text-xs text-[#727272] leading-relaxed">
          {step.description || currentStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <div className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
            <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
              Operating Foundation
            </span>
            <span className="text-xs font-semibold text-[#1c1636] block">
              People + Technology Integration
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#faf9fc] border border-[#e1e1e5]">
            <span className="text-[10px] uppercase font-mono text-[#adabb7] block mb-0.5">
              Healthcare Impact
            </span>
            <span className="text-xs font-semibold text-[#1c1636] block">
              Clinical Quality & Measurable Value
            </span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#f2ecf9]/50 border border-[#d6cde2] text-xs flex items-center gap-2.5 text-[#35304c]">
          <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0" />
          <span className="text-xs font-medium">{currentStage.action}</span>
        </div>
      </div>
    </div>
  );
}
