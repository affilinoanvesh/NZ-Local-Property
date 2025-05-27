import React from 'react';
import { Project } from '../../types';
import { MapPin } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full border border-neutral-100">
      <div className="relative">
        <div className="overflow-hidden aspect-[4/3]">
          <img 
            src={project.image} 
            alt={project.title} 
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
      </div>
    </div>
  );
};

export default ProjectCard;