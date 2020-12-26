import { Col } from 'react-bootstrap';
import { Block } from './Block';
import { useSelector } from 'react-redux';

export const BlockCol = () => {
  const blockArray = useSelector(state => state.blockArray);

  return (
   <Col className="block-container mx-auto" md={6}>
     {blockArray.map(block => (
       <Block blockNumber={block.number} key={block.number} />
     ))}
   </Col>
  );
};
