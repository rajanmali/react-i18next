import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Utils
import languageDetectorOptions from './utils/languageDetectorOptions';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
        },
      },
      fr: {
        translation: {
          'Welcome to React': 'Bienvenue a React et react-i18next',
        },
      },
    },
    detection: languageDetectorOptions,
    fallbackLng: 'en',
  });

const App = () => {
  const { t } = useTranslation();
  return <h2>{t('Welcome to React')}</h2>;
};

export default App;
