import { skills } from "../../data/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#06060a] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[0.4em] uppercase font-mono text-[#7c6af7] mb-3">02 — Skills</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          What I Bring
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="border border-[#1e1e2e] p-8 hover:border-[#7c6af7]/50 transition-all duration-500 group"
            >
              <h3 className="text-xs tracking-[0.3em] uppercase font-mono text-[#7c6af7] mb-8">
                {group.category}
              </h3>

              <div className="flex flex-col gap-6">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#e0e0ff] text-sm font-mono">{skill.name}</span>
                      <span className="text-[#555] text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-px bg-[#1e1e2e] relative overflow-visible">
                      <div
                        className="absolute top-0 left-0 h-px bg-gradient-to-r from-[#7c6af7] to-[#a89df7] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                      {/* Dot at end */}
                      <div
                        className="absolute -top-1 w-2 h-2 rounded-full bg-[#7c6af7] transition-all duration-1000"
                        style={{ left: `calc(${skill.level}% - 4px)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom keyword strip */}
        <div className="mt-16 flex flex-wrap gap-3">
          {["Python", "Data Analytics", "Data Visualisation", "Business Analytics", "Leadership", "Problem Solving", "Content Creation", "Event Management"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 border border-[#1e1e2e] text-[#555] text-xs font-mono tracking-widest uppercase hover:border-[#7c6af7] hover:text-[#7c6af7] transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

