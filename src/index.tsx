import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';

import { Provider } from 'react-redux';

import { initReactI18next } from 'react-i18next';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import translations from './i18n';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translations.en },
      es: { translation: translations.es },
      'pt-BR': { translation: translations.ptBR },
    },
    lng: 'pt-BR',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
