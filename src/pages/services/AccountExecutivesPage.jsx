import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function AccountExecutivesPage() {
  const journey = [
    { step: 'Understand', description: "Learn the organization's goals and priorities." },
    { step: 'Align', description: 'Connect priorities with the right Guardian capabilities.' },
    { step: 'Coordinate', description: 'Bring the right people and resources together.' },
    { step: 'Support', description: 'Help keep initiatives moving forward.' },
    { step: 'Respond', description: 'Stay connected as needs evolve.' },
    { step: 'Deliver', description: 'Support a focused path from opportunity to action.' }
  ];

  const capabilities = [
    'Relationship management',
    'Organizational needs and priority alignment',
    'Guardian solution coordination',
    'Cross-functional communication',
    'Ongoing account support',
    'Service and initiative coordination'
  ];

  const siblings = [
    { label: 'Risk Coders', path: '/services/risk-coders' },
    { label: 'Care Managers', path: '/services/care-managers' },
    { label: 'Care Navigators', path: '/services/care-navigators' }
  ];

  return (
    <ChildPageLayout
      category="Services"
      categoryPath="/services"
      title="Account Executives"
      eyebrow="ACCOUNT EXECUTIVES"
      headline="A dedicated partner for the work behind the technology."
      supporting="Guardian Account Executives help connect organizations with the right Guardian capabilities, coordinate priorities, and support the relationship throughout the engagement."
      ctaText="Explore Account Executive Services"
      journey={journey}
      journeyTitle="Account Executive: Partnership Journey"
      journeySubtitle="How Guardian Account Executives align priorities and drive ongoing operational success"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What dedicated Guardian Account Executives deliver for your organization"
      supportingHeadline="Technology works better with the right support around it."
      supportingText="Guardian combines technology with people who understand the healthcare environment and help organizations navigate their priorities."
      heroVisualBadge="Dedicated Account Leadership"
      contextType="services"
      siblings={siblings}
      closingHeadline="Technology backed by people."
      closingText="Work with a Guardian team that stays connected to your goals and helps move priorities forward."
    />
  );
}
