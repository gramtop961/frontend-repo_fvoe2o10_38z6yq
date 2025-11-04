import { ArrowRight, Shield, Sparkles } from 'lucide-react';

function SketchBG() {
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgb(251 146 60 / 0.07)" strokeWidth="1" />
        </pattern>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgb(251 146 60)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="rgb(251 146 60)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <g filter="url(#filter0_f)">
        <circle cx="20%" cy="20%" r="140" fill="url(#grad)" />
        <circle cx="85%" cy="40%" r="180" fill="url(#grad)" />
      </g>
      <path d="M20 120 Q 200 60 380 120 T 740 120" stroke="rgb(251 146 60 / 0.25)" strokeWidth="2" fill="none" strokeDasharray="6 8" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0"><SketchBG /></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/30 text-orange-300 bg-orange-500/10 text-xs font-semibold">
              <Sparkles size={14} /> End-to-end DevOps
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Master DevOps with a Sketchy, Vector Style
            </h1>
            <p className="mt-4 text-orange-100/80 text-lg">
              Learn Linux, CI/CD, Containers, Kubernetes, Cloud, Observability, Security, and more — crafted in a bold two-tone experience.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#topics" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-black bg-orange-400 hover:bg-orange-300 font-semibold shadow shadow-orange-500/30">
                Start Learning <ArrowRight size={18} />
              </a>
              <a href="#roadmap" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-orange-400/40 text-orange-200 hover:bg-white/5 font-semibold">
                View Roadmap
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-orange-200/80">
              <div className="inline-flex items-center gap-2"><Shield size={16} className="text-orange-400" /> Project-based</div>
              <div className="inline-flex items-center gap-2"><Shield size={16} className="text-orange-400" /> Beginner → Advanced</div>
              <div className="inline-flex items-center gap-2"><Shield size={16} className="text-orange-400" /> Job-ready skills</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-[#0f1424] border-2 border-dashed border-orange-400/40 shadow-[0_0_0_6px_rgba(251,146,60,0.06)] overflow-hidden">
              <div className="absolute inset-0 opacity-80">
                <SketchBG />
              </div>
              <div className="relative h-full w-full p-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-orange-500/10 border border-orange-400/20" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-orange-200/80">Vector-styled labs and real-world workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
