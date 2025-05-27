import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Kitchen Renovation',
    description: 'Complete renovation of an outdated kitchen into a modern, functional space.',
    category: 'general-repairs',
    location: 'Auckland',
    image: 'https://images.pexels.com/photos/7533923/pexels-photo-7533923.jpeg',
    challenge: 'The kitchen was outdated with poor functionality and limited storage space.',
    solution: 'We redesigned the layout to maximize storage and functionality, installed new cabinetry, countertops, and modern appliances.'
  },
  {
    id: '2',
    title: 'Flood Damage Restoration',
    description: 'Comprehensive restoration of a home severely damaged by flooding.',
    category: 'insurance',
    location: 'Wellington',
    image: 'https://images.pexels.com/photos/7031414/pexels-photo-7031414.jpeg',
    challenge: 'Extensive water damage affected flooring, walls, and electrical systems throughout the home.',
    solution: 'We conducted thorough water extraction, replaced damaged materials, restored electrical systems, and implemented preventative measures for future protection.'
  },
  {
    id: '3',
    title: 'Comprehensive Home Insulation',
    description: 'Full insulation upgrade to improve energy efficiency and comfort.',
    category: 'healthy-home',
    location: 'Christchurch',
    image: 'https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg',
    challenge: 'The home was poorly insulated, resulting in high energy bills and uncomfortable living conditions.',
    solution: 'We installed ceiling, underfloor, and wall insulation, along with a ventilation system to improve air quality and energy efficiency.'
  },
  {
    id: '4',
    title: 'Smart Home Integration',
    description: 'Comprehensive smart home system installation for improved security and convenience.',
    category: 'installations',
    location: 'Hamilton',
    image: 'https://images.pexels.com/photos/31238725/pexels-photo-31238725.jpeg',
    challenge: 'The client wanted to modernize their home with integrated smart technologies for security and convenience.',
    solution: 'We installed smart locks, lighting, thermostats, and a comprehensive home automation system that can be controlled via smartphone.'
  },
  {
    id: '5',
    title: 'Exterior Renovation',
    description: 'Complete exterior makeover including painting, repairs, and landscaping.',
    category: 'outdoor',
    location: 'Tauranga',
    image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg',
    challenge: `The home's exterior was weathered and outdated, with damaged cladding and an overgrown garden.`,
    solution: 'We repaired damaged cladding, applied fresh paint in modern colors, and redesigned the landscaping to enhance curb appeal.'
  },
  {
    id: '6',
    title: 'Bathroom Modernization',
    description: 'Transformation of an outdated bathroom into a contemporary spa-like retreat.',
    category: 'general-repairs',
    location: 'Dunedin',
    image: 'https://images.pexels.com/photos/16113326/pexels-photo-16113326.jpeg',
    challenge: 'The bathroom was dated with old fixtures, poor lighting, and inefficient use of space.',
    solution: 'We redesigned the layout, installed modern fixtures, improved lighting, and added luxury features like heated flooring for a spa-like experience.'
  }
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};