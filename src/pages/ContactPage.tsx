import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/UI/ContactForm';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Building2 } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | PropertyCare NZ - Property Maintenance Auckland</title>
        <meta name="description" content="Get in touch with PropertyCare NZ for all your property maintenance needs in Auckland. Contact us for free quotes and consultations." />
        <meta name="keywords" content="contact PropertyCare NZ, Auckland property services, property maintenance quote, free consultation" />
        <link rel="canonical" href="https://propertycarenz.co.nz/contact" />
        <meta property="og:title" content="Contact Us | PropertyCare NZ - Property Maintenance Auckland" />
        <meta property="og:description" content="Get in touch with PropertyCare NZ for all your property maintenance needs in Auckland. Contact us for free quotes and consultations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://propertycarenz.co.nz/contact" />
      </Helmet>
      
      {/* Hero Section - Simplified */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
          <img 
            src="https://images.pexels.com/photos/8293673/pexels-photo-8293673.jpeg" 
            alt="Contact PropertyCare NZ" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our team is ready to help with your property maintenance needs in Auckland
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Contact Content - Streamlined */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 bg-neutral-50 py-4 px-5 rounded-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary-600" />
                <span className="font-medium">Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary-600" />
                <span className="font-medium">Free Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary-600" />
                <span className="font-medium">No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary-600" />
                <span className="font-medium">Professional Service</span>
              </div>
            </div>
            
            {/* Form - Now with shadow for elevation */}
            <div className="bg-white rounded-xl shadow-md border border-neutral-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* NAP and Map Section - Two Columns */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Find Us</h2>
            <p className="text-neutral-600">
              Visit our office or reach us directly using the information below
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md border border-neutral-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-800 to-primary-700 p-5 text-white">
                <h3 className="text-xl font-bold mb-1 text-white">Contact Information</h3>
                <p className="text-white/80 text-sm">Serving the greater Auckland region</p>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary-50 text-primary-600 rounded-full p-2.5 mr-3">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">PropertyCare NZ</h3>
                    <p className="text-neutral-600 text-sm">Auckland's Trusted Property Maintenance Service</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-50 text-primary-600 rounded-full p-2.5 mr-3">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">Our Address</h3>
                    <address className="not-italic text-neutral-600 text-sm">
                      123 Queen Street<br />
                      Auckland CBD 1010, New Zealand
                    </address>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-50 text-primary-600 rounded-full p-2.5 mr-3">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">Phone</h3>
                    <a href="tel:09 123 4567" className="text-neutral-600 text-sm hover:text-primary-600 transition-colors">
                      09 123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-50 text-primary-600 rounded-full p-2.5 mr-3">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">Email</h3>
                    <a href="mailto:info@propertycarenz.co.nz" className="text-neutral-600 text-sm hover:text-primary-600 transition-colors">
                      info@propertycarenz.co.nz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-50 text-primary-600 rounded-full p-2.5 mr-3">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">Business Hours</h3>
                    <p className="text-neutral-600 text-sm">
                      Monday - Friday: 8am - 5pm<br />
                      Saturday: 9am - 2pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map - Fixed to remove gap */}
            <div className="bg-white rounded-xl shadow-md border border-neutral-100 overflow-hidden flex flex-col">
              <div className="p-5 pb-2">
                <h3 className="text-lg font-bold mb-1">Our Location</h3>
                <p className="text-neutral-600 text-sm">Find us in the heart of Auckland CBD</p>
              </div>
              <div className="flex-grow">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5873414212103!2d174.7642348761654!3d-36.84921797173686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sQueen%20Street%2C%20Auckland%20CBD%2C%20Auckland!5e0!3m2!1sen!2snz!4v1714007762354!5m2!1sen!2snz"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, display: 'block', minHeight: '360px' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PropertyCare NZ Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Areas - Auckland Focus */}
      <section className="py-12 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Service Areas in Auckland</h2>
            <p className="text-neutral-600">
              We exclusively provide property maintenance services throughout the Auckland region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
            <div className="bg-neutral-50 p-5 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">Central Auckland</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-3" />
              <ul className="space-y-1.5 text-neutral-600 text-sm">
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Auckland CBD
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Parnell
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Ponsonby
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Newmarket
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Mount Eden
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-5 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">North Auckland</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-3" />
              <ul className="space-y-1.5 text-neutral-600 text-sm">
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  North Shore
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Takapuna
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Albany
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Devonport
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Hibiscus Coast
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-5 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">South & East Auckland</h3>
              <Separator className="w-12 h-1 bg-primary-500 mb-3" />
              <ul className="space-y-1.5 text-neutral-600 text-sm">
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  East Auckland
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Howick
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Manukau
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Papakura
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-primary-600 mr-1.5" />
                  Botany
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-10 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-[0.97]"></div>
                    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Let's Work Together</h2>
            <p className="text-lg mb-5 text-white/90">
              Our Auckland-based team is ready to assist with all your property maintenance needs
            </p>
            <a 
              href="tel:09 123 4567" 
              className="bg-white text-primary-800 hover:bg-neutral-100 font-medium px-6 py-3 rounded-md inline-flex items-center transition-all shadow-lg hover:shadow-xl"
            >
              Call Us Now <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;