
export enum ProjectCategory {
  WEB_APP = 'Web App',
  // FINTECH = 'FinTech',
  AI_ML = 'AI / ML',
  ECOMMERCE = 'E-commerce',
  // RETAIL = 'Retail',
  AGENCY = 'Agency',
  MOBILE = 'Mobile',
  DATA = 'Data'
}

export enum Page {
  HOME = 'home',
  PROJECTS = 'projects',
  ABOUT = 'about',
  CONTACT = 'contact'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  year: string;
  role: string[];
  timeline: string;
  overview: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  github?: string;
  site?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  achievements: string[];
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
  icon: string;
}
