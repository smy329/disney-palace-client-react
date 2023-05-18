import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';

const Home = () => {
  return (
    <div className="container mx-auto space-y-20">
      <Hero />
      <Gallery />
    </div>
  );
};

export default Home;
