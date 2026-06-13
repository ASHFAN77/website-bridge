import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const sampleData = {
  'photographer-portfolio': {
    title: "Photographer Portfolio",
    type: "Portfolio",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_8h0oXFTedz8k3-bg8tc9KNJxdwIWzKrYGfpZujFfM5LCfaPTBW04yZ6Asst94b4BTemIS_Y_zR6XR20QbuETPzrmlD-4XOvRxog5AtAm4pEZhPUhNM2sH3X5PBNNlRMIQhc2MClPsFVzi4JXyMx2KAsFh68amY8-mah4KsXjx-qGgPrE3vt96F4oM1MdVlWSUn1LVfT00A1Q-LxtfSWXBeDMQ830zzKS6NHyBaSmnK0xFCddGS0_aLXcfAYpv8bNhN7Citl4jdg",
    desc: "A highly visual, editorial layout crafted specifically for visual storytellers. The structure prioritizes large-scale imagery and elegant typography, putting the photographer's work at the absolute forefront."
  },
  'interior-designer': {
    title: "Interior Designer",
    type: "Landing Page",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUF_c0hxYf-AFKVLAQ_btyNbmh4jTynb4r0_bnFVexjYBnDie16zaQDO6NT_4ps3EWGAZwxkVYGsy9D84RyfLJaI3dOPIgnbrdGlHm04nLPNEnIE-CcfZkLO9fxZX8wgqQYe2n3z4RB2ZysS-txWkA-int4GipbH_rKDBSM4xFlvaxLueex7P3Zc-PfgjS_Si7lFc_jJ0o82j8v5KuXQcfLjWdi-Db8t1lENBlk5JaNMICRRB1kIa9ALEOMlWLLqeII6PhAmV8dHY",
    desc: "Spatial awareness translated to the web. This layout utilizes generous white space, asymmetrical grids, and sophisticated transitions to mirror the physical experience of moving through a well-designed room."
  },
  'bakery-business': {
    title: "Bakery Business",
    type: "Business Page",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtz-Zq2WKubsm6C4HBDTkZj9fKdCV6PSGffFTjohQycF96s9-09O6EWkM24hG6nLnQxQf2xkHNpA5eGd6k2CT09MAmCYcwNIyOj5sPDzYoCsVBK76oqv311qWvvpgzCQ4aMWmMXMTtUeE3cfZF1IhONjuxs5-E5yM8EJLOW5mR7xJLpaa31t3LSI58k7PUQG-RkKaCP0Otuez8ePOUGPLvQsvs3xcxzDo0bT9f5EWpRaZmynNdMVqAd1hWwKtsfQJtNOF2CVxlgs8",
    desc: "An artisanal digital storefront designed to evoke warmth and quality. It features prominent calls to action for ordering, rich imagery for baked goods, and a localized SEO-optimized structure."
  },
  'clothing-brand': {
    title: "Clothing Brand",
    type: "E-commerce Web",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmIz6V3sAJ2uWwSgaff6nTNWNp_aTx_49j0WrYT03U0jQqXSFi5wkmSa43BqeAXgYmBAsTNvIgvsCtOT6QekOYRE4NSKbJjqMJ45NC6bgbaqngPahoVaRswZuJw023m6BcbYe3KhzXjTDcS-Ri2zajioUlZEfyikWBbFDS9Er8d_XpcUjCynJVLzMpb-fjeTX9eRkpn5WUspjGfOYCp-dBrnn80xBWqRGx3kaylCVCQXM7LAiu8X3Tz5sGjanQ3Obc4eZbG-1uYj4",
    desc: "A high-conversion editorial commerce experience. This architecture seamlessly blends lookbook-style editorial content with frictionless purchasing flows to maximize both brand prestige and sales."
  }
};

export default function SamplePage() {
  const { slug } = useParams();
  const data = sampleData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl">Page Not Found</h1>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Banner using the sample's image */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
        <img src={data.img} alt={data.title} className="absolute inset-0 w-full h-full object-cover object-center" />
        
        <div className="relative z-20 h-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col justify-end pb-unit-12">
          <Link to="/" className="inline-flex items-center gap-2 font-label-sm uppercase tracking-widest text-secondary hover:text-primary mb-6 w-fit transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-4 block w-fit">{data.type}</span>
          <h1 className="font-display-lg text-[40px] md:text-[80px] leading-none tracking-tighter text-white mb-6">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <h2 className="font-headline-xl text-3xl mb-8">Architectural Overview</h2>
          <p className="font-body-lg text-secondary-fixed-dim leading-relaxed mb-12">
            {data.desc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-12">
            <div>
              <h3 className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-4">Core Technologies</h3>
              <ul className="space-y-3 font-body-md text-primary">
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Supabase Database</li>
              </ul>
            </div>
            <div>
              <h3 className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-4">Key Features</h3>
              <ul className="space-y-3 font-body-md text-primary">
                <li>Optimized Performance</li>
                <li>Responsive Design</li>
                <li>SEO Architecture</li>
                <li>Premium Aesthetics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
