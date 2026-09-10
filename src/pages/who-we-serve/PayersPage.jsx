import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function PayersPage() {
  const journey = [
    { step: 'Connect', description: 'Bring healthcare data and network information together.' },
    { step: 'Understand', description: 'Create a clearer view of populations and performance.' },
    { step: 'Identify', description: 'Find risk, quality, care, and performance opportunities.' },
    { step: 'Prioritize', description: 'Focus resources where they can make a difference.' },
    { step: 'Act', description: 'Connect intelligence to operational workflows.' },
    { step: 'Measure', description: 'Monitor performance and understand what changes.' }
  ];

  const capabilities = [
    'Connected healthcare data',
    'Population-level intelligence',
    'Risk adjustment support',
    'Quality and performance visibility',
    'Care opportunity identification',
    'Provider and network performance context',
    'Analytics and intelligence',
    'Healthcare services and operational support'
  ];

  const siblings = [
    { label: 'Providers', path: '/who-we-serve/providers' }
  ];

  return (
    <ChildPageLayout
      category="Who We Serve"
      categoryPath="/who-we-serve"
      title="Payers"
      eyebrow="FOR PAYERS"
      headline="Turn network data into better performance."
      supporting="Guardian connects healthcare data across populations and networks to help payer organizations understand performance, identify opportunities, support quality and risk workflows, and take informed action."
      ctaText="Explore Payer Solutions"
      journey={journey}
      journeyTitle="Payer Journey: Network Data to Action"
      journeySubtitle="How Guardian supports health plans, ACOs, and risk-bearing entities"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities for Payers"
      capabilitiesSubtitle="What Guardian helps payer organizations and risk-bearing networks achieve"
      supportingHeadline="See the network through a connected lens."
      supportingText="Guardian brings together data, intelligence, technology, and healthcare expertise to help payer organizations understand what is happening across their populations and networks."
      heroVisualBadge="Network & Population Oversight"
      siblings={siblings}
      closingHeadline="Turn network intelligence into action."
      closingText="Connect the data. Understand performance. Identify the opportunity. Support the action."
    />
  );
}
