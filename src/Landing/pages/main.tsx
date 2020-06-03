import React from 'react';

import { Home } from '../components/sections/home/home';
import { Demo } from '../components/sections/demo/demo';
import { Benefits } from '../components/sections/benefits/benefits';
import { Cta } from '../components/sections/cta/cta';

export const Main: React.FC = () => {
  return (
    <>
      <Home />
      <Demo />
      <Benefits />
      <Cta />
    </>
  );
};
