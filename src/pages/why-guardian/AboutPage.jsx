import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function AboutPage() {
  const journey = [
    { step: 'Healthcare First', description: 'Built around the practical needs of healthcare organizations.' },
    { step: 'Connected Technology', description: 'Bring healthcare information together into a unified foundation.' },
    { step: 'Clinical Intelligence', description: 'Turn information into meaningful context for decision-making.' },
    { step: 'Human Expertise', description: 'Combine technology with people who deeply understand healthcare.' },
    { step: 'Action-Oriented', description: 'Connect insight directly to the work that needs to happen.' }
  ];

  const capabilities = [
    'Healthcare expertise',
    'Connected healthcare technology',
    'Data and clinical intelligence',
    'Healthcare services',
    'Provider and payer focus'
  ];

  const siblings = [
    { label: 'Our Story', path: '/why-guardian/our-story' },
    { label: 'Healthcare Expertise', path: '/why-guardian/healthcare-expertise' },
    { label: 'Certifications & Trust', path: '/why-guardian/certifications-trust' },
    { label: 'Leadership', path: '/why-guardian/leadership' }
  ];

  return (
    <ChildPageLayout
      category="Why Guardian"
      categoryPath="/why-guardian"
      title="About Guardian"
      eyebrow="ABOUT GUARDIAN"
      headline="Built from healthcare. Designed for action."
      supporting="Guardian Health Service, LLC brings healthcare data, technology, and healthcare expertise together to help organizations make better-informed decisions and take meaningful action."
      ctaText="Explore About Guardian"
      journey={journey}
      journeyTitle="Our Foundational Philosophy"
      journeySubtitle="The guiding principles behind Guardian's technology and healthcare services"
      capabilities={capabilities}
      capabilitiesTitle="Core Focus Areas"
      capabilitiesSubtitle="What drives Guardian's work with healthcare partners"
      supportingHeadline="Technology is only valuable when people can act on it."
      supportingText="Guardian combines technology and healthcare expertise to help organizations move from information toward action."
      heroVisualBadge="Healthcare-First Architecture"
      siblings={siblings}
      closingHeadline="Built for the realities of healthcare."
      closingText="Connect the data. Understand the patient. Identify the opportunity. Take action."
    />
  );
}
