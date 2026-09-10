import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function CaseStudiesPage() {
  const journey = [
    { step: 'Challenge', description: 'Understand the specific clinical, operational, or population health opportunity.' },
    { step: 'Approach', description: 'See how Guardian combined technology, connected data, and healthcare expertise.' },
    { step: 'Action', description: "Understand how the integrated solution directly supported the organization's workflow." },
    { step: 'Impact', description: 'Review documented performance milestones and operational lessons learned.' },
    { step: 'Next', description: 'Understand what the experience means for sustained success and ongoing action.' }
  ];

  const capabilities = [
    'Healthcare challenges',
    'Guardian platform capabilities',
    'Technology + services model',
    'Workflow and implementation',
    'Documented outcomes',
    'Lessons learned'
  ];

  const siblings = [
    { label: 'Insights', path: '/resources/insights' },
    { label: 'Guides', path: '/resources/guides' }
  ];

  return (
    <ChildPageLayout
      category="Resources"
      categoryPath="/resources"
      title="Case Studies"
      eyebrow="CASE STUDIES"
      headline="See healthcare data turned into action."
      supporting="Explore real-world examples of how Guardian technology, healthcare expertise, and services come together to address organizational challenges."
      ctaText="Explore Case Studies"
      journey={journey}
      journeyTitle="Case Evaluation Framework"
      journeySubtitle="How Guardian analyzes challenges, deploys capabilities, and verifies real-world impact"
      capabilities={capabilities}
      capabilitiesTitle="Study Components"
      capabilitiesSubtitle="What each Guardian case review evaluates across organizational engagements"
      supportingHeadline="Real experiences provide practical context."
      supportingText="Case studies show how Guardian capabilities can come together around specific healthcare needs and organizational priorities."
      heroVisualBadge="Documented Healthcare Outcomes"
      siblings={siblings}
      closingHeadline="Explore what is possible."
      closingText="See how Guardian helps organizations move from healthcare data and challenges toward action."
    />
  );
}
