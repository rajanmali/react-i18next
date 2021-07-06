/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

// Components
import LangSelectDropdown from './components/LangSelectDropdown';
import InformationCard from './components/InformationCard';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Utils
import languagesArray from './utils/languagesArray';

// Utils/helperFunctions
import {
  findDateDifference,
  getTodaysDateInProperFormat,
} from './utils/helperFunctions';

const App = () => {
  const [lastAteDate, setLastAteDate] = useState(getTodaysDateInProperFormat());
  const [numberOfDays, setNumberOfDays] = useState(0);

  const currentLanguageCode = cookies.get('i18next') || 'en';

  const currentLanguage = languagesArray.find(
    (language) => language.code === currentLanguageCode
  );

  const { t } = useTranslation();
  useEffect(() => {
    findDateDifference(lastAteDate);
  }, []);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);

  useEffect(() => {
    setNumberOfDays(findDateDifference(lastAteDate));
  }, [lastAteDate]);

  const handleDateChange = (event) => {
    setLastAteDate(event.target.value);
  };

  return (
    <Container className="mt-3">
      <LangSelectDropdown
        currentLanguageCode={currentLanguageCode}
        translateFunction={t}
      />
      <InformationCard
        number_of_days={numberOfDays}
        lastAteDate={lastAteDate}
        handleDateChange={handleDateChange}
        translateFunction={t}
      />
    </Container>
  );
};

export default App;
