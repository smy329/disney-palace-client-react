import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import ShopCategory from './ShopCategory';
import useTitle from '../../hooks/useTitle';

const Home = () => {
  useTitle('Home');
  return (
    <div className="container mx-auto space-y-20">
      <Hero />
      <Gallery />
      <ShopCategory />
    </div>
  );
};

export default Home;
