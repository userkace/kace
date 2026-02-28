
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'featured';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, layout = 'grid' }) => {
  return (
    <Link to={`/project/${project.id}`} className="group block">
      <div className={`relative overflow-hidden rounded-xl bg-card-dark mb-6 border border-white/5 ${layout === 'featured' ? 'aspect-[4/3]' : 'aspect-[16/10]'}`}>
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img
          className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
          alt={project.title}
          src={project.image}
        />
        {layout === 'featured' && (
          <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="bg-white text-black px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest">View Case Study</span>
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-bold group-hover:text-primary transition-colors ${layout === 'featured' ? 'text-2xl' : 'text-xl'}`}>{project.title}</h3>
          <span className="material-symbols-outlined text-slate-700 group-hover:text-primary transition-colors">arrow_outward</span>
        </div>
        <p className="text-slate-500 text-sm uppercase tracking-widest font-medium">
          {Array.isArray(project.category) ? project.category.join(' • ') : project.category} • {project.tags.join(' • ')}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
