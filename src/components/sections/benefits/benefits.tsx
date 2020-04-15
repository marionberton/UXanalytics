import React from 'react';

import topicon from '../../../assets/topicon.svg';
import bottomicon from '../../../assets/bottomicon.svg';

export const Benefits: React.FC = () => {
  return (
    <section className="mt-24 py-20 bg-lightmauve benefit">
      <div className="container">
        <div className="flex justify-between lg:items-center lg:flex-row sm:flex-col">
          <div className="p-2 lg:order-first sm:order-last">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-darkgrey font-title">
              Actionable insight💡
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl text-darkgrey font-title font-bold">
              Focus on best practices <br />
              for your design
            </p>
          </div>
          <div className="flex flex-col box-content w-1/2">
            <div className="flex flex-row rounded-md bg-white py-5 px-10 mb-5">
              <div>
                <img src={topicon} alt="" />
              </div>
              <div className="ml-5">
                <h1 className="text-darkgrey text-base sm:text-lg md:text-xl font-bold">
                  Detailed Insights
                </h1>
                <p className="text-parablack">
                  With easy to read table and visualizations, uncover the most
                  effective UX designs.
                </p>
              </div>
            </div>
            <div className="flex flex-row rounded-md bg-white py-5 px-10">
              <div>
                <img src={bottomicon} alt="" />
              </div>
              <div className="ml-5">
                <h1 className="text-darkgrey text-base sm:text-lg md:text-xl font-bold">
                  Upskilling
                </h1>
                <p className="text-parablack">
                  Identify opportunities that can help boost your user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
