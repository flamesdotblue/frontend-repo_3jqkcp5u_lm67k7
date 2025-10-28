import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700 text-cyan-300 text-xs font-medium mb-4">
              Verified opportunities · Global reach
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-100">
              Find the Right Job for Your Career.
            </h1>
            <p className="mt-4 text-slate-300 text-lg max-w-xl">
              Join Gradia and connect with verified employers and top opportunities worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#signup"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-shadow"
              >
                Create Profile
              </a>
              <a
                href="#jobs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-colors"
              >
                Browse Jobs
              </a>
            </div>
          </div>
          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
