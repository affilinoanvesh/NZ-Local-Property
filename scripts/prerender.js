/**
 * Prerender Script
 * This script enhances static HTML files with page-specific metadata for better SEO
 */

import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define metadata for each route
const routesMetadata = {
  '/': {
    title: 'PropertyCare NZ | Professional Property Services Auckland',
    description: 'Professional property maintenance and repair services across Auckland. From general repairs to specialized installations, we\'ve got you covered.',
    keywords: 'property maintenance, home repairs, Auckland property services, building repairs, house maintenance',
    canonical: 'https://propertycarenz.co.nz/',
    ogImage: 'https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg' // Updated to match HomePage
  },
  '/about': {
    title: 'About PropertyCare NZ | Property Maintenance Specialists Auckland',
    description: 'Learn about PropertyCare NZ, your trusted partner for comprehensive property maintenance and repair services throughout Auckland.',
    keywords: 'about PropertyCare NZ, Auckland property services, property maintenance team, Auckland contractors',
    canonical: 'https://propertycarenz.co.nz/about',
    ogImage: 'https://propertycarenz.co.nz/images/og-image-about.jpg' // Keep or update if a better specific image exists
  },
  '/services': {
    title: 'Our Services | PropertyCare NZ - Property Maintenance Auckland',
    description: 'Explore our comprehensive range of property maintenance and repair services in Auckland. From general repairs to specialized installations, we\'ve got your property covered.',
    keywords: 'property services Auckland, home maintenance, building repairs, property maintenance Auckland',
    canonical: 'https://propertycarenz.co.nz/services',
    ogImage: 'https://propertycarenz.co.nz/images/og-image-services.jpg' // Keep or update
  },
  '/projects': {
    title: 'Our Projects | PropertyCare NZ - Property Maintenance Auckland',
    description: 'Browse our portfolio of completed property maintenance and improvement projects across Auckland.',
    keywords: 'property maintenance projects, Auckland renovations, home improvement projects, commercial maintenance Auckland',
    canonical: 'https://propertycarenz.co.nz/projects',
    ogImage: 'https://propertycarenz.co.nz/images/og-image-projects.jpg' // Keep or update
  },
  '/contact': {
    title: 'Contact PropertyCare NZ | Auckland Property Maintenance',
    description: 'Get in touch with PropertyCare NZ for a free quote on all your property maintenance and repair needs in Auckland.',
    keywords: 'contact property maintenance Auckland, property services quote, Auckland repairs contact',
    canonical: 'https://propertycarenz.co.nz/contact',
    ogImage: 'https://propertycarenz.co.nz/images/og-image-contact.jpg' // Keep or update
  },
  '/sitemap': {
    title: 'Sitemap | PropertyCare NZ',
    description: 'HTML Sitemap for PropertyCare NZ. Find all our pages and services easily.',
    keywords: 'sitemap, propertycare nz, navigation, site structure, Auckland property services',
    canonical: 'https://propertycarenz.co.nz/sitemap',
    ogImage: 'https://propertycarenz.co.nz/images/og-image-sitemap.jpg' // Placeholder, consider creating a specific one
  },

  // Parent Services from services.ts
  '/general-repairs': {
    title: 'General Repairs | PropertyCare NZ Auckland',
    description: 'Comprehensive building repair and maintenance services for Auckland properties, ensuring your home stays in optimal condition.',
    keywords: 'general repairs Auckland, building maintenance, property repairs, Auckland maintenance services, home repairs',
    canonical: 'https://propertycarenz.co.nz/general-repairs',
    ogImage: 'https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg'
  },
  '/healthy-homes': {
    title: 'Healthy Homes Solutions | PropertyCare NZ Auckland',
    description: 'Comprehensive solutions to meet Healthy Homes Standards and create a healthier, more comfortable living environment for Auckland properties.',
    keywords: 'healthy homes Auckland, home insulation, ventilation systems, heating solutions Auckland, Healthy Homes Standards',
    canonical: 'https://propertycarenz.co.nz/healthy-homes',
    ogImage: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg'
  },
  '/insurance-work': {
    title: 'Insurance Work & Restoration | PropertyCare NZ Auckland',
    description: 'Comprehensive insurance restoration and repair services for Auckland properties, specializing in damage assessment, claim assistance, and high-quality repairs.',
    keywords: 'insurance repairs Auckland, property damage restoration, insurance claim repairs, fire damage, flood damage',
    canonical: 'https://propertycarenz.co.nz/insurance-work',
    ogImage: 'https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg'
  },
  '/installations': {
    title: 'Specialized Installations | PropertyCare NZ Auckland',
    description: 'Professional installation services for Auckland properties, encompassing everything from double glazing to home automation and security systems.',
    keywords: 'installation services Auckland, property installations, fixture installation, appliance installation Auckland, heat pump installation',
    canonical: 'https://propertycarenz.co.nz/installations',
    ogImage: 'https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg'
  },
  '/outdoor-maintenance': {
    title: 'Outdoor Maintenance Services | PropertyCare NZ Auckland',
    description: 'Comprehensive outdoor maintenance services for Auckland properties, keeping your exterior spaces functional, beautiful, and well-maintained year-round.',
    keywords: 'outdoor maintenance Auckland, garden services, decking maintenance, fencing repairs Auckland, water blasting',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance',
    ogImage: 'https://images.pexels.com/photos/589/garden-green-trees-back-garden.jpg'
  },
  '/handyman': {
    title: 'Handyman Services | PropertyCare NZ Auckland',
    description: 'Reliable and professional handyman services for Auckland properties, taking care of all those small repairs, installations, and maintenance tasks.',
    keywords: 'handyman Auckland, handyman services, property maintenance, small repairs Auckland, home repairs',
    canonical: 'https://propertycarenz.co.nz/handyman',
    ogImage: 'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg'
  },

  // Child Services from services.ts
  // -- General Repairs Child Services --
  '/general-repairs/building-repairs': {
    title: 'Building Repairs - General Repairs | PropertyCare NZ Auckland',
    description: 'Expert building repair services in Auckland. PropertyCare NZ provides professional solutions for all structural and building repair needs.',
    keywords: 'building repairs Auckland, structural repairs, property maintenance, building restoration Auckland',
    canonical: 'https://propertycarenz.co.nz/general-repairs/building-repairs',
    ogImage: 'https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg'
  },
  '/general-repairs/kitchen-maintenance': {
    title: 'Kitchen Maintenance - General Repairs | PropertyCare NZ Auckland',
    description: 'Professional kitchen maintenance and repair services in Auckland. Keep your kitchen functional and looking great with PropertyCare NZ.',
    keywords: 'kitchen maintenance Auckland, kitchen repairs, cabinet repairs, countertop repairs Auckland, kitchen plumbing services',
    canonical: 'https://propertycarenz.co.nz/general-repairs/kitchen-maintenance',
    ogImage: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg'
  },
  '/general-repairs/bathroom-repairs': {
    title: 'Bathroom Repairs - General Repairs | PropertyCare NZ Auckland',
    description: 'Expert bathroom repair services in Auckland. From leaking showers to tile restoration, PropertyCare NZ provides complete bathroom maintenance solutions.',
    keywords: 'bathroom repairs Auckland, leaking shower repair, tile restoration, bathroom maintenance, bathroom plumbing Auckland',
    canonical: 'https://propertycarenz.co.nz/general-repairs/bathroom-repairs',
    ogImage: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
  },
  '/general-repairs/roof-gutter-repairs': {
    title: 'Roof & Gutter Repairs - General Repairs | PropertyCare NZ Auckland',
    description: 'Professional roof and gutter repair services in Auckland. Prevent water damage and maintain your home\'s integrity with PropertyCare NZ.',
    keywords: 'roof repairs Auckland, gutter cleaning Auckland, roof leaks, roof maintenance, downpipe repairs',
    canonical: 'https://propertycarenz.co.nz/general-repairs/roof-gutter-repairs',
    ogImage: 'https://images.pexels.com/photos/5778239/pexels-photo-5778239.jpeg'
  },
  '/general-repairs/carpet-flooring-repairs': {
    title: 'Carpet & Flooring Repairs - General Repairs | PropertyCare NZ Auckland',
    description: 'Professional carpet and flooring repair services in Auckland. Restore damaged flooring and extend the life of your floors with PropertyCare NZ.',
    keywords: 'carpet repairs Auckland, flooring repairs, hardwood floor restoration, carpet stretching Auckland, vinyl floor repair',
    canonical: 'https://propertycarenz.co.nz/general-repairs/carpet-flooring-repairs',
    ogImage: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg'
  },
  '/general-repairs/windows-doors-repairs': {
    title: 'Windows & Doors Repairs - General Repairs | PropertyCare NZ Auckland',
    description: 'Professional window and door repair services in Auckland. Improve security, energy efficiency, and functionality with PropertyCare NZ.',
    keywords: 'window repairs Auckland, door repairs, lock replacement, sliding door repairs Auckland, window glass replacement',
    canonical: 'https://propertycarenz.co.nz/general-repairs/windows-doors-repairs',
    ogImage: 'https://images.pexels.com/photos/276689/pexels-photo-276689.jpeg'
  },
  '/general-repairs/tiling': {
    title: 'Tiling Services - General Repairs | PropertyCare NZ Auckland',
    description: 'Professional tiling services in Auckland. From installation to repairs, PropertyCare NZ provides expert tiling solutions for bathrooms, kitchens, and more.',
    keywords: 'tiling services Auckland, bathroom tiling, kitchen tiling, tile repairs Auckland, tile installation',
    canonical: 'https://propertycarenz.co.nz/general-repairs/tiling',
    ogImage: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg'
  },
  '/general-repairs/gib-plastering': {
    title: 'GIB & Plastering - General Repairs | PropertyCare NZ Auckland',
    description: 'Professional GIB and plastering services in Auckland. Repair damaged walls and ensure perfect finishes with PropertyCare NZ.',
    keywords: 'GIB repairs Auckland, plastering services, wall repairs, plasterboard installation, GIB stopping and finishing',
    canonical: 'https://propertycarenz.co.nz/general-repairs/gib-plastering',
    ogImage: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg'
  },

  // -- Healthy Homes Child Services --
  '/healthy-homes/insulation-installation': {
    title: 'Insulation Installation - Healthy Homes | PropertyCare NZ Auckland',
    description: 'Professional insulation installation services in Auckland. Improve energy efficiency and meet Healthy Homes Standards with PropertyCare NZ.',
    keywords: 'insulation installation Auckland, ceiling insulation, underfloor insulation, Healthy Homes insulation, wall insulation Auckland',
    canonical: 'https://propertycarenz.co.nz/healthy-homes/insulation-installation',
    ogImage: 'https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg'
  },
  '/healthy-homes/heating-installation': {
    title: 'Heating Installation - Healthy Homes | PropertyCare NZ Auckland',
    description: 'Professional heating installation services in Auckland. Install energy-efficient heating systems that comply with Healthy Homes Standards.',
    keywords: 'heating installation Auckland, heat pump installation, fixed heater installation, Healthy Homes heating, energy efficient heating',
    canonical: 'https://propertycarenz.co.nz/healthy-homes/heating-installation',
    ogImage: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg'
  },
  '/healthy-homes/ventilation-systems': {
    title: 'Ventilation Systems - Healthy Homes | PropertyCare NZ Auckland',
    description: 'Professional ventilation system installation in Auckland. Improve indoor air quality and reduce moisture with PropertyCare NZ\'s ventilation solutions.',
    keywords: 'ventilation systems Auckland, home ventilation, moisture control, HRV systems, extraction fan installation',
    canonical: 'https://propertycarenz.co.nz/healthy-homes/ventilation-systems',
    ogImage: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg'
  },
  '/healthy-homes/drainage-guttering': {
    title: 'Drainage & Guttering - Healthy Homes | PropertyCare NZ Auckland',
    description: 'Professional drainage and guttering solutions in Auckland. Prevent moisture problems and protect your home with PropertyCare NZ.',
    keywords: 'drainage solutions Auckland, guttering installation, downpipe installation, water management, Healthy Homes drainage',
    canonical: 'https://propertycarenz.co.nz/healthy-homes/drainage-guttering',
    ogImage: 'https://images.pexels.com/photos/5778239/pexels-photo-5778239.jpeg'
  },
  '/healthy-homes/mould-removal': {
    title: 'Mould Removal - Healthy Homes | PropertyCare NZ Auckland',
    description: 'Professional mould removal services in Auckland. Create a healthier home with PropertyCare NZ\'s complete mould elimination and prevention solutions.',
    keywords: 'mould removal Auckland, mold remediation, black mold treatment, mould prevention, healthy home services',
    canonical: 'https://propertycarenz.co.nz/healthy-homes/mould-removal',
    ogImage: 'https://images.pexels.com/photos/6816354/pexels-photo-6816354.jpeg'
  },
  '/healthy-homes/healthy-homes-assessment': {
    title: 'Healthy Homes Assessment | PropertyCare NZ Auckland',
    description: 'Professional Healthy Homes assessment services in Auckland. Ensure compliance with Healthy Homes Standards and identify improvement areas with PropertyCare NZ.',
    keywords: 'Healthy Homes assessment Auckland, compliance check, rental property assessment, Healthy Homes Standards, property inspection',
    canonical: 'https://propertycarenz.co.nz/healthy-homes/healthy-homes-assessment',
    ogImage: 'https://images.pexels.com/photos/4792489/pexels-photo-4792489.jpeg'
  },

  // -- Insurance Work Child Services --
  '/insurance-work/fire-damage-restoration': {
    title: 'Fire Damage Restoration - Insurance Work | PropertyCare NZ Auckland',
    description: 'Professional fire damage restoration services in Auckland. From smoke damage cleanup to complete rebuilds, PropertyCare NZ provides comprehensive fire restoration solutions.',
    keywords: 'fire damage restoration Auckland, smoke damage cleanup, fire insurance claims, fire rebuild services, fire damage repair',
    canonical: 'https://propertycarenz.co.nz/insurance-work/fire-damage-restoration',
    ogImage: 'https://images.pexels.com/photos/6368656/pexels-photo-6368656.jpeg'
  },
  '/insurance-work/flood-damage-repairs': {
    title: 'Flood Damage Repairs - Insurance Work | PropertyCare NZ Auckland',
    description: 'Professional flood damage repair services in Auckland. From water extraction to complete restoration, PropertyCare NZ provides expert flood damage solutions.',
    keywords: 'flood damage repairs Auckland, water damage restoration, flood insurance claims, structural drying, water extraction services',
    canonical: 'https://propertycarenz.co.nz/insurance-work/flood-damage-repairs',
    ogImage: 'https://images.pexels.com/photos/6508455/pexels-photo-6508455.jpeg'
  },
  '/insurance-work/insurance-building-repairs': {
    title: 'Insurance Building Repairs - Insurance Work | PropertyCare NZ Auckland',
    description: 'Professional insurance building repair services in Auckland. PropertyCare NZ handles all aspects of structural and cosmetic restoration for insurance claims.',
    keywords: 'insurance building repairs Auckland, insurance claim repairs, building restoration, property damage claims, insurance rebuilds',
    canonical: 'https://propertycarenz.co.nz/insurance-work/insurance-building-repairs',
    ogImage: 'https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg'
  },

  // -- Installations Child Services --
  '/installations/double-glazing': {
    title: 'Double Glazing Installation | PropertyCare NZ Auckland',
    description: 'Professional double glazing installation services in Auckland. Improve energy efficiency and reduce noise with PropertyCare NZ\'s quality window solutions.',
    keywords: 'double glazing Auckland, window installation, energy efficient windows, noise reduction windows, double glazed retrofit',
    canonical: 'https://propertycarenz.co.nz/installations/double-glazing',
    ogImage: 'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg'
  },
  '/installations/heat-pump-installation': {
    title: 'Heat Pump Installation | PropertyCare NZ Auckland',
    description: 'Professional heat pump installation services in Auckland. Enjoy energy-efficient heating and cooling with PropertyCare NZ\'s expert installation.',
    keywords: 'heat pump installation Auckland, air conditioning installation, energy efficient heating, heat pump services, Healthy Homes heating',
    canonical: 'https://propertycarenz.co.nz/installations/heat-pump-installation',
    ogImage: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg'
  },
  '/installations/air-conditioning': {
    title: 'Air Conditioning Installation | PropertyCare NZ Auckland',
    description: 'Professional air conditioning installation services in Auckland. Enjoy perfect indoor climate control with PropertyCare NZ\'s expert installation solutions.',
    keywords: 'air conditioning installation Auckland, ducted air conditioning, split system installation, commercial air conditioning, home cooling systems',
    canonical: 'https://propertycarenz.co.nz/installations/air-conditioning',
    ogImage: 'https://images.pexels.com/photos/4078188/pexels-photo-4078188.jpeg'
  },
  '/installations/home-automation': {
    title: 'Home Automation Installation | PropertyCare NZ Auckland',
    description: 'Professional home automation installation services in Auckland. Transform your home with PropertyCare NZ\'s smart technology integration.',
    keywords: 'home automation Auckland, smart home installation, home security systems, smart lighting installation, voice control systems',
    canonical: 'https://propertycarenz.co.nz/installations/home-automation',
    ogImage: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg'
  },
  '/installations/locks-handles': {
    title: 'Lock & Handle Installation | PropertyCare NZ Auckland',
    description: 'Professional lock and handle installation services in Auckland. Enhance security and aesthetics with PropertyCare NZ\'s expert installation.',
    keywords: 'lock installation Auckland, door handle replacement, security locks, window lock installation, home security upgrades',
    canonical: 'https://propertycarenz.co.nz/installations/locks-handles',
    ogImage: 'https://images.pexels.com/photos/5614144/pexels-photo-5614144.jpeg'
  },
  '/installations/cupboards-shelves': {
    title: 'Cupboard & Shelving Installation | PropertyCare NZ Auckland',
    description: 'Professional cupboard and shelving installation services in Auckland. Maximize storage and enhance functionality with PropertyCare NZ\'s custom solutions.',
    keywords: 'cupboard installation Auckland, custom shelving, wardrobe systems, storage solutions, built-in cabinets Auckland',
    canonical: 'https://propertycarenz.co.nz/installations/cupboards-shelves',
    ogImage: 'https://images.pexels.com/photos/7319279/pexels-photo-7319279.jpeg'
  },
  '/installations/pergola-assembly': {
    title: 'Pergola Assembly & Installation | PropertyCare NZ Auckland',
    description: 'Professional pergola assembly and installation services in Auckland. Create beautiful outdoor living spaces with PropertyCare NZ\'s expert construction.',
    keywords: 'pergola installation Auckland, outdoor structure building, shade structure installation, pergola assembly, custom pergola construction',
    canonical: 'https://propertycarenz.co.nz/installations/pergola-assembly',
    ogImage: 'https://images.pexels.com/photos/6969927/pexels-photo-6969927.jpeg'
  },

  // -- Outdoor Maintenance Child Services --
  '/outdoor-maintenance/paving-bricklaying': {
    title: 'Paving & Bricklaying - Outdoor Maintenance | PropertyCare NZ Auckland',
    description: 'Professional paving and bricklaying services in Auckland. Create beautiful, durable outdoor spaces with PropertyCare NZ\'s expert craftsmanship.',
    keywords: 'paving services Auckland, bricklaying contractors, patio installation, pathway construction, brick repair Auckland',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance/paving-bricklaying',
    ogImage: 'https://images.pexels.com/photos/258804/pexels-photo-258804.jpeg'
  },
  '/outdoor-maintenance/concreting': {
    title: 'Concreting Services - Outdoor Maintenance | PropertyCare NZ Auckland',
    description: 'Professional concreting services in Auckland. From driveways to paths, PropertyCare NZ provides expert concrete solutions for your property.',
    keywords: 'concreting services Auckland, concrete driveway installation, concrete paths, exposed aggregate, concrete repairs Auckland',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance/concreting',
    ogImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  },
  '/outdoor-maintenance/fence-gate-repairs': {
    title: 'Fence & Gate Repairs - Outdoor Maintenance | PropertyCare NZ Auckland',
    description: 'Professional fence and gate repair services in Auckland. Maintain security and aesthetics with PropertyCare NZ\'s expert repair solutions.',
    keywords: 'fence repairs Auckland, gate repair services, fence maintenance, gate adjustment, fence post replacement',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance/fence-gate-repairs',
    ogImage: 'https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg'
  },
  '/outdoor-maintenance/roof-cleaning': {
    title: 'Roof Cleaning - Outdoor Maintenance | PropertyCare NZ Auckland',
    description: 'Professional roof cleaning services in Auckland. Extend your roof\'s lifespan and improve appearance with PropertyCare NZ\'s expert cleaning.',
    keywords: 'roof cleaning Auckland, moss removal roof, roof maintenance, gutter cleaning, roof treatment services',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance/roof-cleaning',
    ogImage: 'https://images.pexels.com/photos/5816713/pexels-photo-5816713.jpeg'
  },
  '/outdoor-maintenance/water-blasting': {
    title: 'Water Blasting Services - Outdoor Maintenance | PropertyCare NZ Auckland',
    description: 'Professional water blasting services in Auckland. Effectively clean exterior surfaces with PropertyCare NZ\'s expert pressure washing solutions.',
    keywords: 'water blasting Auckland, pressure washing, driveway cleaning, exterior house washing, patio cleaning services',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance/water-blasting',
    ogImage: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg'
  },
  '/outdoor-maintenance/driveway-cleaning': {
    title: 'Driveway Cleaning - Outdoor Maintenance | PropertyCare NZ Auckland',
    description: 'Professional driveway cleaning services in Auckland. Restore appearance and safety with PropertyCare NZ\'s expert cleaning solutions.',
    keywords: 'driveway cleaning Auckland, concrete driveway cleaning, oil stain removal, paved driveway restoration, driveway sealing',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance/driveway-cleaning',
    ogImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg'
  },
  '/outdoor-maintenance/building-cleaning': {
    title: 'Building Exterior Cleaning - Outdoor Maintenance | PropertyCare NZ Auckland',
    description: 'Professional building exterior cleaning services in Auckland. Safely restore your building\'s appearance with PropertyCare NZ\'s expert cleaning.',
    keywords: 'building cleaning Auckland, house washing services, exterior cleaning, commercial building washing, soft wash cleaning',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance/building-cleaning',
    ogImage: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg'
  },
  '/outdoor-maintenance/cladding-repairs': {
    title: 'Cladding Repairs - Outdoor Maintenance | PropertyCare NZ Auckland',
    description: 'Professional cladding repair services in Auckland. Ensure proper weather protection with PropertyCare NZ\'s expert repair solutions.',
    keywords: 'cladding repairs Auckland, weatherboard repairs, exterior cladding maintenance, weathertightness repairs, plaster cladding repair',
    canonical: 'https://propertycarenz.co.nz/outdoor-maintenance/cladding-repairs',
    ogImage: 'https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg'
  },

  // -- Handyman Services Child Services --
  '/handyman/general-repairs': {
    title: 'General Repairs - Handyman Services | PropertyCare NZ Auckland',
    description: 'Professional general repair services in Auckland. Address all those small but important fixes with PropertyCare NZ\'s skilled handyman services.',
    keywords: 'general repairs Auckland, handyman repairs, door and window repairs, furniture repair services, home maintenance Auckland',
    canonical: 'https://propertycarenz.co.nz/handyman/general-repairs',
    ogImage: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg'
  },
  '/handyman/gutter-cleaning': {
    title: 'Gutter Cleaning - Handyman Services | PropertyCare NZ Auckland',
    description: 'Professional gutter cleaning services in Auckland. Prevent water damage and maintain proper drainage with PropertyCare NZ\'s thorough cleaning.',
    keywords: 'gutter cleaning Auckland, downpipe clearing, gutter maintenance, gutter guard installation, gutter debris removal',
    canonical: 'https://propertycarenz.co.nz/handyman/gutter-cleaning',
    ogImage: 'https://images.pexels.com/photos/5778239/pexels-photo-5778239.jpeg'
  },
  '/handyman/windows-doors': {
    title: 'Window & Door Repairs - Handyman Services | PropertyCare NZ Auckland',
    description: 'Professional window and door repair services in Auckland. Improve functionality, security, and energy efficiency with PropertyCare NZ\'s expert services.',
    keywords: 'window repairs Auckland, door maintenance, sliding door repairs, window lock replacement, door adjustments Auckland',
    canonical: 'https://propertycarenz.co.nz/handyman/windows-doors',
    ogImage: 'https://images.pexels.com/photos/276659/pexels-photo-276659.jpeg'
  },
  '/handyman/shelving-installation': {
    title: 'Shelving Installation - Handyman Services | PropertyCare NZ Auckland',
    description: 'Professional shelving installation services in Auckland. Create organized storage solutions with PropertyCare NZ\'s expert installation.',
    keywords: 'shelving installation Auckland, bookcase assembly, wall shelf mounting, custom shelving installation, storage solutions Auckland',
    canonical: 'https://propertycarenz.co.nz/handyman/shelving-installation',
    ogImage: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg'
  },
  '/handyman/tiling-repairs': {
    title: 'Tiling Repairs - Handyman Services | PropertyCare NZ Auckland',
    description: 'Professional tiling repair services in Auckland. Fix cracked, loose, or damaged tiles with PropertyCare NZ\'s expert repair solutions.',
    keywords: 'tiling repairs Auckland, cracked tile replacement, grout repair, loose tile fixing, bathroom tile repairs',
    canonical: 'https://propertycarenz.co.nz/handyman/tiling-repairs',
    ogImage: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg'
  }
};

