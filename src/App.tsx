import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import routes from './constants/routes';

import { LoginView, OAuth2View } from './views';

import * as selectors from './store/reducers/selectors';

function App() {
  const authenticated = useSelector(selectors.isUserAuthenticated);

  return (
    <Router>
      <Switch>
        <Route component={LoginView} path={routes.LOGIN} />
        <Route component={OAuth2View} path={routes.OAUTH_CALLBACK} />
        {authenticated ? (
          <Route path={routes.HOME}>
            <div>{routes.HOME}</div>
          </Route>
        ) : (
          <Redirect to={routes.LOGIN} from={routes.HOME} />
        )}
      </Switch>
    </Router>
  );
}

export default App;
