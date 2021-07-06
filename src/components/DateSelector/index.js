import { getTodaysDateInProperFormat } from '../../utils/helperFunctions';

const DateSelector = ({ lastAteDate, handleDateChange }) => (
  <input
    type="date"
    max={getTodaysDateInProperFormat()}
    value={lastAteDate}
    onChange={handleDateChange}
  />
);

export default DateSelector;
