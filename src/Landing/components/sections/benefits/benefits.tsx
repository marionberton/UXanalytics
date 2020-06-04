import React from 'react';

import topicon from '../../../../assets/topicon.svg';
import bottomicon from '../../../../assets/bottomicon.svg';

export const Benefits: React.FC = () => {
  return (
    <section className="mt-24 py-20 bg-lightmauve benefit">
      <div className="container">
        <div className="flex sm:justify-between items-center sm:flex-row flex-col">
          <div className="p-2 order-first ">
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-darkgrey font-title">
              Actionable insight{' '}
              <span role="img" aria-label="lightbulb">
                💡
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-darkgrey font-title font-bold">
              Focus on best practices <br />
              for your design
            </p>
          </div>
          <div className="flex flex-col box-content sm:w-1/2">
            <div className="flex flex-row rounded-md bg-white py-5 pnpm x-10 mb-5 sm:items-center">
              <div>
                <img src={topicon} alt="" />
              </div>
              <div className="ml-5">
                <h1 className="text-darkgrey text-base sm:text-lg md:text-xl font-bold">
                  Insights
                </h1>
                <p className="text-parablack">
                  Find out which design patterns work best in your industry.
                </p>
              </div>
            </div>
            <div className="flex flex-row rounded-md bg-white py-5 px-10 sm:items-center">
              <div>
                <img src={bottomicon} alt="" />
              </div>
              <div className="ml-5">
                <h1 className="text-darkgrey text-base sm:text-lg md:text-xl font-bold">
                  Upskilling
                </h1>
                <p className="text-parablack">
                  Add quantitative, metrics to your design and boost the
                  experience for your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
