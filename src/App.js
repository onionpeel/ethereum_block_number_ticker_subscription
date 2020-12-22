import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subscribe());
  }, [dispatch]);

  return (
    <div>
      Boilerplate for redux with sagas
    </div>
  );
}

export default App;
