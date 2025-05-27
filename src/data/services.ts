import { Service, CategoryInfo } from '../types';
import { 
  Wrench, Home, Umbrella, Cog, TreePine, Hammer, 
  Paintbrush, Building, Droplets, Thermometer, Router,
  Waves, Lock, Grid3X3, Shovel, SquareGantt, Drill,
  Warehouse, Twitch as Kitchen, Palette, Cloud, 
  PenTool as Tools, Bath, Fan, Gauge, Trash2, 
  AppWindow as Window, Key, Fence, Ruler, Brush, 
  Folder, Flame, Bath as Shower, ScanLine, Scaling, FileQuestion
} from 'lucide-react';

export const serviceCategories: CategoryInfo[] = [
  {
    id: 'general-repairs',
    title: 'General Repairs & Maintenance Auckland',
    description: 'Professional repair and maintenance services for Auckland properties.'
  },
  {
    id: 'healthy-home',
    title: 'Healthy Homes Solutions Auckland',
    description: 'Create a healthier living environment with our specialized services in Auckland.'
  },
  {
    id: 'insurance',
    title: 'Insurance Reinstatement Work Auckland',
    description: 'Expert restoration services for insurance claims in Auckland.'
  },
  {
    id: 'installations',
    title: 'Specialized Installations Auckland',
    description: 'Professional installation services for Auckland properties.'
  },
  {
    id: 'outdoor',
    title: 'Outdoor Maintenance Auckland',
    description: 'Keep your Auckland outdoor spaces looking their best year-round.'
  },
  {
    id: 'handyman',
    title: 'Handyman Services Auckland',
    description: 'Reliable handyman services throughout Auckland.'
  }
];

