import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Top-Level Pages
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PlatformPage from './pages/PlatformPage';
import WhoWeServePage from './pages/WhoWeServePage';
import ServicesPage from './pages/ServicesPage';
import WhyGuardianPage from './pages/WhyGuardianPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

// Solutions Child Pages
import PopulationHealthPage from './pages/solutions/PopulationHealthPage';
import CareManagementPage from './pages/solutions/CareManagementPage';
import RiskAdjustmentPage from './pages/solutions/RiskAdjustmentPage';
import QualityPerformancePage from './pages/solutions/QualityPerformancePage';
import PatientEngagementPage from './pages/solutions/PatientEngagementPage';
import AnalyticsIntelligencePage from './pages/solutions/AnalyticsIntelligencePage';

// Platform Child Pages
import DataIntegrationPage from './pages/platform/DataIntegrationPage';
import DataEnrichmentPage from './pages/platform/DataEnrichmentPage';
import InformationServicesPage from './pages/platform/InformationServicesPage';
import PatientIntelligencePage from './pages/platform/PatientIntelligencePage';

// Who We Serve Child Pages
import ProvidersPage from './pages/who-we-serve/ProvidersPage';
import PayersPage from './pages/who-we-serve/PayersPage';

// Services Child Pages
import AccountExecutivesPage from './pages/services/AccountExecutivesPage';
import RiskCodersPage from './pages/services/RiskCodersPage';
import CareManagersPage from './pages/services/CareManagersPage';
import CareNavigatorsPage from './pages/services/CareNavigatorsPage';

// Why Guardian Child Pages
import AboutPage from './pages/why-guardian/AboutPage';
import OurStoryPage from './pages/why-guardian/OurStoryPage';
import HealthcareExpertisePage from './pages/why-guardian/HealthcareExpertisePage';
import LeadershipPage from './pages/why-guardian/LeadershipPage';
import CertificationsTrustPage from './pages/why-guardian/CertificationsTrustPage';

// Resources Child Pages
import InsightsPage from './pages/resources/InsightsPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';
import GuidesPage from './pages/resources/GuidesPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#35304c] flex flex-col selection:bg-[#f2ecf9] selection:text-[#7b3fc7]">
        {/* Sticky Global Navigation */}
        <Header />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            {/* Top-Level Landing Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/who-we-serve" element={<WhoWeServePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-guardian" element={<WhyGuardianPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Solutions Child Routes */}
            <Route path="/solutions/population-health" element={<PopulationHealthPage />} />
            <Route path="/solutions/care-management" element={<CareManagementPage />} />
            <Route path="/solutions/risk-adjustment" element={<RiskAdjustmentPage />} />
            <Route path="/solutions/quality-performance" element={<QualityPerformancePage />} />
            <Route path="/solutions/patient-engagement" element={<PatientEngagementPage />} />
            <Route path="/solutions/analytics-intelligence" element={<AnalyticsIntelligencePage />} />

            {/* Platform Child Routes */}
            <Route path="/platform/data-integration" element={<DataIntegrationPage />} />
            <Route path="/platform/data-enrichment" element={<DataEnrichmentPage />} />
            <Route path="/platform/information-services" element={<InformationServicesPage />} />
            <Route path="/platform/patient-intelligence" element={<PatientIntelligencePage />} />

            {/* Who We Serve Child Routes */}
            <Route path="/who-we-serve/providers" element={<ProvidersPage />} />
            <Route path="/who-we-serve/payers" element={<PayersPage />} />

            {/* Services Child Routes */}
            <Route path="/services/account-executives" element={<AccountExecutivesPage />} />
            <Route path="/services/risk-coders" element={<RiskCodersPage />} />
            <Route path="/services/care-managers" element={<CareManagersPage />} />
            <Route path="/services/care-navigators" element={<CareNavigatorsPage />} />

            {/* Why Guardian Child Routes */}
            <Route path="/why-guardian/about" element={<AboutPage />} />
            <Route path="/why-guardian/our-story" element={<OurStoryPage />} />
            <Route path="/why-guardian/healthcare-expertise" element={<HealthcareExpertisePage />} />
            <Route path="/why-guardian/leadership" element={<LeadershipPage />} />
            <Route path="/why-guardian/certifications-trust" element={<CertificationsTrustPage />} />

            {/* Resources Child Routes */}
            <Route path="/resources/insights" element={<InsightsPage />} />
            <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources/guides" element={<GuidesPage />} />

            {/* Fallback Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

