import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';

import routes from './constants/routes';

import { LoginView, OAuth2View } from './views';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={LoginView} path={routes.LOGIN} />
        <Route component={OAuth2View} path={routes.OAUTH_CALLBACK} />
        <Route path={routes.HOME}>
          <div>{routes.HOME}</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
