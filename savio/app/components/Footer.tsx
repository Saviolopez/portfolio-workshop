import { personalInfo, navLinks, socialLinks } from "../../data/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#1e1e2e] py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="text-2xl font-black text-[#e0e0ff] tracking-widest font-mono uppercase mb-3">
              {personalInfo.name.split(" ")[0]}
              <span className="text-[#7c6af7]">.</span>
            </p>
            <p className="text-[#555] text-sm leading-relaxed">
              Data Analytics & Visualisation student at SRM, building the intersection of data and design.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase font-mono text-[#555] mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-mono text-[#666] hover:text-[#7c6af7] transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase font-mono text-[#555] mb-4">Connect</p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-[#666] hover:text-[#7c6af7] transition-colors tracking-wide"
                  >
                    {s.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e1e2e] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#444] tracking-widest">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs font-mono text-[#444] tracking-widest">
            Designed & Built with ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
