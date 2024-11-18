import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Pricing />
    </main>
  );
}