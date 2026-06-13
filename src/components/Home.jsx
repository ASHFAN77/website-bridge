import React from 'react';
import Hero from './Hero';
import Clients from './Clients';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';

export default function Home({ partners, onOpenContact }) {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <Clients partners={partners} />
      <Services onOpenContact={onOpenContact} />
      <Portfolio />
      <Contact onOpenContact={onOpenContact} />
    </>
  );
}
