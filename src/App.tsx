import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RentPage from './pages/RentPage';
import BuyPage from './pages/BuyPage';
import RentalValuationPage from './pages/RentalValuationPage';
import SalesValuationPage from './pages/SalesValuationPage';
import LandlordsLettingsPage from './pages/LandlordsLettingsPage';
import LandlordsManagementPage from './pages/LandlordsManagementPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PropertyPricesPage from './pages/PropertyPricesPage';
import AreaGuidePage from './pages/AreaGuidePage';
import SellingProcessPage from './pages/SellingProcessPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DataProtectionPage from './pages/DataProtectionPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import ComplaintProcedurePage from './pages/ComplaintProcedurePage';
import NotFoundPage from './pages/NotFoundPage';

// Admin Pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminPropertyFormPage from './pages/admin/AdminPropertyFormPage';

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/properties/new" element={<AdminPropertyFormPage />} />
      <Route path="/admin/properties/:id/edit" element={<AdminPropertyFormPage />} />
      
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="rent" element={<RentPage />} />
        <Route path="buy" element={<BuyPage />} />
        <Route path="valuation">
          <Route path="rental" element={<RentalValuationPage />} />
          <Route path="sales" element={<SalesValuationPage />} />
        </Route>
        <Route path="landlords">
          <Route path="lettings" element={<LandlordsLettingsPage />} />
          <Route path="management" element={<LandlordsManagementPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="resources">
          <Route path="property-prices" element={<PropertyPricesPage />} />
          <Route path="area-guide" element={<AreaGuidePage />} />
          <Route path="selling-process" element={<SellingProcessPage />} />
        </Route>
        <Route path="property/:slug" element={<PropertyDetailPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="data-protection" element={<DataProtectionPage />} />
        <Route path="terms-conditions" element={<TermsConditionsPage />} />
        <Route path="complaint-procedure" element={<ComplaintProcedurePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;