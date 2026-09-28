"use client";

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { SystemsFlow } from './SystemsFlow';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh] w-full pt-20 lg:pt-0">
      
      {/* Left Column: Identity & CTAs */}
      <motion.div
        className="lg:col-span-7 flex flex-col gap-8 relative z-10 text-left order-1"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="text-xs tracking-[0.3em] uppercase text-[#9CA3AB]"
          variants={fadeIn}
        >
          {"// SOFTWARE ENGINEER"}
        </motion.div>
        
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F1F3F5] glitch"
          variants={fadeUp}
        >
          MATHEW<br />
          <span className="text-[#27C2B8]">OLICKAL</span>
        </motion.h1>
        
        <motion.div variants={fadeUp} className="flex flex-col gap-3 max-w-lg">
          <p className="text-lg md:text-xl font-medium text-[#F1F3F5]">
            Backend systems. Distributed infrastructure. Applied AI.
          </p>
          <p className="text-sm md:text-base text-[#9CA3AB] leading-relaxed">
            Building reliable software across data, infrastructure, and intelligent systems.
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#697078]">
            MS SOFTWARE ENGINEERING @ SJSU · MAY 2028
          </p>
        </motion.div>
        
        <motion.div variants={fadeUp} className="flex flex-col gap-4 mt-2">
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              className="cursor-pointer text-xs tracking-[0.2em] uppercase border border-[#27C2B8] text-[#27C2B8] px-6 py-3 hover:bg-[#27C2B8] hover:text-[#111315] transition-all duration-300 hover:shadow-[0_0_20px_rgba(39,194,184,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm"
            >
              View Projects
            </a>
            <Link 
              href="/resume/Mathew_Pius_Olickal_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase border border-[#292E34] text-[#9CA3AB] px-6 py-3 hover:border-[#27C2B8] hover:text-[#27C2B8] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm"
            >
              Resume
            </Link>
          </div>

          <div className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase text-[#697078]">
            <Link href="https://github.com/mathewpius19" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">[GITHUB]</Link>
            <Link href="https://www.linkedin.com/in/mathew-pius-olickal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-sm">[LINKEDIN]</Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column / Bottom: Minimal Architecture Diagram */}
      <motion.div 
        className="lg:col-span-5 relative order-2 mt-4 lg:mt-0 lg:-ml-12 flex justify-start w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <SystemsFlow />
      </motion.div>

    </div>
  );
}
