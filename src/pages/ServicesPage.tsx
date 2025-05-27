import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceGrid from '../components/UI/ServiceGrid';
import CategorySelector from '../components/UI/CategorySelector';
import { Service, ServiceCategory } from '../types';
import { services, serviceCategories, getServicesByCategory } from '../data/services';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Search, CheckCircle2, Shield, Clock, Star, Filter, Zap } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";
import { useQuoteContext } from '../lib/QuoteContext';

const ServicesPage: React.FC = () => {
  const { openQuoteModal } = useQuoteContext();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  
  const displayedServices: Service[] = selectedCategory === 'all' 
    ? services 
    : getServicesByCategory(selectedCategory as ServiceCategory);
  
  return (
    <>
      <Helmet>
        <title>Professional Property Services Auckland | PropertyCare NZ</title>
        <meta name="description" content="Discover our comprehensive range of professional property maintenance services in Auckland. From repairs and renovations to specialized installations, PropertyCare NZ delivers exceptional quality for residential and commercial properties." />
        <meta name="keywords" content="property services Auckland, home maintenance Auckland, building repairs Auckland, property maintenance Auckland, commercial property services, residential maintenance" />
        <link rel="canonical" href="https://propertycarenz.co.nz/services" />
        <meta property="og:title" content="Professional Property Services Auckland | PropertyCare NZ" />
        <meta property="og:description" content="Discover our comprehensive range of professional property maintenance services in Auckland. From repairs and renovations to specialized installations, PropertyCare NZ delivers exceptional quality for residential and commercial properties." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://propertycarenz.co.nz/services" />
        <meta property="og:image" content="https://images.pexels.com/photos/8292797/pexels-photo-8292797.jpeg" />
      </Helmet>
      
      {/* Hero Section - Full width, immersive design */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
          <img 
            src="https://images.pexels.com/photos/8292797/pexels-photo-8292797.jpeg" 
            alt="Professional property maintenance services in Auckland" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-xl mb-6">
              Auckland's Trusted Property Specialists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Professional <span className="text-primary-200">Property Services</span> in Auckland
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Comprehensive property maintenance and repair solutions delivered by licensed professionals for residential and commercial properties throughout Auckland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openQuoteModal} 
                className="bg-white text-primary-800 hover:bg-neutral-100 font-medium px-8 py-4 rounded-md inline-flex items-center transition-all text-lg shadow-lg hover:shadow-xl"
              >
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="tel:09-123-4567" 
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-8 py-4 rounded-md inline-flex items-center transition-all text-lg backdrop-blur-sm"
              >
                <Zap className="mr-2 h-5 w-5" />
                Request Fast Service
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
              <span className="font-medium">Prompt Response</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction to Services Section - Enhanced with better layout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                  Auckland Property Maintenance Experts
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-800">
                  Comprehensive Property Services in Auckland
                </h2>
                <Separator className="w-20 h-1 bg-primary-500 mb-6" />
                
                <div className="prose prose-lg max-w-none text-neutral-700">
                  <p className="mb-4 leading-relaxed">
                    PropertyCare NZ delivers a complete range of professional property maintenance and improvement services throughout Auckland. Our comprehensive service offerings are designed to address all aspects of property care, from essential repairs and routine maintenance to specialized installations and property enhancements.
                  </p>
                  
                  <p className="leading-relaxed">
                    Auckland properties face unique challenges due to the local climate, coastal proximity, and diverse building styles. Our property services are specifically tailored to address these Auckland-specific factors, ensuring optimal results that withstand local conditions while meeting regulatory requirements.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-4">
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="text-xl font-bold mb-4 text-primary-800">Why Auckland Property Owners Choose Us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-primary-800">Licensed Auckland specialists</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-primary-800">Comprehensive quality guarantees</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-primary-800">Auckland-wide service coverage</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-primary-800">Transparent pricing & documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-neutral-100">
              <div>
                <p className="text-neutral-700 leading-relaxed">
                  We understand that Auckland property owners value quality, reliability, and professional expertise. All our Auckland property services are delivered by fully licensed, insured specialists who bring years of industry experience and local knowledge to every project. This commitment to professionalism ensures consistent, superior results across our entire service range.
                </p>
              </div>
              
              <div>
                <p className="text-neutral-700 leading-relaxed">
                  From Central Auckland to North Shore, East Auckland to West Auckland, our property services are available throughout the Auckland region. Our extensive coverage allows us to provide prompt, efficient service to property owners across Auckland, maintaining the same high standards regardless of location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services & Category Browsing Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              Auckland Property Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Expert Property Services in Auckland</h2>
            <p className="text-lg text-neutral-600">
              Browse our complete range of professional property services or filter by category to find exactly what your Auckland property needs.
            </p>
          </div>
          
          {/* Category Navigator with visual enhancement */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-neutral-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="h-5 w-5 text-primary-600" />
              <h3 className="text-xl font-bold">Find Your Auckland Property Service</h3>
            </div>
            <CategorySelector 
              selectedCategory={selectedCategory} 
              onCategoryChange={(category) => setSelectedCategory(category as ServiceCategory | 'all')} 
            />
          </div>
          
          {/* Category Description Panel (Conditional) */}
          {selectedCategory !== 'all' && (
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-neutral-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary-800">
                      {serviceCategories.find(cat => cat.id === selectedCategory)?.title} Services in Auckland
                    </h2>
                    <Separator className="w-16 h-1 bg-primary-500 mb-4" />
                  </div>
                  <div className="hidden md:block">
                    <svg className="h-10 w-10 text-primary-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  {serviceCategories.find(cat => cat.id === selectedCategory)?.description}
                </p>
              </div>
            </div>
          )}
          
          {/* Service Grid or Empty State */}
          {displayedServices.length > 0 ? (
            <div className="mt-8">
              <ServiceGrid services={displayedServices} columns={3} className="mt-6" />
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white rounded-xl shadow-sm border border-neutral-100 max-w-2xl mx-auto">
              <Search className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Services Found</h3>
              <p className="text-neutral-600 font-medium">We couldn't find any services in this category at this time.</p>
              <p className="text-neutral-500 text-sm mt-2 mb-6">Try selecting a different category or contact us for custom services.</p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
              >
                View All Services
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Services Section - Enhanced */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              Highly Requested in Auckland
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Auckland's Most Popular Property Services</h2>
            <p className="text-lg text-neutral-600">
              These are the property maintenance services most frequently requested by Auckland homeowners and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow border border-neutral-100 rounded-xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`Professional ${service.title.toLowerCase()} services in Auckland`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <div className="text-sm font-medium text-primary-200">Professional Service</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{service.title} Services Auckland</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">{service.description} Our Auckland specialists deliver professional results for all property types.</p>
                  <Link 
                    to={`/${service.slug}`} 
                    className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
                  >
                    View {service.title} Services <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Benefits Section - Visual enhancement */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-24 bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
                  <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                    Why Choose Us
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Property Experts in Auckland</h3>
                  <Separator className="w-12 h-1 bg-primary-500 mb-6" />
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary-100 text-primary-600 rounded-full p-2 mr-4">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Fully Licensed & Insured</h4>
                        <p className="text-sm text-neutral-600">Complete protection for your Auckland property</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-100 text-primary-600 rounded-full p-2 mr-4">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">5-Star Rated Service</h4>
                        <p className="text-sm text-neutral-600">Consistently top-rated across Auckland</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-100 text-primary-600 rounded-full p-2 mr-4">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Prompt Response</h4>
                        <p className="text-sm text-neutral-600">Fast service throughout Auckland</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <button 
                      onClick={openQuoteModal} 
                      className="bg-primary-600 hover:bg-primary-700 text-white w-full md:w-auto px-6 py-3 rounded-md inline-flex items-center justify-center transition-colors font-medium cursor-pointer"
                    >
                      Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-8">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                    Auckland Property Benefits
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Why Professional Property Services Matter in Auckland</h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Professional property services provide essential benefits for Auckland property owners, protecting your investment and enhancing value
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all hover:border-primary-200">
                    <h3 className="text-xl font-bold mb-3 text-primary-800">Auckland Climate Protection</h3>
                    <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                    <p className="text-neutral-700 leading-relaxed">
                      Auckland's unique climate and environmental conditions create specific challenges for property maintenance. Professional property services address these challenges with specialized knowledge and techniques that protect properties from Auckland's humidity, salt air, UV exposure, and seasonal weather patterns.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all hover:border-primary-200">
                    <h3 className="text-xl font-bold mb-3 text-primary-800">Enhanced Property Value</h3>
                    <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                    <p className="text-neutral-700 leading-relaxed">
                      Property values in Auckland benefit significantly from professional maintenance and improvement services. Well-maintained properties command higher market values and attract quality tenants or buyers. Our comprehensive property services enhance both the aesthetic appeal and functional aspects of Auckland properties.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all hover:border-primary-200">
                    <h3 className="text-xl font-bold mb-3 text-primary-800">Regulatory Compliance</h3>
                    <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                    <p className="text-neutral-700 leading-relaxed">
                      Regulatory compliance is another crucial benefit of professional property services in Auckland. Our specialists stay current with Auckland Council requirements, building codes, health and safety regulations, and industry standards. This expertise ensures all property work meets legal obligations.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all hover:border-primary-200">
                    <h3 className="text-xl font-bold mb-3 text-primary-800">Cost-Effective Maintenance</h3>
                    <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                    <p className="text-neutral-700 leading-relaxed">
                      Cost-effective maintenance is perhaps the most important advantage of professional property services for Auckland owners. Regular, expert maintenance prevents minor issues from developing into major problems requiring costly repairs. Our preventative approach saves Auckland property owners significant expense over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Request Quote Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-95"></div>
                    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready for Professional Property Care in Auckland?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact PropertyCare NZ today for a free, no-obligation quote on any of our Auckland property services. Our local team is ready to help with your maintenance needs.
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
                <Zap className="mr-2 h-5 w-5" />
                Call for Urgent Service
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              The PropertyCare NZ Difference
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Why Choose Our Auckland Property Services</h2>
            <p className="text-lg text-neutral-600">
              At PropertyCare NZ, we stand behind our work and offer Auckland property owners these important commitments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group hover:border-primary-200">
              <div className="bg-primary-50 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-4" />
              <p className="text-neutral-600 leading-relaxed">
                We stand behind our workmanship with quality guarantees and use only premium materials for lasting results.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group hover:border-primary-200">
              <div className="bg-primary-50 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Licensed Professionals</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-4" />
              <p className="text-neutral-600 leading-relaxed">
                Our team consists of licensed, experienced professionals who take pride in their craft and attention to detail.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group hover:border-primary-200">
              <div className="bg-primary-50 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Transparency</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-4" />
              <p className="text-neutral-600 leading-relaxed">
                We provide detailed quotes with no hidden costs and maintain clear communication throughout your project.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              Learn more about our company <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Areas Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              Auckland-Wide Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Property Services Throughout Auckland</h2>
            <p className="text-lg text-neutral-600">
              We provide our quality property maintenance services across all Auckland regions and surrounding areas
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                'Central Auckland', 
                'North Shore', 
                'East Auckland', 
                'West Auckland',
                'South Auckland',
                'Manukau City',
                'Waitakere',
                'North Harbour'
              ].map((area, index) => (
                <div key={index} className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 text-center">
                  <span className="font-medium text-neutral-800">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-neutral-600">Not sure if we service your area?</p>
              <Link 
                to="/contact" 
                className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 mt-2"
              >
                Contact us to find out <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;