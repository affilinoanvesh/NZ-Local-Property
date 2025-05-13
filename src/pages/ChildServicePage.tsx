import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getServiceBySlug, getAllChildServices } from '../data/services';
import ServiceBenefits from '../components/Services/ServiceBenefits';
import ServiceIncludes from '../components/Services/ServiceIncludes';
import ServiceCTA from '../components/Services/ServiceCTA';
import ServiceComparison from '../components/Services/ServiceComparison';
import ServiceFAQ from '../components/Services/ServiceFAQ';
import { ChevronLeft, Phone, Calendar, ArrowRight, Shield, CheckCircle2, Award, MapPin, Star, Clock, Plus } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";
import { ChildService } from '../types';
import { useQuoteContext } from '../lib/QuoteContext';

const ChildServicePage: React.FC = () => {
  const { openQuoteModal } = useQuoteContext();
  const { parentSlug, childSlug } = useParams<{ parentSlug: string; childSlug: string }>();
  const parentService = getServiceBySlug(parentSlug || '');
  const childService = parentService?.childServices?.find((service: ChildService) => service.slug === childSlug);

  if (!parentService || !childService) {
    return <Navigate to="/services" replace />;
  }

  const metaDescription = childService.metaDescription || 
    `Expert ${childService.title.toLowerCase()} services in Auckland by licensed professionals. ${childService.description} Serving all Auckland areas with guaranteed quality workmanship.`;
  
  const metaKeywords = childService.metaKeywords?.join(', ') || 
    `${childService.title} Auckland, expert ${childService.title.toLowerCase()}, Auckland ${parentService.title.toLowerCase()}, professional ${childService.title.toLowerCase()} services, best ${childService.title.toLowerCase()} Auckland`;

  // Define service locations
  const locations = [
    'Central Auckland',
    'North Shore',
    'East Auckland',
    'West Auckland',
    'South Auckland',
    'Manukau City',
    'Waitakere',
    'North Harbour'
  ];

  // Find related services for the sidebar
  const relatedServices = parentService.childServices
    ?.filter((service: ChildService) => service.slug !== childSlug)
    .slice(0, 3) || [];

  return (
    <>
      <Helmet>
        <title>{childService.title} Auckland | Professional {parentService.title} Services | PropertyCare NZ</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://propertycarenz.co.nz/${parentSlug}/${childSlug}`} />
        
        <meta property="og:title" content={`${childService.title} Auckland | Professional ${parentService.title} Services | PropertyCare NZ`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={childService.image} />
        <meta property="og:url" content={`https://propertycarenz.co.nz/${parentSlug}/${childSlug}`} />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${childService.title} Auckland | Professional ${parentService.title} Services | PropertyCare NZ`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={childService.image} />
      </Helmet>

      {/* Compact Hero Section with image background */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
          <img 
            src={childService.image} 
            alt={`Professional ${childService.title.toLowerCase()} services in Auckland`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-100 backdrop-blur-xl mb-4">
              Professional {parentService.title} Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-50">
              Expert {childService.title} <span className="text-primary-200">Services in Auckland</span>
            </h1>
            <p className="text-lg text-primary-100 max-w-2xl mb-6">
              {childService.description} Delivered by Auckland's most trusted property specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={openQuoteModal} 
                className="bg-white text-primary-800 hover:bg-primary-50 font-medium px-6 py-3 rounded-md inline-flex items-center transition-all text-base shadow-lg hover:shadow-xl cursor-pointer"
              >
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="tel:09-123-4567" 
                className="bg-primary-900/20 text-primary-100 hover:bg-primary-900/30 border border-primary-100/20 px-6 py-3 rounded-md inline-flex items-center transition-all text-base backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 09 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Indicators - Compact bar */}
      <section className="bg-white py-4 border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 text-sm">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary-600" />
              <span className="font-medium">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary-600" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-primary-600" />
              <span className="font-medium">5-Star Service</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary-600" />
              <span className="font-medium">Fast Response</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Container - Two-column layout */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Service Introduction - No images whatsoever */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden mb-8">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-800">
                    Auckland's Leading {childService.title} Specialists
                  </h2>
                  
                  <Separator className="w-16 h-1 bg-primary-500 mb-4" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-neutral-700 leading-relaxed">
                        {childService.description} Our team of experienced professionals ensures high-quality results on every project, with attention to detail and customer satisfaction as our top priorities throughout Auckland.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-neutral-700 leading-relaxed">
                        PropertyCare NZ provides specialized {childService.title.toLowerCase()} services designed specifically for Auckland properties. Our specialists bring years of industry expertise and local experience to deliver exceptional results.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-primary-600 font-medium justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1.5" /> Serving all Auckland areas
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm">Quality Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits and Features Grid - Tab-based layout */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8 mb-8">
                <div className="border-b border-neutral-100 pb-4 mb-6">
                  <h3 className="text-lg font-bold text-primary-800">Key Benefits</h3>
                </div>
                
                <div>
                  <ServiceBenefits benefits={childService.benefits} />
                  
                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <h3 className="text-lg font-semibold mb-3">Why Auckland Property Owners Choose Us</h3>
                    <p className="text-neutral-700">
                      Auckland property owners benefit from our comprehensive approach to {childService.title.toLowerCase()}, which addresses the unique requirements of local buildings and environmental conditions. We understand Auckland's diverse property landscape and implement tailored solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Advantages - Visual cards layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-2 mr-4">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Workmanship</h3>
                    <p className="text-sm text-neutral-600">Superior craftsmanship with attention to every detail throughout Auckland</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-2 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">On-Time Delivery</h3>
                    <p className="text-sm text-neutral-600">We respect your schedule and complete work promptly for Auckland clients</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-2 mr-4">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fully Insured</h3>
                    <p className="text-sm text-neutral-600">Complete protection and peace of mind for your Auckland property</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-2 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Auckland-Wide</h3>
                    <p className="text-sm text-neutral-600">Serving all Auckland areas with local expertise and knowledge</p>
                  </div>
                </div>
              </div>

              {/* Process Steps - Modern timeline */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8 mb-8">
                <h2 className="text-xl font-bold mb-4 text-primary-800">Our {childService.title} Process</h2>
                <Separator className="w-12 h-1 bg-primary-500 mb-6" />
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="rounded-full bg-primary-600 text-white flex items-center justify-center w-8 h-8 text-sm font-medium">1</div>
                      <div className="h-full w-0.5 bg-neutral-200 mt-2"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-800">Assessment</h3>
                      <p className="text-neutral-600 mt-1">Thorough property evaluation and detailed assessment to understand your specific needs</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="rounded-full bg-primary-600 text-white flex items-center justify-center w-8 h-8 text-sm font-medium">2</div>
                      <div className="h-full w-0.5 bg-neutral-200 mt-2"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-800">Customized Solution</h3>
                      <p className="text-neutral-600 mt-1">Tailored plan developed specifically for your Auckland property</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="rounded-full bg-primary-600 text-white flex items-center justify-center w-8 h-8 text-sm font-medium">3</div>
                      <div className="h-full w-0.5 bg-neutral-200 mt-2"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-800">Expert Implementation</h3>
                      <p className="text-neutral-600 mt-1">Professional execution with premium materials and skilled technicians</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="rounded-full bg-primary-600 text-white flex items-center justify-center w-8 h-8 text-sm font-medium">4</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-800">Quality Assurance</h3>
                      <p className="text-neutral-600 mt-1">Thorough inspection and follow-up to ensure your complete satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Comparison - From ServiceDetailPage */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8 mb-8">
                <ServiceComparison 
                  service={childService.title}
                  benefits={childService.benefits} 
                />
              </div>
            </div>
            
            {/* Sidebar Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Quick contact card */}
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="text-lg font-bold text-primary-800 mb-3">Request a Free Quote</h3>
                  <p className="text-neutral-700 text-sm mb-4">Get a no-obligation quote for your Auckland property today.</p>
                  
                  <div className="space-y-3">
                    <a 
                      href="tel:09-123-4567" 
                      className="bg-white text-primary-700 hover:bg-primary-50 w-full py-3 px-4 rounded-md inline-flex items-center justify-center transition-colors border border-primary-200"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      09 123 4567
                    </a>
                    
                    <button 
                      onClick={openQuoteModal} 
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md inline-flex items-center transition-all text-base shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Service areas */}
                <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                  <h3 className="text-lg font-bold text-primary-800 mb-3">Service Areas</h3>
                  <p className="text-neutral-700 text-sm mb-4">We provide {childService.title.toLowerCase()} services throughout Auckland, including:</p>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                        <span>{location}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Service Features Card */}
                <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                  <h3 className="text-lg font-bold text-primary-800 mb-3">Service Features</h3>
                  <ServiceIncludes includes={childService.features} />
                </div>
                
                {/* Social proof */}
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                  <div className="flex items-center mb-3">
                    <div className="flex -space-x-2 mr-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-300"></div>
                      <div className="w-8 h-8 rounded-full bg-neutral-200"></div>
                      <div className="w-8 h-8 rounded-full bg-neutral-400"></div>
                    </div>
                    <div className="flex text-yellow-400 text-sm">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <blockquote className="text-sm text-neutral-700 italic">
                    "The {childService.title.toLowerCase()} service from PropertyCare NZ was outstanding. Professional team, excellent results, and great value for money."
                  </blockquote>
                  <p className="text-xs text-neutral-500 mt-2">— Auckland Homeowner</p>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                    <h3 className="text-lg font-bold text-primary-800 mb-4">Related Services</h3>
                    <div className="space-y-4">
                      {relatedServices.map((service: ChildService) => (
                        <Link 
                          key={service.id}
                          to={`/${parentSlug}/${service.slug}`}
                          className="block p-3 bg-neutral-50 hover:bg-primary-50 rounded-lg border border-neutral-100 hover:border-primary-200 transition-colors"
                        >
                          <h4 className="font-medium text-neutral-800 hover:text-primary-700 mb-1">{service.title}</h4>
                          <p className="text-xs text-neutral-600 line-clamp-2">{service.description.substring(0, 70)}...</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section - Added from ServiceDetailPage */}
      {childService.faq && childService.faq.length > 0 && (
        <section className="py-12 md:py-16 bg-white border-t border-neutral-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                  Frequently Asked Questions
                </div>
                <h2 className="text-3xl font-bold mb-4 text-primary-800">Common Questions About {childService.title}</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Find answers to frequently asked questions about our professional {childService.title.toLowerCase()} services in Auckland
                </p>
              </div>
              <ServiceFAQ faqs={childService.faq} />
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section - Full width design */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need {childService.title} Services in Auckland?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact PropertyCare NZ today for a free, no-obligation quote on our professional {childService.title.toLowerCase()} service. Our Auckland team is ready to help with your specific requirements.
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
    </>
  );
};

export default ChildServicePage;