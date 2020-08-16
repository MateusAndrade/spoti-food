import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { ProfileView } from '../views';
import routes from '../constants/routes';

const PrivateRouter = () => (
  <Switch>
    <Route path={routes.PLAYLISTS}>
      <div>{routes.PLAYLISTS}</div>
    </Route>
    <Route path={routes.ME} component={ProfileView} />
    <Redirect from="/" to={routes.ME} />
  </Switch>
);

export default PrivateRouter;
