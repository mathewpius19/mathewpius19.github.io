export function Skills() {
  const skillCategories = [
    {
      title: 'BACKEND & DISTRIBUTED',
      skills: ['Distributed systems', 'Microservices', 'Spring Boot', 'Flask', 'FastAPI', 'Node.js', 'REST APIs', 'GraphQL', 'WebSockets'],
    },
    {
      title: 'FRONTEND & WEB',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'DATABASES & DATA',
      skills: ['PostgreSQL', 'MongoDB', 'Snowflake', 'SingleStore', 'Sybase IQ', 'Apache Spark', 'PySpark', 'HDFS'],
    },
    {
      title: 'LANGUAGES',
      skills: ['Java', 'Python', 'SQL', 'JavaScript', 'Bash'],
    },
    {
      title: 'AI / ML / AGENTIC',
      skills: ['FastMCP', 'Ollama', 'TensorFlow', 'LSTM', 'Sentence Transformers', 'Embeddings', 'FAISS', 'Vector search', 'Semantic retrieval'],
    },
    {
      title: 'CLOUD & DEVOPS',
      skills: ['AWS / EC2', 'Docker', 'GitLab CI/CD', 'Git', 'Linux', 'Maven', 'Autosys'],
    },
  ];

  return (
    <div id="skills">
      <div className="text-xs tracking-[0.3em] uppercase text-[#27C2B8] mb-10">
        {"// TECH STACK"}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#697078] mb-4 font-bold">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="text-xs border border-[#292E34] bg-[#16191D] text-[#9CA3AB] px-3 py-1.5 hover:border-[#27C2B8]/50 hover:text-[#4DD8CF] transition-colors duration-200 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