export const services: Service[] = [
  // General Repairs & Maintenance
  {
    id: 'general-repairs',
    title: 'General Repairs',
    slug: 'general-repairs',
    description: 'Comprehensive building repair and maintenance services for Auckland properties, ensuring your home stays in optimal condition.',
    icon: 'Building',
    category: 'general-repairs',
    features: [
      'Comprehensive property repairs',
      'Full structural assessments',
      'Interior and exterior maintenance',
      'Preventative maintenance programs',
      'Emergency repair services'
    ],
    benefits: [
      'Preserve property value',
      'Prevent costly future repairs',
      'Expert craftsmen and builders',
      'Licensed and insured professionals',
      'Comprehensive solutions'
    ],
    includes: [
      'Initial inspection and assessment',
      'Detailed quote and timeline',
      'Professional repair work',
      'Clean-up and final inspection',
      'Warranty on workmanship'
    ],
    image: 'https://images.pexels.com/photos/8292797/pexels-photo-8292797.jpeg',
    location: 'Auckland',
    childServices: [
      {
        id: 'building-repairs',
        title: 'Building Repairs',
        slug: 'building-repairs',
        description: 'Professional building repair services for Auckland homes and businesses, addressing structural issues, damage, and general wear and tear.',
        features: [
          'Structural repairs',
          'Weather damage restoration',
          'Foundation repairs',
          'Rot and decay remediation',
          'Exterior cladding repair'
        ],
        benefits: [
          'Expert assessment and solutions',
          'Quality workmanship guarantee',
          'Licensed builders',
          'Comprehensive repair services'
        ],
        image: 'https://images.pexels.com/photos/6473978/pexels-photo-6473978.jpeg',
        metaDescription: 'Expert building repair services in Auckland. PropertyCare NZ provides professional solutions for all structural and building repair needs.',
        metaKeywords: ['building repairs Auckland', 'structural repairs', 'property maintenance', 'building restoration Auckland'],
        faq: [
          {
            question: "What types of structural building repairs do you handle in Auckland?",
            answer: "We handle a wide range of structural building repairs in Auckland, including foundation repairs, beam replacements, wall stabilization, and remediation for issues like rot or pest damage. Our goal is to restore the integrity and safety of your property."
          },
          {
            question: "How can I tell if my Auckland property needs professional building repairs?",
            answer: "Signs that your Auckland property might need professional building repairs include visible cracks in walls or foundations, sagging floors or ceilings, doors or windows that stick or don't close properly, or any noticeable shift in the building\'s structure. It\'s best to get a professional assessment if you\'re unsure."
          },
          {
            question: "Are your building repair services in Auckland covered by insurance?",
            answer: "In many cases, building repairs in Auckland, especially those resulting from unforeseen events like storms or accidents, may be covered by your property insurance. We can provide detailed reports and quotes to assist with your insurance claim process."
          }
        ]
      },
      {
        id: 'kitchen-maintenance',
        title: 'Kitchen Maintenance',
        slug: 'kitchen-maintenance',
        description: 'Comprehensive kitchen maintenance and repair services in Auckland to keep your kitchen functional, safe, and looking its best.',
        features: [
          'Cabinet repairs and adjustments',
          'Countertop repairs and replacement',
          'Sink and plumbing repairs',
          'Tile and grout maintenance',
          'Appliance installation'
        ],
        benefits: [
          'Extend kitchen lifespan',
          'Improve functionality',
          'Prevent costly replacements',
          'Maintain property value'
        ],
        image: 'https://images.pexels.com/photos/10628460/pexels-photo-10628460.jpeg',
        metaDescription: 'Professional kitchen maintenance and repair services in Auckland. Keep your kitchen functional and looking great with PropertyCare NZ.',
        metaKeywords: ['kitchen maintenance Auckland', 'kitchen repairs', 'cabinet repairs', 'countertop repairs Auckland', 'kitchen plumbing services'],
        faq: [
          {
            question: "What does your Auckland kitchen maintenance service typically include?",
            answer: "Our kitchen maintenance in Auckland covers a range of services, including cabinet adjustments, tap and plumbing repairs, benchtop care, drawer runner fixes, and ensuring appliances are correctly installed and functioning. We tailor it to your kitchen\'s specific needs."
          },
          {
            question: "Why is regular kitchen maintenance important for Auckland homeowners?",
            answer: "Regular kitchen maintenance in Auckland helps prevent costly future repairs, extends the life of your fixtures and appliances, ensures a safe cooking environment, and maintains your property\'s value. It\'s a proactive way to care for a high-use area."
          },
          {
            question: "Can you help with specific kitchen repair issues like a leaking tap or a damaged cabinet in Auckland?",
            answer: "Yes, our Auckland kitchen repair specialists can address specific issues like leaking taps, broken cabinet hinges, damaged benchtops, or faulty plumbing. No job is too small when it comes to keeping your kitchen in top condition."
          }
        ]
      },
      {
        id: 'bathroom-repairs',
        title: 'Bathroom Repairs',
        slug: 'bathroom-repairs',
        description: 'Specialized bathroom repair and maintenance services for Auckland homes, addressing water damage, plumbing issues, and cosmetic repairs.',
        features: [
          'Leaking shower repairs',
          'Toilet and basin repairs',
          'Tile and grout restoration',
          'Water damage remediation',
          'Vanity and cabinet repairs'
        ],
        benefits: [
          'Prevent water damage issues',
          'Improve bathroom safety',
          'Address moisture problems',
          'Expert plumbing solutions'
        ],
        image: 'https://images.pexels.com/photos/7546320/pexels-photo-7546320.jpeg',
        metaDescription: 'Expert bathroom repair services in Auckland. From leaking showers to tile restoration, PropertyCare NZ provides complete bathroom maintenance solutions.',
        metaKeywords: ['bathroom repairs Auckland', 'leaking shower repair', 'tile restoration', 'bathroom maintenance', 'bathroom plumbing Auckland'],
        faq: [
          {
            question: "What common bathroom repairs do you undertake in Auckland properties?",
            answer: "We address a variety of bathroom repairs in Auckland, such as fixing leaking showers and taps, toilet repairs, grout and tile restoration, vanity repairs, and resolving water damage issues to prevent mould and further complications."
          },
          {
            question: "How can I identify if my Auckland bathroom needs urgent repairs?",
            answer: "Urgent bathroom repairs in Auckland are often indicated by persistent leaks, noticeable water stains on ceilings or walls below the bathroom, loose tiles, or a constantly running toilet. Addressing these quickly can prevent more extensive damage."
          },
          {
            question: "Do you offer waterproofing services as part of bathroom repairs in Auckland?",
            answer: "Yes, ensuring proper waterproofing is a key part of our bathroom repair services in Auckland, especially when dealing with leaking showers or tile replacements. Correct waterproofing is crucial to protect your home\'s structure."
          }
        ]
      },
      {
        id: 'roof-gutter-repairs',
        title: 'Roof & Gutter Repairs',
        slug: 'roof-gutter-repairs',
        description: 'Professional roof and gutter repair services in Auckland, protecting your home from water damage and maintaining your property\'s integrity.',
        features: [
          'Roof leak repairs',
          'Gutter cleaning and repairs',
          'Downpipe maintenance',
          'Flashing repairs',
          'Ridge cap resealing'
        ],
        benefits: [
          'Prevent water damage',
          'Extend roof lifespan',
          'Improve drainage system',
          'Regular maintenance options'
        ],
        image: 'https://images.pexels.com/photos/5778239/pexels-photo-5778239.jpeg',
        metaDescription: 'Professional roof and gutter repair services in Auckland. Prevent water damage and maintain your home\'s integrity with PropertyCare NZ.',
        metaKeywords: ['roof repairs Auckland', 'gutter cleaning Auckland', 'roof leaks', 'roof maintenance', 'downpipe repairs'],
        faq: [
          {
            question: "What are the signs my Auckland property needs roof or gutter repairs?",
            answer: "Signs include visible water leaks or stains on your ceiling, damaged or missing shingles, blocked or overflowing gutters, and rust or cracks in roofing materials. Prompt roof and gutter repairs in Auckland can prevent costly water damage."
          },
          {
            question: "How often should gutters be cleaned and inspected in Auckland?",
            answer: "For Auckland properties, we generally recommend gutter cleaning and inspection at least twice a year, typically in spring and autumn, to prevent blockages from leaves and debris that can lead to overflow and water damage."
          },
          {
            question: "Can you repair all types of roofing materials in Auckland?",
            answer: "Our Auckland roofing team is experienced in repairing a wide variety of common roofing materials, including concrete and clay tiles, metal roofing, and asphalt shingles. We assess the damage and recommend the best repair solution."
          }
        ]
      },
      {
        id: 'carpet-flooring-repairs',
        title: 'Carpet & Flooring Repairs',
        slug: 'carpet-flooring-repairs',
        description: 'Expert carpet and flooring repair services in Auckland, restoring damaged floors and extending the life of your flooring investments.',
        features: [
          'Carpet patching and stretching',
          'Laminate floor repairs',
          'Hardwood floor restoration',
          'Subfloor repairs',
          'Vinyl flooring repairs'
        ],
        benefits: [
          'Extend flooring lifespan',
          'Save on replacement costs',
          'Improve appearance',
          'Fix safety hazards'
        ],
        image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg',
        metaDescription: 'Professional carpet and flooring repair services in Auckland. Restore damaged flooring and extend the life of your floors with PropertyCare NZ.',
        metaKeywords: ['carpet repairs Auckland', 'flooring repairs', 'hardwood floor restoration', 'carpet stretching Auckland', 'vinyl floor repair'],
        faq: [
          {
            question: "What types of carpet repairs can you perform for Auckland homes?",
            answer: "In Auckland, we offer carpet repairs such as patching burns or stains, seam repairs, carpet stretching to remove wrinkles and ripples, and fixing issues like pulled threads or pet damage to restore your carpet\'s appearance."
          },
          {
            question: "Can you repair water-damaged flooring in Auckland properties?",
            answer: "Yes, we can assess and repair various types of water-damaged flooring in Auckland. The approach depends on the flooring material and extent of damage, and may involve drying, subfloor repair, and replacement of affected sections."
          },
          {
            question: "Is it more cost-effective to repair or replace damaged flooring in Auckland?",
            answer: "This depends on the extent of damage, type of flooring, and its age. For localized damage or newer high-quality flooring, repair is often more cost-effective in Auckland. We provide honest advice to help you decide."
          }
        ]
      },
      {
        id: 'windows-doors-repairs',
        title: 'Windows & Doors Repairs',
        slug: 'windows-doors-repairs',
        description: 'Comprehensive window and door repair services in Auckland, improving security, energy efficiency, and the functionality of your home.',
        features: [
          'Window glass replacement',
          'Door alignment repairs',
          'Lock and handle repairs',
          'Weatherstripping replacement',
          'Sliding door track repairs'
        ],
        benefits: [
          'Improve home security',
          'Enhance energy efficiency',
          'Restore proper operation',
          'Reduce drafts and noise'
        ],
        image: 'https://images.pexels.com/photos/276689/pexels-photo-276689.jpeg',
        metaDescription: 'Professional window and door repair services in Auckland. Improve security, energy efficiency, and functionality with PropertyCare NZ.',
        metaKeywords: ['window repairs Auckland', 'door repairs', 'lock replacement', 'sliding door repairs Auckland', 'window glass replacement'],
        faq: [
          {
            question: "What common window and door repair services do you offer in Auckland?",
            answer: "Our Auckland window and door repair services include fixing broken glass, repairing or replacing faulty locks and handles, addressing drafts, realigning sticking doors or windows, and repairing damaged frames or sills."
          },
          {
            question: "Can repairing windows and doors improve my Auckland home\'s energy efficiency?",
            answer: "Absolutely. Properly sealed and functioning windows and doors are crucial for energy efficiency in Auckland homes. Repairs like weatherstripping replacement or fixing gaps can significantly reduce drafts and heat loss."
          },
          {
            question: "Do you repair sliding door issues in Auckland, such as jammed rollers or tracks?",
            answer: "Yes, we specialize in repairing common sliding door problems in Auckland, including replacing worn-out rollers, cleaning or repairing damaged tracks, and ensuring smooth and secure operation."
          }
        ]
      },
      {
        id: 'tiling',
        title: 'Tiling Services',
        slug: 'tiling',
        description: 'Expert tiling services in Auckland for bathrooms, kitchens, floors, and outdoor areas, with professional installation and repair solutions.',
        features: [
          'Tile installation',
          'Tile repair and replacement',
          'Grout cleaning and repair',
          'Waterproofing',
          'Tile sealing'
        ],
        benefits: [
          'Quality craftsmanship',
          'Waterproof solutions',
          'Long-lasting results',
          'Wide range of tile options'
        ],
        image: 'https://images.pexels.com/photos/6474305/pexels-photo-6474305.jpeg',
        metaDescription: 'Professional tiling services in Auckland. From installation to repairs, PropertyCare NZ provides expert tiling solutions for bathrooms, kitchens, and more.',
        metaKeywords: ['tiling services Auckland', 'bathroom tiling', 'kitchen tiling', 'tile repairs Auckland', 'tile installation'],
        faq: [
          {
            question: "What tiling services do you provide for Auckland properties?",
            answer: "We offer comprehensive tiling services in Auckland, including new tile installations for floors and walls in bathrooms, kitchens, and outdoor areas, as well as tile repairs, replacements, grouting, and waterproofing."
          },
          {
            question: "Can you help with choosing the right tiles for my Auckland renovation project?",
            answer: "Yes, our Auckland tiling experts can advise on suitable tile types, sizes, and designs based on the area (e.g., bathroom, kitchen), expected foot traffic, moisture exposure, and your aesthetic preferences to ensure a durable and beautiful finish."
          },
          {
            question: "What is involved in your tile repair process in Auckland?",
            answer: "For tile repairs in Auckland, we first assess the damage, then carefully remove the affected tile(s), prepare the surface, install matching or suitable replacement tiles, and finish with grouting and sealing to seamlessly integrate with the existing tiling."
          }
        ]
      },
      {
        id: 'gib-plastering',
        title: 'GIB & Plastering',
        slug: 'gib-plastering',
        description: 'Professional GIB and plastering services in Auckland, repairing damaged walls, creating new partitions, and ensuring a perfect finish.',
        features: [
          'GIB installation',
          'Plasterboard repairs',
          'Hole and crack repairs',
          'Stopping and finishing',
          'Texture matching'
        ],
        benefits: [
          'Seamless repairs',
          'Expert finishing',
          'Proper preparation for painting',
          'Structural integrity'
        ],
        image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg',
        metaDescription: 'Professional GIB and plastering services in Auckland. Repair damaged walls and ensure perfect finishes with PropertyCare NZ.',
        metaKeywords: ['GIB repairs Auckland', 'plastering services', 'wall repairs', 'plasterboard installation', 'GIB stopping and finishing'],
        faq: [
          {
            question: "What types of GIB and plastering repairs do you handle in Auckland?",
            answer: "Our Auckland GIB and plastering services include repairing cracks, holes, and dents in plasterboard walls and ceilings, GIB stopping for a smooth finish, texture matching, and preparing surfaces for painting after water damage or alterations."
          },
          {
            question: "Why is professional GIB stopping important for a quality paint finish in Auckland homes?",
            answer: "Professional GIB stopping in Auckland ensures a perfectly smooth and level surface by expertly taping and plastering joints and screw heads. This is essential for achieving a flawless paint finish without visible imperfections."
          },
          {
            question: "Can you match existing wall textures for GIB repairs in Auckland?",
            answer: "Yes, our skilled plasterers in Auckland are experienced in matching various existing wall and ceiling textures when performing GIB repairs, ensuring the repaired area blends seamlessly with the surrounding surface."
          }
        ]
      }
    ],
    faq: [
      {
        question: "What types of general repairs do you offer in Auckland?",
        answer: "We offer a comprehensive range of general repairs including building repairs, kitchen and bathroom maintenance, roof and gutter repairs, flooring and carpet repairs, window and door repairs, tiling, and GIB plastering services."
      },
      {
        question: "How quickly can you respond to emergency repair needs?",
        answer: "We prioritize emergency repairs and aim to respond within 24-48 hours for urgent issues. For severe emergencies that pose immediate risks, we offer same-day service when possible."
      },
      {
        question: "Do you provide warranties on your repair work?",
        answer: "Yes, all our repair work comes with a workmanship warranty. The specific warranty period varies depending on the type of repair, but typically ranges from 1-5 years."
      },
      {
        question: "Can you handle insurance-related repairs?",
        answer: "Absolutely. We have extensive experience working with insurance companies and can assist with documentation, assessments, and completing repairs to insurance standards."
      }
    ]
  },
  // Healthy Homes
  {
    id: 'healthy-home',
    title: 'Healthy Homes',
    slug: 'healthy-homes',
    description: 'Comprehensive solutions to meet Healthy Homes Standards and create a healthier, more comfortable living environment for Auckland properties.',
    icon: 'Home',
    category: 'healthy-home',
    features: [
      'Healthy Homes compliance',
      'Improved indoor air quality',
      'Moisture control solutions',
      'Energy efficiency improvements',
      'Temperature regulation systems'
    ],
    benefits: [
      'Meet legal requirements',
      'Create healthier living spaces',
      'Reduce energy costs',
      'Prevent mold and moisture issues',
      'Increase property value'
    ],
    includes: [
      'Comprehensive property assessment',
      'Customized healthy home plan',
      'Professional installations',
      'Compliance documentation',
      'Post-installation testing'
    ],
    image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
    location: 'Auckland',
    childServices: [
      {
        id: 'insulation-installation',
        title: 'Insulation Installation',
        slug: 'insulation-installation',
        description: 'Professional insulation installation services for Auckland homes, improving energy efficiency and meeting Healthy Homes Standards.',
        features: [
          'Ceiling insulation',
          'Underfloor insulation',
          'Wall insulation',
          'Blanket and segment insulation',
          'Healthy Homes compliance'
        ],
        benefits: [
          'Reduce heating costs',
          'Improve temperature regulation',
          'Meet legal requirements',
          'Enhance home comfort'
        ],
        image: 'https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg',
        metaDescription: 'Professional insulation installation services in Auckland. Improve energy efficiency and meet Healthy Homes Standards with PropertyCare NZ.',
        metaKeywords: ['insulation installation Auckland', 'ceiling insulation', 'underfloor insulation', 'Healthy Homes insulation', 'wall insulation Auckland'],
        faq: [
          {
            question: "What types of insulation do you install for Auckland homes to meet Healthy Homes Standards?",
            answer: "We install a range of insulation types in Auckland, including ceiling, underfloor, and sometimes wall insulation, using materials like fiberglass, polyester, or wool blends, all meeting or exceeding Healthy Homes Standards for thermal resistance (R-value)."
          },
          {
            question: "How does proper insulation contribute to a 'Healthy Home' in Auckland?",
            answer: "Proper insulation in Auckland homes helps maintain a warmer, drier internal environment, reducing moisture buildup and the risk of mould. This leads to better respiratory health for occupants and makes the home more energy-efficient."
          },
          {
            question: "Is professional installation necessary for insulation in Auckland?",
            answer: "Yes, professional installation ensures that insulation in Auckland homes is fitted correctly without gaps or compression, maximizing its effectiveness and safety, and ensuring compliance with the Healthy Homes Standards."
          }
        ]
      },
      {
        id: 'heating-installation',
        title: 'Heating Installation',
        slug: 'heating-installation',
        description: 'Expert heating system installation services in Auckland, providing efficient heating solutions that comply with Healthy Homes Standards.',
        features: [
          'Heat pump installation',
          'Fixed heater installation',
          'Energy efficient systems',
          'Heating capacity assessment',
          'Healthy Homes compliant'
        ],
        benefits: [
          'Efficient heating solutions',
          'Reduced energy consumption',
          'Even temperature distribution',
          'Healthy Homes compliance'
        ],
        image: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg',
        metaDescription: 'Professional heating installation services in Auckland. Install energy-efficient heating systems that comply with Healthy Homes Standards.',
        metaKeywords: ['heating installation Auckland', 'heat pump installation', 'fixed heater installation', 'Healthy Homes heating', 'energy efficient heating'],
        faq: [
          {
            question: "What heating solutions do you offer in Auckland that comply with Healthy Homes Standards?",
            answer: "We install various Healthy Homes compliant heating solutions in Auckland, primarily fixed heaters like heat pumps, electric panel heaters, or flued gas heaters, ensuring they meet the required heating capacity for the main living area."
          },
          {
            question: "How do I know what size or type of heater my Auckland living room needs?",
            answer: "Our Auckland heating specialists assess your main living room\'s size, insulation levels, and window glazing to calculate the required heating capacity, recommending the most efficient and compliant heater type for your needs."
          },
          {
            question: "Can a heat pump provide both heating and cooling for my Auckland home?",
            answer: "Yes, most heat pumps (or reverse-cycle air conditioners) we install in Auckland offer both heating in winter and cooling in summer, providing year-round climate control and comfort."
          }
        ]
      },
      {
        id: 'ventilation-systems',
        title: 'Ventilation Systems',
        slug: 'ventilation-systems',
        description: 'Comprehensive ventilation system installation for Auckland properties, reducing moisture and improving indoor air quality.',
        features: [
          'Positive pressure systems',
          'Heat recovery ventilation',
          'Bathroom extraction fans',
          'Kitchen rangehoods',
          'Whole-home solutions'
        ],
        benefits: [
          'Reduce indoor moisture',
          'Prevent mold growth',
          'Improve air quality',
          'Remove allergens and pollutants'
        ],
        image: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg',
        metaDescription: 'Professional ventilation system installation in Auckland. Improve indoor air quality and reduce moisture with PropertyCare NZ\'s ventilation solutions.',
        metaKeywords: ['ventilation systems Auckland', 'home ventilation', 'moisture control', 'HRV systems', 'extraction fan installation'],
        faq: [
          {
            question: "What are the benefits of installing a ventilation system in an Auckland home?",
            answer: "Ventilation systems in Auckland homes improve indoor air quality by extracting moist, stale air and introducing fresher, drier air. This reduces condensation, prevents mould growth, and removes airborne pollutants and allergens."
          },
          {
            question: "Do I need ventilation in my Auckland kitchen and bathroom to meet Healthy Homes Standards?",
            answer: "Yes, the Healthy Homes Standards require kitchens and bathrooms in Auckland rental properties to have appropriately sized extractor fans ducted to the outside to remove moisture and odours effectively."
          },
          {
            question: "What\'s the difference between a positive pressure system and a heat recovery ventilation (HRV) system in Auckland?",
            answer: "Positive pressure systems gently push filtered air from the roof space into your Auckland home, forcing out stale air. HRV systems extract stale, moist air while simultaneously bringing in fresh air, recovering heat from the outgoing air to warm the incoming air, making them more energy-efficient in cooler Auckland months."
          }
        ]
      },
      {
        id: 'drainage-guttering',
        title: 'Drainage & Guttering',
        slug: 'drainage-guttering',
        description: 'Expert drainage and guttering solutions for Auckland properties, preventing moisture problems and protecting your home from water damage.',
        features: [
          'Gutter installation and repairs',
          'Downpipe installation',
          'Ground drainage solutions',
          'Moisture barrier installation',
          'Subfloor drainage'
        ],
        benefits: [
          'Prevent water ingress',
          'Protect foundations',
          'Reduce dampness',
          'Meet Healthy Homes requirements'
        ],
        image: 'https://images.pexels.com/photos/7019071/pexels-photo-7019071.jpeg',
        metaDescription: 'Professional drainage and guttering solutions in Auckland. Prevent moisture problems and protect your home with PropertyCare NZ.',
        metaKeywords: ['drainage solutions Auckland', 'guttering installation', 'downpipe installation', 'water management', 'Healthy Homes drainage'],
        faq: [
          {
            question: "How does effective drainage and guttering contribute to a Healthy Home in Auckland?",
            answer: "Proper drainage and guttering in Auckland homes prevent water from pooling around foundations or entering subfloor spaces. This reduces ground moisture, dampness under the house, and the risk of mould, all crucial for Healthy Homes compliance."
          },
          {
            question: "What are common drainage issues you address for Auckland properties under Healthy Homes requirements?",
            answer: "We address issues like blocked or damaged gutters and downpipes, inadequate ground sloping away from the house, and poor subfloor drainage to ensure Auckland properties manage surface and ground water effectively as per Healthy Homes Standards."
          },
          {
            question: "Do you install moisture barriers as part of your drainage solutions in Auckland?",
            answer: "Yes, installing a ground moisture barrier (e.g., polythene sheeting) on the soil in the subfloor space is a key Healthy Homes requirement in Auckland that we implement to reduce rising damp and improve underfloor air quality."
          }
        ]
      },
      {
        id: 'mould-removal',
        title: 'Mould Removal',
        slug: 'mould-removal',
        description: 'Professional mould removal and prevention services for Auckland homes, creating healthier living environments and addressing moisture issues.',
        features: [
          'Mould identification',
          'Safe mould removal',
          'Surface treatment',
          'Moisture source identification',
          'Prevention strategies'
        ],
        benefits: [
          'Healthier living environment',
          'Reduced allergies and respiratory issues',
          'Comprehensive mould elimination',
          'Long-term prevention'
        ],
        image: 'https://images.pexels.com/photos/6816354/pexels-photo-6816354.jpeg',
        metaDescription: 'Professional mould removal services in Auckland. Create a healthier home with PropertyCare NZ\'s complete mould elimination and prevention solutions.',
        metaKeywords: ['mould removal Auckland', 'mold remediation', 'black mold treatment', 'mould prevention', 'healthy home services'],
        faq: [
          {
            question: "Why is professional mould removal important for Auckland homes?",
            answer: "Professional mould removal in Auckland ensures that mould is safely and completely eradicated, not just cleaned from surfaces. We also identify and advise on fixing the moisture source to prevent recurrence, crucial for a healthy living environment."
          },
          {
            question: "Is mould a significant issue for Healthy Homes compliance in Auckland?",
            answer: "Yes, excessive mould is a sign that a property may not meet Healthy Homes Standards in Auckland, as it indicates underlying moisture or ventilation issues that need to be addressed."
          },
          {
            question: "What steps do you take for mould remediation in Auckland properties?",
            answer: "Our Auckland mould remediation process includes identifying the mould type and moisture source, containing the affected area, safely removing contaminated materials, cleaning and treating surfaces, and recommending solutions to prevent future mould growth."
          }
        ]
      },
      {
        id: 'healthy-homes-assessment',
        title: 'Healthy Homes Assessment',
        slug: 'healthy-homes-assessment',
        description: 'Comprehensive Healthy Homes assessment services for Auckland properties, ensuring compliance with the Healthy Homes Standards and identifying improvement areas.',
        features: [
          'Full property inspection',
          'Insulation assessment',
          'Heating evaluation',
          'Ventilation check',
          'Moisture ingress identification'
        ],
        benefits: [
          'Identify compliance gaps',
          'Documentation for tenancy',
          'Prioritized recommendations',
          'Expert guidance'
        ],
        image: 'https://images.pexels.com/photos/4107098/pexels-photo-4107098.jpeg',
        metaDescription: 'Professional Healthy Homes assessment services in Auckland. Ensure compliance with Healthy Homes Standards and identify improvement areas with PropertyCare NZ.',
        metaKeywords: ['Healthy Homes assessment Auckland', 'compliance check', 'rental property assessment', 'Healthy Homes Standards', 'property inspection'],
        faq: [
          {
            question: "What does a Healthy Homes Assessment in Auckland involve?",
            answer: "Our Auckland Healthy Homes Assessment is a comprehensive inspection checking compliance against all five standards: insulation, heating, ventilation, moisture ingress & drainage, and draught stopping. We provide a detailed report of findings and recommendations."
          },
          {
            question: "Who needs a Healthy Homes Assessment in Auckland?",
            answer: "Landlords in Auckland require a Healthy Homes Assessment to ensure their rental properties comply with the standards. Homeowners may also get an assessment to improve their home\'s health, comfort, and energy efficiency."
          },
          {
            question: "What happens if my Auckland property fails a Healthy Homes Assessment?",
            answer: "If your Auckland property doesn\'t meet all standards, our report will outline the specific areas needing attention. We can then provide quotes for and carry out the necessary upgrade work to achieve full Healthy Homes compliance."
          }
        ]
      }
    ],
    faq: [
      {
        question: "What are the Healthy Homes Standards in Auckland?",
        answer: "The Healthy Homes Standards are regulations that ensure rental properties in New Zealand provide tenants with warmer, drier homes. They include requirements for insulation, heating, ventilation, moisture ingress and drainage, and draft stopping."
      },
      {
        question: "Do I need to comply with Healthy Homes Standards if I'm not a landlord?",
        answer: "While the Healthy Homes Standards are legally required for rental properties, we recommend these improvements for all homes. They create healthier living environments, improve energy efficiency, and can increase your property's value."
      },
      {
        question: "How long does a Healthy Homes assessment take?",
        answer: "A typical Healthy Homes assessment takes 1-2 hours depending on the size and condition of the property. We thoroughly inspect all required areas and provide a detailed report with our findings and recommendations."
      },
      {
        question: "Can you provide all the services needed to meet Healthy Homes compliance?",
        answer: "Yes, we offer a complete end-to-end service for Healthy Homes compliance, from initial assessment through to installation of insulation, heating, ventilation, and moisture control solutions, as well as final compliance documentation."
      }
    ]
  },
  // Insurance Work
  {
    id: 'insurance',
    title: 'Insurance Work',
    slug: 'insurance-work',
    description: 'Comprehensive insurance restoration and repair services for Auckland properties, specializing in damage assessment, claim assistance, and high-quality repairs.',
    icon: 'Umbrella',
    category: 'insurance',
    features: [
      'Insurance claim assessment',
      'Detailed documentation',
      'Direct insurer communication',
      'Quality restoration work',
      'Project management'
    ],
    benefits: [
      'Streamlined claims process',
      'Expert damage assessment',
      'Quality guaranteed repairs',
      'Stress-free restoration'
    ],
    includes: [
      'Initial damage assessment',
      'Detailed scope of works',
      'Insurance claim assistance',
      'Professional repairs',
      'Final inspection and sign-off'
    ],
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    location: 'Auckland',
    childServices: [
      {
        id: 'fire-damage-restoration',
        title: 'Fire Damage Restoration',
        slug: 'fire-damage-restoration',
        description: 'Specialized fire damage restoration services for Auckland properties, including smoke damage remediation, structural repairs, and complete rebuilds.',
        features: [
          'Emergency response',
          'Smoke and soot removal',
          'Structural assessment',
          'Odor elimination',
          'Complete reconstruction'
        ],
        benefits: [
          'Comprehensive restoration',
          'Insurance claim assistance',
          'Health hazard elimination',
          'Structural integrity restored'
        ],
        image: 'https://images.pexels.com/photos/6368656/pexels-photo-6368656.jpeg',
        metaDescription: 'Professional fire damage restoration services in Auckland. From smoke damage cleanup to complete rebuilds, PropertyCare NZ provides comprehensive fire restoration solutions.',
        metaKeywords: ['fire damage restoration Auckland', 'smoke damage cleanup', 'fire insurance claims', 'fire rebuild services', 'fire damage repair'],
        faq: [
          {
            question: "What does your fire damage restoration service in Auckland involve?",
            answer: "Our Auckland fire damage restoration service includes immediate site securing, assessment of structural integrity, removal of soot and smoke residues from all surfaces, deodorization to eliminate odours, and complete repair and reconstruction of damaged areas."
          },
          {
            question: "How long does fire damage restoration typically take for an Auckland property?",
            answer: "The duration for fire damage restoration in Auckland varies greatly depending on the extent of fire, smoke, and water damage (from firefighting). Minor incidents might take days, while extensive restorations can take weeks or months. We provide a timeline after a thorough assessment."
          },
          {
            question: "Can you help liaise with my insurance company for fire damage claims in Auckland?",
            answer: "Yes, we have extensive experience working with insurance companies for fire damage claims in Auckland. We can provide detailed reports, photographic evidence, and repair quotes to support your claim and streamline the process."
          }
        ]
      },
      {
        id: 'flood-damage-repairs',
        title: 'Flood Damage Repairs',
        slug: 'flood-damage-repairs',
        description: 'Expert flood damage repair services for Auckland properties, including water extraction, drying, mold prevention, and structural restoration.',
        features: [
          'Water extraction',
          'Structural drying',
          'Mold prevention',
          'Damage assessment',
          'Complete restoration'
        ],
        benefits: [
          'Rapid response',
          'Prevent secondary damage',
          'Insurance claim assistance',
          'Complete restoration'
        ],
        image: 'https://images.pexels.com/photos/6508455/pexels-photo-6508455.jpeg',
        metaDescription: 'Professional flood damage repair services in Auckland. From water extraction to complete restoration, PropertyCare NZ provides expert flood damage solutions.',
        metaKeywords: ['flood damage repairs Auckland', 'water damage restoration', 'flood insurance claims', 'structural drying', 'water extraction services'],
        faq: [
          {
            question: "What is the first step your team takes when called for flood damage repairs in Auckland?",
            answer: "The first crucial step for flood damage repairs in Auckland is water extraction using specialized pumps and vacuums. This is followed by removing damaged, non-salvageable materials and then deploying industrial drying equipment to thoroughly dry the structure."
          },
          {
            question: "How do you prevent mould growth after flood damage in an Auckland property?",
            answer: "Preventing mould after flood damage in Auckland involves rapid and thorough drying of all affected materials, using dehumidifiers and air movers. We also apply antimicrobial treatments to affected surfaces once dry to inhibit mould growth."
          },
          {
            question: "Is it safe to stay in my Auckland home during flood damage repairs?",
            answer: "This depends on the severity of the flood damage. For minor incidents, it might be possible. However, for significant flooding, it\'s often recommended to relocate temporarily due to potential hazards like compromised electrical systems, structural issues, or contamination, especially in Auckland\'s humid climate."
          }
        ]
      },
      {
        id: 'insurance-building-repairs',
        title: 'Insurance Building Repairs',
        slug: 'insurance-building-repairs',
        description: 'Comprehensive insurance building repair services for Auckland properties, handling all aspects of structural and cosmetic restoration for insurance claims.',
        features: [
          'Detailed damage assessment',
          'Scope of works preparation',
          'Insurance claim navigation',
          'Quality rebuilding',
          'Final documentation'
        ],
        benefits: [
          'Insurance company liaison',
          'Detailed documentation',
          'Quality workmanship',
          'Project management'
        ],
        image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg',
        metaDescription: 'Professional insurance building repair services in Auckland. PropertyCare NZ handles all aspects of structural and cosmetic restoration for insurance claims.',
        metaKeywords: ['insurance building repairs Auckland', 'insurance claim repairs', 'building restoration', 'property damage claims', 'insurance rebuilds'],
        faq: [
          {
            question: "What types of building damage do your Auckland insurance repair services cover?",
            answer: "Our Auckland insurance building repair services cover a wide range of damage types typically claimed under property insurance, including damage from fire, flood, storms, impact (e.g., a tree falling), and other accidental events. We handle both structural and cosmetic repairs."
          },
          {
            question: "How do you ensure the quality of insurance building repairs in Auckland?",
            answer: "We ensure quality in our Auckland insurance repairs by using qualified, licensed tradespeople, adhering to all building codes and standards, using quality materials, and providing transparent project management. We aim to restore your property to its pre-loss condition or better."
          },
          {
            question: "Will you work directly with my insurance assessor for repairs in Auckland?",
            answer: "Yes, we routinely work directly with insurance assessors in Auckland. We can meet them on-site, discuss the scope of works, provide necessary documentation, and ensure the repair process aligns with the approved claim, making it smoother for you."
          }
        ]
      }
    ],
    faq: [
      {
        question: "How do you work with insurance companies on claims?",
        answer: "We work directly with your insurance company, providing detailed damage assessments, scope of works, and cost estimates. We can communicate with your insurer's assessors, attend joint inspections, and ensure all damage is properly documented for a fair claim settlement."
      },
      {
        question: "Can you help if my insurance claim has been denied?",
        answer: "Yes, we can provide independent assessments and documentation that may help with claim reconsideration. Our detailed reporting and expertise in insurance work can often identify covered damage that may have been overlooked in initial assessments."
      },
      {
        question: "How quickly can you respond to emergency situations?",
        answer: "We offer emergency response services for fire and flood damage, typically responding within 24 hours. For severe cases requiring immediate attention, we prioritize dispatch of our emergency team to prevent further damage to your property."
      },
      {
        question: "Do you provide temporary repairs while waiting for insurance approval?",
        answer: "Yes, we can perform temporary repairs to prevent further damage while waiting for claim approval. These might include water extraction, tarping damaged roofs, boarding up windows, or structural stabilization as needed."
      }
    ]
  },
  // Installations
  {
    id: 'installations',
    title: 'Installations',
    slug: 'installations',
    description: 'Professional installation services for Auckland properties, encompassing everything from double glazing to home automation and security systems.',
    icon: 'Cog',
    category: 'installations',
    features: [
      'Professional installation',
      'Quality products',
      'Expert advice',
      'Warranty coverage',
      'After-installation support'
    ],
    benefits: [
      'Professional workmanship',
      'Properly functioning systems',
      'Enhanced property value',
      'Energy efficiency improvements'
    ],
    includes: [
      'Initial consultation',
      'Product selection assistance',
      'Professional installation',
      'Testing and commissioning',
      'Cleanup and removal of packaging'
    ],
    image: 'https://images.pexels.com/photos/7228096/pexels-photo-7228096.jpeg',
    location: 'Auckland',
    childServices: [
      {
        id: 'double-glazing',
        title: 'Double Glazing',
        slug: 'double-glazing',
        description: 'Expert double glazing installation services for Auckland homes, improving energy efficiency, reducing noise, and enhancing comfort.',
        features: [
          'Double glazed window installation',
          'Retrofit double glazing',
          'Thermal efficiency assessment',
          'Sound insulation',
          'Condensation reduction'
        ],
        benefits: [
          'Improved energy efficiency',
          'Reduced noise pollution',
          'Enhanced home comfort',
          'Decreased condensation'
        ],
        image: 'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg',
        metaDescription: 'Professional double glazing installation services in Auckland. Improve energy efficiency and reduce noise with PropertyCare NZ\'s quality window solutions.',
        metaKeywords: ['double glazing Auckland', 'window installation', 'energy efficient windows', 'noise reduction windows', 'double glazed retrofit'],
        faq: [
          {
            question: "What are the main benefits of installing double glazing in my Auckland home?",
            answer: "The main benefits of double glazing in Auckland homes are improved thermal insulation (warmer in winter, cooler in summer), reduced energy bills, significant noise reduction from outside, and less condensation on windows."
          },
          {
            question: "Can double glazing be retrofitted to existing window frames in Auckland?",
            answer: "Yes, in many Auckland homes, double glazing can be retrofitted into existing timber or aluminium window frames, provided the frames are in good condition. This is often a more cost-effective solution than full window replacement."
          },
          {
            question: "What is Low-E glass, and is it recommended for double glazing in Auckland?",
            answer: "Low-E (Low Emissivity) glass has a special coating that reflects heat, keeping warmth inside during winter and outside during summer. It\'s highly recommended for double glazing in Auckland to maximize energy efficiency and comfort."
          }
        ]
      },
      {
        id: 'heat-pump-installation',
        title: 'Heat Pump Installation',
        slug: 'heat-pump-installation',
        description: 'Professional heat pump installation services for Auckland properties, providing efficient heating and cooling solutions for year-round comfort.',
        features: [
          'Heat pump system design',
          'Professional installation',
          'System testing',
          'User training',
          'Warranty registration'
        ],
        benefits: [
          'Energy efficient heating/cooling',
          'Reduced power bills',
          'Year-round comfort',
          'Healthy Homes compliance'
        ],
        image: 'https://images.pexels.com/photos/5835242/pexels-photo-5835242.jpeg',
        metaDescription: 'Professional heat pump installation services in Auckland. Enjoy energy-efficient heating and cooling with PropertyCare NZ\'s expert installation.',
        metaKeywords: ['heat pump installation Auckland', 'air conditioning installation', 'energy efficient heating', 'heat pump services', 'Healthy Homes heating'],
        faq: [
          {
            question: "What size heat pump do I need for my room in Auckland?",
            answer: "The correct heat pump size for your Auckland room depends on factors like room dimensions, ceiling height, insulation levels, window size and type, and local climate. Our Auckland specialists perform a heat load calculation to recommend the optimal unit."
          },
          {
            question: "Where is the best place to install the indoor and outdoor units of a heat pump in an Auckland home?",
            answer: "In Auckland homes, the indoor heat pump unit is best placed to allow good airflow across the room, avoiding direct drafts onto seating areas. The outdoor unit needs good ventilation, a stable base, and should be accessible for maintenance, ideally not too close to bedrooms due to operational noise."
          },
          {
            question: "How much can I expect to save on my Auckland energy bills with a heat pump?",
            answer: "Heat pumps are very energy-efficient. Auckland households can expect significant savings on heating costs compared to older electric heaters or unflued gas heaters, often up to 30-60% or more, depending on usage and the home\'s insulation."
          }
        ]
      },
      {
        id: 'air-conditioning',
        title: 'Air Conditioning',
        slug: 'air-conditioning',
        description: 'Comprehensive air conditioning installation services for Auckland homes and businesses, providing cooling, heating, and air purification solutions.',
        features: [
          'System design and sizing',
          'Professional installation',
          'Ducted system installation',
          'Multi-split systems',
          'Smart controller setup'
        ],
        benefits: [
          'Year-round temperature control',
          'Improved air quality',
          'Energy efficient operation',
          'Quiet comfort'
        ],
        image: 'https://images.pexels.com/photos/4078188/pexels-photo-4078188.jpeg',
        metaDescription: 'Professional air conditioning installation services in Auckland. Enjoy perfect indoor climate control with PropertyCare NZ\'s expert installation solutions.',
        metaKeywords: ['air conditioning installation Auckland', 'ducted air conditioning', 'split system installation', 'commercial air conditioning', 'home cooling systems'],
        faq: [
          {
            question: "What\'s the difference between a split system and a ducted air conditioning system for Auckland homes?",
            answer: "A split system air conditioner in Auckland typically cools or heats a single room using an indoor unit connected to an outdoor unit. Ducted systems use a central unit (often in the roof space) to distribute conditioned air to multiple rooms via a network of ducts and vents."
          },
          {
            question: "How often should air conditioning systems in Auckland be serviced?",
            answer: "For optimal performance and longevity, air conditioning systems in Auckland should be serviced annually. This includes cleaning filters, checking refrigerant levels, inspecting electrical components, and ensuring good airflow."
          },
          {
            question: "Can modern air conditioners also help with air purification in Auckland?",
            answer: "Yes, many modern air conditioners available in Auckland include advanced filtration systems that can help remove dust, pollen, allergens, and other airborne pollutants, improving indoor air quality."
          }
        ]
      },
      {
        id: 'home-automation',
        title: 'Home Automation',
        slug: 'home-automation',
        description: 'Expert home automation installation services for Auckland properties, integrating smart technology for security, comfort, and convenience.',
        features: [
          'Smart lighting installation',
          'Security system integration',
          'Home entertainment setup',
          'Climate control automation',
          'Voice control integration'
        ],
        benefits: [
          'Enhanced convenience',
          'Improved security',
          'Energy management',
          'Modern living experience'
        ],
        image: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg',
        metaDescription: 'Professional home automation installation services in Auckland. Transform your home with PropertyCare NZ\'s smart technology integration.',
        metaKeywords: ['home automation Auckland', 'smart home installation', 'home security systems', 'smart lighting installation', 'voice control systems'],
        faq: [
          {
            question: "What aspects of my Auckland home can be automated?",
            answer: "Home automation in Auckland can cover lighting, heating and cooling, security systems (cameras, alarms, smart locks), entertainment systems, blinds/curtains, and even appliances. Systems can be controlled via smartphone apps or voice assistants."
          },
          {
            question: "Is home automation expensive to install in Auckland?",
            answer: "The cost of home automation in Auckland varies widely. You can start with basic smart plugs or lighting and expand over time. Full-scale integrated systems are more of an investment but can add significant convenience, security, and energy savings."
          },
          {
            question: "Do I need a special internet connection for home automation in my Auckland property?",
            answer: "A stable and reliable Wi-Fi internet connection is essential for most home automation systems in Auckland, as many smart devices connect and communicate via your home network and the internet for remote access and updates."
          }
        ]
      },
      {
        id: 'locks-handles',
        title: 'Locks & Handles',
        slug: 'locks-handles',
        description: 'Professional lock and handle installation services for Auckland properties, enhancing security, functionality, and aesthetics.',
        features: [
          'Door lock installation',
          'Window lock fitting',
          'Handle replacement',
          'Security upgrade consultation',
          'Master key systems'
        ],
        benefits: [
          'Improved home security',
          'Modern aesthetics',
          'Smooth operation',
          'Professional installation'
        ],
        image: 'https://images.pexels.com/photos/5614144/pexels-photo-5614144.jpeg',
        metaDescription: 'Professional lock and handle installation services in Auckland. Enhance security and aesthetics with PropertyCare NZ\'s expert installation.',
        metaKeywords: ['lock installation Auckland', 'door handle replacement', 'security locks', 'window lock installation', 'home security upgrades'],
        faq: [
          {
            question: "When should I consider upgrading the locks on my Auckland property?",
            answer: "Consider upgrading locks in Auckland if they are old and worn, if you\'ve recently moved in, lost keys, or want to improve security (e.g., to deadbolts or smart locks). It\'s a key step in home security."
          },
          {
            question: "What types of door handles are popular for modern Auckland homes?",
            answer: "Popular door handle styles for modern Auckland homes include sleek lever handles in matte black, brushed nickel, or chrome finishes. Minimalist designs and smart lock integrated handles are also gaining popularity."
          },
          {
            question: "Can you install smart locks that I can control with my phone in Auckland?",
            answer: "Yes, we install a variety of smart locks in Auckland that offer keyless entry via PIN codes, fingerprint scanning, or smartphone apps, providing enhanced security and convenience."
          }
        ]
      },
      {
        id: 'cupboards-shelves',
        title: 'Cupboards & Shelves',
        slug: 'cupboards-shelves',
        description: 'Custom cupboard and shelving installation services for Auckland homes, maximizing storage and enhancing functionality in any space.',
        features: [
          'Custom shelving installation',
          'Built-in cupboard fitting',
          'Wardrobe organization systems',
          'Pantry shelving',
          'Garage storage solutions'
        ],
        benefits: [
          'Maximized storage space',
          'Custom solutions',
          'Quality materials',
          'Professional installation'
        ],
        image: 'https://images.pexels.com/photos/7319279/pexels-photo-7319279.jpeg',
        metaDescription: 'Professional cupboard and shelving installation services in Auckland. Maximize storage and enhance functionality with PropertyCare NZ\'s custom solutions.',
        metaKeywords: ['cupboard installation Auckland', 'custom shelving', 'wardrobe systems', 'storage solutions', 'built-in cabinets Auckland'],
        faq: [
          {
            question: "What are the benefits of custom-built cupboards and shelves for Auckland homes?",
            answer: "Custom-built cupboards and shelves in Auckland maximise storage in unique or awkward spaces, are tailored to your specific storage needs and style preferences, and often offer better quality and durability than off-the-shelf units."
          },
          {
            question: "Can you help design a wardrobe organisation system for my Auckland bedroom?",
            answer: "Yes, our Auckland team can help design and install effective wardrobe organisation systems, including custom shelving, drawers, hanging rails, and accessory storage to make the most of your wardrobe space."
          },
          {
            question: "What materials do you typically use for cupboard and shelving installations in Auckland?",
            answer: "We use a variety of quality materials for Auckland installations, including melamine, MDF (often with a painted or vinyl wrap finish), plywood, and solid timber, depending on the budget, desired look, and application (e.g., kitchen, wardrobe, garage)."
          }
        ]
      },
      {
        id: 'pergola-assembly',
        title: 'Pergola Assembly',
        slug: 'pergola-assembly',
        description: 'Professional pergola assembly and installation services for Auckland properties, creating beautiful outdoor living spaces.',
        features: [
          'Pergola installation',
          'Kit assembly',
          'Custom pergola construction',
          'Shade sail installation',
          'Outdoor structure building'
        ],
        benefits: [
          'Extended outdoor living',
          'Increased property value',
          'Professional construction',
          'Customized solutions'
        ],
        image: 'https://images.pexels.com/photos/6969927/pexels-photo-6969927.jpeg',
        metaDescription: 'Professional pergola assembly and installation services in Auckland. Create beautiful outdoor living spaces with PropertyCare NZ\'s expert construction.',
        metaKeywords: ['pergola installation Auckland', 'outdoor structure building', 'shade structure installation', 'pergola assembly', 'custom pergola construction'],
        faq: [
          {
            question: "Do I need council consent to build a pergola in Auckland?",
            answer: "In Auckland, smaller pergolas often don\'t require council consent, but it depends on factors like size (height and area), proximity to boundaries, and whether it\'s attached to the house or freestanding. It\'s always best to check Auckland Council guidelines or with us."
          },
          {
            question: "What materials are best for a durable pergola in Auckland\'s climate?",
            answer: "For Auckland\'s climate, durable pergola materials include treated pine (stained or painted), hardwoods like kwila or vitex, or powder-coated aluminium. The choice depends on your budget and desired aesthetic."
          },
          {
            question: "Can you assemble a flat-pack pergola kit I\'ve purchased for my Auckland property?",
            answer: "Yes, our Auckland handyman team is experienced in assembling flat-pack pergola kits from various retailers, ensuring they are constructed safely and correctly according to manufacturer instructions."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Do you supply the products for installation or just provide installation services?",
        answer: "We can work either way. We have partnerships with quality suppliers and can source products for you, ensuring you get the right products at competitive prices. Alternatively, if you've already purchased items, we can provide installation services only."
      },
      {
        question: "Are your installers licensed and certified?",
        answer: "Yes, all our installation specialists are fully licensed and certified for their respective trades. For specialized installations like heat pumps and electrical work, we use licensed electricians and certified installers who meet all regulatory requirements."
      },
      {
        question: "How long does a typical installation take?",
        answer: "Installation timeframes vary depending on the project. Simple installations like locks or shelving may take just a few hours, while more complex projects like double glazing or home automation systems might take several days. We'll provide a clear timeframe before starting work."
      },
      {
        question: "Do you provide warranties on installations?",
        answer: "Yes, all our installation work comes with a workmanship warranty. Additionally, products installed typically come with manufacturer warranties, which we'll register on your behalf and provide all necessary documentation."
      }
    ]
  },
  // Outdoor Maintenance
  {
    id: 'outdoor',
    title: 'Outdoor Maintenance',
    slug: 'outdoor-maintenance',
    description: 'Comprehensive outdoor maintenance services for Auckland properties, keeping your exterior spaces functional, beautiful, and well-maintained year-round.',
    icon: 'TreePine',
    category: 'outdoor',
    features: [
      'Exterior cleaning',
      'Surface maintenance',
      'Structural repairs',
      'Preventative maintenance',
      'Property upkeep'
    ],
    benefits: [
      'Enhanced curb appeal',
      'Prevent costly damage',
      'Extend property lifespan',
      'Maintain property value'
    ],
    includes: [
      'Property assessment',
      'Customized maintenance plan',
      'Professional services',
      'Quality materials',
      'Regular maintenance options'
    ],
    image: 'https://images.pexels.com/photos/8293679/pexels-photo-8293679.jpeg',
    location: 'Auckland',
    childServices: [
      {
        id: 'paving-bricklaying',
        title: 'Paving & Bricklaying',
        slug: 'paving-bricklaying',
        description: 'Expert paving and bricklaying services for Auckland properties, creating beautiful and durable outdoor surfaces and structures.',
        features: [
          'Patio installation',
          'Pathway construction',
          'Brick wall construction',
          'Paving repairs',
          'Decorative brickwork'
        ],
        benefits: [
          'Durable outdoor surfaces',
          'Enhanced property aesthetics',
          'Professional craftsmanship',
          'Quality materials'
        ],
        image: 'https://images.pexels.com/photos/258804/pexels-photo-258804.jpeg',
        metaDescription: 'Professional paving and bricklaying services in Auckland. Create beautiful, durable outdoor spaces with PropertyCare NZ\'s expert craftsmanship.',
        metaKeywords: ['paving services Auckland', 'bricklaying contractors', 'patio installation', 'pathway construction', 'brick repair Auckland'],
        faq: [
          {
            question: "What types of paving options are suitable for Auckland driveways and patios?",
            answer: "For Auckland properties, popular paving options include concrete pavers, natural stone like bluestone or schist, and clay bricks. The choice depends on aesthetics, budget, and the expected traffic or use of the paved area."
          },
          {
            question: "How long does a newly laid brick or paved area in Auckland need before it can be used?",
            answer: "Generally, a newly paved or brick-laid area in Auckland should be left for at least 24-48 hours before light foot traffic, and 3-7 days before heavier use like parking a car, to allow mortar or bedding sand to set properly."
          },
          {
            question: "Do you provide repair services for existing paved or brickwork in Auckland?",
            answer: "Yes, we offer repair services in Auckland for issues like cracked or loose pavers/bricks, uneven surfaces, and damaged mortar joints to restore the safety and appearance of your outdoor areas."
          }
        ]
      },
      {
        id: 'concreting',
        title: 'Concreting',
        slug: 'concreting',
        description: 'Professional concreting services for Auckland properties, providing durable solutions for driveways, paths, and outdoor areas.',
        features: [
          'Concrete driveway installation',
          'Path and walkway construction',
          'Concrete slab pouring',
          'Exposed aggregate finishing',
          'Concrete repair'
        ],
        benefits: [
          'Long-lasting durability',
          'Low maintenance',
          'Custom finish options',
          'Professional installation'
        ],
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        metaDescription: 'Professional concreting services in Auckland. From driveways to paths, PropertyCare NZ provides expert concrete solutions for your property.',
        metaKeywords: ['concreting services Auckland', 'concrete driveway installation', 'concrete paths', 'exposed aggregate', 'concrete repairs Auckland'],
        faq: [
          {
            question: "What concrete finishes are available for driveways and paths in Auckland?",
            answer: "In Auckland, we offer various concrete finishes, including a standard broom finish for good grip, exposed aggregate for a decorative look, coloured concrete, and options for stamped or stencilled patterns."
          },
          {
            question: "How do you manage concrete pouring in Auckland\'s unpredictable weather?",
            answer: "We closely monitor Auckland weather forecasts. If rain is likely, we may reschedule the pour or take precautions like using concrete accelerating admixtures and having covers ready to protect the fresh concrete from excessive water."
          },
          {
            question: "Can you repair cracked concrete driveways or paths in Auckland?",
            answer: "Yes, we can repair cracked concrete in Auckland. For minor cracks, specialized sealants or fillers can be used. For more significant damage, sections may need to be cut out and re-poured. We assess and recommend the best approach."
          }
        ]
      },
      {
        id: 'fence-gate-repairs',
        title: 'Fence & Gate Repairs',
        slug: 'fence-gate-repairs',
        description: 'Expert fence and gate repair services for Auckland properties, maintaining security, privacy, and aesthetic appeal.',
        features: [
          'Fence repairs and maintenance',
          'Gate repairs and adjustments',
          'Post replacement',
          'Panel replacement',
          'Hardware upgrades'
        ],
        benefits: [
          'Restore property security',
          'Improve curb appeal',
          'Extend fence lifespan',
          'Reliable operation'
        ],
        image: 'https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg',
        metaDescription: 'Professional fence and gate repair services in Auckland. Maintain security and aesthetics with PropertyCare NZ\'s expert repair solutions.',
        metaKeywords: ['fence repairs Auckland', 'gate repair services', 'fence maintenance', 'gate adjustment', 'fence post replacement'],
        faq: [
          {
            question: "What are common fence and gate problems you repair in Auckland?",
            answer: "Common Auckland fence and gate repairs include replacing rotten posts or broken palings, fixing sagging gates, repairing or replacing broken hinges and latches, and addressing issues caused by ground movement or storm damage."
          },
          {
            question: "How can I extend the life of my wooden fence in Auckland\'s climate?",
            answer: "To extend your wooden fence\'s life in Auckland, ensure it\'s regularly cleaned to remove mould and dirt, apply a quality stain or paint every few years for protection, keep vegetation trimmed away from the base, and promptly repair any damage."
          },
          {
            question: "Do you install new fences and gates in Auckland, or only repairs?",
            answer: "While we specialize in fence and gate repairs in Auckland, we also undertake new installations for various fence types (timber, aluminium, etc.) and gates, including pedestrian and driveway gates."
          }
        ]
      },
      {
        id: 'roof-cleaning',
        title: 'Roof Cleaning',
        slug: 'roof-cleaning',
        description: 'Professional roof cleaning services for Auckland properties, removing moss, lichen, and debris to extend roof life and improve appearance.',
        features: [
          'Moss and lichen removal',
          'Debris clearing',
          'Gutter cleaning',
          'Roof treatment application',
          'Preventative maintenance'
        ],
        benefits: [
          'Extended roof lifespan',
          'Improved appearance',
          'Prevent water damage',
          'Maintain warranty validity'
        ],
        image: 'https://images.pexels.com/photos/5816713/pexels-photo-5816713.jpeg',
        metaDescription: 'Professional roof cleaning services in Auckland. Extend your roof\'s lifespan and improve appearance with PropertyCare NZ\'s expert cleaning.',
        metaKeywords: ['roof cleaning Auckland', 'moss removal roof', 'roof maintenance', 'gutter cleaning', 'roof treatment services'],
        faq: [
          {
            question: "Why is regular roof cleaning important for Auckland homes?",
            answer: "Regular roof cleaning in Auckland removes moss, mould, lichen, and debris that can trap moisture, damage roofing materials, block gutters, and lead to premature roof deterioration and leaks. It also improves your home\'s appearance."
          },
          {
            question: "What methods do you use for roof cleaning in Auckland, and are they safe for my roof type?",
            answer: "We use a combination of low-pressure washing (soft washing) and appropriate, eco-friendly cleaning solutions tailored to your specific roof type (e.g., tile, metal, shingle) in Auckland. This ensures effective cleaning without damaging the roofing material."
          },
          {
            question: "How often should an Auckland roof be professionally cleaned?",
            answer: "For most Auckland homes, professional roof cleaning every 2-3 years is recommended. However, factors like overhanging trees, shade, and local environmental conditions might necessitate more frequent cleaning."
          }
        ]
      },
      {
        id: 'water-blasting',
        title: 'Water Blasting',
        slug: 'water-blasting',
        description: 'Comprehensive water blasting services for Auckland properties, effectively cleaning outdoor surfaces and removing dirt, mould, and stains.',
        features: [
          'Driveway cleaning',
          'Path and patio cleaning',
          'Deck and fence cleaning',
          'House exterior washing',
          'Surface preparation'
        ],
        benefits: [
          'Restore surface appearance',
          'Remove stubborn stains',
          'Prevent slip hazards',
          'Prepare for treatments'
        ],
        image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
        metaDescription: 'Professional water blasting services in Auckland. Effectively clean exterior surfaces with PropertyCare NZ\'s expert pressure washing solutions.',
        metaKeywords: ['water blasting Auckland', 'pressure washing', 'driveway cleaning', 'exterior house washing', 'patio cleaning services'],
        faq: [
          {
            question: "What surfaces can be safely water blasted on Auckland properties?",
            answer: "We can safely water blast many Auckland surfaces, including concrete driveways and paths, paved areas, brickwork, some types of house cladding (with appropriate pressure), decks, and fences. We always assess the surface first."
          },
          {
            question: "Can water blasting remove oil stains from my Auckland driveway?",
            answer: "Water blasting, often combined with specialized degreasers, can be very effective in removing or significantly reducing oil stains from concrete driveways in Auckland, especially if treated relatively soon after the spill."
          },
          {
            question: "Is high-pressure water blasting always necessary, or do you offer soft washing in Auckland?",
            answer: "High pressure isn\'t always needed or suitable. We offer soft washing in Auckland, which uses lower pressure combined with effective cleaning solutions, ideal for more delicate surfaces like painted weatherboards, some types of roofing, or older brickwork."
          }
        ]
      },
      {
        id: 'driveway-cleaning',
        title: 'Driveway Cleaning',
        slug: 'driveway-cleaning',
        description: 'Specialized driveway cleaning services for Auckland properties, removing oil stains, moss, and dirt to restore appearance and safety.',
        features: [
          'Concrete driveway cleaning',
          'Paved driveway restoration',
          'Oil stain removal',
          'Moss and weed treatment',
          'Protective sealing'
        ],
        benefits: [
          'Restore driveway appearance',
          'Remove dangerous slip hazards',
          'Prevent deterioration',
          'Extend driveway life'
        ],
        image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
        metaDescription: 'Professional driveway cleaning services in Auckland. Restore appearance and safety with PropertyCare NZ\'s expert cleaning solutions.',
        metaKeywords: ['driveway cleaning Auckland', 'concrete driveway cleaning', 'oil stain removal', 'paved driveway restoration', 'driveway sealing'],
        faq: [
          {
            question: "What\'s involved in your professional driveway cleaning service in Auckland?",
            answer: "Our Auckland driveway cleaning service typically involves pre-treating stubborn stains (like oil or moss), then using appropriate pressure washing or soft washing techniques to remove dirt, grime, mould, and algae, leaving your driveway looking fresh and clean."
          },
          {
            question: "How can I prevent my Auckland driveway from getting dirty and slippery so quickly after cleaning?",
            answer: "After cleaning your Auckland driveway, consider applying a quality concrete or paver sealer. This can help protect against stains, inhibit moss and mould growth, and make future cleaning easier."
          },
          {
            question: "Is your driveway cleaning process safe for surrounding plants and gardens in Auckland?",
            answer: "Yes, we take care to protect surrounding plants and garden beds in Auckland during driveway cleaning, often by pre-wetting them or using protective covers, and by choosing eco-friendly cleaning solutions where possible."
          }
        ]
      },
      {
        id: 'building-cleaning',
        title: 'Building Cleaning',
        slug: 'building-cleaning',
        description: 'Professional building exterior cleaning services for Auckland properties, safely removing dirt, mold, and stains from all exterior surfaces.',
        features: [
          'House washing',
          'Commercial building cleaning',
          'Soft wash techniques',
          'Mold and mildew removal',
          'Pre-paint cleaning'
        ],
        benefits: [
          'Restore building appearance',
          'Prevent surface deterioration',
          'Identify maintenance issues',
          'Preparation for painting'
        ],
        image: 'https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg',
        metaDescription: 'Professional building exterior cleaning services in Auckland. Safely restore your building\'s appearance with PropertyCare NZ\'s expert cleaning.',
        metaKeywords: ['building cleaning Auckland', 'house washing services', 'exterior cleaning', 'commercial building washing', 'soft wash cleaning'],
        faq: [
          {
            question: "How often should I have the exterior of my Auckland house washed?",
            answer: "For Auckland homes, an annual exterior house wash is generally recommended to remove built-up dirt, grime, salt spray (in coastal areas), pollen, and inhibit mould or algae growth, keeping your paintwork looking good and lasting longer."
          },
          {
            question: "What is 'soft washing' and why is it preferred for house exteriors in Auckland?",
            answer: "Soft washing is a low-pressure cleaning method used for Auckland house exteriors. It relies on specialized cleaning solutions to break down dirt and organic growth, which is then rinsed off gently. It\'s safer for paintwork, timber, and delicate surfaces than high-pressure washing."
          },
          {
            question: "Can you clean multi-story buildings in Auckland?",
            answer: "Yes, we are equipped to clean multi-story residential and commercial buildings in Auckland, using appropriate access equipment like ladders, scaffolding, or elevated work platforms where necessary, always adhering to safety standards."
          }
        ]
      },
      {
        id: 'cladding-repairs',
        title: 'Cladding Repairs',
        slug: 'cladding-repairs',
        description: 'Expert cladding repair services for Auckland properties, fixing damaged exterior cladding and ensuring proper weather protection.',
        features: [
          'Weatherboard repairs',
          'Brick cladding maintenance',
          'Plaster cladding repairs',
          'Metal cladding fixes',
          'Cladding replacement'
        ],
        benefits: [
          'Weather protection',
          'Prevent water damage',
          'Restore building appearance',
          'Address weathertightness issues'
        ],
        image: 'https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg',
        metaDescription: 'Professional cladding repair services in Auckland. Ensure proper weather protection with PropertyCare NZ\'s expert repair solutions.',
        metaKeywords: ['cladding repairs Auckland', 'weatherboard repairs', 'exterior cladding maintenance', 'weathertightness repairs', 'plaster cladding repair'],
        faq: [
          {
            question: "What types of exterior cladding do you repair on Auckland properties?",
            answer: "We repair various common Auckland cladding types, including timber weatherboards (cedar, pine), fibre cement sheets and planks, brick veneer, stucco (plaster), and some metal claddings. We address issues like rot, cracks, impact damage, or loose sections."
          },
          {
            question: "Why is it important to repair damaged cladding promptly in Auckland?",
            answer: "Prompt cladding repairs in Auckland are crucial to prevent water ingress into the wall cavity, which can lead to serious issues like timber decay, mould growth, and structural damage. It also maintains your home\'s weathertightness and appearance."
          },
          {
            question: "Can you match the existing paint or stain when performing cladding repairs in Auckland?",
            answer: "We always aim to match existing paint or stain colours as closely as possible for Auckland cladding repairs. We can assist with paint matching services or use paint/stain provided by you to ensure a seamless finish."
          }
        ]
      }
    ],
    faq: [
      {
        question: "How often should I have my roof cleaned?",
        answer: "We recommend roof cleaning every 2-3 years for most Auckland properties. However, homes in areas with overhanging trees or high moisture may require more frequent cleaning. Regular cleaning prevents moss and lichen buildup that can damage roofing materials and cause leaks."
      },
      {
        question: "Are your water blasting techniques safe for all surfaces?",
        answer: "We adjust our water blasting pressure and techniques based on the specific surface being cleaned. For delicate surfaces like some claddings or older brickwork, we use soft wash techniques with appropriate cleaning agents rather than high pressure that could cause damage."
      },
      {
        question: "Do you provide regular maintenance packages for outdoor areas?",
        answer: "Yes, we offer customized maintenance plans that can include seasonal cleaning, inspections, and preventative treatments. These plans can be tailored to your property's specific needs and budget, with options for quarterly, bi-annual, or annual services."
      },
      {
        question: "Can you fix leaking or damaged gutters as part of outdoor maintenance?",
        answer: "Absolutely. Gutter repair and maintenance is a key part of our outdoor maintenance services. We can repair leaking joints, replace damaged sections, adjust slopes for proper drainage, and ensure downpipes are functioning correctly."
      }
    ]
  },
  // Handyman Services
  {
    id: 'handyman',
    title: 'Handyman Services',
    slug: 'handyman',
    description: 'Reliable and professional handyman services for Auckland properties, taking care of all those small repairs, installations, and maintenance tasks.',
    icon: 'Hammer',
    category: 'handyman',
    features: [
      'General repairs',
      'Small installations',
      'Maintenance tasks',
      'Assembly services',
      'Property upkeep'
    ],
    benefits: [
      'One call for multiple tasks',
      'Professional workmanship',
      'Time-saving solutions',
      'Skilled technicians'
    ],
    includes: [
      'Free quote',
      'Experienced handyman',
      'Quality materials',
      'Clean workspace',
      'Follow-up service'
    ],
    image: 'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg',
    location: 'Auckland',
    childServices: [
      {
        id: 'general-repairs',
        title: 'General Repairs',
        slug: 'general-repairs',
        description: 'Professional general repair services for Auckland homes, addressing all those small but important fixes around your property.',
        features: [
          'Door and window repairs',
          'Furniture repairs',
          'Trim and molding fixes',
          'Hinges and handles',
          'Patching and filling'
        ],
        benefits: [
          'Address multiple issues in one visit',
          'Professional results',
          'Prevent larger problems',
          'Maintain property condition'
        ],
        image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg',
        metaDescription: 'Professional general repair services in Auckland. Address all those small but important fixes with PropertyCare NZ\'s skilled handyman services.',
        metaKeywords: ['general repairs Auckland', 'handyman repairs', 'door and window repairs', 'furniture repair services', 'home maintenance Auckland'],
        faq: [
          {
            question: "What kind of small general repairs can your Auckland handyman service handle?",
            answer: "Our Auckland handyman general repair service covers a wide array of small jobs, such as fixing sticky doors, repairing loose handles or hinges, patching small wall holes, minor furniture repairs, and replacing trim or molding."
          },
          {
            question: "Is there a minimum charge for your handyman general repair services in Auckland?",
            answer: "Yes, like most Auckland handyman services, we typically have a minimum call-out fee which usually covers the first hour of work. We aim to complete as many small general repairs as possible within that time for you."
          },
          {
            question: "Can your handyman assemble flat-pack furniture as part of general repairs in Auckland?",
            answer: "Absolutely! Flat-pack furniture assembly is a common request for our Auckland handyman general repair services. We can efficiently assemble items from IKEA, Freedom, and other retailers."
          }
        ]
      },
      {
        id: 'gutter-cleaning',
        title: 'Gutter Cleaning',
        slug: 'gutter-cleaning',
        description: 'Professional gutter cleaning services for Auckland homes, preventing water damage and maintaining proper drainage systems.',
        features: [
          'Gutter debris removal',
          'Downpipe clearing',
          'Gutter flushing',
          'Minor repairs',
          'Gutter guard installation'
        ],
        benefits: [
          'Prevent water damage',
          'Avoid overflow issues',
          'Extend gutter lifespan',
          'Maintain proper drainage'
        ],
        image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg',
        metaDescription: 'Professional gutter cleaning services in Auckland. Prevent water damage and maintain proper drainage with PropertyCare NZ\'s thorough cleaning.',
        metaKeywords: ['gutter cleaning Auckland', 'downpipe clearing', 'gutter maintenance', 'gutter guard installation', 'gutter debris removal'],
        faq: [
          {
            question: "Why should I use a handyman for gutter cleaning in Auckland instead of doing it myself?",
            answer: "Using our Auckland handyman service for gutter cleaning ensures safety, as working at heights can be risky. We have the right equipment and experience to do the job thoroughly and can also spot and advise on any minor gutter repairs needed."
          },
          {
            question: "How often do gutters need cleaning by a handyman in Auckland?",
            answer: "For Auckland homes, especially those with nearby trees, handyman gutter cleaning is recommended at least twice a year (spring and autumn) to prevent blockages, water overflow, and potential damage to your roof or foundations."
          },
          {
            question: "Does your handyman gutter cleaning service in Auckland include downpipe flushing?",
            answer: "Yes, our standard Auckland handyman gutter cleaning service includes removing debris from gutters and ensuring downpipes are clear and flowing freely. We can flush them if necessary."
          }
        ]
      },
      {
        id: 'windows-doors',
        title: 'Windows & Doors',
        slug: 'windows-doors',
        description: 'Expert window and door repair and maintenance services for Auckland homes, improving functionality, security, and energy efficiency.',
        features: [
          'Window repairs',
          'Door adjustments',
          'Lock and handle replacement',
          'Weatherstripping',
          'Sliding door maintenance'
        ],
        benefits: [
          'Improve security',
          'Enhance energy efficiency',
          'Restore smooth operation',
          'Extend component lifespan'
        ],
        image: 'https://images.pexels.com/photos/276659/pexels-photo-276659.jpeg',
        metaDescription: 'Professional window and door repair services in Auckland. Improve functionality, security, and energy efficiency with PropertyCare NZ\'s expert services.',
        metaKeywords: ['window repairs Auckland', 'door maintenance', 'sliding door repairs', 'window lock replacement', 'door adjustments Auckland'],
        faq: [
          {
            question: "What specific window and door issues can your Auckland handyman service fix?",
            answer: "Our Auckland handyman can fix issues like sticking windows or doors, replace worn weather stripping, adjust or replace loose hinges, install new handles or locks, and repair minor damage to window sills or door frames."
          },
          {
            question: "Can your handyman replace a cracked window pane in Auckland?",
            answer: "For smaller, standard-sized window panes, our Auckland handyman service can often handle replacements. For larger or specialized glass (like double-glazed units), we would typically recommend a glazier."
          },
          {
            question: "Is it cheaper to have a handyman repair a window or door in Auckland than a specialist carpenter?",
            answer: "For minor repairs and adjustments on windows and doors in Auckland, a handyman is often more cost-effective as they can handle a variety of small tasks. For major structural repairs or custom installations, a specialist carpenter might be needed."
          }
        ]
      },
      {
        id: 'shelving-installation',
        title: 'Shelving Installation',
        slug: 'shelving-installation',
        description: 'Professional shelving installation services for Auckland homes, creating organized storage solutions throughout your property.',
        features: [
          'Shelf mounting',
          'Bookcase assembly',
          'Wall unit installation',
          'Custom shelving',
          'Storage organization'
        ],
        benefits: [
          'Maximize storage space',
          'Professional installation',
          'Secure mounting',
          'Customized solutions'
        ],
        image: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg',
        metaDescription: 'Professional shelving installation services in Auckland. Create organized storage solutions with PropertyCare NZ\'s expert installation.',
        metaKeywords: ['shelving installation Auckland', 'bookcase assembly', 'wall shelf mounting', 'custom shelving installation', 'storage solutions Auckland'],
        faq: [
          {
            question: "What types of shelves can your Auckland handyman install?",
            answer: "Our Auckland handyman can install various types of shelves, including floating shelves, bracketed wall shelves, pre-assembled shelving units, and help with assembling flat-pack bookcases or storage systems."
          },
          {
            question: "How do you ensure shelves installed by your handyman in Auckland are secure?",
            answer: "Our Auckland handyman ensures shelves are secure by identifying appropriate wall studs or using suitable wall anchors (e.g., for plasterboard walls) based on the shelf type and the weight it\'s intended to hold."
          },
          {
            question: "Can your handyman help me plan the layout for new shelving in my Auckland home?",
            answer: "While our Auckland handyman can offer practical advice on placement for secure installation, for complex shelving design or custom built-in units, you might consult a cabinet maker or interior designer first. We excel at the installation part."
          }
        ]
      },
      {
        id: 'tiling-repairs',
        title: 'Tiling Repairs',
        slug: 'tiling-repairs',
        description: 'Expert tiling repair services for Auckland homes, fixing cracked, loose, or damaged tiles in kitchens, bathrooms, and other areas.',
        features: [
          'Loose tile repairs',
          'Cracked tile replacement',
          'Grout repair and renewal',
          'Sealing services',
          'Small area retiling'
        ],
        benefits: [
          'Extend tile lifespan',
          'Prevent water damage',
          'Restore appearance',
          'Fix safety hazards'
        ],
        image: 'https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg',
        metaDescription: 'Professional tiling repair services in Auckland. Fix cracked, loose, or damaged tiles with PropertyCare NZ\'s expert repair solutions.',
        metaKeywords: ['tiling repairs Auckland', 'cracked tile replacement', 'grout repair', 'loose tile fixing', 'bathroom tile repairs'],
        faq: [
          {
            question: "What small tiling repairs can an Auckland handyman typically handle?",
            answer: "An Auckland handyman can often handle small tiling repairs like replacing a few cracked or loose tiles, re-grouting small areas in bathrooms or kitchens, or applying silicone sealant around baths and sinks."
          },
          {
            question: "When should I call a specialist tiler instead of a handyman for tile repairs in Auckland?",
            answer: "For extensive tiling projects, full re-tiling of a room, complex patterns, or if waterproofing integrity is a major concern (like a leaking shower base), it\'s best to call a specialist tiler in Auckland. Handymen are great for minor touch-ups."
          },
          {
            question: "Can your handyman match grout colour for tile repairs in Auckland?",
            answer: "Our Auckland handyman will do their best to match existing grout colour for tile repairs. We can use grout samples to find the closest match available, but exact matches can sometimes be difficult due to fading or batch differences in old grout."
          }
        ]
      }
    ],
    faq: [
      {
        question: "What kinds of tasks can your handyman service handle?",
        answer: "Our handyman service can handle a wide range of small to medium repairs and installations including furniture assembly, picture and TV mounting, door and window repairs, gutter cleaning, small painting jobs, tiling repairs, shelf installation, and much more."
      },
      {
        question: "Can you handle multiple small jobs in one visit?",
        answer: "Absolutely! One of the main advantages of our handyman service is the ability to take care of multiple small tasks in a single visit. This saves you time and money compared to hiring different specialists for each job."
      },
      {
        question: "Do you bring your own tools and supplies?",
        answer: "Yes, our handymen arrive with a comprehensive set of professional tools for most common repairs and installations. For materials and specific parts, we can either use what you provide or source the necessary supplies for you at competitive prices."
      },
      {
        question: "What is your minimum callout fee?",
        answer: "Our handyman services have a one-hour minimum callout fee, but we aim to maximize value during that time. For small jobs, we'll try to handle multiple tasks within the callout period to ensure you get the most from our service."
      }
    ]
  }
];

export const getServiceIcon = (iconName: string) => {
  const icons = {
    'Building': Building,
    'Kitchen': Kitchen,
    'Paintbrush': Paintbrush,
    'Thermometer': Thermometer,
    'Home': Home,
    'Umbrella': Umbrella,
    'Cog': Cog,
    'Lock': Lock,
    'TreePine': TreePine,
    'Droplets': Droplets,
    'Hammer': Hammer,
    'Grid3X3': Grid3X3,
    'Warehouse': Warehouse,
    'Palette': Palette,
    'Cloud': Cloud,
    'Tools': Tools,
    'Bath': Bath,
    'Fan': Fan,
    'Gauge': Gauge,
    'Trash2': Trash2,
    'Window': Window,
    'Key': Key,
    'Fence': Fence,
    'Ruler': Ruler,
    'Brush': Brush,
    'Folder': Folder,
    'Flame': Flame,
    'Shower': Shower,
    'ScanLine': ScanLine,
    'Scaling': Scaling,
    'FileQuestion': FileQuestion
  };
  
  return icons[iconName as keyof typeof icons] || Wrench;
};

export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};

export const getServiceBySlug = (slug: string) => {
  // First check if it's a parent service
  const parentService = services.find(s => {
    return s.slug === slug;
  });
  if (parentService) {
    return parentService;
  }
  
  // If not found, could be a child service
  const childService = getAllChildServices().find(item => {
    return item.service.slug === slug;
  });
  return childService ? childService.service : null;
};

export const getAllChildServices = () => {
  const allChildServices: { parentSlug: string; service: any }[] = [];
  
  services.forEach(service => {
    if (service.childServices && service.childServices.length > 0) {
      service.childServices.forEach(childService => {
        allChildServices.push({
          parentSlug: service.slug,
          service: childService
        });
      });
    }
  });
  
  return allChildServices;
};

export const getParentServiceByChildSlug = (childSlug: string) => {
  const childServiceInfo = getAllChildServices().find(item => item.service.slug === childSlug);
  return childServiceInfo ? services.find(service => service.slug === childServiceInfo.parentSlug) : null;
};