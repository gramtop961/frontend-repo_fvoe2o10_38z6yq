import Header from './components/Header';
import Hero from './components/Hero';
import TopicsGrid from './components/TopicsGrid';
import Roadmap from './components/Roadmap';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Header />
      <main>
        <Hero />
        <TopicsGrid />
        <Roadmap />

        <section id="resources" className="py-16 border-t border-white/10 bg-[#0b0f19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold">Resources</h2>
            <p className="mt-2 text-orange-100/80 max-w-2xl">
              Each module includes reading materials, command cheatsheets, and lab guides. Build a production-grade delivery pipeline across multiple tools.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="#topics" className="rounded-xl border-2 border-dashed border-orange-400/30 bg-[#0f1424] p-5 shadow-[0_0_0_6px_rgba(251,146,60,0.05)] hover:bg-white/5 transition">
                <h3 className="font-semibold text-white">Quickstart Guides</h3>
                <p className="mt-1 text-sm text-orange-100/80">Spin up environments and complete your first CI/CD pipeline.</p>
              </a>
              <a href="#roadmap" className="rounded-xl border-2 border-dashed border-orange-400/30 bg-[#0f1424] p-5 shadow-[0_0_0_6px_rgba(251,146,60,0.05)] hover:bg:white/5 transition">
                <h3 className="font-semibold text-white">Project Roadmaps</h3>
                <p className="mt-1 text-sm text-orange-100/80">Follow structured milestones to reach production-readiness.</p>
              </a>
              <a href="#topics" className="rounded-xl border-2 border-dashed border-orange-400/30 bg-[#0f1424] p-5 shadow-[0_0_0_6px_rgba(251,146,60,0.05)] hover:bg-white/5 transition">
                <h3 className="font-semibold text-white">Cheatsheets</h3>
                <p className="mt-1 text-sm text-orange-100/80">Command references for Linux, Kubernetes, Terraform, and more.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 bg-[#0f1424] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-orange-200/80">© {new Date().getFullYear()} Flames DevOps Academy. All rights reserved.</p>
          <div className="text-sm text-orange-200/80">Built for learners who ship.</div>
        </div>
      </footer>
    </div>
  );
}
