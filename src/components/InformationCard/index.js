import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

// Components
import DateSelector from '../DateSelector/index';

// Utils/helperFunctions
import { getUserImage } from '../../utils/helperFunctions';

const InformationCard = ({
  number_of_days,
  lastAteDate,
  handleDateChange,
  translateFunction,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={getUserImage(number_of_days)} />
      <Card.Body>
        <Card.Title>{translateFunction('welcome_message')}</Card.Title>
        <Card.Text>
          {translateFunction('days_since_eaten', { number_of_days })}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <DateSelector
          lastAteDate={lastAteDate}
          handleDateChange={handleDateChange}
        />
      </Card.Footer>
    </Card>
  );
};

InformationCard.propTypes = {
  number_of_days: PropTypes.number,
  lastAteDate: PropTypes.string,
  handleDateChange: PropTypes.func,
  translateFunction: PropTypes.func,
};

export default InformationCard;
