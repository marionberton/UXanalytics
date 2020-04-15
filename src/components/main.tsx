import React from 'react';

import { Home } from './sections/home/home';
import { Demo } from './sections/demo/demo';
import { Benefits } from './sections/benefits/benefits';
import { Cta } from './sections/cta/cta';

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
