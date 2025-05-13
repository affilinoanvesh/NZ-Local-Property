import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ChevronUp, Wrench, ChevronRight } from 'lucide-react';
import { useQuoteContext } from '../../lib/QuoteContext';

// Updated navigation structure based on services.ts
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services', // Main link to the services overview page
    dropdown: true,
    submenu: [ // Parent Service Categories from services.ts
      { 
        name: 'General Repairs', 
        href: '/general-repairs',
        submenu: [
          { name: 'Building Repairs', href: '/general-repairs/building-repairs' },
          { name: 'Kitchen Maintenance', href: '/general-repairs/kitchen-maintenance' },
          { name: 'Bathroom Repairs', href: '/general-repairs/bathroom-repairs' },
          { name: 'Roof & Gutter Repairs', href: '/general-repairs/roof-gutter-repairs' },
          { name: 'Carpet & Flooring Repairs', href: '/general-repairs/carpet-flooring-repairs' },
          { name: 'Windows & Doors Repairs', href: '/general-repairs/windows-doors-repairs' },
          { name: 'Tiling Services', href: '/general-repairs/tiling' },
          { name: 'GIB & Plastering', href: '/general-repairs/gib-plastering' },
        ]
      },
      { 
        name: 'Healthy Homes', 
        href: '/healthy-homes',
        submenu: [
          { name: 'Insulation Installation', href: '/healthy-homes/insulation-installation' },
          { name: 'Heating Installation', href: '/healthy-homes/heating-installation' },
          { name: 'Ventilation Systems', href: '/healthy-homes/ventilation-systems' },
          { name: 'Drainage & Guttering', href: '/healthy-homes/drainage-guttering' },
          { name: 'Mould Removal', href: '/healthy-homes/mould-removal' },
          { name: 'Healthy Homes Assessment', href: '/healthy-homes/healthy-homes-assessment' },
        ]
      },
      { 
        name: 'Insurance Work', 
        href: '/insurance-work',
        submenu: [
          { name: 'Fire Damage Restoration', href: '/insurance-work/fire-damage-restoration' },
          { name: 'Flood Damage Repairs', href: '/insurance-work/flood-damage-repairs' },
          { name: 'Insurance Building Repairs', href: '/insurance-work/insurance-building-repairs' },
        ]
      },
      { 
        name: 'Installations', 
        href: '/installations',
        submenu: [
          { name: 'Double Glazing', href: '/installations/double-glazing' },
          { name: 'Heat Pump Installation', href: '/installations/heat-pump-installation' },
          { name: 'Air Conditioning', href: '/installations/air-conditioning' },
          { name: 'Home Automation', href: '/installations/home-automation' },
          { name: 'Locks & Handles', href: '/installations/locks-handles' },
          { name: 'Cupboards & Shelves', href: '/installations/cupboards-shelves' },
          { name: 'Pergola Assembly', href: '/installations/pergola-assembly' },
        ]
      },
      { 
        name: 'Outdoor Maintenance', 
        href: '/outdoor-maintenance',
        submenu: [
          { name: 'Paving & Bricklaying', href: '/outdoor-maintenance/paving-bricklaying' },
          { name: 'Concreting', href: '/outdoor-maintenance/concreting' },
          { name: 'Fence & Gate Repairs', href: '/outdoor-maintenance/fence-gate-repairs' },
          { name: 'Roof Cleaning', href: '/outdoor-maintenance/roof-cleaning' },
          { name: 'Water Blasting', href: '/outdoor-maintenance/water-blasting' },
          { name: 'Driveway Cleaning', href: '/outdoor-maintenance/driveway-cleaning' },
          { name: 'Building Cleaning', href: '/outdoor-maintenance/building-cleaning' },
          { name: 'Cladding Repairs', href: '/outdoor-maintenance/cladding-repairs' },
        ]
      },
      { 
        name: 'Handyman Services', 
        href: '/handyman',
        submenu: [
          // Note: child service 'General Repairs' under 'Handyman Services' has slug 'general-repairs'
          { name: 'General Repairs (Handyman)', href: '/handyman/general-repairs' }, // Clarified name to distinguish
          { name: 'Gutter Cleaning', href: '/handyman/gutter-cleaning' },
          { name: 'Windows & Doors (Handyman)', href: '/handyman/windows-doors' }, // Clarified name
          { name: 'Shelving Installation', href: '/handyman/shelving-installation' },
          { name: 'Tiling Repairs', href: '/handyman/tiling-repairs' },
        ]
      },
    ] 
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { openQuoteModal } = useQuoteContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (name: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenSubDropdown(openSubDropdown === name ? null : name);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled 
          ? 'bg-white/90 shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
      role="banner"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" aria-label="PropertyCare NZ - Home">
              <div className="bg-primary-600 text-white p-2 rounded-md">
                <Wrench className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="ml-2 text-xl font-bold text-primary-800 tracking-tight">
                PropertyCare<span className="text-accent-500">NZ</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Menu">
            {navigation.map((item) => 
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <div className="flex items-center gap-1">
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        location.pathname.startsWith(item.href) 
                          ? 'text-primary-600 bg-primary-50' 
                          : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <button 
                      className="p-1 rounded-md hover:bg-neutral-100"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={openDropdown === item.name}
                      aria-controls={`dropdown-${item.name}`}
                    >
                      <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
                    </button>
                  </div>
                  
                  <div 
                    id={`dropdown-${item.name}`}
                    className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 border border-neutral-200"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`${item.name}-button`}
                  >
                    {item.submenu?.map((subitem) => (
                      <div key={subitem.name} className="relative group/sub">
                        {subitem.submenu ? (
                          <>
                            <div className="flex justify-between items-center px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 cursor-pointer">
                              <Link
                                to={subitem.href}
                                className="block flex-grow"
                                role="menuitem"
                              >
                                {subitem.name}
                              </Link>
                              <ChevronRight className="h-4 w-4 opacity-70" aria-hidden="true" />
                            </div>
                            <div className="absolute left-full top-0 w-56 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-150 z-50 border border-neutral-200 -ml-1">
                              {subitem.submenu?.map((childItem) => (
                                <Link
                                  key={childItem.name}
                                  to={childItem.href}
                                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                                  role="menuitem"
                                >
                                  {childItem.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={subitem.href}
                            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                            role="menuitem"
                          >
                            {subitem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100'
                  }`}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Contact Button (visible only on desktop) */}
          <div className="hidden md:block">
            <button
              onClick={openQuoteModal}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md inline-flex items-center transition-all text-sm font-medium cursor-pointer"
              aria-label="Get a free quote"
            >
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-neutral-100 p-2 rounded-md text-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden bg-white shadow-lg rounded-b-lg border-t border-neutral-200 absolute left-0 right-0 top-full max-h-[85vh] overflow-y-auto"
          role="navigation"
          aria-label="Mobile Menu"
        >
          <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
            {navigation.map((item) => 
              item.dropdown ? (
                <div key={item.name} className="border-b border-neutral-100 pb-2 sm:pb-3">
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.href}
                      className="flex-grow px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium text-neutral-800 rounded-md hover:bg-neutral-50"
                    >
                      {item.name}
                    </Link>
                    <button
                      className="p-1.5 sm:p-2 rounded-md hover:bg-neutral-100"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={openDropdown === item.name}
                      aria-controls={`mobile-dropdown-${item.name}`}
                    >
                      {openDropdown === item.name ? (
                        <ChevronUp className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                  
                  {openDropdown === item.name && (
                    <div 
                      id={`mobile-dropdown-${item.name}`}
                      className="mt-1 sm:mt-2 pl-2 sm:pl-4 space-y-0.5 sm:space-y-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`mobile-${item.name}-button`}
                    >
                      {item.submenu?.map((subitem) => (
                        <div key={subitem.name} className="mb-1 sm:mb-2">
                          {subitem.submenu ? (
                            <>
                              <div className="flex justify-between items-center">
                                <Link
                                  to={subitem.href}
                                  className="block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-50 hover:text-primary-600"
                                  role="menuitem"
                                >
                                  {subitem.name}
                                </Link>
                                <button
                                  onClick={(e) => toggleSubDropdown(subitem.name, e)}
                                  className="p-1 rounded-full hover:bg-neutral-100"
                                  aria-expanded={openSubDropdown === subitem.name}
                                >
                                  {openSubDropdown === subitem.name ? (
                                    <ChevronUp className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                                  )}
                                </button>
                              </div>
                              
                              {openSubDropdown === subitem.name && (
                                <div className="pl-2 sm:pl-3 mt-0.5 sm:mt-1 space-y-0.5 sm:space-y-1 border-l-2 border-neutral-100">
                                  {subitem.submenu?.map((childItem) => (
                                    <Link
                                      key={childItem.name}
                                      to={childItem.href}
                                      className="block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-neutral-600 rounded-md hover:bg-neutral-50 hover:text-primary-600"
                                      role="menuitem"
                                    >
                                      {childItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={subitem.href}
                              className="block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-50 hover:text-primary-600"
                              role="menuitem"
                            >
                              {subitem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium rounded-md mb-1 ${
                    location.pathname === item.href 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-neutral-800 hover:bg-neutral-50 hover:text-primary-600'
                  }`}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )
            )}
            
            {/* Mobile-only contact button */}
            <button
              onClick={openQuoteModal}
              className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 sm:py-3 rounded-md text-center transition-all text-sm sm:text-base font-medium mt-3 sm:mt-4 cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;