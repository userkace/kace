
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-dark text-white py-32" id="contact">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-10">Let's build something</h2>
          <a className="text-[8vw] md:text-[80px] w-fit mx-auto font-black hero-title uppercase hover:text-primary transition-colors break-words block" href="mailto:user@kace.dev">
            user@kace.dev
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">explore</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-50">Location</p>
              <p className="font-medium">Olongapo City, PH</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center md:gap-10">
            <a className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" href="https://github.com/userkace">GitHub</a>
            <a className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" href="https://www.linkedin.com/in/kcspadilla/">LinkedIn</a>
            <a className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" href="https://bsky.app/profile/kace.dev">Bluesky</a>
            <a className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" href="https://www.instagram.com/kace.dev/">Instagram</a>
          </div>

          <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 text-center md:text-right flex-shrink-0">
            <span>© {currentYear} KACE.</span><br/><span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
