export function Experience() {
  return (
    <div id="experience">
      <div className="text-xs tracking-[0.3em] uppercase text-[#27C2B8] mb-10">
        {"// WORK EXPERIENCE"}
      </div>
      
      <div className="space-y-16">
        {/* KPMG */}
        <div className="border-l-2 border-[#27C2B8]/30 pl-6 md:pl-8">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#F1F3F5]">KPMG India — Digital Lighthouse</h3>
            <p className="text-sm text-[#27C2B8] font-semibold mt-1">
              SWE I → SWE II <span className="text-[#9CA3AB] font-normal">| Client: Goldman Sachs</span>
            </p>
            <p className="text-xs text-[#697078] mt-1 tracking-wider">JULY 2022 – JULY 2026</p>
          </div>

          <p className="text-sm text-[#9CA3AB] leading-relaxed mb-8">
            Worked on large-scale regulatory and reference-data applications for Goldman Sachs, with a focus on backend development, data processing, system performance, and production reliability. My work involved Java services, Apache Spark pipelines, APIs, distributed data platforms, automated validation, and production diagnostic tooling across systems processing millions of financial transactions each day.
          </p>

          <div className="space-y-6">
            <div className="border border-[#292E34] bg-[#16191D] p-5 rounded-sm">
              <h4 className="text-sm font-bold text-[#27C2B8] mb-3 tracking-wider uppercase">{'>'} Data Architecture & Performance</h4>
              <div className="text-sm text-[#9CA3AB] leading-relaxed space-y-3">
                <p>
                  Migrated reference-data sourcing for <span className="text-[#F1F3F5] font-semibold">5M+ daily regulatory transactions</span> from legacy Sybase IQ to a new authenticated data platform. Redesigned Spark processing and built reusable FINOS Legend APIs backed by Snowflake and SingleStore, reducing access latency from <span className="text-[#F1F3F5] font-semibold">~90s to ~4s</span>.
                </p>
                <p>
                  Improved reference-data query response times by <span className="text-[#F1F3F5] font-semibold">~2x</span> by developing optimized GraphQL queries and Java request/response models, reducing redundant retrieval through CTE-based execution.
                </p>
              </div>
            </div>

            <div className="border border-[#292E34] bg-[#16191D] p-5 rounded-sm">
              <h4 className="text-sm font-bold text-[#27C2B8] mb-3 tracking-wider uppercase">{'>'} Reliability & Data Quality</h4>
              <p className="text-sm text-[#9CA3AB] leading-relaxed">
                Redesigned validation and enrichment logic that reduced daily transaction fallout from <span className="text-[#F1F3F5] font-semibold">~20,000 to ~2,000</span>, contributing to <span className="text-[#F1F3F5] font-semibold">~$2M</span> in avoided compliance penalties. Built a Java reconciliation app automating SQL-based accuracy checks across <span className="text-[#F1F3F5] font-semibold">100K+ records/week</span>.
              </p>
            </div>

            <div className="border border-[#292E34] bg-[#16191D] p-5 rounded-sm">
              <h4 className="text-sm font-bold text-[#27C2B8] mb-3 tracking-wider uppercase">{'>'} Testing & CI/CD</h4>
              <div className="text-sm text-[#9CA3AB] leading-relaxed space-y-3">
                <p>
                  Improved integration testing and implementation time by <span className="text-[#F1F3F5] font-semibold">~2x</span> by extending Cucumber test suites with ALLOY-specific scenarios while preserving existing regression coverage.
                </p>
                <p>
                  Integrated the reconciliation application into existing GitLab CI/CD workflows by configuring .gitlab-ci.yml and project rules for team-wide development and deployment.
                </p>
              </div>
            </div>

            <div className="border border-[#292E34] bg-[#16191D] p-5 rounded-sm">
              <h4 className="text-sm font-bold text-[#27C2B8] mb-3 tracking-wider uppercase">{'>'} AI-Assisted Diagnostics</h4>
              <p className="text-sm text-[#9CA3AB] leading-relaxed">
                Built MCP servers exposing internal diagnostic APIs to an existing AI chatbot, enabling engineers to trace data-field lineage and identify missing values or upstream failures. Reduced resolution time by <span className="text-[#F1F3F5] font-semibold">~30%</span>.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {['Java', 'Spark', 'SQL', 'Snowflake', 'SingleStore', 'REST', 'GraphQL', 'MCP', 'GitLab CI/CD'].map(tag => (
              <span key={tag} className="text-[10px] tracking-wider uppercase border border-[#292E34] text-[#9CA3AB] bg-[#111315] px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BuildAR */}
        <div className="border-l-2 border-[#697078]/30 pl-6 md:pl-8">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#F1F3F5]">BuildAR</h3>
            <p className="text-sm text-[#9CA3AB] mt-1">Software Engineering Intern</p>
            <p className="text-xs text-[#697078] mt-1 tracking-wider">JAN 2021 – MAY 2021</p>
          </div>
          
          <p className="text-sm text-[#9CA3AB] leading-relaxed mb-6">
            Worked on backend services supporting an ML data-preparation workflow. Built Python and FastAPI ingestion services for processing unstructured datasets and integrated the backend with JavaScript application components, reducing model-training data preparation time by <span className="text-[#F1F3F5] font-semibold">~80%</span>.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Python', 'FastAPI', 'JavaScript', 'REST APIs', 'ML Pipelines'].map(tag => (
              <span key={tag} className="text-[10px] tracking-wider uppercase border border-[#292E34] text-[#9CA3AB] bg-[#111315] px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
