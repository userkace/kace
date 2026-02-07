
import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = useMemo(() => PROJECTS.find(p => p.id === id), [id]);

  if (!project) return <Navigate to="/projects" />;

  const projectIndex = PROJECTS.findIndex(p => p.id === id);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="pt-40">
      <section className="max-w-[1600px] mx-auto px-8 mb-20">
        <h1 className="text-[12vw] xl:text-[180px] font-black hero-title uppercase mb-16 leading-none">
          {project.title}<span className="text-primary">.</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3">Tech Stack</p>
            <p className="text-lg font-medium">{project.tags.join(', ')}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3">Role</p>
            <p className="text-lg font-medium">{project.role.join(', ')}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3">Timeline</p>
            <p className="text-lg font-medium">{project.timeline}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3">Year</p>
            <p className="text-lg font-medium">{project.year}</p>
          </div>
        </div>

        <div className="relative mt-20 aspect-[21/9] rounded-3xl overflow-hidden bg-accent-muted border border-white/5">
          <img
            alt={project.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent"></div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-8 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4 order-2 lg:order-1">
          <div className="sticky top-32 space-y-6">
            {project.site && (
              <button
                className="w-full group flex items-center justify-between bg-primary p-6 rounded-2xl text-background-dark transition-transform active:scale-95"
                onClick={() => window.open(project.site, '_blank')}
              >
                <span className="font-black uppercase tracking-widest text-sm">Visit Live Site</span>
                <span className="material-symbols-outlined font-bold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span>
              </button>
            )}
            {project.github && (
              <button
                className="w-full group flex items-center justify-between bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all"
                onClick={() => window.open(project.github, '_blank')}
              >
                <span className="font-black uppercase tracking-widest text-sm text-white">View Repository</span>
                <span className="material-symbols-outlined font-bold text-white/50 group-hover:text-primary">terminal</span>
              </button>
            )}
          </div>
        </div>

        <div className="lg:col-span-8 order-1 lg:order-2 space-y-32">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-10 flex items-center gap-4">
              <span className="w-12 h-px bg-primary/30"></span>
              Overview
            </h2>
            <p className="text-3xl lg:text-4xl font-medium text-white/90 leading-[1.4]">
              {project.overview}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-10 flex items-center gap-4">
              <span className="w-12 h-px bg-primary/30"></span>
              The Challenge
            </h2>
            <div className="text-xl text-white/60 space-y-6 leading-relaxed">
              <p>{project.challenge}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-10 flex items-center gap-4">
              <span className="w-12 h-px bg-primary/30"></span>
              Technical Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-10 bg-card-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">dynamic_form</span>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">System Architecture</h3>
                <p className="text-white/50 text-sm leading-relaxed">{project.solution}</p>
              </div>
              <div className="p-10 bg-card-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">speed</span>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Performance First</h3>
                <p className="text-white/50 text-sm leading-relaxed">Leveraging distributed edge functions to minimize latency and provide instant UI responses for end users.</p>
              </div>
            </div>
          </div>

          <div className="py-20 border-t border-white/10">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-16">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {project.results.map((res, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-7xl font-black text-primary hero-title">{res.value}</div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{res.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-8 border-t border-white/10 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          <Link to={`/project/${prevProject.id}`} className="group block text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-6 group-hover:text-primary transition-colors">Previous Project</p>
            <h4 className="text-4xl md:text-6xl font-black uppercase hero-title group-hover:translate-x-4 transition-transform duration-500">{prevProject.title}</h4>
          </Link>
          <Link to={`/project/${nextProject.id}`} className="group block text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-6 group-hover:text-primary transition-colors">Next Project</p>
            <h4 className="text-4xl md:text-6xl font-black uppercase hero-title group-hover:-translate-x-4 transition-transform duration-500">{nextProject.title}</h4>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
