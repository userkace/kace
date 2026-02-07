import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-md bg-background-dark/80 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-background-dark transition-transform group-hover:rotate-12 group-hover:bg-white transition-colors">
              {/* <span className="material-symbols-outlined text-[20px] font-bold">terminal</span> */}
              <span className="text-[20px] font-black leading-none flex items-center justify-center h-full -translate-y-0.5">@</span>
            </div>
            <span className="text-xl font-black tracking-tighter uppercase hero-title group-hover:text-primary transition-colors">KACE</span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-10">
          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors uppercase tracking-widest block ${
                location.pathname === '/projects' ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`}
            >
              Works
            </Link>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors uppercase tracking-widest block ${
                location.pathname === '/about' ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`}
            >
              About
            </Link>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors uppercase tracking-widest block ${
                location.pathname === '/contact' ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </motion.div>
        </nav>

        <div className="flex items-center gap-6">
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-white hover:text-background-dark text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all uppercase tracking-tight"
            whileTap={{ scale: 0.80 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
