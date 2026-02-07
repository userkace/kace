
import React from 'react';
import { EXPERIENCES, CERTIFICATIONS, EDUCATION } from '../constants';
import { calculateYearsOfExperience } from '../utils/intUtils';

const About: React.FC = () => {
  const yearsOfExperience = calculateYearsOfExperience(EXPERIENCES);
  return (
    <div className="pt-32 pb-20">
      <main className="mx-auto w-full max-w-[1400px] px-6">
        <section className="mb-24">
          <div className="flex flex-col">
            <div className="flex flex-col">
              {/* <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 block">KACE.DEV / RESUME</span> */}
              <h2 className="massive-heading font-black tracking-tighter leading-[0.85] uppercase mb-6">
                ABOUT & <br/>EXPERIENCE<span className="text-primary">.</span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <p className="max-w-2xl text-xl text-slate-400 leading-relaxed font-medium">
                I'm a Full-Stack Developer with {yearsOfExperience}+ years of experience building scalable web applications.
                My journey has been defined by a passion for clean code, intuitive UX, and solving complex architectural challenges.
              </p>
              <div className="flex shrink-0 gap-4">
                <button className="flex items-center gap-3 rounded-full bg-card-dark px-8 py-4 text-xs font-black tracking-widest uppercase border border-border-dark hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border-dark"></div>
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-slate-500">Professional Experience</h3>
            <div className="h-px flex-1 bg-border-dark"></div>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-primary before:via-border-dark before:to-transparent sm:before:ml-[2.1rem]">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-background-dark shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${exp.isCurrent ? 'bg-primary text-background-dark' : 'bg-slate-700 text-white'}`}>
                  <span className="material-symbols-outlined text-sm">{exp.icon}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-xl border border-border-dark bg-card-dark p-8 shadow-sm hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <time className="text-sm font-bold text-primary">{exp.period}</time>
                    {exp.isCurrent && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black tracking-widest uppercase text-primary">Current Role</span>
                    )}
                  </div>
                  <h4 className="text-2xl font-black tracking-tight">{exp.role}</h4>
                  <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">{exp.company}</p>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <div className="flex items-center gap-3 mb-10">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <h3 className="text-2xl font-black tracking-tight uppercase">Education</h3>
            </div>
            <div className="space-y-6">
              {EDUCATION.map(edu => (
                <div key={edu.id} className="rounded-xl border border-border-dark bg-card-dark p-8 group hover:border-primary/30 transition-all">
                  <time className="text-xs font-black tracking-widest uppercase text-primary">{edu.period}</time>
                  <h4 className="text-xl font-black mt-2 tracking-tight">{edu.degree}</h4>
                  <p className="text-slate-400 font-bold text-sm uppercase mt-1">{edu.institution}</p>
                  {edu.specialization && (
                    <p className="mt-4 text-sm text-slate-400 leading-relaxed italic">
                      {edu.specialization}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-10">
              <span className="material-symbols-outlined text-primary text-3xl">verified</span>
              <h3 className="text-2xl font-black tracking-tight uppercase">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.id} className="flex items-center gap-5 rounded-xl border border-border-dark bg-card-dark p-5 hover:border-primary/50 transition-all cursor-default group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl">{cert.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg tracking-tight">{cert.name}</h4>
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 mt-1">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-32 rounded-3xl bg-primary p-12 md:p-20 text-center text-background-dark shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Want to work together?</h3>
            <p className="text-xl font-bold opacity-80 mb-12 max-w-2xl mx-auto">
              I'm currently open to new opportunities and interesting freelance projects. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="rounded-full bg-background-dark px-10 py-5 text-sm font-black tracking-[0.2em] uppercase text-white hover:scale-105 transition-all shadow-xl"
              onClick={() => window.location.href = '/#/contact'}>
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
