import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Kitchen Renovation',
    description: 'Complete renovation of an outdated kitchen into a modern, functional space.',
    category: 'general-repairs',
    location: 'Auckland',
    beforeImage: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg',
    afterImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    challenge: 'The kitchen was outdated with poor functionality and limited storage space.',
    solution: 'We redesigned the layout to maximize storage and functionality, installed new cabinetry, countertops, and modern appliances.'
  },
  {
    id: '2',
    title: 'Flood Damage Restoration',
    description: 'Comprehensive restoration of a home severely damaged by flooding.',
    category: 'insurance',
    location: 'Wellington',
    beforeImage: 'https://images.pexels.com/photos/6508455/pexels-photo-6508455.jpeg',
    afterImage: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    challenge: 'Extensive water damage affected flooring, walls, and electrical systems throughout the home.',
    solution: 'We conducted thorough water extraction, replaced damaged materials, restored electrical systems, and implemented preventative measures for future protection.'
  },
  {
    id: '3',
    title: 'Comprehensive Home Insulation',
    description: 'Full insulation upgrade to improve energy efficiency and comfort.',
    category: 'healthy-home',
    location: 'Christchurch',
    beforeImage: 'https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg',
    afterImage: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
    challenge: 'The home was poorly insulated, resulting in high energy bills and uncomfortable living conditions.',
    solution: 'We installed ceiling, underfloor, and wall insulation, along with a ventilation system to improve air quality and energy efficiency.'
  },
  {
    id: '4',
    title: 'Smart Home Integration',
    description: 'Comprehensive smart home system installation for improved security and convenience.',
    category: 'installations',
    location: 'Hamilton',
    beforeImage: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg',
    afterImage: 'https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg',
    challenge: 'The client wanted to modernize their home with integrated smart technologies for security and convenience.',
    solution: 'We installed smart locks, lighting, thermostats, and a comprehensive home automation system that can be controlled via smartphone.'
  },
  {
    id: '5',
    title: 'Exterior Renovation',
    description: 'Complete exterior makeover including painting, repairs, and landscaping.',
    category: 'outdoor',
    location: 'Tauranga',
    beforeImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
    afterImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    challenge: `The home's exterior was weathered and outdated, with damaged cladding and an overgrown garden.`,
    solution: 'We repaired damaged cladding, applied fresh paint in modern colors, and redesigned the landscaping to enhance curb appeal.'
  },
  {
    id: '6',
    title: 'Bathroom Modernization',
    description: 'Transformation of an outdated bathroom into a contemporary spa-like retreat.',
    category: 'general-repairs',
    location: 'Dunedin',
    beforeImage: 'https://images.pexels.com/photos/6444280/pexels-photo-6444280.jpeg',
    afterImage: 'https://images.pexels.com/photos/6316064/pexels-photo-6316064.jpeg',
    challenge: 'The bathroom was dated with old fixtures, poor lighting, and inefficient use of space.',
    solution: 'We redesigned the layout, installed modern fixtures, improved lighting, and added luxury features like heated flooring for a spa-like experience.'
  }
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};