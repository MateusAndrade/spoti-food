import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { ProfileView, PlaylistsView } from '../views';

import routes from '../constants/routes';

const PrivateRouter = () => (
  <Switch>
    <Route component={PlaylistsView} path={routes.PLAYLISTS} />
    <Route path={routes.ME} component={ProfileView} />
    <Redirect from="/" to={routes.PLAYLISTS} />
  </Switch>
);

export default PrivateRouter;
