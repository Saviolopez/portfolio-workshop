import { personalInfo, education, experience } from "../../data/data";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0f] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs tracking-[0.4em] uppercase font-mono text-[#7c6af7] mb-3">01 — About</p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Who I Am
            </h2>

            <p className="text-[#aaa] leading-relaxed text-lg mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}>
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border border-[#1e1e2e] p-4">
                <p className="text-xs tracking-widest uppercase font-mono text-[#555] mb-1">Location</p>
                <p className="text-[#e0e0ff] text-sm font-mono">{personalInfo.location}</p>
              </div>
              <div className="border border-[#1e1e2e] p-4">
                <p className="text-xs tracking-widest uppercase font-mono text-[#555] mb-1">Status</p>
                <p className="text-[#7c6af7] text-sm font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c6af7] animate-pulse" />
                  Open to Work
                </p>
              </div>
              <div className="border border-[#1e1e2e] p-4">
                <p className="text-xs tracking-widest uppercase font-mono text-[#555] mb-1">Focus</p>
                <p className="text-[#e0e0ff] text-sm font-mono">Data Analytics</p>
              </div>
              <div className="border border-[#1e1e2e] p-4">
                <p className="text-xs tracking-widest uppercase font-mono text-[#555] mb-1">Degree</p>
                <p className="text-[#e0e0ff] text-sm font-mono">BCA DS</p>
              </div>
            </div>
          </div>

          {/* Right — Education + Experience Timeline */}
          <div>
            <h3 className="text-xs tracking-[0.4em] uppercase font-mono text-[#555] mb-8">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-6 border-l border-[#1e1e2e] mb-10">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-[#7c6af7]" />
                <span className="text-xs font-mono text-[#7c6af7] tracking-widest uppercase">{edu.duration}</span>
                <h4 className="text-white font-bold text-lg mt-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {edu.degree}
                </h4>
                <p className="text-[#888] text-sm">{edu.specialisation}</p>
                <p className="text-[#555] text-xs mt-1 font-mono tracking-wide">{edu.institution}</p>
              </div>
            ))}

            <h3 className="text-xs tracking-[0.4em] uppercase font-mono text-[#555] mb-8 mt-4">Experience</h3>
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-6 border-l border-[#1e1e2e] mb-8">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full border-2 border-[#7c6af7] bg-[#0a0a0f]" />
                <span className="text-xs font-mono text-[#7c6af7] tracking-widest uppercase">{exp.duration}</span>
                <h4 className="text-white font-bold mt-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {exp.role}
                </h4>
                <p className="text-[#888] text-sm">{exp.company}</p>
                <p className="text-[#666] text-sm mt-2 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
