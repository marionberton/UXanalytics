import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Navbar } from './components/shared/navbar';
import { Main } from './components/main';
import { Footer } from './components/shared/footer';

import './styles/tailwind.css';

library.add(fab);

export const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};
