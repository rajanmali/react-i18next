import Card from 'react-bootstrap/Card';
import DateSelector from '../DateSelector/index';

// Utils
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

export default InformationCard;
