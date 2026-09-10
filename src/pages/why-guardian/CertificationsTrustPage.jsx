import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function CertificationsTrustPage() {
  const credentials = [
    { title: 'CMS MIPS Certified Registry', description: 'Qualified Clinical Data Registry (QCDR) for official performance reporting and registry submission.' },
    { title: 'eHealth Exchange Implementer', description: 'Active nationwide clinical data exchange participant across national networks.' },
    { title: 'CareQuality Exchange Implementer', description: 'Standardized national interoperability framework enabling trusted exchange across care settings.' },
    { title: 'HITRUST e1 Certification', description: 'Rigorous cybersecurity and compliance validation demonstrating foundational security posture.' }
  ];

  const capabilities = [
    'Healthcare data responsibility',
    'Interoperability participation',
    'Industry certifications',
    'Security and trust'
  ];

  const siblings = [
    { label: 'About Guardian', path: '/why-guardian/about' },
    { label: 'Our Story', path: '/why-guardian/our-story' },
    { label: 'Healthcare Expertise', path: '/why-guardian/healthcare-expertise' },
    { label: 'Leadership', path: '/why-guardian/leadership' }
  ];

  return (
    <ChildPageLayout
      category="Why Guardian"
      categoryPath="/why-guardian"
      title="Certifications & Trust"
      eyebrow="CERTIFICATIONS & TRUST"
      headline="Built with healthcare trust in mind."
      supporting="Guardian operates in a healthcare environment where data, security, interoperability, and compliance matter. Our certifications and industry credentials reflect that commitment."
      ctaText="Explore Certifications & Trust"
      credentials={credentials}
      capabilities={capabilities}
      capabilitiesTitle="Trust & Compliance Areas"
      capabilitiesSubtitle="How Guardian safeguards healthcare data and maintains rigorous standards"
      supportingHeadline="Trust is part of the platform."
      supportingText="Guardian's technology and services operate within the expectations of the healthcare environment, with certifications and industry participation supporting that foundation."
      heroVisualBadge="Validated Security & Interoperability"
      siblings={siblings}
      closingHeadline="Confidence in the infrastructure behind the work."
      closingText="Explore Guardian's certifications, credentials, and approach to healthcare trust."
    />
  );
}
