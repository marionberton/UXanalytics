import React from 'react';

export const Auth = () => (
  <section className="grid lg:grid-cols-3">
    <div className="lg:col-span-1 lg:order-1 order-3">
      <div className="lg:h-screen lg:w-full flex flex-col justify-center items-center">
        <div className="items-center lg:w-3/4 md:w-2/4 text-left lg:m-0 lg:p-0 my-8 sm:mx-0">
          <h1 className="xl:text-5xl md:text-4xl sm:text-xl text-darkgrey font-title font-semibold">
            Hello!
          </h1>
          <p className="xl:text-2xl md:text-xl sm:text-lg  text-darkgrey font-title font-medium ">
            Create your free account
          </p>
          <p className="text-base text-darkgrey xl:font-normal lg:font-light mt-4">
            Try our demo and be one of the first to use UX Analytic, and help
            the service grow! We'll email you our beta release when it's ready.
          </p>
          <p className="text-base text-darkgrey xl:font-normal lg:font-light mt-4">
            <span className="text-purple-700 font-medium">Note:</span>This
            version of UX Analytic is an MVP, and is currently still in
            developement..
          </p>
          <button
            className="bg-btnred text-white font-title font-semibold py-2 px-4 rounded-full mt-10 w-1/3"
            type="button"
          >
            signin
          </button>
        </div>
      </div>
    </div>

    <div className="backgroundShape bg-lightgrey lg:col-span-2 lg:order-3 order-1">
      <div className="lg:h-screen lg:w-full flex justify-center items-center h-64">
        <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-darkgrey font-title font-semibold lg:w-2/3 md:w-3/5 text-left leading-none px-8">
          The goal is to turn data into information & information into insight
          <br />
          <span className="font-normal text-2xl">— Carly Fiorina</span>
        </h1>
      </div>
    </div>
  </section>
);
