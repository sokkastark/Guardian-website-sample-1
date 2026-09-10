import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function CareNavigatorsPage() {
  const journey = [
    { step: 'Identify', description: 'Understand which patients may need outreach.' },
    { step: 'Connect', description: 'Reach patients and establish contact.' },
    { step: 'Guide', description: 'Help patients understand the next step.' },
    { step: 'Coordinate', description: 'Connect patients with appropriate care or resources.' },
    { step: 'Follow Up', description: 'Keep the next step visible.' },
    { step: 'Report', description: 'Feed activity and outcomes back into the workflow.' }
  ];

  const capabilities = [
    'Patient outreach',
    'Care coordination',
    'Patient follow-up',
    'Navigation support',
    'Appointment and care-pathway coordination',
    'Communication support',
    'Workflow documentation'
  ];

  const siblings = [
    { label: 'Care Managers', path: '/services/care-managers' },
    { label: 'Account Executives', path: '/services/account-executives' },
    { label: 'Risk Coders', path: '/services/risk-coders' }
  ];

  return (
    <ChildPageLayout
      category="Services"
      categoryPath="/services"
      title="Care Navigators"
      eyebrow="CARE NAVIGATORS"
      headline="Help patients find their next step."
      supporting="Guardian Care Navigators support patient outreach, coordination, and follow-up to help connect patients with the appropriate next step in their care journey."
      ctaText="Explore Care Navigator Services"
      journey={journey}
      journeyTitle="Care Navigation: Patient Outreach Journey"
      journeySubtitle="How Guardian Care Navigators establish human connection and support care pathways"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What dedicated Guardian Care Navigators provide for patients and care workflows"
      supportingHeadline="Better connected care starts with the patient."
      supportingText="Care Navigators add a human connection to healthcare workflows, helping patients move through the next step of their care."
      heroVisualBadge="Patient Outreach & Navigation"
      contextType="services"
      siblings={siblings}
      closingHeadline="Help patients move forward."
      closingText="Connect patient information, outreach, and coordination to support the care journey."
    />
  );
}
