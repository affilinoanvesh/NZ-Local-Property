import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("meogzqvv");
  
  const getInputClasses = (fieldName: string) => {
    return `w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-white
      border-neutral-200 hover:border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100`;
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Send Us a Message</h2>
        <p className="text-neutral-600 max-w-xl mx-auto">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>
      
      {state.succeeded ? (
        <div className="bg-white rounded-xl p-8 max-w-lg mx-auto">
          <div className="py-6 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-3">Thank you for your message!</h3>
            <p className="text-neutral-600 mx-auto">
              We've received your inquiry and will get back to you as soon as possible.
            </p>
          </div>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={getInputClasses('name')}
                placeholder="John Smith"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={getInputClasses('email')}
                placeholder="john@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={getInputClasses('phone')}
                placeholder="(021) 123 4567"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Service Interest
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className={`${getInputClasses('service')} appearance-none`}
                >
                  <option value="">Select a service</option>
                  <option value="general-repairs">General Repairs</option>
                  <option value="healthy-home">Healthy Home Solutions</option>
                  <option value="insurance">Insurance Work</option>
                  <option value="installations">Specialized Installations</option>
                  <option value="outdoor">Outdoor Maintenance</option>
                  <option value="handyman">Handyman Services</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className={getInputClasses('message')}
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;