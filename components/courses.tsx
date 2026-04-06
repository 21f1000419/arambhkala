import React from 'react';
import Reveal from './reveal';

const courseItems = [
  {
    title: 'Workshops',
    description: 'Hands-on workshops for every age group to explore and learn art deeply.',
    gradient: 'from-amber-400/25 to-orange-500/20',
    border: 'border-amber-300/35',
  },
  {
    title: 'Co-Working',
    description: 'A collaborative environment where artists and creators build together.',
    gradient: 'from-fuchsia-500/25 to-rose-500/20',
    border: 'border-fuchsia-300/35',
  },
  {
    title: 'Design Consultancy',
    description: 'Portfolio reviews, mentor support, and career assistance for designers.',
    gradient: 'from-emerald-400/25 to-teal-500/20',
    border: 'border-emerald-300/35',
  },
  {
    title: 'Art Promotion',
    description: 'Exhibitions and promotions to showcase your work in art melas and events.',
    gradient: 'from-cyan-400/25 to-sky-500/20',
    border: 'border-cyan-300/35',
  },
];

const Courses: React.FC = () => {
  return (
    <>
    <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400"></div>
    <div className="relative flex min-h-screen items-center justify-center bg-[#050913] px-4 py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(141,125,255,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(45,200,101,0.14),transparent_40%)]" />
      <div className="relative grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
        {courseItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <div className={`site-panel flex h-72 w-full items-center justify-center rounded-3xl border ${item.border} bg-gradient-to-br ${item.gradient} p-6 text-white md:h-80 lg:h-96`}>
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-black md:text-3xl">{item.title}</h3>
                <p className="text-lg text-slate-200 md:text-xl">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/40 bg-[#071227]/90 p-4 shadow-[0_0_50px_rgba(51,214,255,0.25)] md:h-56 md:w-56 lg:h-72 lg:w-72">
            <h3 className="bg-gradient-to-r from-cyan-200 to-violet-200 bg-clip-text text-center text-xl font-black text-transparent md:text-3xl lg:text-4xl">
              Short-term Courses
            </h3>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Courses;
