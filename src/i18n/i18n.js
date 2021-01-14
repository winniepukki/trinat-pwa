import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationLV from './locales/lv/translation';
import translationRU from './locales/ru/translation';

const resources = {
  lv: {
    translation: translationLV
  },
  ru: {
    translation: translationRU
  }
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'lv',
  // Ensure the debugging mode is set to *false* in production
  debug: false,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  }
})
  .then(() => {});

export default i18n;
