// Main service category images updates
export const mainServiceImages = {
  'general-repairs': 'https://images.pexels.com/photos/8293673/pexels-photo-8293673.jpeg', // Professional contractor working
  'healthy-home': 'https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg', // Home insulation installation
  'insurance': 'https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg', // Professional damage assessment
  'installations': 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg', // Professional installation work
  'outdoor': 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg', // Outdoor maintenance work
  'handyman': 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg' // Professional handyman working
} as const;

// Child service image updates
// General Repairs
export const generalRepairsImages = {
  'building-repairs': 'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg', // Building repair work
  'kitchen-maintenance': 'https://images.pexels.com/photos/4491942/pexels-photo-4491942.jpeg', // Kitchen repair
  'bathroom-repairs': 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg', // Bathroom maintenance
  'roof-gutter-repairs': 'https://images.pexels.com/photos/5816713/pexels-photo-5816713.jpeg', // Roof repair
  'carpet-flooring-repairs': 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg', // Flooring work
  'windows-doors-repairs': 'https://images.pexels.com/photos/5691814/pexels-photo-5691814.jpeg', // Window repair
  'tiling': 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg', // Tiling work
  'gib-plastering': 'https://images.pexels.com/photos/8293751/pexels-photo-8293751.jpeg' // Plastering work
} as const;

// Healthy Homes
export const healthyHomesImages = {
  'insulation-installation': 'https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg', // Insulation work
  'heating-installation': 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg', // Heating system
  'ventilation-systems': 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg', // Ventilation work
  'drainage-guttering': 'https://images.pexels.com/photos/5816713/pexels-photo-5816713.jpeg', // Drainage work
  'mould-removal': 'https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg', // Mould treatment
  'healthy-homes-assessment': 'https://images.pexels.com/photos/8293673/pexels-photo-8293673.jpeg' // Home assessment
} as const;

// Insurance Work
export const insuranceImages = {
  'fire-damage-restoration': 'https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg', // Fire damage repair
  'flood-damage-repairs': 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg', // Water damage repair
  'insurance-building-repairs': 'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg' // Building repair
} as const;

// Installations
export const installationsImages = {
  'double-glazing': 'https://images.pexels.com/photos/5691814/pexels-photo-5691814.jpeg', // Window installation
  'heat-pump-installation': 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg', // Heat pump
  'air-conditioning': 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg', // AC installation
  'home-automation': 'https://images.pexels.com/photos/3846259/pexels-photo-3846259.jpeg', // Smart home
  'locks-handles': 'https://images.pexels.com/photos/5691751/pexels-photo-5691751.jpeg', // Lock installation
  'cupboards-shelves': 'https://images.pexels.com/photos/7319279/pexels-photo-7319279.jpeg', // Shelving
  'pergola-assembly': 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg' // Pergola work
} as const;

// Outdoor Maintenance
export const outdoorImages = {
  'paving-bricklaying': 'https://images.pexels.com/photos/8293751/pexels-photo-8293751.jpeg', // Paving work
  'concreting': 'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg', // Concrete work
  'fence-gate-repairs': 'https://images.pexels.com/photos/5691814/pexels-photo-5691814.jpeg', // Fence repair
  'roof-cleaning': 'https://images.pexels.com/photos/5816713/pexels-photo-5816713.jpeg', // Roof cleaning
  'water-blasting': 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg', // Water blasting
  'driveway-cleaning': 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg', // Driveway cleaning
  'building-cleaning': 'https://images.pexels.com/photos/8293673/pexels-photo-8293673.jpeg', // Building cleaning
  'cladding-repairs': 'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg' // Cladding work
} as const;

// Handyman Services
export const handymanImages = {
  'general-repairs': 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg', // Handyman work
  'gutter-cleaning': 'https://images.pexels.com/photos/5816713/pexels-photo-5816713.jpeg', // Gutter cleaning
  'windows-doors': 'https://images.pexels.com/photos/5691814/pexels-photo-5691814.jpeg', // Window/door work
  'shelving-installation': 'https://images.pexels.com/photos/7319279/pexels-photo-7319279.jpeg', // Shelving
  'tiling-repairs': 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg' // Tiling repair
} as const;

// Service Categories
export const serviceCategories = [
  { id: 'general-repairs', title: 'General Repairs' },
  { id: 'healthy-home', title: 'Healthy Homes' },
  { id: 'insurance', title: 'Insurance Work' },
  { id: 'installations', title: 'Installations' },
  { id: 'outdoor', title: 'Outdoor Maintenance' },
  { id: 'handyman', title: 'Handyman Services' }
] as const;

// Define the service type
interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  childServices?: ChildService[];
}

interface ChildService {
  id: string;
  title: string;
  slug: string;
  description: string;
}

// Export services array
export const services: Service[] = [
  {
    id: 'general-repairs',
    title: 'General Repairs',
    slug: 'general-repairs',
    category: 'general-repairs',
    description: 'Comprehensive repair services for your property',
    childServices: [
      {
        id: 'building-repairs',
        title: 'Building Repairs',
        slug: 'building-repairs',
        description: 'General building repair and maintenance'
      },
      {
        id: 'kitchen-maintenance',
        title: 'Kitchen Maintenance',
        slug: 'kitchen-maintenance',
        description: 'Kitchen repairs and maintenance services'
      }
      // Add other child services as needed
    ]
  },
  {
    id: 'healthy-home',
    title: 'Healthy Homes',
    slug: 'healthy-home',
    category: 'healthy-home',
    description: 'Services to ensure a healthy living environment',
    childServices: [
      {
        id: 'insulation',
        title: 'Insulation Installation',
        slug: 'insulation-installation',
        description: 'Home insulation services'
      }
      // Add other child services as needed
    ]
  }
  // Add other main services as needed
];

// Add the missing getAllChildServices function
export const getAllChildServices = () => {
  return services.flatMap(parent => 
    parent.childServices 
      ? parent.childServices.map(child => ({ 
          service: child, 
          parentSlug: parent.slug 
        })) 
      : []
  );
};