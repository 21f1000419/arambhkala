import React, { FC } from "react";
import Image from "next/image";
import Reveal from "./reveal";

const AboutUs: FC = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07060f] px-4 py-14 text-white sm:px-6 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-indigo-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md md:gap-12 md:p-8 lg:grid-cols-2 lg:p-10">
          <Reveal className="space-y-6" y={18}>
            <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 sm:text-sm">
              Future of Creative Learning
            </p>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-6xl">
              About
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                {" "}
                Arambhakala
              </span>
            </h2>

            <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
              At Arambhakala Foundation, we ignite creativity, nurture talent,
              and sculpt futures. Our mission is to transform skill development
              in design through immersive learning, strong mentorship, and
              real-world opportunities for every age group.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <span className="rounded-full border border-fuchsia-300/50 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-200">
                Innovation-Driven
              </span>
              <span className="rounded-full border border-cyan-300/50 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                Industry-Focused
              </span>
              <span className="rounded-full border border-indigo-300/50 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200">
                Future-Ready Skills
              </span>
            </div>
          </Reveal>

          <Reveal className="relative flex items-center justify-center" delay={120} y={18}>
            <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-400/20 via-transparent to-fuchsia-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/10 to-white/0 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/illust1.webp"
                alt="Design Illustration"
                width={920}
                height={760}
                className="h-auto w-full max-w-xl rounded-[1.3rem] object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
      </section>
      <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400" />
    </>
  );
};

export default AboutUs;
