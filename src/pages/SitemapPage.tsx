import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services, serviceCategories } from '../data/services';
import { ChevronRight } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Our Services', path: '/services' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | PropertyCare NZ</title>
        <meta name="description" content="HTML Sitemap for PropertyCare NZ. Find all our pages and services easily." />
        <link rel="canonical" href="https://propertycarenz.co.nz/sitemap" />
        <meta property="og:title" content="Sitemap | PropertyCare NZ" />
        <meta property="og:description" content="HTML Sitemap for PropertyCare NZ. Find all our pages and services easily." />
        <meta property="og:url" content="https://propertycarenz.co.nz/sitemap" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Sitemap</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Navigate through our website with ease. Find all our pages and services listed below.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Main Pages Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Main Pages</h2>
              <Separator className="w-16 h-1 bg-primary-500 mb-6" />
              <ul className="space-y-3">
                {mainPages.map(page => (
                  <li key={page.path} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <Link to={page.path} className="text-neutral-700 hover:text-primary-600 transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section - Column 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Our Services</h2>
              <Separator className="w-16 h-1 bg-primary-500 mb-6" />
              <ul className="space-y-4">
                {serviceCategories.slice(0, Math.ceil(serviceCategories.length / 2)).map(category => {
                  const parentService = services.find(s => s.category === category.id);

                  if (!parentService) {
                    return null;
                  }

                  return (
                    <li key={category.id}>
                      <div className="flex items-center mb-1">
                        <ChevronRight className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                        <Link 
                          to={`/${parentService.slug}`} 
                          className="text-neutral-800 hover:text-primary-600 font-semibold transition-colors text-lg"
                        >
                          {parentService.title}
                        </Link>
                      </div>
                      {parentService.childServices && parentService.childServices.length > 0 && (
                        <ul className="space-y-2 pl-7">
                          {parentService.childServices.map(child => (
                            <li key={child.id} className="flex items-center">
                              <ChevronRight className="h-3 w-3 text-primary-600 mr-2 flex-shrink-0" />
                              <Link 
                                to={`/${parentService.slug}/${child.slug}`}
                                className="text-neutral-600 hover:text-primary-700 transition-colors text-sm"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            {/* Services Section - Column 2 */}
            <div>
              {/* This div is intentionally left for the second column of services, or can be used for more main pages if needed */}
              {/* To keep the heading consistent, we can add an empty h2 or adjust grid layout */}
               <h2 className="text-2xl font-semibold mb-4 text-neutral-800 md:invisible">_</h2> {/* Hidden placeholder for alignment */}
               <Separator className="w-16 h-1 bg-primary-500 mb-6 md:invisible" /> {/* Hidden placeholder for alignment */}
              <ul className="space-y-4">
                {serviceCategories.slice(Math.ceil(serviceCategories.length / 2)).map(category => {
                  const parentService = services.find(s => s.category === category.id);

                  if (!parentService) {
                    return null;
                  }

                  return (
                    <li key={category.id}>
                      <div className="flex items-center mb-1">
                        <ChevronRight className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                        <Link 
                          to={`/${parentService.slug}`} 
                          className="text-neutral-800 hover:text-primary-600 font-semibold transition-colors text-lg"
                        >
                          {parentService.title}
                        </Link>
                      </div>
                      {parentService.childServices && parentService.childServices.length > 0 && (
                        <ul className="space-y-2 pl-7">
                          {parentService.childServices.map(child => (
                            <li key={child.id} className="flex items-center">
                              <ChevronRight className="h-3 w-3 text-primary-600 mr-2 flex-shrink-0" />
                              <Link 
                                to={`/${parentService.slug}/${child.slug}`}
                                className="text-neutral-600 hover:text-primary-700 transition-colors text-sm"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SitemapPage; 