import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Clock, Award, Users, ArrowRight, CheckCircle2, MapPin, ArrowUpRight } from 'lucide-react';
import ServiceGrid from '../components/UI/ServiceGrid';
import TestimonialSlider from '../components/UI/TestimonialSlider';
import ProjectCard from '../components/UI/ProjectCard';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { projects } from '../data/projects';
import { Separator } from "@radix-ui/react-separator";
import { useQuoteContext } from '../lib/QuoteContext';

const HomePage: React.FC = () => {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);
  const { openQuoteModal } = useQuoteContext();
  
  return (
    <>
      <Helmet>
        <title>PropertyCare NZ | Professional Property Services Auckland</title>
        <meta name="description" content="Professional property maintenance and repair services across Auckland. From general repairs to specialized installations, we've got you covered." />
        <meta name="keywords" content="property maintenance, home repairs, Auckland property services, building repairs, house maintenance" />
        <link rel="canonical" href="https://propertycarenz.co.nz/" />
        <meta property="og:title" content="PropertyCare NZ | Professional Property Services Auckland" />
        <meta property="og:description" content="Professional property maintenance and repair services across Auckland. From general repairs to specialized installations, we've got you covered." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://propertycarenz.co.nz/" />
        <meta property="og:image" content="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PropertyCare NZ | Professional Property Services Auckland" />
        <meta name="twitter:description" content="Professional property maintenance and repair services across Auckland. From general repairs to specialized installations, we've got you covered." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PropertyCare NZ",
              "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
              "description": "Professional property maintenance and repair services across Auckland.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Auckland",
                "addressRegion": "Auckland",
                "addressCountry": "NZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-36.8484",
                "longitude": "174.7633"
              },
              "telephone": "+64-9-555-1234",
              "priceRange": "$$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/propertycarenz",
                "https://www.instagram.com/propertycarenz"
              ]
            }
          `}
        </script>
      </Helmet>
      
      {/* Hero Section - Modern version with gradient overlay */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
          <img 
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" 
            alt="Property exterior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-xl">
                <MapPin className="h-4 w-4 mr-1" /> Auckland's Trusted Property Experts
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Property, <br/><span className="text-primary-300">Our Priority</span>
              </h1>
              <p className="text-xl text-neutral-100 max-w-md">
                Comprehensive maintenance and repair solutions delivered with excellence and attention to detail.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteModal} 
                  className="bg-primary-600 text-white hover:bg-primary-700 font-medium px-6 py-3 rounded-md inline-flex items-center transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <Link 
                  to="/services" 
                  className="bg-transparent border border-white/40 text-white hover:bg-white/10 font-medium px-6 py-3 rounded-md inline-flex items-center transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3990364/pexels-photo-3990364.jpeg" 
                alt="Professional maintenance service" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Licensed & Insured</h3>
              <p className="text-neutral-600 text-sm">Comprehensive coverage for your peace of mind</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Expert Craftsmen</h3>
              <p className="text-neutral-600 text-sm">Skilled professionals with years of experience</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Client Focused</h3>
              <p className="text-neutral-600 text-sm">Personalized service and exceptional results</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">On-Time Service</h3>
              <p className="text-neutral-600 text-sm">Quick response times and efficient completion</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - Updated with modern cards */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-neutral-600">
              From minor repairs to major renovations, we provide a complete range of property services to meet your needs
            </p>
          </div>
          
          <ServiceGrid services={featuredServices} />
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View All Services <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Feature Highlight Section - New section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/5691586/pexels-photo-5691586.jpeg" 
                alt="Property renovation project" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">We Deliver Excellence in Every Project</h2>
              <p className="text-lg text-neutral-600">
                With years of experience in property maintenance and repairs, we pride ourselves on delivering high-quality services that exceed expectations.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Professionally trained and experienced team',
                  'Transparent pricing with no hidden fees',
                  'Quality materials and workmanship',
                  'Fully insured with liability coverage',
                  'Satisfaction guaranteed on all work'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
              >
                Learn More About Us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Updated with gradient background */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Property?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote on any property maintenance or repair service.
            </p>
            <button 
              onClick={openQuoteModal} 
              className="bg-primary-600 text-white hover:bg-primary-700 font-medium px-8 py-4 rounded-md inline-flex items-center transition-all text-lg shadow-lg hover:shadow-xl cursor-pointer"
            >
              Get Your Free Quote Today <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Projects Section - Updated with better spacing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-lg text-neutral-600">
              Take a look at some of our recent transformations and successful client projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View All Projects <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-neutral-600">
              Hear from our satisfied customers who have experienced our quality service
            </p>
          </div>
          
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
      
      {/* Contact Info Section - New section */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <Separator className="w-16 h-1 bg-primary-500 mb-4 mx-auto md:mx-0" />
              <p className="mb-2">Phone: +64-9-555-1234</p>
              <p className="mb-2">Email: info@propertycarenz.co.nz</p>
              <p>Auckland, New Zealand</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <Separator className="w-16 h-1 bg-primary-500 mb-4 mx-auto" />
              <p className="mb-2">Monday - Friday: 8am - 6pm</p>
              <p className="mb-2">Saturday: 9am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4">Service Areas</h3>
              <Separator className="w-16 h-1 bg-primary-500 mb-4 mx-auto md:ml-auto" />
              <p className="mb-2">Auckland Central</p>
              <p className="mb-2">North Shore</p>
              <p>West & South Auckland</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;