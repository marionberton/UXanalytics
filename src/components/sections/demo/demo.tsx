import React from 'react';

import demopic from '../../../assets/demo.jpg';

export const Demo: React.FC = () => {
  return (
    <section className=" mt-32">
      <div className="container">
        <img className="h-auto lg:w-3/4 mx-auto" src={demopic} alt="" />
      </div>
    </section>
  );
};
