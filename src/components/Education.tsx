export function Education() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-[#27C2B8] mb-8">
            {"// EDUCATION"}
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-[#27C2B8]/30 pl-6">
              <h3 className="text-base font-bold text-[#F1F3F5]">San Jose State University</h3>
              <p className="text-sm text-[#27C2B8] mt-1">MS Software Engineering</p>
              <p className="text-xs text-[#697078] mt-1 tracking-wider">AUG 2026 – MAY 2028</p>
              <p className="text-xs text-[#9CA3AB] mt-3 leading-relaxed">
                <span className="text-[#697078]">Coursework:</span> Enterprise Distributed Systems, Software Systems Engineering, Enterprise Software Platforms
              </p>
            </div>
            <div className="border-l-2 border-[#697078]/30 pl-6">
              <h3 className="text-base font-bold text-[#F1F3F5]">Punjab Engineering College</h3>
              <p className="text-sm text-[#9CA3AB] mt-1">BTech Computer Science</p>
              <p className="text-xs text-[#697078] mt-1 tracking-wider">2018 – 2022</p>
              <p className="text-xs text-[#9CA3AB] mt-3 leading-relaxed">
                <span className="text-[#697078]">Coursework:</span> Data Structures, Algorithms, OS, Networks, DBMS, Machine Learning
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-[#27C2B8] mb-8">
            {"// CERTIFICATIONS"}
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-[#27C2B8]/30 pl-6">
              <h3 className="text-sm font-bold text-[#F1F3F5]">Databricks Certified Associate Developer</h3>
              <p className="text-xs text-[#9CA3AB] mt-1">Apache Spark 3.0</p>
              <p className="text-xs text-[#697078] mt-1 tracking-wider">MARCH 2023</p>
            </div>
            <div className="border-l-2 border-[#697078]/30 pl-6">
              <h3 className="text-sm font-bold text-[#F1F3F5]">Quantexa Professional Data Engineer</h3>
              <p className="text-xs text-[#697078] mt-1 tracking-wider">FEBRUARY 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
