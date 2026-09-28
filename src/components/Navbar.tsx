"use client";

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#111315]/90 backdrop-blur-md border-b border-[#292E34]">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link 
          href="/" 
          aria-label="Home"
          className="text-[#27C2B8] font-bold text-sm tracking-widest uppercase hover:text-[#4DD8CF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm"
        >
          &lt;MPO /&gt;
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase text-[#9CA3AB]">
          <Link href="#about" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">About</Link>
          <Link href="#experience" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">Experience</Link>
          <Link href="#projects" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">Projects</Link>
          <Link href="#skills" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">Skills</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4 text-xs tracking-widest uppercase text-[#697078]">
          <Link href="/resume/Mathew_Pius_Olickal_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="hover:text-[#27C2B8] transition-colors mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">RESUME</Link>
          <Link href="https://github.com/mathewpius19" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">GH</Link>
          <Link href="https://www.linkedin.com/in/mathew-pius-olickal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">IN</Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-[#9CA3AB] hover:text-[#27C2B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-[#292E34] bg-[#111315] absolute w-full left-0 top-14 shadow-xl">
          <div className="flex flex-col px-6 py-6 space-y-6 text-xs tracking-widest uppercase text-[#9CA3AB]">
            <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#27C2B8] transition-colors block">About</Link>
            <Link href="#experience" onClick={() => setIsOpen(false)} className="hover:text-[#27C2B8] transition-colors block">Experience</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#27C2B8] transition-colors block">Projects</Link>
            <Link href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[#27C2B8] transition-colors block">Skills</Link>
            <div className="pt-6 mt-2 border-t border-[#292E34] flex gap-8 text-[#697078]">
              <Link href="/resume/Mathew_Pius_Olickal_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" onClick={() => setIsOpen(false)} className="hover:text-[#27C2B8] transition-colors">RESUME</Link>
              <Link href="https://github.com/mathewpius19" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" onClick={() => setIsOpen(false)} className="hover:text-[#27C2B8] transition-colors">GH</Link>
              <Link href="https://www.linkedin.com/in/mathew-pius-olickal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" onClick={() => setIsOpen(false)} className="hover:text-[#27C2B8] transition-colors">IN</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
