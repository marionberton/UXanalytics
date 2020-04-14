import React from 'react';

import home from '../../../assets/home.png';
import oval from '../../../assets/oval.svg';

export const Home: React.FC = () => {
  return (
    <section className=" mt-24">
      <div className="container">
        <div className="flex items-center flex-row">
          <div className="p-2 w-1/2">
            <h1 className="text-5xl text-darkgrey font-title font-semibold leading-none ">
              Stop copying, and
              <br /> start doing competitor <br /> UX analysis
            </h1>
            <p className="mt-12 text-darkgrey">
              UX Analytic is a platform, build to help designers creating a
              <br />
              better web user experience, by analyzing design metrics of
              <br />
              your product with your direct competitors.
            </p>
            <button
              className="bg-btnred text-white font-title font-semibold py-2 px-4 rounded-full w-1/3 mt-8"
              type="button"
            >
              Try Demo Now
            </button>
          </div>
          <div className="p-2 w-1/2">
            <img src={home} />
          </div>
        </div>
      </div>
    </section>
  );
};
