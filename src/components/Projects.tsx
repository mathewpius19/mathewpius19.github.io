import Link from 'next/link';

export function Projects() {
  const projects = [
    {
      title: 'Server Health Monitor',
      description: 'Distributed Linux monitoring platform deploying telemetry microservices over SSH and streaming real-time metrics through WebSockets to a centralized dashboard.',
      bullets: [
        'Centralized monitoring through Python/Flask and Node.js services with MongoDB-backed telemetry.',
        'TensorFlow multivariate LSTM forecasting four server-health metrics and potential resource failures.',
        'Architecture: Remote Servers → Telemetry Agents → Flask/Node.js → MongoDB → Dashboard'
      ],
      tags: ['Python', 'Flask', 'Node.js', 'WebSockets', 'TensorFlow', 'LSTM', 'MongoDB', 'AWS EC2'],
      github: 'https://github.com/mathewpius19/Vendor-Independent-Linux-Server-Health',
      demo: '#',
    },
    {
      title: 'ReelFinder',
      description: 'Full-stack movie discovery platform combining personalized semantic retrieval with agent-driven natural-language search.',
      bullets: [
        'Sentence Transformer embeddings and FAISS vector search provide semantic retrieval with personalized re-ranking.',
        'Genre preferences, ratings, watch status, and interaction history influence recommendation ranking.',
        'An Ollama-powered AI agent uses FastMCP tools to route natural-language movie requests to deterministic retrieval services.'
      ],
      tags: ['Python', 'Spring Boot', 'PostgreSQL', 'Ollama', 'FastMCP', 'FAISS', 'Sentence Transformers', 'Next.js'],
      github: 'https://github.com/mathewpius19/REEL-FINDER',
      demo: '#',
    },
  ];

  return (
    <div >
      <div className="text-xs tracking-[0.3em] uppercase text-[#27C2B8] mb-10">
        {"// FEATURED PROJECTS"}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="border border-[#292E34] bg-[#16191D] p-6 flex flex-col group hover:border-[#27C2B8]/30 transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#697078]">PROJECT_{String(idx + 1).padStart(2, '0')}</span>
              <div className="flex gap-3">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View Demo for ${project.title}`} className="text-[10px] tracking-wider uppercase text-[#9CA3AB] hover:text-[#4DD8CF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16191D] rounded-sm">[DEMO]</Link>
                <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View Code for ${project.title}`} className="text-[10px] tracking-wider uppercase text-[#9CA3AB] hover:text-[#4DD8CF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27C2B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16191D] rounded-sm">[CODE]</Link>
              </div>
            </div>

            <h3 className="text-lg font-bold text-[#F1F3F5] mb-3 group-hover:text-[#27C2B8] transition-colors">{project.title}</h3>
            <p className="text-xs text-[#9CA3AB] leading-relaxed mb-4">{project.description}</p>
            
            <ul className="space-y-2 mb-6 flex-grow">
              {project.bullets.map((b, i) => (
                <li key={i} className="text-xs text-[#9CA3AB] flex items-start gap-2">
                  <span className="text-[#27C2B8] mt-0.5">▸</span>
                  <span className={b.startsWith('Architecture:') ? 'font-mono text-[#697078] text-[10px]' : ''}>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#292E34]">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] tracking-wider uppercase text-[#9CA3AB] border border-[#292E34] bg-[#111315] px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
