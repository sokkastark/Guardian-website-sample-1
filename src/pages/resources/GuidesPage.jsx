import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function GuidesPage() {
  const journey = [
    { step: 'Understand', description: 'Break down complex healthcare data, clinical, and regulatory topics.' },
    { step: 'Evaluate', description: 'Identify the essential organizational questions that truly matter.' },
    { step: 'Plan', description: 'Consider practical, structured approaches and operational priorities.' },
    { step: 'Act', description: 'Translate foundational understanding into tangible, effective next steps.' }
  ];

  const capabilities = [
    'Healthcare data',
    'Population health',
    'Care management',
    'Risk adjustment',
    'Quality and performance',
    'Patient engagement',
    'Healthcare technology'
  ];

  const siblings = [
    { label: 'Insights', path: '/resources/insights' },
    { label: 'Case Studies', path: '/resources/case-studies' }
  ];

  return (
    <ChildPageLayout
      category="Resources"
      categoryPath="/resources"
      title="Guides"
      eyebrow="GUIDES"
      headline="Practical resources for healthcare teams."
      supporting="Explore focused guides designed to help healthcare organizations understand complex topics, evaluate opportunities, and navigate the path from information to action."
      ctaText="Explore Guides"
      journey={journey}
      journeyTitle="Actionable Learning Framework"
      journeySubtitle="How Guardian Guides break down complex value-based care challenges into clear steps"
      capabilities={capabilities}
      capabilitiesTitle="Resource Coverage Areas"
      capabilitiesSubtitle="Healthcare domains covered in Guardian's practical executive and clinical guides"
      supportingHeadline="Make complex healthcare topics easier to navigate."
      supportingText="Guardian Guides provide practical, focused information for teams working through healthcare data, technology, care, and performance challenges."
      heroVisualBadge="Operational Reference Architecture"
      siblings={siblings}
      closingHeadline="Learn. Evaluate. Act."
      closingText="Explore practical resources from Guardian."
    />
  );
}
