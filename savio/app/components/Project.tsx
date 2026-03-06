import { projects } from "../../data/data";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-[#0a0a0f] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[0.4em] uppercase font-mono text-[#7c6af7] mb-3">03 — Projects</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          Selected Work
        </h2>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative border border-[#1e1e2e] p-8 overflow-hidden hover:border-[#7c6af7]/50 transition-all duration-500 block"
            >
              {/* Background number */}
              <span className="absolute top-4 right-6 text-[120px] font-black text-[#1e1e2e] leading-none select-none group-hover:text-[#7c6af7]/10 transition-colors duration-500"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-[#7c6af7]/10 text-[#7c6af7] tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7c6af7] transition-colors duration-300"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {project.title}
                </h3>

                <p className="text-[#666] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <span className="text-xs font-mono text-[#555] tracking-widest uppercase group-hover:text-[#7c6af7] transition-colors duration-300 flex items-center gap-2">
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Rest */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group border border-[#1e1e2e] p-6 hover:border-[#7c6af7]/50 transition-all duration-500 block"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-[#555] tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#7c6af7] transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {project.title}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
