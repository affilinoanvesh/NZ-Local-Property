import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/Layout/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage';
import ChildServicePage from './pages/ChildServicePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import SitemapPage from './pages/SitemapPage';
import { QuoteProvider } from './lib/QuoteContext';

function App() {
  return (
    <HelmetProvider>
      <QuoteProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              
              {/* Service Pages - must come after other specific routes */}
              <Route path="/:parentSlug/:childSlug" element={<ChildServicePage />} />
              <Route path="/:parentSlug" element={<ServicePage />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Router>
      </QuoteProvider>
    </HelmetProvider>
  );
}

export default App;