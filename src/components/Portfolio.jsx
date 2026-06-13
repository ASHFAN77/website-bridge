import React, { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.portfolio-card').forEach((card) => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const portfolios = [
    {
      type: "Portfolio",
      title: "Photographer Portfolio",
      desc: "Editorial layout for visual storytellers.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_8h0oXFTedz8k3-bg8tc9KNJxdwIWzKrYGfpZujFfM5LCfaPTBW04yZ6Asst94b4BTemIS_Y_zR6XR20QbuETPzrmlD-4XOvRxog5AtAm4pEZhPUhNM2sH3X5PBNNlRMIQhc2MClPsFVzi4JXyMx2KAsFh68amY8-mah4KsXjx-qGgPrE3vt96F4oM1MdVlWSUn1LVfT00A1Q-LxtfSWXBeDMQ830zzKS6NHyBaSmnK0xFCddGS0_aLXcfAYpv8bNhN7Citl4jdg"
    },
    {
      type: "Landing Page",
      title: "Interior Designer",
      desc: "Spatial awareness translated to web.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUF_c0hxYf-AFKVLAQ_btyNbmh4jTynb4r0_bnFVexjYBnDie16zaQDO6NT_4ps3EWGAZwxkVYGsy9D84RyfLJaI3dOPIgnbrdGlHm04nLPNEnIE-CcfZkLO9fxZX8wgqQYe2n3z4RB2ZysS-txWkA-int4GipbH_rKDBSM4xFlvaxLueex7P3Zc-PfgjS_Si7lFc_jJ0o82j8v5KuXQcfLjWdi-Db8t1lENBlk5JaNMICRRB1kIa9ALEOMlWLLqeII6PhAmV8dHY"
    },
    {
      type: "Business Page",
      title: "Bakery Business",
      desc: "Artisanal digital storefronts.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtz-Zq2WKubsm6C4HBDTkZj9fKdCV6PSGffFTjohQycF96s9-09O6EWkM24hG6nLnQxQf2xkHNpA5eGd6k2CT09MAmCYcwNIyOj5sPDzYoCsVBK76oqv311qWvvpgzCQ4aMWmMXMTtUeE3cfZF1IhONjuxs5-E5yM8EJLOW5mR7xJLpaa31t3LSI58k7PUQG-RkKaCP0Otuez8ePOUGPLvQsvs3xcxzDo0bT9f5EWpRaZmynNdMVqAd1hWwKtsfQJtNOF2CVxlgs8"
    },
    {
      type: "E-commerce Web",
      title: "Clothing Brand",
      desc: "High-conversion editorial commerce.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmIz6V3sAJ2uWwSgaff6nTNWNp_aTx_49j0WrYT03U0jQqXSFi5wkmSa43BqeAXgYmBAsTNvIgvsCtOT6QekOYRE4NSKbJjqMJ45NC6bgbaqngPahoVaRswZuJw023m6BcbYe3KhzXjTDcS-Ri2zajioUlZEfyikWBbFDS9Er8d_XpcUjCynJVLzMpb-fjeTX9eRkpn5WUspjGfOYCp-dBrnn80xBWqRGx3kaylCVCQXM7LAiu8X3Tz5sGjanQ3Obc4eZbG-1uYj4"
    }
  ];

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="samples">
      <div className="mb-unit-12 flex flex-col md:flex-row md:items-end justify-between gap-gutter">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b border-primary pb-2 mb-4 block w-fit">PORTFOLIO</span>
          <h2 className="font-headline-xl text-headline-xl">Curated Blueprints</h2>
        </div>
        <p className="font-body-lg text-body-lg text-secondary max-w-md">
          Explore our recent architectural interventions in the digital landscape. Each project is a testament to structural integrity and aesthetic clarity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {portfolios.map((item, idx) => (
          <div key={idx} className="portfolio-card glass-card p-unit-6 flex flex-col gap-unit-4 group">
            <div className="aspect-video overflow-hidden rounded-xl bg-surface-container-high relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" src={item.img} alt={item.title}/>
            </div>
            <div className="flex justify-between items-start pt-unit-2">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">{item.type}</span>
                <h3 className="font-headline-lg text-headline-lg">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
