import React from 'react';

const companies = [
  'Infosys',
  'Accenture',
  'TCS',
  'Tech Mahindra',
  'Deloitte',
  'Amazon',
  'Microsoft',
  'Google',
  'Adobe',
  'Salesforce',
];

const FeaturedCompanies = () => {
  return (
    <section id="companies" className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 text-center">Top Companies Hiring on Gradia</h2>
        <p className="mt-2 text-slate-400 text-center max-w-2xl mx-auto">
          Explore roles from global leaders and high-growth startups.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {companies.map((name) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex items-center justify-center hover:border-cyan-500/40 transition">
              <span className="text-slate-200 group-hover:text-cyan-200 transition font-medium">
                {name}
              </span>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-cyan-500/10 to-blue-500/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
