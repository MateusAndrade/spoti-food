import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detectLanguage from 'i18next-browser-languagedetector';

import en from './en';
import ptBR from './pt-br';
import es from './es';

i18n
  .use(detectLanguage)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      'pt-BR': { translation: ptBR },
    },
    lng: 'pt-BR',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
