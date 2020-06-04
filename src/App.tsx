import React from 'react';

// import ReactGA from 'react-ga';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './Landing/components/shared/navbar';
import { Main } from './Landing/pages/main';
import { Footer } from './Landing/components/shared/footer';
import { Auth } from './Auth/Auth';

import './styles/tailwind.css';

library.add(fab);

// ReactGA.initialize('UA-00000-1');
export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="backgroundn">
              <Navbar />
              <Main />
              <Footer />
            </div>
          </Route>
          <Route path="/signin" exact>
            <Auth />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
