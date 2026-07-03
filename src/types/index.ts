// Global TypeScript interfaces used across the Story Of Walls frontend

export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

export interface MegaMenuColumn {
  heading: string;
  items: {
    label: string;
    description?: string;
    path: string;
    icon?: string;
    badge?: string;
  }[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Interior" | "Renovation" | "Architecture";
  location: string;
  area: string;
  duration: string;
  budget: string;
  coverImage: string;
  gallery: string[];
  description: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  pricePerSqft: number;
  popular?: boolean;
  features: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface TimelineStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  plotSize?: string;
  budget?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
