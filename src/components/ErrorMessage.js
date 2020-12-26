import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { clearError } from '../redux/actions/errorAction';

export const ErrorMessage = ({error}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleOnClose = () => {
    setShow(false);
    dispatch(clearError());
  };

  if (show) {
    return (
      <Alert variant="danger" onClose={() => handleOnClose()} dismissible>
        <Alert.Heading>Error</Alert.Heading>
        <p>
          {error}
        </p>
      </Alert>
    );
  };
  return <></>;
};
