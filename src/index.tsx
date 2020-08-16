import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './App';

import createStore from './store';

import i18n from './i18n';

const { store, persistor } = createStore();

i18n.init();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
