import React from 'react';

import man from '../../../assets/mansearching.svg';

export const Cta: React.FC = () => {
  return (
    <section className="mt-24">
      <div className="container">
        <div className="flex justify-around content-start items-center lg:text-left text-center lg:flex-row flex-col">
          <div className="mb-12 md:m-0">
            <img src={man} alt="" />
          </div>
          <div className="">
            <h1 className="text-4xl text-darkgrey font-title font-semibold">
              Stay on top of <br /> industry trends
            </h1>
            <p className="text-4xl text-mauve font-title font-semibold">
              Try UX Analytic <br /> right now.
            </p>
            <button
              className="bg-btnred text-white font-title font-semibold py-2 px-4 rounded-full mt-10"
              type="button"
            >
              Try Demo Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
