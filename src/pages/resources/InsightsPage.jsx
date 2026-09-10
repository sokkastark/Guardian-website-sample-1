import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function InsightsPage() {
  const journey = [
    { step: 'Healthcare Data', description: 'Understand how connected information can support better decisions.' },
    { step: 'Clinical Intelligence', description: 'Explore how context can turn raw information into meaningful clinical insight.' },
    { step: 'Care & Workflow', description: 'Consider how technology can actively support the critical work healthcare teams do.' },
    { step: 'Performance', description: 'Explore the operational challenges and opportunities shaping healthcare organizations.' },
    { step: 'Future of Healthcare', description: 'Follow evolving ideas around value-based care and connected health environments.' }
  ];

  const capabilities = [
    'Healthcare data and interoperability',
    'Clinical intelligence',
    'Population health',
    'Care management',
    'Risk and quality',
    'Patient engagement',
    'Healthcare technology'
  ];

  const siblings = [
    { label: 'Case Studies', path: '/resources/case-studies' },
    { label: 'Guides', path: '/resources/guides' }
  ];

  return (
    <ChildPageLayout
      category="Resources"
      categoryPath="/resources"
      title="Insights"
      eyebrow="INSIGHTS"
      headline="Ideas for a changing healthcare landscape."
      supporting="Explore perspectives on healthcare data, clinical intelligence, technology, care delivery, performance, and the work of turning information into action."
      ctaText="Explore Insights"
      journey={journey}
      journeyTitle="Core Perspective Themes"
      journeySubtitle="Key inquiry areas shaping Guardian's healthcare thought leadership"
      capabilities={capabilities}
      capabilitiesTitle="Topic Focus Areas"
      capabilitiesSubtitle="Domains explored across Guardian research, articles, and analysis"
      supportingHeadline="Useful ideas should lead to better questions."
      supportingText="Guardian Insights brings together perspectives designed to help healthcare leaders think about the connection between data, technology, people, and action."
      heroVisualBadge="Healthcare Thought Leadership"
      siblings={siblings}
      closingHeadline="Stay informed. Keep moving forward."
      closingText="Explore the latest Guardian perspectives and ideas."
    />
  );
}
