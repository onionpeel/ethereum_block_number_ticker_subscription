import { Spinner, Col } from 'react-bootstrap';

export const SpinnerCol = () => (
  <Col className="spinner mx-auto" md={6}>
    <div>
      <div className="d-flex justify-content-center">
        <Spinner
          animation="border"
          variant="dark"
          role="loading"
        />
      </div>
      <div className="d-flex justify-content-center">
        Loading blocks...
      </div>
    </div>

  </Col>
);
