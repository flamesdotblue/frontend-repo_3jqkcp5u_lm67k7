import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturedCompanies from './components/FeaturedCompanies';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedCompanies />

        {/* Footer (kept inline to maintain 4 sub-components total) */}
        <footer className="border-t border-slate-800 bg-slate-950" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
                  <span className="text-xl font-semibold tracking-tight">Gradia</span>
                </div>
                <p className="text-slate-400 max-w-sm">
                  Professional, trustworthy, futuristic job discovery for modern careers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-200 mb-3">Quick Links</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#home" className="hover:text-slate-200 transition">Home</a></li>
                  <li><a href="#jobs" className="hover:text-slate-200 transition">Jobs</a></li>
                  <li><a href="#companies" className="hover:text-slate-200 transition">Companies</a></li>
                  <li><a href="#about" className="hover:text-slate-200 transition">About</a></li>
                  <li><a href="#contact" className="hover:text-slate-200 transition">Contact</a></li>
                  <li><a href="#privacy" className="hover:text-slate-200 transition">Privacy Policy</a></li>
                  <li><a href="#terms" className="hover:text-slate-200 transition">Terms</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-200 mb-3">Contact</h4>
                <p className="text-slate-400">support@gradia.com</p>
                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">
                    Stay updated with new roles and company launches.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-3 flex gap-2"
                  >
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 ring-cyan-500/40"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-shadow"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} Gradia. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
