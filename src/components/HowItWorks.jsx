import React from 'react';
import { User, FileText, Target, Briefcase } from 'lucide-react';

const steps = [
  {
    icon: User,
    title: 'Create Profile',
    desc: 'Tell us about your skills.',
    href: '#signup',
  },
  {
    icon: FileText,
    title: 'Upload Resume',
    desc: 'Let employers know your strengths.',
    href: '#resume',
  },
  {
    icon: Target,
    title: 'Get Matched',
    desc: 'See jobs that fit your profile.',
    href: '#jobs',
  },
  {
    icon: Briefcase,
    title: 'Apply & Get Hired',
    desc: 'Start your next chapter.',
    href: '#apply',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-slate-950" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 text-center">How Gradia Helps You Grow</h2>
        <p className="mt-2 text-slate-400 text-center max-w-2xl mx-auto">
          A streamlined path from profile to offer.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <a
              key={step.title}
              href={step.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 text-cyan-300 shadow-inner">
                <step.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{step.title}</h3>
              <p className="mt-1 text-slate-400">{step.desc}</p>
              <div className="mt-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
