import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function DataEnrichmentPage() {
  const journey = [
    { step: 'Connect', description: 'Start with connected healthcare information.' },
    { step: 'Enrich', description: 'Add relevant context to the data.' },
    { step: 'Organize', description: 'Structure information for meaningful use.' },
    { step: 'Understand', description: 'Create a clearer patient and population picture.' },
    { step: 'Identify', description: 'Surface information that can support action.' },
    { step: 'Act', description: 'Put enriched information into healthcare workflows.' }
  ];

  const capabilities = [
    'Patient data enrichment',
    'Clinical context',
    'Patient-centered information',
    'Population-level context',
    'Risk and care opportunity context',
    'Information supporting analytics and reporting',
    'Data prepared for operational workflows'
  ];

  const siblings = [
    { label: 'Data Integration', path: '/platform/data-integration' },
    { label: 'Information Services', path: '/platform/information-services' },
    { label: 'Patient Intelligence', path: '/platform/patient-intelligence' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform"
      title="Data Enrichment"
      eyebrow="DATA ENRICHMENT"
      headline="Add context to healthcare data."
      supporting="Guardian enriches connected healthcare information to create a more meaningful view of patients, populations, risk, care opportunities, and performance."
      ctaText="Explore Data Enrichment"
      journey={journey}
      journeyTitle="Data Enrichment: Context to Insight"
      journeySubtitle="How Guardian enriches clinical and claims data into actionable healthcare intelligence"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What the Guardian Platform provides for healthcare data enrichment"
      heroVisualBadge="Clinical Contextualization"
      contextType="data-integration"
      siblings={siblings}
      closingHeadline="Make healthcare data more meaningful."
      closingText="Connected data becomes more useful when the right context is available to understand what it means and what can happen next."
    />
  );
}
