import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function CareManagersPage() {
  const journey = [
    { step: 'Identify', description: 'Recognize patients who may need attention.' },
    { step: 'Understand', description: "Review the patient's broader context." },
    { step: 'Plan', description: 'Develop a focused approach to care.' },
    { step: 'Coordinate', description: 'Connect care activities and stakeholders.' },
    { step: 'Follow Up', description: 'Support ongoing patient needs.' },
    { step: 'Measure', description: 'Track activity and progress.' }
  ];

  const capabilities = [
    'Patient identification',
    'Patient information review',
    'Care-plan support',
    'Care coordination',
    'Patient outreach',
    'Follow-up activities',
    'Care-management workflow support'
  ];

  const siblings = [
    { label: 'Care Navigators', path: '/services/care-navigators' },
    { label: 'Account Executives', path: '/services/account-executives' },
    { label: 'Risk Coders', path: '/services/risk-coders' }
  ];

  return (
    <ChildPageLayout
      category="Services"
      categoryPath="/services"
      title="Care Managers"
      eyebrow="CARE MANAGERS"
      headline="Help turn patient insight into coordinated care."
      supporting="Guardian Care Managers help translate patient information and identified care opportunities into focused care-management activities, coordination, and follow-up."
      ctaText="Explore Care Manager Services"
      journey={journey}
      journeyTitle="Care Management: Coordination Journey"
      journeySubtitle="How Guardian Care Managers translate clinical insight into human care coordination"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What dedicated Guardian Care Managers provide for healthcare teams"
      supportingHeadline="Technology provides the context. People help move care forward."
      supportingText="Guardian Care Managers work alongside technology to help connect information with the human work of coordinating care."
      heroVisualBadge="Dedicated Care Coordination"
      contextType="care-management"
      siblings={siblings}
      closingHeadline="Connect insight with care."
      closingText="Give care teams the context and support needed to move from identified opportunity to coordinated action."
    />
  );
}
