import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function InformationServicesPage() {
  const journey = [
    { step: 'Access', description: 'Make connected healthcare information available.' },
    { step: 'Contextualize', description: 'Bring relevant information into focus.' },
    { step: 'Inform', description: 'Support better-informed decisions.' },
    { step: 'Deliver', description: 'Put information into the right workflow.' },
    { step: 'Act', description: 'Help teams move from information to action.' },
    { step: 'Measure', description: 'Understand how information supports performance.' }
  ];

  const capabilities = [
    'Healthcare information delivery',
    'Patient-centered information',
    'Clinical information access',
    'Operational information support',
    'Analytics and reporting support',
    'Information for care workflows',
    'Connected healthcare intelligence'
  ];

  const siblings = [
    { label: 'Data Integration', path: '/platform/data-integration' },
    { label: 'Data Enrichment', path: '/platform/data-enrichment' },
    { label: 'Patient Intelligence', path: '/platform/patient-intelligence' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform"
      title="Information Services"
      eyebrow="INFORMATION SERVICES"
      headline="Put the right healthcare information where it matters."
      supporting="Guardian delivers healthcare information and intelligence that helps organizations access the context they need across clinical, operational, and care workflows."
      ctaText="Explore Information Services"
      journey={journey}
      journeyTitle="Information Services: Delivery to Impact"
      journeySubtitle="How Guardian connects information with frontline healthcare teams and workflows"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What the Guardian Platform provides for healthcare information delivery"
      heroVisualBadge="Workflow Intelligence Delivery"
      siblings={siblings}
      closingHeadline="Information is valuable when it reaches the right people."
      closingText="Guardian connects healthcare information with the workflows and people that need it, helping turn information into informed action."
    />
  );
}
