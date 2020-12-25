import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadBlocks } from './redux/actions/isLoadingActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlocks());
  }, [dispatch]);

  return (
    <div>
      Boilerplate for redux with sagas
    </div>
  );
}

export default App;
