import React from 'react';

import { Navbar } from './components/shared/navbar';
import { Main } from './components/main';
import { Footer } from './components/shared/footer';

import './styles/tailwind.css';

export const App = () => {
  return (
    <div className="">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};
