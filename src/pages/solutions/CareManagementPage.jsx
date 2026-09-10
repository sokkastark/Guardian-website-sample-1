import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function CareManagementPage() {
  const journey = [
    { step: 'Identify', description: 'Find patients who may need attention.' },
    { step: 'Understand', description: 'Build a clearer picture of the patient.' },
    { step: 'Plan', description: 'Develop a focused approach to care.' },
    { step: 'Coordinate', description: 'Connect the people involved in care.' },
    { step: 'Engage', description: 'Support patient outreach and follow-up.' },
    { step: 'Measure', description: 'Track what happens next.' }
  ];

  const capabilities = [
    'Patient identification',
    'Patient Master Chart',
    'Risk and care-gap visibility',
    'Care planning',
    'Care coordination',
    'Patient outreach',
    'Follow-up and monitoring'
  ];

  const siblings = [
    { label: 'Population Health', path: '/solutions/population-health' },
    { label: 'Patient Engagement', path: '/solutions/patient-engagement' },
    { label: 'Analytics & Intelligence', path: '/solutions/analytics-intelligence' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Care Management"
      eyebrow="CARE MANAGEMENT"
      headline="Turn patient insight into coordinated care."
      supporting="Guardian brings patient information, clinical context, care opportunities, and workflows together to help care teams understand what patients need and support the next step."
      ctaText="Explore Care Management"
      journey={journey}
      journeyTitle="Care Management: Coordinated Care Journey"
      journeySubtitle="Translating patient context into clear care-management workflows"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What Guardian helps care teams achieve across patient workflows"
      heroVisualBadge="Patient Master Chart Integration"
      siblings={siblings}
      closingHeadline="Make every care decision more informed."
      closingText="Guardian brings patient information, clinical context, care opportunities, and workflows together to support coordinated care."
    />
  );
}
