import { Rocket, BookOpen, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <div className="text-sm text-slate-500">Flames</div>
              <div className="text-base font-semibold text-slate-900">DevOps Academy</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#topics">Topics</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <a
              href="#topics"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow hover:shadow-md transition"
            >
              <BookOpen size={16} /> Start Learning
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
            <NavLink href="#topics">Topics</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <a href="#topics" className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow hover:shadow-md transition">
              <BookOpen size={16} /> Start Learning
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
