import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getServiceBySlug } from '../data/services';
import ServiceHero from '../components/Services/ServiceHero';
import ServiceBenefits from '../components/Services/ServiceBenefits';
import ServiceIncludes from '../components/Services/ServiceIncludes';
import ServiceCTA from '../components/Services/ServiceCTA';
import ServiceFAQ from '../components/Services/ServiceFAQ';
import ChildServiceCard from '../components/Services/ChildServiceCard';
import { ChevronLeft, Phone, Calendar, CheckCircle2, ArrowRight, Star, Shield, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";
import { ChildService as ChildServiceType } from '../types';
import { useQuoteContext } from '../lib/QuoteContext';

const ServicePage: React.FC = () => {
  const { openQuoteModal } = useQuoteContext();
  const { parentSlug } = useParams<{ parentSlug: string }>();
  const service = getServiceBySlug(parentSlug || '');

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const metaDescription = service.metaDescription || 
    `Professional ${service.title.toLowerCase()} services in Auckland by licensed experts. ${service.description} Serving all Auckland areas with quality workmanship and satisfaction guarantee.`;
  
  const metaKeywords = service.metaKeywords?.join(', ') || 
    `${service.title} Auckland, professional ${service.title.toLowerCase()}, Auckland property services, property maintenance Auckland, ${service.category} Auckland, best ${service.title.toLowerCase()}`;

  return (
    <>
      <Helmet>
        <title>{service.title} Auckland | Top-Rated Property Services | PropertyCare NZ</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://propertycarenz.co.nz/${service.slug}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={`${service.title} Auckland | Top-Rated Property Services | PropertyCare NZ`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={service.image} />
        <meta property="og:url" content={`https://propertycarenz.co.nz/${service.slug}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} Auckland | Top-Rated Property Services | PropertyCare NZ`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={service.image} />
      </Helmet>

      {/* Hero Section - Full width, immersive design */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
          <img 
            src={service.image} 
            alt={`Professional ${service.title.toLowerCase()} services in Auckland`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-100 backdrop-blur-xl mb-6">
              Auckland's #1 Property Service Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-50">
              Professional {service.title} <span className="text-primary-200">Services in Auckland</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mb-8">
              {service.description} Delivered by licensed specialists with years of experience throughout Auckland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openQuoteModal} 
                className="bg-white text-primary-800 hover:bg-primary-50 font-medium px-8 py-4 rounded-md inline-flex items-center transition-all text-lg shadow-lg hover:shadow-xl cursor-pointer"
              >
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="tel:09-123-4567" 
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-8 py-4 rounded-md inline-flex items-center transition-all text-lg backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 09 123 4567
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Trust Indicators */}
      <section className="bg-white py-8 border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-600" />
              <span className="font-medium">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary-600" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary-600" />
              <span className="font-medium">5-Star Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary-600" />
              <span className="font-medium">Fast Response</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center text-sm text-neutral-600">
            <Link to="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link to="/services" className="hover:text-primary-600 transition-colors">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span className="text-neutral-900 font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Introduction Section - Redesigned with split layout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                  Professional {service.title} Services
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-800">
                  Expert {service.title} Services in Auckland
                </h2>
                <Separator className="w-20 h-1 bg-primary-500 mb-6" />
                
                <div className="prose prose-lg text-neutral-700">
                  <p className="mb-4 leading-relaxed">
                    At PropertyCare NZ, we deliver comprehensive {service.title.toLowerCase()} services designed specifically for Auckland properties. Our experienced team of licensed professionals brings years of industry expertise to every project, ensuring exceptional results that meet the highest standards of quality and durability.
                  </p>
                  
                  <p className="leading-relaxed">
                    Auckland property owners face unique challenges due to the local climate conditions, regulatory requirements, and building characteristics. Our specialized {service.title.toLowerCase()} solutions address these specific needs with tailored approaches that optimize functionality, aesthetics, and longevity.
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
                <img 
                  src={service.image} 
                  alt={`Professional ${service.title.toLowerCase()} services in Auckland`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 text-primary-50">Auckland's Trusted {service.title} Specialists</h3>
                    <p className="text-primary-100">Serving Auckland with professional expertise since 2010</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-neutral-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="prose prose-lg text-neutral-700">
                  <p className="mb-4 leading-relaxed">
                    Whether you require {service.title.toLowerCase()} for a small residential project or a large commercial property, our Auckland-based team delivers the same meticulous attention to detail and commitment to excellence. We utilize premium materials and industry-leading techniques to ensure your property receives the highest standard of care and maintenance.
                  </p>
                </div>
                
                <div className="prose prose-lg text-neutral-700">
                  <p className="leading-relaxed">
                    Our {service.title.toLowerCase()} services have earned a reputation for reliability, transparency, and superior craftsmanship across Auckland. From initial consultation through to project completion, we maintain clear communication, detailed documentation, and strict adherence to agreed timelines and budgets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Services Section - If applicable, show prominently */}
      {service.childServices && service.childServices.length > 0 && (
        <section className="py-12 md:py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                Specialized Auckland Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
                Our {service.title} Services in Auckland
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Select from our specialized professional {service.title.toLowerCase()} services to find exactly what your Auckland property needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.childServices.map((childService: ChildServiceType) => (
                <div key={childService.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-neutral-100 h-full flex flex-col">
                  <Link to={`/${service.slug}/${childService.slug}`} className="block flex-grow flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={childService.image} 
                        alt={childService.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent flex items-end">
                        <div className="p-4 md:p-6">
                          <h3 className="text-lg md:text-xl font-bold text-white">{childService.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 flex-grow flex flex-col">
                      <p className="text-neutral-700 mb-4 flex-grow line-clamp-3">{childService.description}</p>
                      <div className="mt-auto">
                        <span className="inline-flex items-center text-primary-600 font-medium">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-10 md:mt-12 text-center">
              <button 
                onClick={openQuoteModal} 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-md inline-flex items-center transition-all text-base md:text-lg font-medium shadow cursor-pointer"
              >
                Book Your {service.title} Service <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section - More visual and engaging */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              Why Choose PropertyCare NZ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              Auckland's Premier {service.title} Service Provider
            </h2>
            <p className="text-lg text-neutral-600">
              At PropertyCare NZ, we bring together expertise, quality, and unmatched care for Auckland properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group hover:border-primary-200">
              <div className="bg-primary-50 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-4" />
              <p className="text-neutral-600 leading-relaxed">
                We stand behind our Auckland {service.title.toLowerCase()} services with comprehensive quality guarantees and use only premium materials for lasting results that withstand Auckland's unique climate conditions. Every project is completed to exacting standards by our skilled professionals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group hover:border-primary-200">
              <div className="bg-primary-50 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Licensed Professionals</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-4" />
              <p className="text-neutral-600 leading-relaxed">
                Our Auckland {service.title.toLowerCase()} team consists of fully licensed, experienced professionals who bring specialized expertise to every project. With ongoing training and strict adherence to industry best practices, our specialists deliver superior results for Auckland properties.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group hover:border-primary-200">
              <div className="bg-primary-50 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Transparency</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-4" />
              <p className="text-neutral-600 leading-relaxed">
                We provide Auckland property owners with detailed quotes with no hidden costs and maintain clear communication throughout your {service.title.toLowerCase()} project. Our transparent approach includes comprehensive documentation and regular updates on progress and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits & Features Section - Redesigned with better spacing */}
      {(service.features && service.features.length > 0 || service.benefits && service.benefits.length > 0) && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                Service Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
                Benefits of Our Auckland {service.title} Services
              </h2>
              <p className="text-lg text-neutral-600">
                Discover what makes our professional {service.title.toLowerCase()} services the preferred choice for property owners across Auckland
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {service.benefits && service.benefits.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8 hover:shadow-md transition-shadow">
                  <ServiceBenefits benefits={service.benefits} title={`Benefits of Our ${service.title}`} />
                </div>
              )}
              {service.features && service.features.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8 hover:shadow-md transition-shadow">
                  <ServiceIncludes includes={service.features} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Our Process Section - Redesigned with alternating layout */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              Professional Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              Our Auckland {service.title} Process
            </h2>
            <p className="text-lg text-neutral-600">
              A streamlined professional approach to deliver exceptional {service.title.toLowerCase()} results for your Auckland property
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow text-center group hover:border-primary-200 h-full">
                  <div className="bg-primary-100 text-primary-600 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-primary-200 transition-colors">1</div>
                  <h3 className="font-semibold text-lg mb-3 text-neutral-800">Initial Consultation</h3>
                  <p className="text-neutral-600">We begin with a thorough consultation to understand your Auckland property's specific {service.title.toLowerCase()} needs, requirements, and objectives. Our specialists will assess your property's unique characteristics and discuss your expectations in detail.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-primary-100"></div>
              </div>
              
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow text-center group hover:border-primary-200 h-full">
                  <div className="bg-primary-100 text-primary-600 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-primary-200 transition-colors">2</div>
                  <h3 className="font-semibold text-lg mb-3 text-neutral-800">Assessment & Planning</h3>
                  <p className="text-neutral-600">Our Auckland {service.title.toLowerCase()} specialists conduct a comprehensive assessment of your property and develop a detailed plan tailored to your specific requirements, considering Auckland's building regulations and environmental factors.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-primary-100"></div>
              </div>
              
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow text-center group hover:border-primary-200 h-full">
                  <div className="bg-primary-100 text-primary-600 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-primary-200 transition-colors">3</div>
                  <h3 className="font-semibold text-lg mb-3 text-neutral-800">Professional Implementation</h3>
                  <p className="text-neutral-600">Our skilled Auckland team implements your {service.title.toLowerCase()} project with precision and expertise, using industry-leading techniques and premium materials suitable for Auckland properties to ensure superior, long-lasting results.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-primary-100"></div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow text-center group hover:border-primary-200 h-full">
                <div className="bg-primary-100 text-primary-600 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-primary-200 transition-colors">4</div>
                <h3 className="font-semibold text-lg mb-3 text-neutral-800">Quality Assurance</h3>
                <p className="text-neutral-600">We conduct a thorough inspection of all completed {service.title.toLowerCase()} work to ensure it meets our rigorous standards and your expectations. Our quality assurance process includes detailed documentation and a final walkthrough with Auckland property owners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Service Information Section - Redesigned with better visual elements */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="sticky top-24">
                  <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 mb-8">
                    <h3 className="text-xl font-bold mb-4 text-primary-800">Why Auckland Property Owners Choose Us</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1.5">
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-primary-800">Licensed Auckland specialists with extensive local experience</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1.5">
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-primary-800">Premium materials selected for Auckland conditions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1.5">
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-primary-800">Comprehensive service guarantees and insurance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1.5">
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-primary-800">Transparent pricing with detailed documentation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <button 
                    onClick={openQuoteModal} 
                    className="bg-primary-600 hover:bg-primary-700 text-white w-full py-4 px-6 rounded-md inline-flex items-center justify-center transition-colors font-medium text-lg cursor-pointer"
                  >
                    Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                  Expert Insights
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-800">
                  Professional {service.title} Solutions in Auckland
                </h2>
                <Separator className="w-20 h-1 bg-primary-500 mb-6" />
                
                <div className="prose prose-lg max-w-none text-neutral-700">
                  <p className="mb-4 leading-relaxed">
                    When it comes to {service.title.toLowerCase()} in Auckland, property owners face specific challenges that require specialized expertise. Auckland's unique climate, with its humidity, rainfall patterns, and coastal influences, demands {service.title.toLowerCase()} solutions that provide adequate protection and durability. Our Auckland {service.title.toLowerCase()} specialists understand these local factors and implement appropriate techniques and materials to address them effectively.
                  </p>
                  
                  <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-6 my-8">
                    <h3 className="text-xl font-bold mb-3 text-neutral-900">Auckland-Specific {service.title} Considerations</h3>
                    <p className="mb-0">
                      PropertyCare NZ's {service.title.toLowerCase()} services in Auckland are comprehensive and adaptable to properties of various ages, styles, and construction types. Whether you own a modern apartment in Central Auckland, a classic villa in Ponsonby, or a commercial building in North Shore, our team delivers tailored {service.title.toLowerCase()} solutions that enhance your property's functionality, appearance, and value.
                    </p>
                  </div>
                  
                  <p className="mb-4 leading-relaxed">
                    Quality materials are essential for successful {service.title.toLowerCase()} projects in Auckland. We source premium products that withstand Auckland's environmental conditions while meeting aesthetic requirements and budget considerations. Our Auckland {service.title.toLowerCase()} experts carefully select materials that offer the optimal balance of performance, longevity, and value for each specific application.
                  </p>
                  
                  <p className="mb-6 leading-relaxed">
                    Regular professional {service.title.toLowerCase()} is a crucial aspect of property maintenance in Auckland. It helps prevent costly damage, extends the lifespan of building components, and maintains property value. With PropertyCare NZ's Auckland {service.title.toLowerCase()} services, you benefit from proactive solutions that address potential issues before they escalate into significant problems, saving time and money in the long run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - More prominent and engaging */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-95"></div>
                    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-50">Need Professional {service.title} in Auckland?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact PropertyCare NZ today for a free, no-obligation quote on our expert {service.title.toLowerCase()} services. Our Auckland team is ready to help with your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openQuoteModal} 
                className="bg-white text-primary-800 hover:bg-neutral-100 font-medium px-8 py-4 rounded-md inline-flex items-center transition-all text-lg shadow-lg hover:shadow-xl group cursor-pointer"
              >
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:09-123-4567" 
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-md inline-flex items-center transition-all text-lg backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 09 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - If available */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                Common {service.title} Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
                {service.title} Services Auckland: FAQs
              </h2>
              <p className="text-lg text-neutral-600">
                Find answers to common questions about our Auckland {service.title.toLowerCase()} services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8">
              <ServiceFAQ faqs={service.faq} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServicePage;