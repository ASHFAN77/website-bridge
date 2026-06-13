import React from 'react';
import ThreeGlobe from './ThreeGlobe';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-20">
      <div className="relative z-10 w-full md:w-[38.2%] space-y-unit-4 text-left">
        <h1 className="font-display-lg text-[40px] md:text-display-lg leading-none tracking-tighter animate-pulse">
          WEBSITE BRIDGE
        </h1>
        <p className="font-headline-xl text-headline-lg md:text-[32px] md:leading-[40px] text-secondary">
          Architecting digital experiences with precision.
        </p>
        <div className="pt-unit-8 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-label-sm uppercase tracking-[0.2em] rounded-lg hover:scale-105 transition-transform duration-500" href="#samples">
            Explore Samples
          </a>
          <button onClick={onOpenContact} className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-label-sm uppercase tracking-[0.2em] rounded-lg hover:bg-white/10 transition-all duration-500">
            Let's Build
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="relative z-0 w-full md:w-[61.8%] h-[50vh] md:h-full flex items-center justify-center">
        <ThreeGlobe />
      </div>

      <div className="absolute bottom-unit-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <span className="material-symbols-outlined text-4xl">expand_more</span>
      </div>
    </section>
  );
}
