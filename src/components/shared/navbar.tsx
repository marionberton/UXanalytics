import React from 'react';

import logo from '../../assets/logo.svg';

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className=" container  mt-16 flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <a
            href="#"
            className="inline-block  bg-white text-blue-800 font-title font-semibold py-2 px-4 rounded-full"
          >
            Try Demo Now
          </a>
        </div>
      </nav>
    </>
  );
};
