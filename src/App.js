/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

// Utils
import { languagesArray } from './utils/languagesArray';
import { findDateDifference } from './utils/helperFunctions';

const App = () => {
  const { t } = useTranslation();
  const number_of_days = findDateDifference();

  return (
    <Container>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
        <p>{t('days_since_eaten', { number_of_days })}</p>
      </div>
      <div className="d-flex justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {languagesArray.map(({ code, name, countryCode }) => (
              <Dropdown.Item>
                <li key={countryCode}>
                  <button className={'dropdown-item'}>
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
    </Container>
  );
};

export default App;
