export function About() {
  return (
    <div >
      <div className="text-xs tracking-[0.3em] uppercase text-[#27C2B8] mb-8">
        {"// ABOUT"}
      </div>
      <div className="max-w-3xl space-y-6">
        <p className="text-xl md:text-2xl font-semibold text-[#F1F3F5] leading-relaxed">
          Software engineer focused on <span className="text-[#27C2B8]">backend systems</span>, <span className="text-[#27C2B8]">distributed infrastructure</span>, and <span className="text-[#27C2B8]">applied AI</span>.
        </p>
        <p className="text-sm md:text-base text-[#9CA3AB] leading-relaxed">
          I&apos;m currently pursuing an MS in Software Engineering at San Jose State University after spending four years at KPMG building large-scale financial applications for Goldman Sachs. My work has ranged from processing millions of transactions and optimizing data-access architectures to building production diagnostic tooling with MCP. More recently, I&apos;ve been exploring distributed monitoring, semantic retrieval, and AI-enabled systems through my projects.
        </p>
      </div>
    </div>
  );
}
