import React from 'react';

export default function Clients({ partners }) {
  if (partners.length === 0) return null;

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden relative" style={{ background: '#000000' }} id="clients">
      {/* Section Header */}
      <div className="text-center mb-12 px-8">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-2">Trusted By</span>
        <h2 className="font-headline-xl text-2xl text-primary">{partners.length} Client{partners.length !== 1 ? 's' : ''} & Partners</h2>
      </div>

      {/* Marquee Track */}
      <div className="relative">
        <div className="flex w-fit whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center mx-8 group cursor-default"
              style={{ minWidth: '160px' }}
            >
              {/* Logo Box */}
              <div
                className="rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-500 overflow-hidden flex items-center justify-center"
                style={{
                  width: '140px',
                  height: '140px',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(10px)',
                  flexShrink: 0
                }}
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                  />
                ) : (
                  <span className="material-symbols-outlined text-5xl text-on-surface-variant">business</span>
                )}
              </div>

              {/* Name Below */}
              <span
                className="font-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors duration-300 text-center mt-4 block"
                style={{ fontSize: '11px', maxWidth: '140px', whiteSpace: 'normal', lineHeight: '1.4' }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, #000000, transparent)' }}></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 pointer-events-none z-10" style={{ background: 'linear-gradient(to left, #000000, transparent)' }}></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
