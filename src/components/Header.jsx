import { Rocket, BookOpen, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="px-4 py-2 text-sm font-medium text-orange-200/80 hover:text-white hover:bg-white/5 rounded-md transition"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0b0f19]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow shadow-orange-500/30">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-wider text-orange-300/80">Flames</div>
              <div className="text-base font-semibold text-white">DevOps Academy</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#topics">Topics</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <a
              href="#topics"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black bg-orange-400 hover:bg-orange-300 shadow shadow-orange-500/30 transition"
            >
              <BookOpen size={16} /> Start Learning
            </a>
          </nav>

          <button className="md:hidden p-2 text-orange-200" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0f19]/90">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
            <NavLink href="#topics">Topics</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <a href="#topics" className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black bg-orange-400 hover:bg-orange-300 shadow shadow-orange-500/30 transition">
              <BookOpen size={16} /> Start Learning
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
