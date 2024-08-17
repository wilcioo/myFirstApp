import React, { useState } from 'react';
import axios from 'axios';

function CurrencyConverter() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleConvert = async () => {
    try {
      const response = await axios.post('http://localhost:5000/convert/currency', {
        fromCurrency: 'USD', // Replace with selected currencies
        toCurrency: 'EUR',
        value: inputValue,
      });
      setOutputValue(response.data.result);
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      <p>Result: {outputValue}</p>
    </div>
  );
}

export default CurrencyConverter;
