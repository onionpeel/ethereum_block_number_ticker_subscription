import { Row } from 'react-bootstrap';
import { BlockCol } from './BlockCol';
import { SpinnerCol } from './SpinnerCol';
import { useSelector } from 'react-redux';

export const BlockRow = () => {
  const isLoading = useSelector(state => state.isLoading);

  const checkLoading = () => isLoading ? <SpinnerCol /> : <BlockCol />

  return (
      <Row>
        {checkLoading()}
      </Row>
  );
};
