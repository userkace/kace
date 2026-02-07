
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background-dark/80 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onPageChange(Page.HOME)}
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-background-dark">
            <span className="material-symbols-outlined text-[20px] font-bold">terminal</span>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase hero-title">KACE</span>
        </button>

        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {currentPage === Page.HOME ? (
            <>
              <a href="#works" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">Works</a>
              <a href="#about" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">Contact</a>
            </>
          ) : (
            <>
              <button 
                onClick={() => onPageChange(Page.HOME)}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors flex items-center gap-2 ${currentPage === Page.HOME ? 'text-primary' : 'hover:text-primary'}`}
              >
                Home
              </button>
              <button 
                onClick={() => onPageChange(Page.PROJECTS)}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors ${currentPage === Page.PROJECTS ? 'text-primary' : 'hover:text-primary'}`}
              >
                Archive
              </button>
              <button 
                onClick={() => onPageChange(Page.ABOUT)}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors ${currentPage === Page.ABOUT ? 'text-primary' : 'hover:text-primary'}`}
              >
                Resume
              </button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          <button className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all uppercase tracking-tight hidden sm:block">
            Let's Talk
          </button>
          
          <div className="h-10 w-10 rounded-full bg-card-dark border border-white/10 overflow-hidden ring-2 ring-primary/20">
            <img 
              alt="Avatar" 
              className="h-full w-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrQeu2_3UeJmtofGeLGMr67qMbArtS-zDTXq3R9G9PTINz32Q66hLTKXeMD-4LFnTNdDrbbbX8RG6zFyIq6dqcxclfr5V8PSeUgwIMV7IWnnuOCBL3uPK8GYz13S3DQp1yTmm4uLq8DgxiXXIn5LdpNJYiCoRuddrCtCGr3CPmm7eTVDTUPxZt6nkAT_KxoRCOKqiWYTXS8sPRbDjTfByX33JS6HHezJ7UFy3b3mIBygsFKuIVQejkrLYieXBOeZ7MyLsOJwzUOwd1"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
