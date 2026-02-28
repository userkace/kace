
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const AllProjects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (Array.isArray(p.category)) {
          return p.category.includes(filter);
        }
        return p.category === filter;
      });

  const categories: (ProjectCategory | 'All')[] = ['All', ...Object.values(ProjectCategory)];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="mb-12">
          <h1 className="text-[8vw] lg:text-[120px] leading-[0.85] font-black hero-title uppercase mb-6">
            ALL PROJECTS<span className="text-primary">.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            An archive of my digital explorations, client projects, and experimental builds. Focused on performance, design, and user experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat
                  ? 'bg-primary text-background-dark border-primary'
                  : 'border-white/10 text-slate-400 hover:border-primary/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
            View more archive
            <span className="material-symbols-outlined text-primary group-hover:rotate-90 transition-transform">add</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
