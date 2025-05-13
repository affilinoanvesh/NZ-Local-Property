import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CategorySelector from '../components/UI/CategorySelector';
import ProjectCard from '../components/UI/ProjectCard';
import { getProjectsByCategory } from '../data/projects';
import { CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const displayedProjects = getProjectsByCategory(selectedCategory);
  
  return (
    <>
      <Helmet>
        <title>Our Projects | PropertyCare NZ - Property Maintenance Auckland</title>
        <meta name="description" content="Browse our portfolio of successful property maintenance and transformation projects in Auckland. See before and after results of our work." />
        <meta name="keywords" content="property maintenance projects, Auckland renovations, home improvement portfolio, property transformations" />
        <link rel="canonical" href="https://propertycarenz.co.nz/projects" />
        <meta property="og:title" content="Our Projects | PropertyCare NZ - Property Maintenance Auckland" />
        <meta property="og:description" content="Browse our portfolio of successful property maintenance and transformation projects in Auckland. See before and after results of our work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://propertycarenz.co.nz/projects" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
          <img 
            src="https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg" 
            alt="Property maintenance projects" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-xl mb-6">
              View Our Work
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Projects
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Browse through our portfolio of successful property transformations and maintenance solutions.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-600" />
              <span className="font-medium">Quality Transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-600" />
              <span className="font-medium">Verified Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-600" />
              <span className="font-medium">Client Testimonials</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-600" />
              <span className="font-medium">Detailed Documentation</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Work</h2>
            <p className="text-lg text-neutral-600">
              View our projects by category to see examples of our quality workmanship and attention to detail.
            </p>
          </div>
          
          <CategorySelector 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
          
          {displayedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {displayedProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-neutral-100 mt-10">
              <Search className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-600 font-medium">No projects found in this category.</p>
              <p className="text-neutral-500 text-sm mt-2">Try selecting a different category or check back later for updates.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-3">
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-neutral-600">
              We follow a structured approach to ensure successful project delivery and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative z-10 h-full">
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">1</div>
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                <p className="text-neutral-600 leading-relaxed">
                  We discuss your needs, assess the property, and understand your goals for the project.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-10 h-1 bg-primary-200 -translate-y-1/2 z-0 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:border-primary-200 after:border-t-[10px] after:border-r-0 after:border-b-[10px] after:border-l-[10px] after:border-transparent after:border-l-primary-200"></div>
            </div>
            
            <div className="relative group">
              <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative z-10 h-full">
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">2</div>
                <h3 className="text-xl font-bold mb-3">Proposal</h3>
                <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                <p className="text-neutral-600 leading-relaxed">
                  We provide a detailed quote outlining scope, materials, timeline, and costs.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-10 h-1 bg-primary-200 -translate-y-1/2 z-0 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:border-primary-200 after:border-t-[10px] after:border-r-0 after:border-b-[10px] after:border-l-[10px] after:border-transparent after:border-l-primary-200"></div>
            </div>
            
            <div className="relative group">
              <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative z-10 h-full">
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">3</div>
                <h3 className="text-xl font-bold mb-3">Execution</h3>
                <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                <p className="text-neutral-600 leading-relaxed">
                  Our skilled team completes the work with attention to detail and quality craftsmanship.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-10 h-1 bg-primary-200 -translate-y-1/2 z-0 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:border-primary-200 after:border-t-[10px] after:border-r-0 after:border-b-[10px] after:border-l-[10px] after:border-transparent after:border-l-primary-200"></div>
            </div>
            
            <div className="relative group">
              <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative z-10 h-full">
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">4</div>
                <h3 className="text-xl font-bold mb-3">Completion</h3>
                <Separator className="w-12 h-1 bg-primary-500 mb-4" />
                <p className="text-neutral-600 leading-relaxed">
                  Final inspection, cleanup, and walkthrough to ensure complete satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-[0.97]"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Property?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss your project and see how we can help bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary-800 hover:bg-neutral-100 font-medium px-8 py-4 rounded-md inline-flex items-center transition-all text-lg shadow-lg hover:shadow-xl group"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;