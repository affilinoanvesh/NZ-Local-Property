// Service category icons and images
import {
  Wrench, // General Repairs
  Home, // Healthy Homes
  Shield, // Insurance Work
  Settings, // Installations
  Sun, // Outdoor Maintenance
  Tool, // Handyman Services
} from 'lucide-react';

// Map service icons to Lucide components
const serviceIcons: { [key: string]: any } = {
  'wrench': Wrench,
  'home': Home,
  'shield': Shield,
  'settings': Settings,
  'sun': Sun,
  'tool': Tool,
};

export const getServiceIcon = (iconName: string) => {
  return serviceIcons[iconName] || Wrench;
};

export type ServiceCategory = 
  | 'general-repairs' 
  | 'healthy-home' 
  | 'insurance' 
  | 'installations' 
  | 'outdoor' 
  | 'handyman';

export const serviceCategories = [
  {
    id: 'general-repairs',
    title: 'General Repairs Services',
    description: 'Comprehensive repair and maintenance solutions for all aspects of your property, from structural fixes to cosmetic improvements.'
  },
  {
    id: 'healthy-home',
    title: 'Healthy Homes Services',
    description: 'Solutions to create healthier, more comfortable living environments through improved insulation, ventilation, and moisture control.'
  },
  {
    id: 'insurance',
    title: 'Insurance Work Services',
    description: 'Expert handling of insurance claims and repairs, from assessment through to complete restoration.'
  },
  {
    id: 'installations',
    title: 'Installation Services',
    description: 'Professional installation services for a wide range of property improvements and upgrades.'
  },
  {
    id: 'outdoor',
    title: 'Outdoor Maintenance Services',
    description: 'Complete exterior property maintenance and improvement services to enhance your outdoor spaces.'
  },
  {
    id: 'handyman',
    title: 'Handyman Services',
    description: 'Skilled handyman services for all those essential repairs and maintenance tasks around your property.'
  }
];

