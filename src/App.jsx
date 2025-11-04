import Header from './components/Header';
import Hero from './components/Hero';
import TopicsGrid from './components/TopicsGrid';
import Roadmap from './components/Roadmap';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <TopicsGrid />
        <Roadmap />

        <section id="resources" className="py-16 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold">Resources</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Each module includes reading materials, command cheatsheets, and lab guides. As you progress, you’ll build a production-grade delivery pipeline across multiple tools.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="#topics" className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition">
                <h3 className="font-semibold">Quickstart Guides</h3>
                <p className="mt-1 text-sm text-slate-600">Spin up environments and complete your first CI/CD pipeline.</p>
              </a>
              <a href="#roadmap" className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition">
                <h3 className="font-semibold">Project Roadmaps</h3>
                <p className="mt-1 text-sm text-slate-600">Follow structured milestones to reach production-readiness.</p>
              </a>
              <a href="#topics" className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition">
                <h3 className="font-semibold">Cheatsheets</h3>
                <p className="mt-1 text-sm text-slate-600">Command references for Linux, Kubernetes, Terraform, and more.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Flames DevOps Academy. All rights reserved.</p>
          <div className="text-sm text-slate-500">Built for learners who ship.</div>
        </div>
      </footer>
    </div>
  );
}
