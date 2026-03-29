
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { calculateYearsOfProjects } from '../utils/intUtils';

const Home: React.FC = () => {
  const yearsOfProjects = calculateYearsOfProjects(PROJECTS);
  const featuredProjects = PROJECTS.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="min-h-[85vh] flex flex-col justify-center items-start max-w-[1200px] mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
          variants={itemVariants}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Currently a Project Manager</span>
        </motion.div>

        <motion.h1
          className="text-[12vw] lg:text-[160px] leading-[0.85] font-black hero-title uppercase mb-10"
          variants={itemVariants}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          KACE<span className="text-primary">.</span>DEV
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between w-full gap-10"
          variants={itemVariants}
        >
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
            Software engineer building <span className="text-white font-semibold">high-end digital experiences</span>. Focused on bold aesthetics and high-performance engineering.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('works');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest whitespace-nowrap hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scroll to explore
            <motion.span
              className="material-symbols-outlined text-primary"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              arrow_downward
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Featured Works Section */}
      <section className="bg-card-dark py-32" id="works">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-black hero-title uppercase">Selected Works</h3>
            </div>
            <div className="hidden md:block text-slate-400 text-sm font-medium">
              01 — 04
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {featuredProjects.map((project, idx) => (
              <div key={project.id} className={idx % 2 !== 0 ? 'md:mt-24' : ''}>
                <ProjectCard project={project} layout="featured" />
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <Link to="/projects" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
              View all projects
              <span className="material-symbols-outlined text-primary group-hover:rotate-90 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Teaser About Section */}
      <section className="py-32" id="about">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-square transition-all duration-700">
              <img className="w-full h-full object-cover" alt="Kace" src="/images/portrait.png" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-background-dark p-8 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-black uppercase hero-title">{yearsOfProjects}+ Years</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Of Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">The Developer</h2>
            <h3 className="text-4xl md:text-5xl font-black hero-title uppercase mb-8 leading-tight">
              Bridging the Gap Between <span className="text-primary">Vision</span> and <span className="text-primary">Execution</span>.
            </h3>
            <div className="space-y-6 text-lg text-slate-400">
              <p>
                I specialize in building performant, scalable web applications that don't compromise on aesthetic quality. My approach is rooted in the belief that code should be as clean as the UI it powers.
              </p>
              <p>
                With a background in both design and core engineering, I offer a unique perspective on product development—ensuring every pixel is intentional and every interaction is seamless.
              </p>
            </div>
            <div className="flex items-center mt-12">
              <Link to="/about" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                View full experience
                <span className="material-symbols-outlined text-primary group-hover:rotate-90 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
