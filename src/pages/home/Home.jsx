import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import ShopCategory from './ShopCategory';

const Home = () => {
  return (
    <div className="container mx-auto space-y-20">
      <Hero />
      <Gallery />
      <ShopCategory />
    </div>
  );
};

export default Home;
