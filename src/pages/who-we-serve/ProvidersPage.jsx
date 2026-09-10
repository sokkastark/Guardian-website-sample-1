import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function ProvidersPage() {
  const journey = [
    { step: 'Connect', description: 'Bring patient and healthcare information together.' },
    { step: 'Understand', description: 'Create a clearer picture of each patient and population.' },
    { step: 'Identify', description: 'Find risks, gaps, and opportunities that need attention.' },
    { step: 'Prioritize', description: 'Focus care-team attention where it matters.' },
    { step: 'Act', description: 'Put information and intelligence into the workflow.' },
    { step: 'Measure', description: 'Understand performance and what changes.' }
  ];

  const capabilities = [
    'Connected patient information',
    'Patient Master Chart',
    'Population health visibility',
    'Risk and care-gap visibility',
    'Care management support',
    'Quality and performance insights',
    'Patient engagement workflows',
    'Healthcare services and operational support'
  ];

  const siblings = [
    { label: 'Payers', path: '/who-we-serve/payers' }
  ];

  return (
    <ChildPageLayout
      category="Who We Serve"
      categoryPath="/who-we-serve"
      title="Providers"
      eyebrow="FOR PROVIDERS"
      headline="Give care teams the information to act."
      supporting="Guardian connects patient information, clinical intelligence, care opportunities, and workflows to help provider organizations make better-informed decisions and support coordinated care."
      ctaText="Explore Provider Solutions"
      journey={journey}
      journeyTitle="Provider Journey: Data to Clinical Action"
      journeySubtitle="How Guardian supports provider organizations and care teams"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities for Providers"
      capabilitiesSubtitle="What Guardian helps provider organizations and medical groups achieve"
      supportingHeadline="Built around the work of care teams."
      supportingText="Guardian brings technology, healthcare data, and healthcare expertise together to support the people responsible for delivering and coordinating care."
      heroVisualBadge="Care-Team Clinical Intelligence"
      contextType="providers"
      siblings={siblings}
      closingHeadline="Give your teams the context to act."
      closingText="Connect the patient picture, identify the opportunity, and support the next step in care."
    />
  );
}
