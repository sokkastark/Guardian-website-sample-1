import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Network, 
  Radio, 
  Receipt, 
  Stethoscope, 
  Scan, 
  FileText, 
  FlaskConical, 
  Pill, 
  Activity 
} from 'lucide-react';

export default function FallingDataPills() {
  const containerRef = useRef(null);
  // Re-triggers whenever scrolled out and back into view (e.g. clicking Home or scrolling up)
  const isInView = useInView(containerRef, { amount: 0.28, once: false });

  const pills = [
    {
      id: 'ehr',
      label: 'EHR Records',
      code: 'HL7v2 / CDA',
      icon: FileText,
      color: '#38bdf8',
      left: '2%',
      top: '4px',
      rotation: -4,
      delay: 0.35,
    },
    {
      id: 'iot',
      label: 'Device IoT',
      code: 'RPM Telemetry',
      icon: Radio,
      color: '#fb923c',
      left: '13%',
      top: '24px',
      rotation: 5,
      delay: 0.52,
    },
    {
      id: 'labs',
      label: 'Lab Panels',
      code: 'LOINC 4544-3',
      icon: FlaskConical,
      color: '#0d9488',
      left: '24%',
      top: '6px',
      rotation: -3,
      delay: 0.69,
    },
    {
      id: 'fhir',
      label: 'FHIR R4 API',
      code: 'JSON / REST',
      icon: Network,
      color: '#a855f7',
      left: '35%',
      top: '26px',
      rotation: 4,
      delay: 0.86,
    },
    {
      id: 'claims',
      label: 'CMS Claims',
      code: 'EDI 837 / 835',
      icon: Receipt,
      color: '#ff7a57',
      left: '46%',
      top: '8px',
      rotation: -5,
      delay: 1.03,
    },
    {
      id: 'vitals',
      label: 'Vitals Stream',
      code: '128/82 mmHg',
      icon: Activity,
      color: '#38bdf8',
      left: '57%',
      top: '28px',
      rotation: 6,
      delay: 1.20,
    },
    {
      id: 'notes',
      label: 'Clinical Notes',
      code: 'NLP Notes',
      icon: Stethoscope,
      color: '#10b981',
      left: '68%',
      top: '6px',
      rotation: -4,
      delay: 1.37,
    },
    {
      id: 'pacs',
      label: 'PACS Imaging',
      code: 'DICOM 3.0',
      icon: Scan,
      color: '#6366f1',
      left: '79%',
      top: '24px',
      rotation: 5,
      delay: 1.54,
    },
    {
      id: 'rx',
      label: 'Rx Pharmacy',
      code: 'NDC / Rx',
      icon: Pill,
      color: '#ec4899',
      left: '90%',
      top: '8px',
      rotation: -3,
      delay: 1.71,
    },
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-20 sm:h-24 pointer-events-none select-none"
    >
      {pills.map((pill, idx) => {
        const Icon = pill.icon;
        return (
          <motion.div
            key={pill.id}
            initial={{ 
              y: -420, 
              opacity: 0, 
              rotate: pill.rotation * 4,
              scale: 0.85
            }}
            animate={isInView ? { 
              y: 0, 
              opacity: 1, 
              rotate: pill.rotation,
              scale: 1
            } : {
              y: -420,
              opacity: 0,
              rotate: pill.rotation * 4,
              scale: 0.85
            }}
            transition={isInView ? {
              type: 'spring',
              stiffness: 34,
              damping: 14,
              mass: 1.4,
              delay: pill.delay,
            } : {
              duration: 0.25,
              ease: 'easeIn',
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -10, 
              rotate: 0,
              transition: { type: 'spring', stiffness: 400, damping: 15 }
            }}
            drag
            dragConstraints={{ top: -60, bottom: 40, left: -40, right: 40 }}
            dragElastic={0.2}
            className={`absolute pointer-events-auto cursor-grab active:cursor-grabbing ${
              idx > 5 ? 'hidden xl:flex' : idx > 3 ? 'hidden md:flex' : 'flex'
            } items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1136]/90 hover:bg-[#25164c] backdrop-blur-xl border border-white/18 hover:border-white/35 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors duration-200 group`}
            style={{
              left: pill.left,
              top: pill.top,
            }}
          >
            {/* Glowing Status LED */}
            <span
              className="w-2 h-2 rounded-full shrink-0 shadow-sm group-hover:scale-125 transition-transform"
              style={{
                backgroundColor: pill.color,
                boxShadow: `0 0 10px ${pill.color}`,
              }}
            />

            {/* Icon glyph */}
            <div
              className="p-1 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors"
              style={{ color: pill.color }}
            >
              <Icon className="w-3.5 h-3.5" />
            </div>

            {/* Label and System Code */}
            <div className="flex flex-col text-left pr-1">
              <span className="text-[11px] font-semibold text-white/90 group-hover:text-white leading-tight">
                {pill.label}
              </span>
              <span className="text-[9px] font-mono text-purple-200/60 leading-tight">
                {pill.code}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
