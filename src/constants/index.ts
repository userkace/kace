// Barrel exports for all constants
// Import and re-export all constants from individual files

export { PROJECTS } from './Projects';
export { EXPERIENCES } from './Experiences';
export { CERTIFICATIONS } from './Certifications';
export { EDUCATION } from './Education';

// Re-export types for convenience
export type { Project, ProjectCategory, Experience, Certification, Education } from '../types';
