import React from 'react';

const services = [
  {
    title: "Portfolio Website",
    subtitle: "Showcase your work beautifully",
    icon: "work",
    bg: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    tags: ["Personal Brand", "Gallery", "CV/Resume"]
  },
  {
    title: "Landing Page",
    subtitle: "Convert visitors into clients",
    icon: "apartment",
    bg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    tags: ["Lead Generation", "Campaign", "Product Launch"]
  },
  {
    title: "Business Page",
    subtitle: "Establish your online presence",
    icon: "store",
    bg: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    tags: ["Company Site", "Services", "Local SEO"]
  },
  {
    title: "E-commerce Store",
    subtitle: "Sell products at scale",
    icon: "shopping_bag",
    bg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["Online Shop", "Payments", "Inventory"]
  }
];

export default function Services({ onOpenContact }) {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Section Header */}
      <div className="mb-unit-12 flex flex-col md:flex-row md:items-end justify-between gap-gutter">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b border-primary pb-2 mb-4 block w-fit">WHAT WE BUILD</span>
          <h2 className="font-headline-xl text-headline-xl">Our Services</h2>
        </div>
        <p className="font-body-lg text-body-lg text-secondary max-w-md">
          Every project starts with a conversation. Click any service to reach us directly and get started.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
        {services.map((service, idx) => (
          <button
            key={idx}
            onClick={onOpenContact}
            className="group relative overflow-hidden rounded-2xl text-left transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/50"
            style={{ minHeight: '280px' }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={service.bg}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: 'brightness(0.35)' }}
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)'
            }}></div>

            {/* Top-right glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)'
            }}></div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between" style={{ minHeight: '280px' }}>
              <div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl border border-white/20 flex items-center justify-center mb-6 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="font-headline-lg text-2xl text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body-md text-white/60 text-sm mb-4">
                  {service.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="font-label-sm text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 text-white/60 group-hover:border-white/40 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA bottom */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <span className="font-label-sm text-xs uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors duration-300">
                  Get in touch
                </span>
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-sm text-white group-hover:text-background transition-colors duration-300">arrow_forward</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
