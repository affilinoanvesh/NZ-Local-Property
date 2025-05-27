import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Users, Award, Star, Shield, BadgeCheck } from 'lucide-react';
import { teamMembers } from '../data/team';
import { Separator } from "@radix-ui/react-separator";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About PropertyCare NZ | Property Maintenance Specialists Auckland</title>
        <meta name="description" content="Learn about PropertyCare NZ, your trusted partner for comprehensive property maintenance and repair services throughout Auckland." />
        <meta name="keywords" content="about PropertyCare NZ, Auckland property services, property maintenance team, Auckland contractors" />
        <link rel="canonical" href="https://propertycarenz.co.nz/about" />
        <meta property="og:title" content="About PropertyCare NZ | Property Maintenance Specialists Auckland" />
        <meta property="og:description" content="Learn about PropertyCare NZ, your trusted partner for comprehensive property maintenance and repair services throughout Auckland." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://propertycarenz.co.nz/about" />
        <meta property="og:image" content="https://images.pexels.com/photos/8293673/pexels-photo-8293673.jpeg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
          <img 
            src="https://images.pexels.com/photos/8293673/pexels-photo-8293673.jpeg" 
            alt="Professional property maintenance team" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-xl mb-6">
              Trusted Property Specialists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted partner for comprehensive property services throughout New Zealand
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-neutral-700 leading-relaxed">
                Founded in 2018, PropertyCare NZ was established with a simple mission: to provide comprehensive, high-quality property maintenance and repair services to homeowners and businesses throughout New Zealand.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                What began as a small team of skilled tradespeople has grown into a nationwide operation with specialists in every area of property maintenance, from general repairs to specialized installations and healthy home solutions.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                We've built our reputation on reliability, exceptional workmanship, and customer satisfaction. Our team takes pride in transforming properties and solving maintenance challenges for our clients.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8292797/pexels-photo-8292797.jpeg" 
                alt="Professional team working on property maintenance project" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-neutral-600">
              The principles that guide our work and ensure exceptional service for every client
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-primary-50 text-primary-600 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                <p className="text-neutral-600 leading-relaxed">
                  We deliver exceptional workmanship using premium materials and proven techniques. Our attention to detail ensures lasting results that exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-primary-50 text-primary-600 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Reliability</h3>
                <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                <p className="text-neutral-600 leading-relaxed">
                  We show up when promised, complete projects on time, and communicate clearly throughout. You can count on us to deliver consistent service every time.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-primary-50 text-primary-600 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
                <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                <p className="text-neutral-600 leading-relaxed">
                  Your satisfaction is our priority. We listen carefully to your needs, provide personalized solutions, and ensure you're completely satisfied with our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              Meet The Experts
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-neutral-600">
              Meet the dedicated professionals behind our property services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="group bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-neutral-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Discover the PropertyCare NZ difference and why our clients trust us with their valuable properties
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-start">
                <div className="bg-primary-50 text-primary-600 rounded-full p-3 mr-4 flex-shrink-0">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fully Licensed & Insured</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Our team is fully licensed and insured for all the work we undertake, providing you with peace of mind.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-start">
                <div className="bg-primary-50 text-primary-600 rounded-full p-3 mr-4 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Free Detailed Quotes</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We provide comprehensive, no-obligation quotes with clear pricing and scope of work.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-start">
                <div className="bg-primary-50 text-primary-600 rounded-full p-3 mr-4 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Nationwide Coverage</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We service properties throughout New Zealand with local teams in major cities and regions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-start">
                <div className="bg-primary-50 text-primary-600 rounded-full p-3 mr-4 flex-shrink-0">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    All our work is backed by a satisfaction guarantee and warranty on workmanship.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-start">
                <div className="bg-primary-50 text-primary-600 rounded-full p-3 mr-4 flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experienced Team</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Our professionals have years of experience across all areas of property maintenance.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-start">
                <div className="bg-primary-50 text-primary-600 rounded-full p-3 mr-4 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transparent Communication</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We keep you informed throughout the process with clear, honest communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 md:py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              Trusted Credentials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications & Partners</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We're proud to be affiliated with these industry-leading organizations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-4xl mx-auto">
            <div className="bg-neutral-50 px-8 py-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-16 flex items-center justify-center">
                <p className="font-bold text-neutral-700">Site Safe</p>
              </div>
            </div>
            
            <div className="bg-neutral-50 px-8 py-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-16 flex items-center justify-center">
                <p className="font-bold text-neutral-700">Master Builders</p>
              </div>
            </div>
            
            <div className="bg-neutral-50 px-8 py-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-16 flex items-center justify-center">
                <p className="font-bold text-neutral-700">Licensed Building Practitioners</p>
              </div>
            </div>
            
            <div className="bg-neutral-50 px-8 py-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-16 flex items-center justify-center">
                <p className="font-bold text-neutral-700">ECANZ</p>
              </div>
            </div>
            
            <div className="bg-neutral-50 px-8 py-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-16 flex items-center justify-center">
                <p className="font-bold text-neutral-700">Master Painters</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote on any property maintenance or repair service.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-primary-800 hover:bg-neutral-100 font-medium px-8 py-4 rounded-md inline-flex items-center transition-all text-lg shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;