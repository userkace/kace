
import React, { useState } from 'react';
import { ProjectCategory } from '../types';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const CATEGORIES = Object.values(ProjectCategory);

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (Array.isArray(p.category)) {
          return p.category.includes(activeCategory);
        }
        return p.category === activeCategory;
      });

  return (
    <main className="pt-32 pb-20">
      <section className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="mb-12">
          <h1 className="massive-heading font-black leading-[0.85] hero-title uppercase mb-6">
            ALL PROJECTS<span className="text-primary">.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            An archive of my digital explorations, client projects, and experimental builds. Focused on performance, design, and user experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
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
          {filteredProjects.map((project) => (
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
    </main>
  );
};

export default Projects;
