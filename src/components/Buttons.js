import { Spinner, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { pause, resume } from '../redux/actions/isPausedActions';

export const Buttons = () => {
const isPaused = useSelector(state => state.isPaused);
const dispatch = useDispatch();

  return (
    <Row>
      <Col className="mx-auto mb-2" md={6}>
        <div className="d-flex justify-content-center">
          {
            !isPaused ?
              <Button
                className="shadow-none"
                variant="pause-button-variant"
                onClick={() => dispatch(pause())}
              >
                Pause incoming blocks
              </Button>
              :
              <Button
                className="resume-button shadow-none"
                variant="resume-button-variant"
                onClick={() => dispatch(resume())}
              >
                <Spinner
                  as="span"
                  animation="border"
                  variant="secondary"
                  size="sm"
                  role="paused"
                  aria-hidden="true"
                />
                <span> Resume</span>
              </Button>
          }
        </div>
      </Col>
    </Row>
  );
};
