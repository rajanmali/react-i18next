import PropTypes from 'prop-types';

// Utils/helperFunctions
import { getTodaysDateInProperFormat } from '../../utils/helperFunctions';

const DateSelector = ({ lastAteDate, handleDateChange }) => (
  <input
    type="date"
    max={getTodaysDateInProperFormat()}
    value={lastAteDate}
    onChange={handleDateChange}
  />
);

DateSelector.propTypes = {
  lastAteDate: PropTypes.string,
  handleDateChange: PropTypes.func,
};

export default DateSelector;
