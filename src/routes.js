import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Vaccines from './pages/Vaccines';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vaccines" component={Vaccines} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
