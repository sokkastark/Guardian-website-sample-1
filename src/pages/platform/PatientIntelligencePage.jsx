import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function PatientIntelligencePage() {
  const journey = [
    { step: 'Connect', description: 'Bring patient information together.' },
    { step: 'Understand', description: 'Create a longitudinal view of the patient.' },
    { step: 'Contextualize', description: 'See clinical and care information in context.' },
    { step: 'Identify', description: 'Find risks, gaps, and opportunities that matter.' },
    { step: 'Act', description: 'Support care and operational workflows.' },
    { step: 'Outcome', description: 'Follow what changes after action.' }
  ];

  const capabilities = [
    'Patient Master Chart',
    'Longitudinal patient information',
    'Clinical context',
    'Risk visibility',
    'Care-gap visibility',
    'Care-plan and workflow context',
    'Patient and population intelligence'
  ];

  const siblings = [
    { label: 'Data Integration', path: '/platform/data-integration' },
    { label: 'Data Enrichment', path: '/platform/data-enrichment' },
    { label: 'Information Services', path: '/platform/information-services' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform"
      title="Patient Intelligence"
      eyebrow="PATIENT INTELLIGENCE"
      headline="Create the complete patient picture."
      supporting="Guardian brings healthcare information together into a connected patient view, helping teams understand the patient, identify opportunities, and support the next action."
      ctaText="Explore Patient Intelligence"
      journey={journey}
      journeyTitle="Patient Intelligence: Longitudinal Care Journey"
      journeySubtitle="How Guardian unifies healthcare data into the comprehensive Patient Master Chart"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What the Guardian Platform delivers for longitudinal patient intelligence"
      heroVisualBadge="Patient Master Chart Core"
      siblings={siblings}
      closingHeadline="One patient. One connected view."
      closingText="Guardian brings information together to help healthcare teams understand the patient beyond individual encounters and take more informed action."
    />
  );
}
