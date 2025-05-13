import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | PropertyCare NZ</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Helmet>
      
      <div className="min-h-[80vh] flex items-center justify-center bg-neutral-50">
        <div className="text-center px-4 py-16 max-w-lg mx-auto">
          <div className="inline-flex items-center justify-center bg-primary-100 text-primary-600 rounded-full w-20 h-20 mb-6">
            <span className="text-3xl font-bold">404</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 inline-block text-transparent bg-clip-text">Page Not Found</h1>
          
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a different location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="bg-white border border-neutral-200 text-neutral-800 hover:text-primary-600 hover:border-primary-200 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;