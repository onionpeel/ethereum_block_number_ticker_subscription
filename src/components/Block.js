import Card from 'react-bootstrap/Card';

export const Block = ({blockNumber}) => (
  <Card className="block">
      <Card.Text className="block-number">
        {blockNumber}
      </Card.Text>
  </Card>
);
