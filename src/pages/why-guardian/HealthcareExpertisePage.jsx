import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function HealthcareExpertisePage() {
  const journey = [
    { step: 'Understand', description: 'Start with how healthcare actually works in clinical reality.' },
    { step: 'Connect', description: 'Bring technology and healthcare information together seamlessly.' },
    { step: 'Interpret', description: 'Add deep clinical and operational context to raw healthcare data.' },
    { step: 'Support', description: 'Apply seasoned healthcare expertise to real frontline workflows.' },
    { step: 'Act', description: 'Help teams move with confidence from information to action.' },
    { step: 'Evolve', description: 'Continuously adapt as clinical and regulatory needs change.' }
  ];

  const capabilities = [
    'Population health',
    'Care management',
    'Risk adjustment',
    'Quality and performance',
    'Patient engagement',
    'Healthcare data and interoperability'
  ];

  const siblings = [
    { label: 'About Guardian', path: '/why-guardian/about' },
    { label: 'Our Story', path: '/why-guardian/our-story' },
    { label: 'Certifications & Trust', path: '/why-guardian/certifications-trust' },
    { label: 'Leadership', path: '/why-guardian/leadership' }
  ];

  return (
    <ChildPageLayout
      category="Why Guardian"
      categoryPath="/why-guardian"
      title="Healthcare Expertise"
      eyebrow="HEALTHCARE EXPERTISE"
      headline="Healthcare knowledge behind the technology."
      supporting="Guardian combines healthcare experience with technology to help organizations navigate complex data, workflows, care needs, risk, quality, and performance."
      ctaText="Explore Healthcare Expertise"
      journey={journey}
      journeyTitle="Expertise Application Journey"
      journeySubtitle="How Guardian combines domain knowledge with technical execution"
      capabilities={capabilities}
      capabilitiesTitle="Core Domain Expertise"
      capabilitiesSubtitle="Healthcare areas where Guardian applies specialized operational and clinical knowledge"
      supportingHeadline="Technology built with healthcare in mind."
      supportingText="Guardian's healthcare focus helps connect technical capabilities with the people, workflows, and decisions that matter."
      heroVisualBadge="Deep Clinical & Operational Acumen"
      siblings={siblings}
      closingHeadline="Healthcare expertise makes the difference."
      closingText="Technology connects the information. Healthcare expertise helps make it useful."
    />
  );
}
