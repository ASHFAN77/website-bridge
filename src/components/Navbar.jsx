import React from 'react';

export default function Navbar({ onOpenContact }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/50 dark:bg-surface/50 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-margin-desktop py-unit-3 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Website Bridge Logo"
            style={{ height: '36px', width: 'auto', maxWidth: '120px', objectFit: 'contain', display: 'block' }}
          />
          <div className="font-headline-lg text-headline-lg tracking-tighter text-primary dark:text-primary hidden sm:block">
            WEBSITE BRIDGE
          </div>
        </div>
        <nav className="hidden md:flex gap-gutter items-center">
          <a className="font-body-md text-body-md uppercase tracking-[0.2em] text-on-surface-variant/70 font-medium hover:text-primary transition-colors duration-300" href="#clients">Services</a>
          <a className="font-body-md text-body-md uppercase tracking-[0.2em] text-on-surface-variant/70 font-medium hover:text-primary transition-colors duration-300" href="#samples">Samples</a>
          <a className="font-body-md text-body-md uppercase tracking-[0.2em] text-on-surface-variant/70 font-medium hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
          <button onClick={onOpenContact} className="ml-4 px-6 py-2 bg-primary text-background font-label-sm uppercase tracking-widest rounded-lg hover:bg-secondary transition-all">
            Let's Build
          </button>
        </nav>
      </div>
    </header>
  );
}
