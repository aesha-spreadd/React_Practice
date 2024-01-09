import React, { useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
} from '@chakra-ui/react';

const Home = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon style={{ width: '20px', height: '20px' }} />
          There was an error processing your request
        </Alert>

        <Alert status="success">
          <AlertIcon style={{ width: '20px', height: '20px' }} />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="warning">
          <AlertIcon style={{ width: '20px', height: '20px' }} />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status="info">
          <AlertIcon style={{ width: '20px', height: '20px' }} />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color, margin: '20px 0 0' }}
      >
        Click {count} times
      </button>
      <p style={{ color }}>I am {color} color</p>
    </div>
  );
};

export default Home;
