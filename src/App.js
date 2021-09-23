import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';

export const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
);