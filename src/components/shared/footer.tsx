import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logowhite from '../../assets/logo-white.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-electricblue">
      <div className="container mt-24">
        <div className="flex justify-between lg:items-center lg:flex-row flex-col py-8">
          <div className="flex flex-row items-center my-2">
            <div>
              <img src={logowhite} alt="" />
            </div>
            <div>
              <p className="text-white pl-4 text-sm md:text-lg">
                © UX Analytic. All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center align-middle my-2">
            <div className="inline-block pr-4 py-2 mr-2 ">
              <span role="img">🤓</span>
              <a
                className="text-white pl-4 text-base md:text-lg"
                href="/contact"
              >
                contact us
              </a>
            </div>
            <div className="inline-block px-4 py-2 m-2">
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                color="white"
                size="2x"
              />
            </div>
            <div className="inline-block px-4 py-2 m-2">
              <FontAwesomeIcon
                icon={['fab', 'medium']}
                color="white"
                size="2x"
              />
            </div>
            <div className="inline-block px-4 py-2 m-2">
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                color="white"
                size="2x"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
