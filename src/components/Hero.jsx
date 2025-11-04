import { ArrowRight, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">
              <Sparkles size={14} /> Learn end-to-end DevOps
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Master DevOps from Fundamentals to Production
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              A structured, hands-on learning platform covering Linux, CI/CD, Containers, Kubernetes, Cloud, Observability, Security, and more.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#topics" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 font-semibold shadow">
                Start Learning <ArrowRight size={18} />
              </a>
              <a href="#roadmap" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold shadow border border-slate-200">
                View Roadmap
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="inline-flex items-center gap-2"><Shield size={16} className="text-green-600" /> Project-based</div>
              <div className="inline-flex items-center gap-2"><Shield size={16} className="text-blue-600" /> Beginner → Advanced</div>
              <div className="inline-flex items-center gap-2"><Shield size={16} className="text-purple-600" /> Job-ready skills</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-pink-600/10" />
              <div className="h-full w-full p-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-slate-100" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-slate-500">Interactive labs and real-world workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
