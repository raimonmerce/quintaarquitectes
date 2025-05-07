import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationCAT from './locales/cat/translation.json';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Define the resources
const resources = {
    cat: {
        translation: translationCAT
    },
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    }
};

// Initialize i18next
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    fallbackLng: 'cat',
    interpolation: {
    escapeValue: false
    }
});

export default i18n;