import React from 'react';

import { Navbar } from './components/shared/navbar';
import { Home } from './components/sections/home/home';

import './styles/tailwind.css';
import shape from './assets/shape.svg';

export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};
