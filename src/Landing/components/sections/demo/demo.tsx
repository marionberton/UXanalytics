import React from 'react';

import demopic from '../../../../assets/demo.jpg';

export const Demo: React.FC = () => {
  return (
    <section className=" mt-32">
      <div className="container">
        <div className="flex justify-center content-center items-center text-center flex-col">
          <div>
            <img className="h-auto lg:w-3/4 mx-auto" src={demopic} alt="" />
          </div>
          <div>
            <h1 className="text-4xl text-darkgrey font-title font-semibold leading-none">
              Who is UX Analytic for?
            </h1>
            <p className="mt-6 text-darkgrey text-xl">
              Our analysis service empower designer to make better design
              decisions. <br /> We analized over 250 websites and app for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
