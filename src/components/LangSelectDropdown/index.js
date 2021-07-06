import i18next from 'i18next';

// Bootstrap
import Dropdown from 'react-bootstrap/Dropdown';

// Utils
import languagesArray from '../../utils/languagesArray';

// Icons
import GlobeIconSVG from '../../assets/icons/globeIconSVG.js';

const LangSelectDropdown = ({ currentLanguageCode, translateFunction }) => (
  <div className="d-flex justify-content-end">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <GlobeIconSVG />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <span className="dropdown-item-text">
          {translateFunction('language')}
        </span>
        {languagesArray.map(({ code, name, countryCode }) => (
          <Dropdown.Item key={countryCode}>
            <li>
              <button
                className={'dropdown-item'}
                onClick={() => i18next.changeLanguage(code)}
                disabled={code === currentLanguageCode}
              >
                <span
                  className={`flag-icon flag-icon-${countryCode} mx-2`}
                  style={{
                    opacity: code === currentLanguageCode ? 0.5 : 1,
                  }}
                ></span>
                {name}
              </button>
            </li>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default LangSelectDropdown;
