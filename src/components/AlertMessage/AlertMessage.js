import React from 'react';
import { Alert } from '@mui/material';

const AlertMessage = ({ alertName }) => {

  const alertsValueMap = {
    true: "success",
    false: "error"
  }

  return (
    <Alert
      className='alert'
      severity={alertsValueMap[alertName]}
    >
      {alertName ? "Payment successfully!" : "Payment failed!"}

    </Alert>
  );
}

export default AlertMessage;
