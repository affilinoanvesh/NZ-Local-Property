import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllChildServices, getServiceBySlug } from '../data/services';
import ServiceHero from '../components/Services/ServiceHero';
import ServiceBenefits from '../components/Services/ServiceBenefits';
import ServiceIncludes from '../components/Services/ServiceIncludes';
import ServiceComparison from '../components/Services/ServiceComparison';
import ServiceCTA from '../components/Services/ServiceCTA';
import LocationSection from '../components/Services/LocationSection';
import { ChevronLeft, Phone, Calendar, ArrowRight, Shield, Star, Clock, CheckCircle2, MapPin } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";
import ServiceCard from '../components/UI/ServiceCard';
import { ChildService } from '../types';
import ServiceFAQ from '../components/Services/ServiceFAQ';
import { useQuoteContext } from '../lib/QuoteContext';

const ServiceDetailPage: React.FC = () => {
  const { parentSlug, childSlug } = useParams<{ parentSlug: string; childSlug: string }>();
  const { openQuoteModal } = useQuoteContext();
  
  // Get parent service
  const parentService = getServiceBySlug(parentSlug || '');
  
  // Find child service
  const childService = parentService?.childServices?.find((child: ChildService) => child.slug === childSlug);
  
  if (!parentService || !childService) {
    return <Navigate to="/services" replace />;
  }
  
  const metaDescription = childService.metaDescription || 
    `Specialized ${childService.title.toLowerCase()} services in Auckland by licensed professionals. ${childService.description} Quality workmanship guaranteed for all Auckland properties.`;
  
  const metaKeywords = childService.metaKeywords?.join(', ') || 
    `${childService.title} Auckland, professional ${childService.title.toLowerCase()} service, Auckland ${parentService.title.toLowerCase()} specialists, best ${childService.title.toLowerCase()} Auckland, ${childService.title.toLowerCase()} experts Auckland`;

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

  // Find related services
  const relatedServices = parentService.childServices
    ?.filter((service: ChildService) => service.slug !== childSlug)
    .slice(0, 3) || [];
  
  return (
    <>
      <Helmet>
        <title>{childService.title} Auckland | Specialist {parentService.title} Service | PropertyCare NZ</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://propertycarenz.co.nz/${parentSlug}/${childService.slug}`} />
        
        <meta property="og:title" content={`${childService.title} Auckland | Specialist ${parentService.title} Service | PropertyCare NZ`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={childService.image} />
        <meta property="og:url" content={`https://propertycarenz.co.nz/${parentSlug}/${childService.slug}`} />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${childService.title} Auckland | Specialist ${parentService.title} Service | PropertyCare NZ`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={childService.image} />
      </Helmet>

      {/* Hero Section - Full width, immersive design */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
          <img 
            src={childService.image} 
            alt={`Specialized ${childService.title.toLowerCase()} services in Auckland by PropertyCare NZ`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-xl mb-6">
              Auckland's Premier {parentService.title} Specialists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Professional {childService.title} <span className="text-primary-200">Services in Auckland</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              {childService.description} Delivered by Auckland's most trusted property maintenance experts.
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
            <Link to={`/${parentSlug}`} className="hover:text-primary-600 transition-colors">
              {parentService.title}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-neutral-900 font-medium">{childService.title}</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          
          {/* Introduction Section - Without the large image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-4">
                  Auckland's Top Service Provider
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
                  Professional {childService.title} Services in Auckland
                </h2>
                <Separator className="w-20 h-1 bg-primary-500 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      {childService.description} Our team of experienced professionals ensures high-quality results on every project, with attention to detail and customer satisfaction as our top priorities in Auckland.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      PropertyCare NZ's professional {childService.title.toLowerCase()} service in Auckland addresses the specific needs of local properties with tailored solutions delivered by licensed specialists. Our Auckland {childService.title.toLowerCase()} experts bring comprehensive industry knowledge and local experience to ensure exceptional outcomes for every project.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-700 rounded-full p-2 mr-4 mt-1">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Auckland Property Expertise</h3>
                      <p className="text-neutral-700">
                        We understand the unique challenges that Auckland property owners face regarding {childService.title.toLowerCase()}, from local building regulations to Auckland's distinctive climate conditions. Our specialized approach incorporates these considerations to deliver {childService.title.toLowerCase()} solutions that provide lasting value, protection, and enhancement for Auckland properties.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    When you choose PropertyCare NZ for your Auckland {childService.title.toLowerCase()} requirements, you benefit from our commitment to excellence, transparent communication, and meticulous attention to detail. Our professional team ensures your Auckland property receives the highest standard of care throughout the entire {childService.title.toLowerCase()} process.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                    <button 
                      onClick={openQuoteModal} 
                      className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md inline-flex items-center transition-all cursor-pointer"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Get a Free Quote
                    </button>
                    <a 
                      href="tel:09-123-4567" 
                      className="bg-white border border-neutral-200 hover:border-primary-200 text-neutral-800 hover:text-primary-600 px-6 py-3 rounded-md inline-flex items-center transition-all"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call: 09 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Detailed Service Information - New visually appealing section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-neutral-100">
                  <div className="mb-8">
                    <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                      Expert Auckland Service
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-800">
                      Professional {childService.title} Services for Auckland Properties
                    </h2>
                    <Separator className="w-16 h-1 bg-primary-500 mb-6" />
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-neutral-700">
                    <p className="mb-4">
                      At PropertyCare NZ, we specialize in delivering comprehensive {childService.title.toLowerCase()} services tailored specifically for Auckland properties. Our approach combines industry-leading techniques, premium materials, and local expertise to address the unique requirements of Auckland's diverse property landscape. We understand the challenges that Auckland property owners face regarding {childService.title.toLowerCase()}, from weather exposure to building regulations, and implement solutions that provide optimal performance and longevity.
                    </p>
                    
                    <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 my-6">
                      <h3 className="text-xl font-bold mb-3 text-primary-800">Auckland Properties Expertise</h3>
                      <p className="mb-0 text-primary-900">
                        Our Auckland {childService.title.toLowerCase()} specialists bring extensive experience working with all types of properties throughout the region. From heritage villas in Ponsonby to modern apartments in the CBD, beachfront properties in Eastern Suburbs to family homes in South Auckland, we deliver consistent, high-quality {childService.title.toLowerCase()} services that enhance property functionality, appearance, and value.
                      </p>
                    </div>
                    
                    <p className="mb-4">
                      Quality materials are essential to successful {childService.title.toLowerCase()} projects in Auckland. PropertyCare NZ sources premium products specifically selected for their performance in Auckland's unique climate conditions. Our material selection process considers durability, sustainability, aesthetic appeal, and compatibility with existing property elements. This careful approach ensures your Auckland property receives {childService.title.toLowerCase()} solutions that stand the test of time.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden sticky top-24">
                  <div className="bg-primary-700 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Why Choose Our Auckland Service</h3>
                    <p className="text-white/90">Key benefits of our professional {childService.title.toLowerCase()} service for Auckland properties</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-primary-50 text-primary-600 rounded-full p-1.5 mr-3 mt-0.5">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium block mb-1">Auckland Climate Expertise</span>
                          <span className="text-sm text-neutral-600">Specialized solutions for Auckland's unique weather conditions</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary-50 text-primary-600 rounded-full p-1.5 mr-3 mt-0.5">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium block mb-1">Auckland Council Compliance</span>
                          <span className="text-sm text-neutral-600">All work meets local Auckland building regulations</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary-50 text-primary-600 rounded-full p-1.5 mr-3 mt-0.5">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium block mb-1">Premium Quality Materials</span>
                          <span className="text-sm text-neutral-600">Selected specifically for Auckland property conditions</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary-50 text-primary-600 rounded-full p-1.5 mr-3 mt-0.5">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium block mb-1">Fast Auckland-Wide Service</span>
                          <span className="text-sm text-neutral-600">Prompt response across all Auckland regions</span>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-neutral-100">
                      <p className="text-neutral-600 mb-4">
                        We recognize that every Auckland property has unique {childService.title.toLowerCase()} requirements. Our consultation process begins with a thorough assessment of your specific needs, property characteristics, and objectives.
                      </p>
                      <button 
                        onClick={openQuoteModal} 
                        className="bg-primary-600 hover:bg-primary-700 text-white w-full py-3 px-4 rounded-md font-medium inline-flex items-center justify-center transition-colors cursor-pointer"
                      >
                        Schedule a Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Features/Benefits Highlights - Redesigned in card format */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                Service Excellence
              </div>
              <h2 className="text-3xl font-bold mb-2 text-primary-800">What Makes Our Auckland {childService.title} Service Exceptional</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Discover the key benefits and superior features of our professional {childService.title.toLowerCase()} service in Auckland
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(childService.benefits || []).slice(0, 3).map((benefit: string, index: number) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group hover:border-primary-200">
                  <div className="bg-primary-50 text-primary-600 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit}</h3>
                  <p className="text-neutral-600">
                    Our professional Auckland {childService.title.toLowerCase()} service ensures {benefit.toLowerCase()} through advanced techniques, premium materials, and specialized expertise. Property owners throughout Auckland benefit from our comprehensive approach and commitment to excellence.
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Our Process Section - Redesigned with better flow */}
          <div className="max-w-4xl mx-auto mb-16 bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
            <div className="bg-primary-700 p-8 text-white">
              <div className="mb-6 text-center">
                <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-medium text-white mb-3">
                  Our Professional Approach
                </div>
                <h2 className="text-3xl font-bold mb-2 text-white">The PropertyCare NZ {childService.title} Process in Auckland</h2>
                <p className="text-white/90 max-w-2xl mx-auto">
                  We follow a streamlined professional process to deliver exceptional {childService.title.toLowerCase()} results in Auckland
                </p>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="relative">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mr-4 shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Initial Assessment</h3>
                      <p className="text-neutral-700">Our Auckland {childService.title.toLowerCase()} specialists will conduct a comprehensive evaluation of your property's specific requirements, examining structural elements, existing conditions, and environmental factors to provide a detailed assessment tailored to your Auckland property.</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute bottom-0 right-0 w-8 h-8">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2V30M16 30L30 16M16 30L2 16" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mr-4 shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Customized Solution</h3>
                      <p className="text-neutral-700">We'll develop a tailored {childService.title.toLowerCase()} plan that addresses your Auckland property's unique characteristics, incorporating local building regulations, environmental considerations, and your specific objectives to create optimal solutions for your property.</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute bottom-0 left-0 w-8 h-8">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2V30M16 2L30 16M16 2L2 16" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mr-4 shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Professional Implementation</h3>
                      <p className="text-neutral-700">Our experienced Auckland team will execute your {childService.title.toLowerCase()} project with precision and expertise, employing industry-leading techniques and premium materials specifically selected for Auckland properties to ensure superior, long-lasting results.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mr-4 shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Quality Assurance</h3>
                      <p className="text-neutral-700">We perform a systematic inspection of all completed {childService.title.toLowerCase()} work to ensure it meets our stringent quality standards and exceeds your expectations. Our Auckland quality assurance process includes thorough testing, detailed documentation, and a collaborative final review.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Includes */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
                  <h2 className="text-2xl font-bold mb-4 text-primary-800">What's Included in Our Auckland {childService.title} Service</h2>
                  <Separator className="w-12 h-1 bg-primary-500 mb-6" />
                  <ul className="space-y-3">
                    {childService.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary-50 text-primary-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-primary-50 p-8 rounded-xl shadow-sm border border-primary-100">
                  <h2 className="text-2xl font-bold mb-4 text-primary-800">Why Choose Our Professional {childService.title} Service in Auckland</h2>
                  <Separator className="w-12 h-1 bg-primary-500 mb-6" />
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    At PropertyCare NZ, we pride ourselves on delivering exceptional {childService.title.toLowerCase()} services throughout Auckland. Our experienced team brings expertise, attention to detail, and a commitment to quality that sets us apart from other providers.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    We understand that every property is unique, which is why we customize our approach to meet your specific needs. Whether you're a homeowner, landlord, or property manager, our {childService.title.toLowerCase()} service ensures your property remains in optimal condition.
                  </p>
                  
                  {/* Key Advantages Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-start p-4 bg-white rounded-lg border border-neutral-100">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-2 mr-4">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">5-Star Rated Service</h3>
                        <p className="text-sm text-neutral-600">Consistently high ratings from our satisfied customers</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg border border-neutral-100">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-2 mr-4">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Fully Insured</h3>
                        <p className="text-sm text-neutral-600">Protection and peace of mind for your property</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                  Auckland-Wide Coverage
                </div>
                <h2 className="text-3xl font-bold mb-2 text-primary-800">{childService.title} Services Throughout Auckland</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Our professional {childService.title.toLowerCase()} service is available across the entire Auckland region
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {locations.map((location: string, index: number) => (
                  <div key={index} className="flex items-center p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                    <MapPin className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="font-medium text-neutral-800">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Service Comparison */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <ServiceComparison 
                service={childService.title}
                benefits={childService.benefits} 
              />
            </div>
          </div>
          
          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="max-w-6xl mx-auto mb-16">
              <div className="mb-10 text-center">
                <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                  Complete Your Project
                </div>
                <h2 className="text-3xl font-bold mb-2 text-primary-800">Related {parentService.title} Services in Auckland</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Other professional services that complement our {childService.title.toLowerCase()} service or might interest Auckland property owners
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedServices.map((service: ChildService) => (
                  <div key={service.id} className="bg-white shadow-sm hover:shadow-md transition-shadow border border-neutral-100 rounded-xl overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-end">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                        <p className="text-neutral-600 mb-4 line-clamp-2">{service.description}</p>
                        <button 
                          onClick={openQuoteModal} 
                          className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 cursor-pointer"
                        >
                          View Service <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* FAQ Section - Added for Child Services */}
      {childService.faq && childService.faq.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ServiceFAQ faqs={childService.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need Professional {childService.title} in Auckland?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact PropertyCare NZ today for a free, no-obligation quote on our expert {childService.title.toLowerCase()} service. Our Auckland team is ready to help with your specific requirements.
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

export default ServiceDetailPage;