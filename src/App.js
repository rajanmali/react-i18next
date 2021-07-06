import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Utils
import languageDetectorOptions from './utils/languageDetectorOptions';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detect the browser language automatically
  .use(HttpApi) // load resources from a translation.json files
  .init({
    fallbackLng: 'en',
    detection: languageDetectorOptions,
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  });

const App = () => {
  const { t } = useTranslation();
  return <h2>{t('welcome_to_react')}</h2>;
};

export default App;
