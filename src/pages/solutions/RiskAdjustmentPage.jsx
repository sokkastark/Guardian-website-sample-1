import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function RiskAdjustmentPage() {
  const journey = [
    { step: 'Connect', description: 'Bring relevant patient information together.' },
    { step: 'Understand', description: 'Build the patient picture.' },
    { step: 'Identify', description: 'Surface potential risk opportunities.' },
    { step: 'Review', description: 'Give teams the context they need.' },
    { step: 'Act', description: 'Support coding and workflow.' },
    { step: 'Measure', description: 'Monitor performance and progress.' }
  ];

  const capabilities = [
    'Patient data aggregation',
    'Risk visibility',
    'HCC gap identification',
    'Clinical documentation context',
    'Risk coding support',
    'Workflow support',
    'Performance visibility'
  ];

  const siblings = [
    { label: 'Quality & Performance', path: '/solutions/quality-performance' },
    { label: 'Population Health', path: '/solutions/population-health' },
    { label: 'Analytics & Intelligence', path: '/solutions/analytics-intelligence' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Risk Adjustment"
      eyebrow="RISK ADJUSTMENT"
      headline="Turn patient data into a clearer view of risk."
      supporting="Guardian brings together relevant patient information to help healthcare organizations identify risk opportunities, support documentation and coding workflows, and improve visibility across their populations."
      ctaText="Explore Risk Adjustment"
      journey={journey}
      journeyTitle="Risk Adjustment: Data to Action Journey"
      journeySubtitle="How Guardian supports risk-adjustment and documentation workflows"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What Guardian helps healthcare teams achieve in risk adjustment"
      heroVisualBadge="HCC Gap & Documentation Context"
      siblings={siblings}
      closingHeadline="Turn risk data into informed action."
      closingText="Connected data and healthcare expertise help teams focus attention where it matters."
    />
  );
}
