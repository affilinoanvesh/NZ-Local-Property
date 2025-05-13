import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Facebook, 
  Instagram, Linkedin, Wrench, ChevronRight, Twitter
} from 'lucide-react';
import { serviceCategories, services, getAllChildServices } from '../../data/services';
import { Separator } from "@radix-ui/react-separator";
import { useQuoteContext } from '../../lib/QuoteContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const popularServices = getAllChildServices().slice(0, 6); // Get 6 most important services
  const { openQuoteModal } = useQuoteContext();
  
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white pt-12 sm:pt-20 pb-6 sm:pb-8" role="contentinfo" aria-label="Site Footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 sm:mb-5">
              <div className="bg-primary-600 text-white p-1.5 sm:p-2 rounded-md">
                <Wrench className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <span className="ml-2 text-lg sm:text-xl font-bold tracking-tight">
                PropertyCare<span className="text-accent-500">NZ</span>
              </span>
            </div>
            <p className="text-neutral-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Your trusted partner for comprehensive property maintenance and repair services throughout New Zealand.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6" aria-label="Social Media Links">
              <a 
                href="https://facebook.com" 
                aria-label="Facebook" 
                className="bg-neutral-800 hover:bg-primary-600 transition-colors w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" 
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </a>
              <a 
                href="https://instagram.com" 
                aria-label="Instagram" 
                className="bg-neutral-800 hover:bg-primary-600 transition-colors w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </a>
              <a 
                href="https://twitter.com" 
                aria-label="Twitter" 
                className="bg-neutral-800 hover:bg-primary-600 transition-colors w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" 
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </a>
              <a 
                href="https://linkedin.com" 
                aria-label="LinkedIn" 
                className="bg-neutral-800 hover:bg-primary-600 transition-colors w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Services Categories */}
          <nav aria-labelledby="footer-services-heading">
            <h4 id="footer-services-heading" className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Service Categories
            </h4>
            <Separator className="w-10 sm:w-12 h-1 bg-primary-600 mb-4 sm:mb-6" />
            <ul className="space-y-2 sm:space-y-3">
              {serviceCategories.map((category) => {
                const parentService = services.find(s => s.category === category.id && s.slug === category.id);
                return (
                  <li key={category.id} className="flex items-center">
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400 mr-1.5 sm:mr-2 flex-shrink-0" aria-hidden="true" />
                    <Link 
                      to={`/${parentService ? parentService.slug : category.id}`}
                      className="text-neutral-300 hover:text-white font-medium transition-colors text-sm sm:text-base"
                    >
                      {category.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* Popular Services */}
          <nav aria-labelledby="footer-popular-services-heading">
            <h4 id="footer-popular-services-heading" className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Popular Services
            </h4>
            <Separator className="w-10 sm:w-12 h-1 bg-primary-600 mb-4 sm:mb-6" />
            <ul className="space-y-2 sm:space-y-3">
              {popularServices.map((item) => (
                <li key={item.service.id} className="flex items-center">
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400 mr-1.5 sm:mr-2 flex-shrink-0" aria-hidden="true" />
                  <Link 
                    to={`/${item.parentSlug}/${item.service.slug}`}
                    className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {item.service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Info */}
          <div aria-labelledby="footer-contact-heading">
            <h4 id="footer-contact-heading" className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Contact Us
            </h4>
            <Separator className="w-10 sm:w-12 h-1 bg-primary-600 mb-4 sm:mb-6" />
            <address className="not-italic">
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-neutral-400">
                    123 Property Lane<br />
                    Auckland 1010<br />
                    New Zealand
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:0800123456" className="text-neutral-400 hover:text-white transition-colors">
                    0800 123 456
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:info@propertycareNZ.co.nz" className="text-neutral-400 hover:text-white transition-colors break-all">
                    info@propertycareNZ.co.nz
                  </a>
                </li>
                <li className="flex items-start">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-neutral-400">
                    <time dateTime="Mo-Fr 07:00-18:00">Mon-Fri: 7am-6pm</time><br />
                    <time dateTime="Sa 08:00-14:00">Sat: 8am-2pm</time>
                  </span>
                </li>
              </ul>
            </address>
            
            <button
              onClick={openQuoteModal}
              className="mt-4 sm:mt-6 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-all w-full flex items-center justify-center text-sm sm:text-base"
              aria-label="Request a free quote"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Request Free Quote
            </button>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-xs sm:text-sm">
          <p>© {currentYear} PropertyCareNZ. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex space-x-3 sm:space-x-4 flex-wrap justify-center">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;