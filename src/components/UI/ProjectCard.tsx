import React, { useState } from 'react';
import { Project } from '../../types';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showAfter, setShowAfter] = useState(false);
  
  const toggleImage = () => {
    setShowAfter(!showAfter);
  };
  
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full border border-neutral-100">
      <div className="relative">
        <div className="overflow-hidden aspect-[4/3]">
          <img 
            src={showAfter ? project.afterImage : project.beforeImage} 
            alt={showAfter ? "After renovation" : "Before renovation"} 
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
        
        <div className="absolute top-3 left-3">
          <div className="bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm flex items-center">
            <MapPin className="h-3 w-3 mr-1" /> {project.location}
          </div>
        </div>
        
          <button 
          onClick={toggleImage}
          className="absolute bottom-4 right-4 bg-white rounded-full shadow-md p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary-50"
          aria-label={showAfter ? "View before image" : "View after image"}
        >
          {showAfter ? (
            <ArrowLeft className="h-5 w-5 text-primary-600" />
          ) : (
            <ArrowRight className="h-5 w-5 text-primary-600" />
          )}
          </button>
        
        <div className="absolute top-3 right-3">
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              showAfter 
              ? 'bg-green-500 text-white' 
              : 'bg-neutral-700 text-white'
          }`}>
            {showAfter ? 'After' : 'Before'}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-neutral-600 mb-5">{project.description}</p>
        
        <div className="space-y-4 pt-4 border-t border-neutral-100">
          <div>
            <span className="inline-block text-sm font-semibold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded mb-2">Challenge</span>
            <p className="text-sm text-neutral-600">{project.challenge}</p>
          </div>
          <div>
            <span className="inline-block text-sm font-semibold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded mb-2">Solution</span>
            <p className="text-sm text-neutral-600">{project.solution}</p>
          </div>
        </div>
        
        <div className="mt-5 pt-4 border-t border-neutral-100 flex justify-between items-center">
          <div 
            className="relative w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden cursor-pointer"
            onClick={toggleImage}
          >
            <div 
              className={`absolute top-0 left-0 h-full bg-primary-600 transition-all duration-300 ${
                showAfter ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>
          <div className="flex items-center ml-4">
            <button 
              onClick={() => setShowAfter(false)}
              className={`px-2 py-1 text-xs font-medium rounded-l-md transition-colors ${
                !showAfter 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Before
            </button>
            <button 
              onClick={() => setShowAfter(true)}
              className={`px-2 py-1 text-xs font-medium rounded-r-md transition-colors ${
                showAfter 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              After
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;