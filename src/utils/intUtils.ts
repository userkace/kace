import { Experience, Project } from '../types';

export const calculateYearsOfExperience = (experiences: Experience[]): number => {
  // Calculate from earliest experience to present
  const earliestYear = Math.min(...experiences.map(exp => {
    const startYear = exp.period.split(' – ')[0];
    // Extract the year from strings like "September 2025"
    const yearMatch = startYear.match(/\d{4}/);
    return yearMatch ? parseInt(yearMatch[0]) : NaN;
  }));
  const currentYear = new Date().getFullYear();
  return isNaN(earliestYear) ? 0 : currentYear - earliestYear;
};

export const calculateYearsOfProjects = (projects: Project[]): number => {
  // Calculate from earliest project year to present
  const earliestYear = Math.min(...projects.map(project =>
    parseInt(project.year || '2020')
  ));
  return new Date().getFullYear() - earliestYear;
};
