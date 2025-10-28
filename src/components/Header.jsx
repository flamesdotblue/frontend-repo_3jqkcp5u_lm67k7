import React from 'react';
import { Search, LogIn, UserPlus } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
            <span className="text-xl font-semibold tracking-tight text-slate-100">Gradia</span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#home" className="hover:text-slate-100 transition-colors">Home</a>
            <a href="#jobs" className="hover:text-slate-100 transition-colors">Jobs</a>
            <a href="#companies" className="hover:text-slate-100 transition-colors">Companies</a>
            <a href="#about" className="hover:text-slate-100 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-100 transition-colors">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 w-72 focus-within:ring-2 ring-cyan-500/40">
              <Search size={18} className="text-slate-400" />
              <input
                placeholder="Search jobs, skills, or companies"
                className="bg-transparent outline-none w-full placeholder:text-slate-500 text-slate-100"
              />
            </div>
            <a href="#login" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors">
              <LogIn size={18} />
              <span>Login</span>
            </a>
            <a href="#signup" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-shadow">
              <UserPlus size={18} />
              <span>Signup</span>
            </a>
            <a href="#post" className="hidden md:inline-flex items-center px-4 py-2 rounded-xl border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-colors">
              Post a Job
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
