export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  features: string[];
  benefits: string[];
  includes: string[];
  image: string;
  location: string;
  childServices?: ChildService[];
  metaDescription?: string;
  metaKeywords?: string[];
  faq?: FAQ[];
}

export interface ChildService {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  metaDescription?: string;
  metaKeywords?: string[];
  faq?: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ServiceCategory = 
  | 'general-repairs' 
  | 'healthy-home' 
  | 'insurance' 
  | 'installations' 
  | 'outdoor' 
  | 'handyman';

export interface CategoryInfo {
  id: ServiceCategory;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  location: string;
  image: string;
  challenge: string;
  solution: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}