"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "../../data/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(124,106,247,0.5)";
        ctx.fill();

        // Draw lines between nearby particles
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(124,106,247,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        {personalInfo.available && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#7c6af7]/40 bg-[#7c6af7]/10 mb-8 text-xs tracking-widest uppercase font-mono text-[#7c6af7]">
            <span className="w-2 h-2 rounded-full bg-[#7c6af7] animate-pulse" />
            Available for opportunities
          </div>
        )}

        {/* Name */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white leading-none mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          {personalInfo.name.split(" ")[0]}
          <span className="text-[#7c6af7]"> {personalInfo.name.split(" ")[1]}</span>
        </h1>

        {/* Role */}
        <p className="text-sm md:text-base tracking-[0.3em] uppercase font-mono text-[#7c6af7] mb-6">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#888] max-w-xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily: "'DM Serif Display', serif" }}>
          "{personalInfo.tagline}"
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#7c6af7] text-white text-sm tracking-widest uppercase font-mono hover:bg-[#6a58e0] transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,106,247,0.4)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#333] text-[#888] text-sm tracking-widest uppercase font-mono hover:border-[#7c6af7] hover:text-[#7c6af7] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-[#555]">
          <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#7c6af7] to-transparent animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(ellipse at 50% 50%, rgba(124, 106, 247, 0.08) 0%, transparent 70%);
        }
      `}</style>
    </section>
  );
}
