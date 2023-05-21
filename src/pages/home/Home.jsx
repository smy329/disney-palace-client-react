import React, { useEffect } from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import ShopCategory from './ShopCategory';
import useTitle from '../../hooks/useTitle';
import AOS from 'aos';

const Home = () => {
  useTitle('Home');
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto space-y-20">
      <Hero />
      <Gallery />
      <ShopCategory />
    </div>
  );
};

export default Home;
