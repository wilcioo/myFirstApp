import React, { useState } from 'react';
import axios from 'axios';

function AreaConverter() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleConvert = async () => {
    try {
      const response = await axios.post('http://localhost:5000/convert/area', {
        fromUnit: 'squareMeter', // Replace with selected units
        toUnit: 'hectare',
        value: inputValue,
      });
      setOutputValue(response.data.result);
    } catch (error) {
      console.error('Error converting area:', error);
    }
  };

  return (
    <div>
      <h2>Area Converter</h2>
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

export default AreaConverter;