export const services = [
  {
    id: 'general-repairs',
    title: 'General Repairs',
    slug: 'general-repairs',
    description: 'Comprehensive building repair and maintenance services for residential and commercial properties.',
    icon: 'wrench',
    category: 'general-repairs',
    image: 'https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg',
    features: [
      'Professional repair services',
      'Licensed contractors',
      'Quality materials',
      'Warranty on workmanship',
      'Detailed documentation',
      'Regular maintenance plans'
    ],
    benefits: [
      'Prevent costly future repairs',
      'Maintain property value',
      'Ensure safety and compliance',
      'Improve property appearance',
      'Extend building lifespan'
    ],
    includes: [
      'Initial assessment',
      'Detailed quote',
      'Professional repairs',
      'Quality materials',
      'Clean-up service',
      'Final inspection'
    ],
    location: 'Auckland',
    childServices: [
      {
        id: 'building-repairs',
        title: 'Building Repairs',
        slug: 'building-repairs',
        description: 'Expert building repair services for structural and cosmetic issues.',
        image: 'https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg',
        features: [
          'Structural repairs',
          'Wall repairs',
          'Foundation fixes',
          'Weather damage repair',
          'Building maintenance'
        ],
        benefits: [
          'Maintain structural integrity',
          'Prevent further damage',
          'Enhance property value',
          'Ensure safety compliance',
          'Professional workmanship'
        ]
      },
      {
        id: 'kitchen-maintenance',
        title: 'Kitchen Maintenance',
        slug: 'kitchen-maintenance',
        description: 'Professional kitchen repair and maintenance services.',
        image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
        features: [
          'Cabinet repairs',
          'Countertop maintenance',
          'Plumbing fixes',
          'Appliance installation',
          'General repairs'
        ],
        benefits: [
          'Maintain functionality',
          'Prevent water damage',
          'Extend kitchen life',
          'Improve safety',
          'Enhanced aesthetics'
        ]
      },
      {
        id: 'bathroom-repairs',
        title: 'Bathroom Repairs',
        slug: 'bathroom-repairs',
        description: 'Comprehensive bathroom repair and maintenance solutions.',
        image: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg',
        features: [
          'Leak repairs',
          'Tile restoration',
          'Plumbing maintenance',
          'Waterproofing',
          'Fixture repairs'
        ],
        benefits: [
          'Prevent water damage',
          'Maintain hygiene',
          'Improve functionality',
          'Extend bathroom life',
          'Enhanced comfort'
        ]
      },
      {
        id: 'roof-gutter-repairs',
        title: 'Roof & Gutter Repairs',
        slug: 'roof-gutter-repairs',
        description: 'Professional roof and gutter repair services.',
        image: 'https://images.pexels.com/photos/5778239/pexels-photo-5778239.jpeg',
        features: [
          'Roof repairs',
          'Gutter cleaning',
          'Downpipe maintenance',
          'Leak prevention',
          'Storm damage repair'
        ],
        benefits: [
          'Prevent water damage',
          'Maintain drainage',
          'Protect property value',
          'Extend roof life',
          'Weather protection'
        ]
      },
      {
        id: 'carpet-flooring-repairs',
        title: 'Carpet & Flooring Repairs',
        slug: 'carpet-flooring-repairs',
        description: 'Expert carpet and flooring repair services.',
        image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg',
        features: [
          'Carpet repairs',
          'Floor restoration',
          'Tile repairs',
          'Hardwood maintenance',
          'Vinyl repairs'
        ],
        benefits: [
          'Extend flooring life',
          'Improve appearance',
          'Maintain safety',
          'Prevent damage',
          'Cost-effective solutions'
        ]
      },
      {
        id: 'windows-doors-repairs',
        title: 'Windows & Doors Repairs',
        slug: 'windows-doors-repairs',
        description: 'Professional window and door repair services.',
        image: 'https://images.pexels.com/photos/276689/pexels-photo-276689.jpeg',
        features: [
          'Window repairs',
          'Door maintenance',
          'Lock replacement',
          'Weather sealing',
          'Frame repairs'
        ],
        benefits: [
          'Improve security',
          'Energy efficiency',
          'Better functionality',
          'Weather protection',
          'Enhanced comfort'
        ]
      },
      {
        id: 'tiling',
        title: 'Tiling Services',
        slug: 'tiling',
        description: 'Expert tiling services for all areas of your property.',
        image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
        features: [
          'Tile installation',
          'Grout repair',
          'Waterproofing',
          'Tile replacement',
          'Surface preparation'
        ],
        benefits: [
          'Professional finish',
          'Waterproof protection',
          'Improved aesthetics',
          'Long-lasting results',
          'Quality materials'
        ]
      },
      {
        id: 'gib-plastering',
        title: 'GIB & Plastering',
        slug: 'gib-plastering',
        description: 'Professional GIB installation and plastering services.',
        image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg',
        features: [
          'GIB installation',
          'Plastering',
          'Wall repairs',
          'Surface finishing',
          'Texture matching'
        ],
        benefits: [
          'Smooth finish',
          'Professional results',
          'Noise reduction',
          'Fire protection',
          'Enhanced aesthetics'
        ]
      }
    ]
  },
  {
    id: 'healthy-home',
    title: 'Healthy Homes',
    slug: 'healthy-homes',
    description: 'Comprehensive solutions to create healthier, more comfortable living environments.',
    icon: 'home',
    category: 'healthy-home',
    image: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg',
    features: [
      'Insulation services',
      'Ventilation solutions',
      'Moisture control',
      'Heating systems',
      'Energy efficiency',
      'Compliance checks'
    ],
    benefits: [
      'Healthier living environment',
      'Energy cost savings',
      'Improved comfort',
      'Better air quality',
      'Compliance with standards'
    ],
    includes: [
      'Property assessment',
      'Compliance check',
      'Solution design',
      'Professional installation',
      'Documentation',
      'Follow-up service'
    ],
    location: 'Auckland',
    childServices: [
      {
        id: 'insulation-installation',
        title: 'Insulation Installation',
        slug: 'insulation-installation',
        description: 'Professional insulation installation for improved energy efficiency.',
        image: 'https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg',
        features: [
          'Ceiling insulation',
          'Wall insulation',
          'Underfloor insulation',
          'Energy assessment',
          'Compliance check'
        ],
        benefits: [
          'Energy savings',
          'Better comfort',
          'Noise reduction',
          'Moisture control',
          'Compliance assured'
        ]
      },
      {
        id: 'heating-installation',
        title: 'Heating Installation',
        slug: 'heating-installation',
        description: 'Expert heating system installation services.',
        image: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg',
        features: [
          'Heat pump installation',
          'Fixed heater fitting',
          'System design',
          'Energy assessment',
          'Maintenance plans'
        ],
        benefits: [
          'Efficient heating',
          'Cost savings',
          'Better comfort',
          'Clean operation',
          'Professional install'
        ]
      },
      {
        id: 'ventilation-systems',
        title: 'Ventilation Systems',
        slug: 'ventilation-systems',
        description: 'Professional ventilation system installation and maintenance.',
        image: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg',
        features: [
          'System installation',
          'Air quality control',
          'Moisture management',
          'Regular maintenance',
          'Performance checks'
        ],
        benefits: [
          'Better air quality',
          'Reduced moisture',
          'Healthier home',
          'Energy efficient',
          'Comfort improved'
        ]
      },
      {
        id: 'drainage-guttering',
        title: 'Drainage & Guttering',
        slug: 'drainage-guttering',
        description: 'Complete drainage and guttering solutions.',
        image: 'https://images.pexels.com/photos/5778239/pexels-photo-5778239.jpeg',
        features: [
          'Gutter installation',
          'Drainage solutions',
          'Regular cleaning',
          'Maintenance plans',
          'Repair services'
        ],
        benefits: [
          'Better drainage',
          'Property protection',
          'Prevent damage',
          'Regular maintenance',
          'Professional service'
        ]
      },
      {
        id: 'mould-removal',
        title: 'Mould Removal',
        slug: 'mould-removal',
        description: 'Professional mould removal and prevention services.',
        image: 'https://images.pexels.com/photos/6816354/pexels-photo-6816354.jpeg',
        features: [
          'Mould treatment',
          'Prevention measures',
          'Surface cleaning',
          'Air testing',
          'Moisture control'
        ],
        benefits: [
          'Healthier environment',
          'Better air quality',
          'Prevent spread',
          'Expert treatment',
          'Long-term protection'
        ]
      },
      {
        id: 'healthy-homes-assessment',
        title: 'Healthy Homes Assessment',
        slug: 'healthy-homes-assessment',
        description: 'Comprehensive property health and compliance assessment.',
        image: 'https://images.pexels.com/photos/4792489/pexels-photo-4792489.jpeg',
        features: [
          'Full inspection',
          'Compliance check',
          'Report provision',
          'Recommendations',
          'Follow-up service'
        ],
        benefits: [
          'Compliance assured',
          'Clear guidance',
          'Expert assessment',
          'Detailed report',
          'Professional advice'
        ]
      }
    ]
  },
  {
    id: 'insurance',
    title: 'Insurance Work',
    slug: 'insurance-work',
    description: 'Professional insurance claim and repair services for property damage.',
    icon: 'shield',
    category: 'insurance',
    image: 'https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg',
    features: [
      'Claim assistance',
      'Damage assessment',
      'Repair services',
      'Documentation',
      'Project management',
      'Quality assurance'
    ],
    benefits: [
      'Expert claim handling',
      'Professional repairs',
      'Stress-free process',
      'Quality restoration',
      'Complete documentation'
    ],
    includes: [
      'Initial assessment',
      'Claim assistance',
      'Repair planning',
      'Professional work',
      'Documentation',
      'Quality check'
    ],
    location: 'Auckland',
    childServices: [
      {
        id: 'fire-damage-restoration',
        title: 'Fire Damage Restoration',
        slug: 'fire-damage-restoration',
        description: 'Professional fire damage restoration services.',
        image: 'https://images.pexels.com/photos/6368656/pexels-photo-6368656.jpeg',
        features: [
          'Damage assessment',
          'Smoke removal',
          'Structure repair',
          'Content restoration',
          'Complete cleanup'
        ],
        benefits: [
          'Expert restoration',
          'Quick response',
          'Complete service',
          'Insurance handling',
          'Quality assured'
        ]
      },
      {
        id: 'flood-damage-repairs',
        title: 'Flood Damage Repairs',
        slug: 'flood-damage-repairs',
        description: 'Expert flood damage repair and restoration services.',
        image: 'https://images.pexels.com/photos/6508455/pexels-photo-6508455.jpeg',
        features: [
          'Water extraction',
          'Drying service',
          'Damage repair',
          'Mould prevention',
          'Content restoration'
        ],
        benefits: [
          'Fast response',
          'Complete drying',
          'Damage prevention',
          'Professional repair',
          'Insurance assistance'
        ]
      },
      {
        id: 'insurance-building-repairs',
        title: 'Insurance Building Repairs',
        slug: 'insurance-building-repairs',
        description: 'Professional insurance repair services for buildings.',
        image: 'https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg',
        features: [
          'Claim handling',
          'Damage assessment',
          'Repair service',
          'Project management',
          'Quality control'
        ],
        benefits: [
          'Expert repairs',
          'Insurance liaison',
          'Quality work',
          'Project managed',
          'Documentation'
        ]
      }
    ]
  },
  {
    id: 'installations',
    title: 'Installations',
    slug: 'installations',
    description: 'Professional installation services for property improvements.',
    icon: 'settings',
    category: 'installations',
    image: 'https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg',
    features: [
      'Professional installation',
      'Quality products',
      'Expert advice',
      'Warranty service',
      'Safety compliance',
      'After-care support'
    ],
    benefits: [
      'Professional results',
      'Quality assurance',
      'Expert installation',
      'Warranty protection',
      'Safety compliance'
    ],
    includes: [
      'Site assessment',
      'Installation plan',
      'Professional work',
      'Quality check',
      'Cleanup service',
      'Documentation'
    ],
    location: 'Auckland',
    childServices: [
      {
        id: 'double-glazing',
        title: 'Double Glazing',
        slug: 'double-glazing',
        description: 'Professional double glazing installation services.',
        image: 'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg',
        features: [
          'Window assessment',
          'Professional install',
          'Quality products',
          'Energy efficiency',
          'Noise reduction'
        ],
        benefits: [
          'Better insulation',
          'Noise reduction',
          'Energy savings',
          'Added security',
          'Property value'
        ]
      },
      {
        id: 'heat-pump-installation',
        title: 'Heat Pump Installation',
        slug: 'heat-pump-installation',
        description: 'Expert heat pump installation services.',
        image: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg',
        features: [
          'System design',
          'Professional install',
          'Energy assessment',
          'Warranty service',
          'Maintenance plans'
        ],
        benefits: [
          'Energy efficient',
          'Year-round comfort',
          'Professional install',
          'Warranty covered',
          'Expert service'
        ]
      },
      {
        id: 'air-conditioning',
        title: 'Air Conditioning',
        slug: 'air-conditioning',
        description: 'Professional air conditioning installation services.',
        image: 'https://images.pexels.com/photos/4078188/pexels-photo-4078188.jpeg',
        features: [
          'System design',
          'Professional install',
          'Energy efficiency',
          'Climate control',
          'Maintenance plans'
        ],
        benefits: [
          'Better comfort',
          'Climate control',
          'Energy efficient',
          'Expert install',
          'Regular service'
        ]
      },
      {
        id: 'home-automation',
        title: 'Home Automation',
        slug: 'home-automation',
        description: 'Smart home automation installation services.',
        image: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg',
        features: [
          'System design',
          'Smart controls',
          'Device integration',
          'Security features',
          'User training'
        ],
        benefits: [
          'Better control',
          'Energy savings',
          'Added security',
          'Modern living',
          'Expert setup'
        ]
      },
      {
        id: 'locks-handles',
        title: 'Locks & Handles',
        slug: 'locks-handles',
        description: 'Professional lock and handle installation services.',
        image: 'https://images.pexels.com/photos/5614144/pexels-photo-5614144.jpeg',
        features: [
          'Lock installation',
          'Handle fitting',
          'Security upgrade',
          'Key service',
          'Maintenance'
        ],
        benefits: [
          'Better security',
          'Quality products',
          'Expert install',
          'Warranty service',
          'Professional work'
        ]
      },
      {
        id: 'cupboards-shelves',
        title: 'Cupboards & Shelving',
        slug: 'cupboards-shelves',
        description: 'Custom cupboard and shelving installation services.',
        image: 'https://images.pexels.com/photos/7319279/pexels-photo-7319279.jpeg',
        features: [
          'Custom design',
          'Professional install',
          'Quality materials',
          'Storage solutions',
          'Finish options'
        ],
        benefits: [
          'More storage',
          'Custom design',
          'Quality build',
          'Expert install',
          'Professional finish'
        ]
      },
      {
        id: 'pergola-assembly',
        title: 'Pergola Assembly',
        slug: 'pergola-assembly',
        description: 'Professional pergola assembly and installation services.',
        image: 'https://images.pexels.com/photos/6969927/pexels-photo-6969927.jpeg',
        features: [
          'Design service',
          'Professional assembly',
          'Quality materials',
          'Site preparation',
          'Finish options'
        ],
        benefits: [
          'Outdoor living',
          'Added value',
          'Quality build',
          'Expert assembly',
          'Custom design'
        ]
      }
    ]
  },
  {
    id: 'outdoor',
    title: 'Outdoor Maintenance',
    slug: 'outdoor-maintenance',
    description: 'Complete outdoor property maintenance services.',
    icon: 'sun',
    category: 'outdoor',
    image: 'https://images.pexels.com/photos/589/garden-green-trees-back-garden.jpg',
    features: [
      'Property maintenance',
      'Exterior cleaning',
      'Garden services',
      'Surface treatment',
      'Regular upkeep',
      'Seasonal care'
    ],
    benefits: [
      'Enhanced appearance',
      'Property protection',
      'Regular maintenance',
      'Professional care',
      'Value preservation'
    ],
    includes: [
      'Site assessment',
      'Maintenance plan',
      'Regular service',
      'Quality work',
      'Documentation',
      'Follow-up care'
    ],
    location: 'Auckland',
    childServices: [
      {
        id: 'paving-bricklaying',
        title: 'Paving & Bricklaying',
        slug: 'paving-bricklaying',
        description: 'Professional paving and bricklaying services.',
        image: 'https://images.pexels.com/photos/258804/pexels-photo-258804.jpeg',
        features: [
          'Design service',
          'Surface prep',
          'Quality materials',
          'Expert laying',
          'Finish options'
        ],
        benefits: [
          'Professional finish',
          'Quality work',
          'Long lasting',
          'Added value',
          'Expert service'
        ]
      },
      {
        id: 'concreting',
        title: 'Concreting',
        slug: 'concreting',
        description: 'Professional concrete installation and repair services.',
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        features: [
          'Surface prep',
          'Concrete laying',
          'Finish options',
          'Repair service',
          'Quality work'
        ],
        benefits: [
          'Durable finish',
          'Expert work',
          'Quality assured',
          'Custom options',
          'Professional service'
        ]
      },
      {
        id: 'fence-gate-repairs',
        title: 'Fence & Gate Repairs',
        slug: 'fence-gate-repairs',
        description: 'Professional fence and gate repair services.',
        image: 'https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg',
        features: [
          'Repair service',
          'Gate adjustment',
          'Post replacement',
          'Hardware upgrade',
          'Maintenance'
        ],
        benefits: [
          'Better security',
          'Proper operation',
          'Quality repairs',
          'Expert service',
          'Regular maintenance'
        ]
      },
      {
        id: 'roof-cleaning',
        title: 'Roof Cleaning',
        slug: 'roof-cleaning',
        description: 'Professional roof cleaning and maintenance services.',
        image: 'https://images.pexels.com/photos/5816713/pexels-photo-5816713.jpeg',
        features: [
          'Moss removal',
          'Surface cleaning',
          'Gutter clearing',
          'Treatment options',
          'Maintenance plans'
        ],
        benefits: [
          'Longer life',
          'Better appearance',
          'Prevent damage',
          'Regular care',
          'Professional service'
        ]
      },
      {
        id: 'water-blasting',
        title: 'Water Blasting',
        slug: 'water-blasting',
        description: 'Professional water blasting and cleaning services.',
        image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
        features: [
          'Surface cleaning',
          'Stain removal',
          'Preparation work',
          'Various surfaces',
          'Treatment options'
        ],
        benefits: [
          'Deep clean',
          'Better appearance',
          'Surface prep',
          'Expert service',
          'Quality results'
        ]
      },
      {
        id: 'driveway-cleaning',
        title: 'Driveway Cleaning',
        slug: 'driveway-cleaning',
        description: 'Professional driveway cleaning and maintenance services.',
        image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
        features: [
          'Surface cleaning',
          'Stain removal',
          'Sealing options',
          'Regular service',
          'Maintenance plans'
        ],
        benefits: [
          'Better appearance',
          'Surface protection',
          'Regular care',
          'Expert service',
          'Quality results'
        ]
      },
      {
        id: 'building-cleaning',
        title: 'Building Cleaning',
        slug: 'building-cleaning',
        description: 'Professional building exterior cleaning services.',
        image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg',
        features: [
          'Exterior cleaning',
          'Surface treatment',
          'Window cleaning',
          'Regular service',
          'Maintenance plans'
        ],
        benefits: [
          'Better appearance',
          'Building care',
          'Regular maintenance',
          'Expert service',
          'Quality results'
        ]
      },
      {
        id: 'cladding-repairs',
        title: 'Cladding Repairs',
        slug: 'cladding-repairs',
        description: 'Professional cladding repair and maintenance services.',
        image: 'https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg',
        features: [
          'Damage repair',
          'Surface prep',
          'Weather protection',
          'Paint service',
          'Maintenance plans'
        ],
        benefits: [
          'Weather protection',
          'Better appearance',
          'Building care',
          'Expert service',
          'Quality results'
        ]
      }
    ]
  },
  {
    id: 'handyman',
    title: 'Handyman Services',
    slug: 'handyman',
    description: 'Professional handyman services for all property maintenance needs.',
    icon: 'tool',
    category: 'handyman',
    image: 'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg',
    features: [
      'General repairs',
      'Installation work',
      'Maintenance tasks',
      'Property care',
      'Quick response',
      'Quality service'
    ],
    benefits: [
      'Professional service',
      'Quick response',
      'Quality work',
      'Reliable help',
      'Expert solutions'
    ],
    includes: [
      'Job assessment',
      'Professional work',
      'Quality materials',
      'Clean service',
      'Satisfaction check',
      'Follow-up care'
    ],
    location: 'Auckland',
    childServices: [
      {
        id: 'general-repairs',
        title: 'General Repairs',
        slug: 'general-repairs',
        description: 'Professional general repair services for all needs.',
        image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg',
        features: [
          'Various repairs',
          'Quick response',
          'Quality work',
          'Professional service',
          'Regular maintenance'
        ],
        benefits: [
          'Expert repairs',
          'Fast service',
          'Quality work',
          'Professional help',
          'Regular care'
        ]
      },
      {
        id: 'gutter-cleaning',
        title: 'Gutter Cleaning',
        slug: 'gutter-cleaning',
        description: 'Professional gutter cleaning and maintenance services.',
        image: 'https://images.pexels.com/photos/5778239/pexels-photo-5778239.jpeg',
        features: [
          'Regular cleaning',
          'Debris removal',
          'Downpipe check',
          'Minor repairs',
          'Maintenance plans'
        ],
        benefits: [
          'Better drainage',
          'Prevent damage',
          'Regular care',
          'Expert service',
          'Quality work'
        ]
      },
      {
        id: 'windows-doors',
        title: 'Windows & Doors',
        slug: 'windows-doors',
        description: 'Professional window and door maintenance services.',
        image: 'https://images.pexels.com/photos/276659/pexels-photo-276659.jpeg',
        features: [
          'General repairs',
          'Hardware fixes',
          'Weather sealing',
          'Regular service',
          'Maintenance plans'
        ],
        benefits: [
          'Better operation',
          'Weather protection',
          'Regular care',
          'Expert service',
          'Quality work'
        ]
      },
      {
        id: 'shelving-installation',
        title: 'Shelving Installation',
        slug: 'shelving-installation',
        description: 'Professional shelving installation services.',
        image: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg',
        features: [
          'Custom install',
          'Various types',
          'Quality materials',
          'Professional work',
          'Clean service'
        ],
        benefits: [
          'More storage',
          
          'Custom options',
          'Expert install',
          'Quality work',
          'Professional service'
        ]
      },
      {
        id: 'tiling-repairs',
        title: 'Tiling Repairs',
        slug: 'tiling-repairs',
        description: 'Professional tile repair and maintenance services.',
        image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
        features: [
          'Tile repairs',
          'Grout work',
          'Surface prep',
          'Regular service',
          'Maintenance plans'
        ],
        benefits: [
          'Better appearance',
          'Quality repairs',
          'Expert service',
          'Regular care',
          'Professional work'
        ]
      }
    ]
  }
];

export const getServiceBySlug = (slug: string) => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: ServiceCategory) => {
  return services.filter(service => service.category === category);
};

export const getAllChildServices = () => {
  const allChildServices = [];
  
  for (const service of services) {
    if (service.childServices) {
      for (const childService of service.childServices) {
        allChildServices.push({
          parentSlug: service.slug,
          service: childService
        });
      }
    }
  }
  
  return allChildServices;
};