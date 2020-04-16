import React from 'react';

import logowhite from '../../assets/logo-white.svg';
import twitter from '../../assets/twitter.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-electricblue">
      <div className="container mt-24">
        <div className="flex justify-between lg:items-center lg:flex-row sm:flex-col py-16">
          <div className="flex flex-row items-center">
            <div>
              <img src={logowhite} alt="" />
            </div>
            <div>
              <p className="text-white pl-4">
                © UX Analytic. All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <a className="text-white pl-4" href="/contact">
                contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
