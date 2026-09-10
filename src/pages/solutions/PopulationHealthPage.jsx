import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function PopulationHealthPage() {
  const journey = [
    { step: 'Connect', description: 'Bring the population picture together.' },
    { step: 'Understand', description: 'Put patient information into context.' },
    { step: 'Identify', description: 'Find the opportunities that matter.' },
    { step: 'Prioritize', description: 'Focus resources where they are needed.' },
    { step: 'Act', description: 'Move insight into the workflow.' },
    { step: 'Measure', description: 'Understand what changes.' }
  ];

  const capabilities = [
    'Patient context',
    'Risk visibility',
    'Care opportunities',
    'Population trends',
    'Quality opportunities',
    'Care-management priorities'
  ];

  const siblings = [
    { label: 'Care Management', path: '/solutions/care-management' },
    { label: 'Risk Adjustment', path: '/solutions/risk-adjustment' },
    { label: 'Quality & Performance', path: '/solutions/quality-performance' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Population Health"
      eyebrow="POPULATION HEALTH"
      headline="See the bigger picture across your population."
      supporting="Guardian connects healthcare information across patients and populations to help organizations understand risk, identify care opportunities, prioritize action, and support better-informed population health decisions."
      ctaText="Explore Population Health"
      journey={journey}
      journeyTitle="Population Health: Data to Action Journey"
      journeySubtitle="How Guardian connects population information with healthcare action"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What Guardian helps healthcare organizations achieve across populations"
      heroVisualBadge="Population-Scale Clinical Intelligence"
      contextType="population-health"
      siblings={siblings}
      closingHeadline="Turn population data into focused action."
      closingText="Connect the population picture. Identify the opportunities. Give your teams the context to act."
    />
  );
}
