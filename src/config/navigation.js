export const navigationConfig = [
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'Overview', path: '/solutions' },
      { label: 'Population Health', path: '/solutions/population-health' },
      { label: 'Care Management', path: '/solutions/care-management' },
      { label: 'Risk Adjustment', path: '/solutions/risk-adjustment' },
      { label: 'Quality & Performance', path: '/solutions/quality-performance' },
      { label: 'Patient Engagement', path: '/solutions/patient-engagement' },
      { label: 'Analytics & Intelligence', path: '/solutions/analytics-intelligence' },
    ]
  },
  {
    label: 'Platform',
    path: '/platform',
    children: [
      { label: 'Overview', path: '/platform' },
      { label: 'Data Integration', path: '/platform/data-integration' },
      { label: 'Data Enrichment', path: '/platform/data-enrichment' },
      { label: 'Information Services', path: '/platform/information-services' },
      { label: 'Patient Intelligence', path: '/platform/patient-intelligence' },
    ]
  },
  {
    label: 'Who We Serve',
    path: '/who-we-serve',
    children: [
      { label: 'Overview', path: '/who-we-serve' },
      { label: 'Providers', path: '/who-we-serve/providers' },
      { label: 'Payers', path: '/who-we-serve/payers' },
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Overview', path: '/services' },
      { label: 'Account Executives', path: '/services/account-executives' },
      { label: 'Risk Coders', path: '/services/risk-coders' },
      { label: 'Care Managers', path: '/services/care-managers' },
      { label: 'Care Navigators', path: '/services/care-navigators' },
    ]
  },
  {
    label: 'Why Guardian',
    path: '/why-guardian',
    children: [
      { label: 'Overview', path: '/why-guardian' },
      { label: 'About Guardian', path: '/why-guardian/about' },
      { label: 'Our Story', path: '/why-guardian/our-story' },
      { label: 'Healthcare Expertise', path: '/why-guardian/healthcare-expertise' },
      { label: 'Leadership', path: '/why-guardian/leadership' },
      { label: 'Certifications & Trust', path: '/why-guardian/certifications-trust' },
    ]
  },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Overview', path: '/resources' },
      { label: 'Insights', path: '/resources/insights' },
      { label: 'Case Studies', path: '/resources/case-studies' },
      { label: 'Guides', path: '/resources/guides' },
    ]
  }
];

export function isParentActive(currentPath, item) {
  if (!item || !item.path) return false;
  if (currentPath === item.path) return true;
  if (item.children) {
    return item.children.some(child => child.path !== item.path && currentPath === child.path);
  }
  return false;
}

export function isChildActive(currentPath, childPath) {
  return currentPath === childPath;
}
