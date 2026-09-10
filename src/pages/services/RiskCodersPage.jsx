import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function RiskCodersPage() {
  const journey = [
    { step: 'Review', description: 'Examine relevant patient and clinical information.' },
    { step: 'Identify', description: 'Find potential coding and risk opportunities.' },
    { step: 'Validate', description: 'Review available documentation and context.' },
    { step: 'Code', description: 'Support appropriate risk-coding workflows.' },
    { step: 'Coordinate', description: 'Connect coding activity with the broader workflow.' },
    { step: 'Measure', description: 'Support visibility into progress and performance.' }
  ];

  const capabilities = [
    'Risk-coding support',
    'Clinical documentation review',
    'HCC gap identification',
    'Patient-level context',
    'Coding workflow support',
    'Coordination with healthcare teams',
    'Performance visibility'
  ];

  const siblings = [
    { label: 'Account Executives', path: '/services/account-executives' },
    { label: 'Care Managers', path: '/services/care-managers' },
    { label: 'Care Navigators', path: '/services/care-navigators' }
  ];

  return (
    <ChildPageLayout
      category="Services"
      categoryPath="/services"
      title="Risk Coders"
      eyebrow="RISK CODERS"
      headline="Turn clinical information into coding insight."
      supporting="Guardian Risk Coders support risk-adjustment workflows by reviewing relevant patient information and helping organizations identify and address coding opportunities."
      ctaText="Explore Risk Coder Services"
      journey={journey}
      journeyTitle="Risk Coding: Review to Validation Journey"
      journeySubtitle="How Guardian certified coders support clinical documentation and HCC coding workflows"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What specialized Guardian Risk Coders deliver for your organization"
      supportingHeadline="Healthcare expertise connected to patient data."
      supportingText="Guardian combines connected healthcare information with specialized expertise to support risk-adjustment work."
      heroVisualBadge="Certified Risk Coding Specialists"
      contextType="risk-adjustment"
      siblings={siblings}
      closingHeadline="Make risk opportunities easier to act on."
      closingText="Give coding teams the information and context they need to support the workflow."
    />
  );
}
