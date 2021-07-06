/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

// Utils
import languagesArray from './utils/languagesArray';
import { findDateDifference } from './utils/helperFunctions';

// Icons
import GlobeIconSVG from './assets/icons/globeIconSVG.js';

const App = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languagesArray.find(
    (language) => language.code === currentLanguageCode
  );

  useEffect(() => {
    document.body.direction = currentLanguage.dir || 'ltr';
  }, [currentLanguage]);

  const { t } = useTranslation();
  const number_of_days = findDateDifference();

  return (
    <Container className="mt-3">
      <div className="d-flex justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <GlobeIconSVG />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {languagesArray.map(({ code, name, countryCode }) => (
              <Dropdown.Item key={countryCode}>
                <li>
                  <button
                    className={'dropdown-item'}
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    <span
                      className={`flag-icon flag-icon-${countryCode} mx-2`}
                    ></span>
                    {name}
                  </button>
                </li>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
        <p>{t('days_since_eaten', { number_of_days })}</p>
      </div>
    </Container>
  );
};

export default App;
