import Link from 'next/link';

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
      <div className="text-xs tracking-[0.3em] uppercase text-[#697078] mb-6">
        {"// EOF"}
      </div>
      <p className="text-sm text-[#9CA3AB] mb-4">
        &lt;/mathew_olickal&gt;
      </p>
      <div className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase text-[#697078]">
        <Link href="https://github.com/mathewpius19" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111315] rounded-sm">[GITHUB]</Link>
        <Link href="https://www.linkedin.com/in/mathew-pius-olickal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111315] rounded-sm">[LINKEDIN]</Link>
        <Link href="/resume/Mathew_Pius_Olickal_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="hover:text-[#27C2B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111315] rounded-sm">[RESUME]</Link>
      </div>
      <p className="text-[10px] text-[#697078] mt-8 tracking-wider">
        © 2026 MATHEW PIUS OLICKAL
      </p>
    </div>
  );
}
