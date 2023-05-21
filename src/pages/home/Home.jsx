import React, { useEffect } from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import ShopCategory from './ShopCategory';
import useTitle from '../../hooks/useTitle';
import AOS from 'aos';
import ServicesToHelp from './ServicesToHelp';
import Cashback from './Cashback';

const Home = () => {
  useTitle('Home');
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" space-y-20">
      <Hero />
      <Gallery />
      <ShopCategory />
      <Cashback />
      <ServicesToHelp />
    </div>
  );
};

export default Home;
