import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function DataIntegrationPage() {
  const journey = [
    { step: 'Connect', description: 'Bring data from multiple sources together.' },
    { step: 'Standardize', description: 'Organize information into a usable foundation.' },
    { step: 'Integrate', description: 'Connect data across healthcare workflows.' },
    { step: 'Contextualize', description: 'Put information into the patient picture.' },
    { step: 'Deliver', description: 'Make relevant information available where it is needed.' },
    { step: 'Act', description: 'Give healthcare teams a connected view to support decisions.' }
  ];

  const capabilities = [
    'Healthcare data integration',
    'EHR and clinical data connectivity',
    'Claims and healthcare data connectivity',
    'ADT and other healthcare data sources',
    'Patient-centered data aggregation',
    'Connected data foundation',
    'Support for downstream analytics and workflows'
  ];

  const siblings = [
    { label: 'Data Enrichment', path: '/platform/data-enrichment' },
    { label: 'Information Services', path: '/platform/information-services' },
    { label: 'Patient Intelligence', path: '/platform/patient-intelligence' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform"
      title="Data Integration"
      eyebrow="DATA INTEGRATION"
      headline="Bring healthcare data together."
      supporting="Guardian connects healthcare data from across the care journey to create a more complete, connected foundation for clinical intelligence and action."
      ctaText="Explore Data Integration"
      journey={journey}
      journeyTitle="Data Integration: Foundation to Action"
      journeySubtitle="How Guardian connects disparate healthcare data streams into a unified operational foundation"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What the Guardian Platform delivers for healthcare data integration"
      heroVisualBadge="Multi-Source Data Ingestion"
      siblings={siblings}
      closingHeadline="Create a connected foundation for healthcare intelligence."
      closingText="Bring healthcare information together so organizations can move from fragmented data toward a clearer view of the patient and population."
    />
  );
}