// Get the distribution directory
const distDir = path.resolve(__dirname, '../dist');

// Process each HTML file
function processHTMLFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      processHTMLFiles(fullPath);
    } else if (file.name === 'index.html') {
      enhanceHTML(fullPath, dir);
    }
  }
}

// Enhance HTML with proper metadata
function enhanceHTML(filePath, dir) {
  // Get the route path from the directory
  let routePath = '/' + path.relative(distDir, dir).replace(/\\/g, '/');
  if (routePath === '/.') routePath = '/';
  
  // Get metadata for the route
  const metadata = routesMetadata[routePath];
  if (!metadata) {
    console.log(`[Prerender] No metadata found for route: ${routePath}. Skipping enhancement.`);
    return;
  }
  
  try {
    // Read the HTML file
    const html = fs.readFileSync(filePath, 'utf8');
    
    // Parse the HTML
    const $ = cheerio.load(html);
    
    // Update metadata
    $('title').text(metadata.title);
    $('meta[name="description"]').attr('content', metadata.description);
    $('meta[name="keywords"]').attr('content', metadata.keywords);
    $('link[rel="canonical"]').attr('href', metadata.canonical);
    
    // Update Open Graph metadata
    $('meta[property="og:title"]').attr('content', metadata.title);
    $('meta[property="og:description"]').attr('content', metadata.description);
    $('meta[property="og:url"]').attr('content', metadata.canonical);
    $('meta[property="og:image"]').attr('content', metadata.ogImage);
    
    // Update Twitter metadata
    $('meta[name="twitter:title"]').attr('content', metadata.title);
    $('meta[name="twitter:description"]').attr('content', metadata.description);
    $('meta[name="twitter:image"]').attr('content', metadata.ogImage);
    
    fs.writeFileSync(filePath, $.html());
    
  } catch (error) {
    console.error(`[Prerender] Error enhancing HTML for route ${routePath} (${filePath}):`, error);
  }
}

// Make sure the dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('Dist directory not found. Run build first.');
  process.exit(1);
}

// Process all HTML files
console.log('Starting HTML enhancement for SEO...');
processHTMLFiles(distDir);
console.log('HTML enhancement complete!'); 