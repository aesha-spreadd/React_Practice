import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        Click {count} times
      </button>
      <p style={{ color }}>I am {color} color</p>
    </div>
  );
};

export default Home;
