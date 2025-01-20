import React from 'react';
import { Header } from './partials/header';
import { Footer } from './partials/footer';

export const DefaultLayout = () => {
  return (
    <div>
     <Header/>
      This is main page
     <Footer/>
    </div>
  );
};
