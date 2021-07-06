import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

// Components
import LangSelectDropdown from './components/LangSelectDropdown';
import InformationCard from './components/InformationCard';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Utils
import languagesArray from './utils/languagesArray';
import { findDateDifference } from './utils/helperFunctions';

const App = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en';

  const currentLanguage = languagesArray.find(
    (language) => language.code === currentLanguageCode
  );

  const { t } = useTranslation();
  const numberOfDays = findDateDifference();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);

  return (
    <Container className="mt-3">
      <LangSelectDropdown
        currentLanguageCode={currentLanguageCode}
        translateFunction={t}
      />
      <InformationCard number_of_days={numberOfDays} translateFunction={t} />
    </Container>
  );
};

export default App;
