import React from 'react';
import Banner from '../components/Banner';
import Partners from '../components/Partners';
import Block_advantages from '../components/Block_advantages';
import Block_services from '../components/Block_services';
import Faq from '../components/Faq';
import NewsBlock from '../components/NewsBlock';
import MainForm from '../components/MainForm';

const Main = () => {
  return (
    <div className="w-full flex flex-col">
      <Banner />
      <Partners />
      <Block_advantages />
      <Block_services />
      <Faq />
      <NewsBlock />
      <MainForm />
    </div>
  );
};

export default Main;