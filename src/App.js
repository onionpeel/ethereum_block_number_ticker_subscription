import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBlocks } from './redux/actions/isLoadingActions';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { BlockRow } from './components/BlockRow';
import { Buttons } from './components/Buttons';
import { ErrorMessage } from './components/ErrorMessage';

function App() {
  const dispatch = useDispatch();
  let error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(loadBlocks());
  }, [dispatch]);


  return (
    <div className="app">
      <Header />
      <h5 className="explanation mb-3">
        A running ticker of the ten most recent blocks mined on Ethereum
      </h5>
      <Container>
        {
          error ?
            <ErrorMessage error={error}/>
            :
            <div>
              <Buttons />
              <BlockRow />
            </div>
        }
      </Container>
    </div>
  );
}

export default App;
