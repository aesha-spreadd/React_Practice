import React, { useState } from 'react';

function Services() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState(null);

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const calculateTotal = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setTotal(num1 + num2);
    } else {
      setTotal(null);
    }
  };

  return (
    <div>
      <h1>Number Total Calculator</h1>
      <div>
        <label>
          Enter Number 1:
          <input type="text" value={number1} onChange={handleNumber1Change} />
        </label>
      </div>
      <div>
        <label>
          Enter Number 2:
          <input type="text" value={number2} onChange={handleNumber2Change} />
        </label>
      </div>
      <button onClick={calculateTotal}>Calculate Total</button>
      {total !== null && <p>Total: {total}</p>}
    </div>
  );
}

export default Services;
