import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { LoginView, OAuth2View } from '../views';

import routes from '../constants/routes';

const PublicRouter = () => (
  <Switch>
    <Route component={LoginView} path={routes.LOGIN} />
    <Route component={OAuth2View} path={routes.OAUTH_CALLBACK} />
    <Redirect from="/" to={routes.LOGIN} />
  </Switch>
);

export default PublicRouter;
