/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/" />
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;
