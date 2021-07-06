import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => (
  <Container className="mt-3">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </Container>
);

export default LoadingSpinner;
