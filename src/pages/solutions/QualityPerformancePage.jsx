import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function QualityPerformancePage() {
  const journey = [
    { step: 'Connect', description: 'Bring performance information together.' },
    { step: 'Understand', description: 'See the context behind the numbers.' },
    { step: 'Identify', description: 'Find quality opportunities.' },
    { step: 'Prioritize', description: 'Focus attention where it matters.' },
    { step: 'Act', description: 'Put insight into workflows.' },
    { step: 'Measure', description: 'Track performance over time.' }
  ];

  const capabilities = [
    'Quality opportunity identification',
    'Performance visibility',
    'Patient-level context',
    'Care-gap visibility',
    'Workflow support',
    'Reporting and analytics',
    'Continuous performance monitoring'
  ];

  const siblings = [
    { label: 'Risk Adjustment', path: '/solutions/risk-adjustment' },
    { label: 'Population Health', path: '/solutions/population-health' },
    { label: 'Analytics & Intelligence', path: '/solutions/analytics-intelligence' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Quality & Performance"
      eyebrow="QUALITY & PERFORMANCE"
      headline="See where performance can improve."
      supporting="Guardian connects healthcare data and clinical information to help organizations identify quality opportunities, understand performance, and support action across their healthcare workflows."
      ctaText="Explore Quality & Performance"
      journey={journey}
      journeyTitle="Quality Performance: Improvement Journey"
      journeySubtitle="How Guardian connects quality metrics with clinical and care workflows"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What Guardian helps healthcare organizations achieve in quality performance"
      heroVisualBadge="Continuous Performance Monitoring"
      siblings={siblings}
      closingHeadline="Turn quality insights into action."
      closingText="Guardian helps connect performance information with the patient and workflow context needed to take action."
    />
  );
}
