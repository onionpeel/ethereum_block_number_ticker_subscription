import { Navbar, Nav} from 'react-bootstrap';

export const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-3">
    <Navbar.Brand href="#home" className="mr-auto">
      Ethereum block number ticker
    </Navbar.Brand>
    <Nav>
      <Nav.Link href="https://github.com/onionpeel/ethereum_block_number_ticker_subscription">
        Github
      </Nav.Link>
    </Nav>
  </Navbar>
);
