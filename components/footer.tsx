// components/Footer.tsx
import React from 'react';
import Reveal from './reveal';

const footerColumns = [
  {
    title: 'Page',
    links: ['Home', 'About', 'Courses', 'Events'],
  },
  {
    title: 'Services',
    links: ['Workshops', 'Co-Working', 'Design Consultancy', 'Art Promotion'],
  },
  {
    title: 'Support',
    links: ['FAQs', 'Quick Start', 'Documentation', 'User Guide'],
  },
];

const socialLinks = [
  {
    label: 'X',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="h-[1.125rem] w-[1.125rem]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-[1rem] w-[1rem]" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="h-[0.875rem] w-[1.25rem]" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/15 bg-[#04070e] py-14 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(51,214,255,0.12),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(255,82,200,0.12),transparent_30%),linear-gradient(180deg,rgba(6,10,19,0.4),rgba(4,7,14,1))]" />
      <Reveal className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10" y={14}>
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="site-panel overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Stay Connected
            </span>
            <h2 className="mt-4 bg-gradient-to-r from-cyan-200 via-slate-100 to-violet-300 bg-clip-text text-3xl font-black text-transparent sm:text-4xl lg:text-5xl">
              Arambhakala
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Explore a future-forward space for art, learning, and creative collaboration.
              Reach out for workshops, courses, or partnership opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                Contact us
              </button>
              <a href="#" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-200">
                View Programs
              </a>
            </div>
          </div>

          <div className="site-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)] sm:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                    {column.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-300 transition-colors">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="transition-colors hover:text-cyan-300">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-center text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p className="text-sm sm:text-base">© Arambhakala 2024, All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-all hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-400/15 hover:text-cyan-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
