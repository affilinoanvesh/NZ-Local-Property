import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Testimonial } from '../../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="custom-dots">
        <ul className="mt-8"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="custom-dot"></div>
    )
  };

  // Add custom CSS for slider styling
  const sliderStyles = `
    .custom-dots {
      display: flex;
      justify-content: center;
    }
    .custom-dot {
      width: 10px;
      height: 10px;
      background-color: #D1D5DB;
      border-radius: 50%;
      margin: 0 5px;
      transition: all 0.3s ease;
    }
    .slick-active .custom-dot {
      background-color: #0070cc;
      transform: scale(1.2);
    }
    .slick-arrow {
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      z-index: 10;
    }
    .slick-arrow:hover {
      background-color: white;
    }
    .slick-prev {
      left: -50px;
    }
    .slick-next {
      right: -50px;
    }
    @media (max-width: 1100px) {
      .slick-prev {
        left: -20px;
      }
      .slick-next {
        right: -20px;
      }
    }
    @media (max-width: 768px) {
      .slick-prev, .slick-next {
        display: none !important;
      }
    }
  `;

  return (
    <>
      <style>{sliderStyles}</style>
      <div className="testimonial-slider relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 h-full bg-primary-900 skew-y-3 transform origin-bottom-right -z-10 -mt-12"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
                <div key={testimonial.id} className="px-4 md:px-6">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative">
                    <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                      <div className="bg-primary-50 rounded-full p-4">
                        <Quote className="h-10 w-10 text-primary-600 transform rotate-180" />
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 text-lg leading-relaxed mb-8 relative z-10">{testimonial.text}</p>
                    
                    <div className="flex items-center">
                      {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary-50"
                      />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4 text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                    )}
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-neutral-500">{testimonial.location}</p>
                  
                        <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-neutral-200'}`} 
                      />
                    ))}
                  </div>
                      </div>
                      
                      <div className="ml-auto text-right">
                        <span className="text-sm text-neutral-500 font-medium px-3 py-1 bg-neutral-100 rounded-full">
                          {testimonial.service}
                        </span>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </>
  );
};

export default TestimonialSlider;