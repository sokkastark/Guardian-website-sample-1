import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function AnalyticsIntelligencePage() {
  const journey = [
    { step: 'Connect', description: 'Bring healthcare data together.' },
    { step: 'Understand', description: 'Create meaningful context.' },
    { step: 'Identify', description: 'Find the opportunities that matter.' },
    { step: 'Prioritize', description: 'Focus on what needs attention.' },
    { step: 'Act', description: 'Put intelligence into workflows.' },
    { step: 'Outcome', description: 'Measure what changes.' }
  ];

  const capabilities = [
    'Patient-level intelligence',
    'Population insights',
    'Risk visibility',
    'Care opportunities',
    'Quality and performance',
    'Utilization patterns',
    'Operational insights'
  ];

  const siblings = [
    { label: 'Population Health', path: '/solutions/population-health' },
    { label: 'Care Management', path: '/solutions/care-management' },
    { label: 'Risk Adjustment', path: '/solutions/risk-adjustment' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Analytics & Intelligence"
      eyebrow="ANALYTICS & INTELLIGENCE"
      headline="Turn healthcare data into decisions."
      supporting="Guardian transforms connected healthcare data into meaningful clinical and operational intelligence, helping organizations understand what is happening, identify opportunities, and decide what to do next."
      ctaText="Explore Analytics & Intelligence"
      journey={journey}
      journeyTitle="Analytics & Intelligence: Data to Outcome Journey"
      journeySubtitle="How Guardian transforms raw healthcare data into operational and clinical action"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What Guardian helps healthcare organizations achieve through connected intelligence"
      heroVisualBadge="Operational & Clinical Decisioning"
      siblings={siblings}
      closingHeadline="Turn healthcare data into actionable intelligence."
      closingText="Guardian connects analytics with healthcare workflows and expertise so information can move from a report or dashboard into a meaningful decision."
    />
  );
}
