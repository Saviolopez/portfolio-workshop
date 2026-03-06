import { ReactElement } from "react";
import { personalInfo, socialLinks } from "../../data/data";

const icons: Record<string, ReactElement> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="bg-[#06060a] py-28 px-6">
      <div className="max-w-4xl mx-auto">

        <p className="text-xs tracking-[0.4em] uppercase font-mono text-[#7c6af7] mb-3">05 — Contact</p>

        <div className="border border-[#1e1e2e] p-12 md:p-16 relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-[#7c6af7]/20" />

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Let's Build
            <br />
            <span className="text-[#7c6af7]">Something.</span>
          </h2>

          <p className="text-[#666] text-lg mb-12 max-w-lg"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            I'm actively looking for opportunities in Data Analytics and related roles. Got a project or opening? Let's talk.
          </p>

          {/* Contact Details */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 border border-[#1e1e2e] px-6 py-4 hover:border-[#7c6af7]/50 transition-all duration-300 group"
            >
              <span className="text-[#7c6af7]">{icons.mail}</span>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase text-[#555] mb-0.5">Email</p>
                <p className="text-[#e0e0ff] text-sm font-mono group-hover:text-[#7c6af7] transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-4 border border-[#1e1e2e] px-6 py-4 hover:border-[#7c6af7]/50 transition-all duration-300 group"
            >
              <span className="text-[#7c6af7]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase text-[#555] mb-0.5">Phone</p>
                <p className="text-[#e0e0ff] text-sm font-mono group-hover:text-[#7c6af7] transition-colors">
                  {personalInfo.phone}
                </p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#555]">Find me on</span>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-10 h-10 border border-[#1e1e2e] flex items-center justify-center text-[#555] hover:text-[#7c6af7] hover:border-[#7c6af7] transition-all duration-300"
                >
                  {icons[s.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

