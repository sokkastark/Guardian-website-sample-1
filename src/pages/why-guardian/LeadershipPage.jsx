import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function LeadershipPage() {
  const journey = [
    { step: 'Healthcare Experience', description: 'Leadership deeply grounded in the operational realities of healthcare delivery.' },
    { step: 'Technology Perspective', description: 'Understanding how connected technology and scalable architecture can elevate care.' },
    { step: 'Operational Focus', description: 'Turning organizational and clinical strategy into rigorous frontline execution.' },
    { step: 'Long-Term Perspective', description: 'Building enduring capabilities engineered around evolving healthcare models.' }
  ];

  const capabilities = [
    'Healthcare leadership',
    'Technology leadership',
    'Operational experience',
    'Strategic direction',
    'Healthcare-focused execution'
  ];

  const siblings = [
    { label: 'About Guardian', path: '/why-guardian/about' },
    { label: 'Our Story', path: '/why-guardian/our-story' },
    { label: 'Healthcare Expertise', path: '/why-guardian/healthcare-expertise' },
    { label: 'Certifications & Trust', path: '/why-guardian/certifications-trust' }
  ];

  return (
    <ChildPageLayout
      category="Why Guardian"
      categoryPath="/why-guardian"
      title="Leadership"
      eyebrow="LEADERSHIP"
      headline="Experience guiding healthcare forward."
      supporting="Guardian's leadership brings together healthcare experience, technology, and operational perspective to guide the organization and its work with healthcare partners."
      ctaText="Connect with Leadership"
      journey={journey}
      journeyTitle="Leadership Pillars"
      journeySubtitle="The operational and strategic perspectives guiding Guardian's mission"
      capabilities={capabilities}
      capabilitiesTitle="Strategic Focus Areas"
      capabilitiesSubtitle="How leadership guides Guardian's partnerships and technology evolution"
      supportingHeadline="Leadership with a healthcare perspective."
      supportingText="Guardian's leadership helps connect organizational strategy with the technology, services, and expertise needed to support healthcare organizations."
      heroVisualBadge="Executive & Clinical Governance"
      siblings={siblings}
      closingHeadline="People shape the direction."
      closingText="Meet the people helping guide Guardian's next chapter."
    />
  );
}
