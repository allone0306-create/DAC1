import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Insights from '../components/Insights';
import Philosophy from '../components/Philosophy';
import BusinessModel from '../components/BusinessModel';
import ServiceMap from '../components/ServiceMap';

const Home: React.FC = () => {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Insights />
      <Philosophy />
      <BusinessModel />
      <ServiceMap />
    </main>
  );
};

export default Home;
