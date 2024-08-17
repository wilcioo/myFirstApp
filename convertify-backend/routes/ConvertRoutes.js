const express = require('express');
const router = express.Router();

// Define the conversion logic for different units
const convertLength = (fromUnit, toUnit, value) => {
  const conversionRates = {
    meter: 1,
    kilometer: 1000,
    mile: 1609.34,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254,
    // Add other units and their conversion rates
  };
  return (value * conversionRates[fromUnit]) / conversionRates[toUnit];
};

router.post('/length', (req, res) => {
  const { fromUnit, toUnit, value } = req.body;
  const convertedValue = convertLength(fromUnit, toUnit, value);
  res.json({ result: convertedValue });
});

// Add routes for other conversions (e.g., area, volume) similarly

const axios = require('axios');

const convertCurrency = async (fromCurrency, toCurrency, value) => {
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const rates = response.data.rates;
    return (value * rates[toCurrency]);
  } catch (error) {
    throw new Error('Error fetching exchange rates');
  }
};

router.post('/currency', async (req, res) => {
  const { fromCurrency, toCurrency, value } = req.body;
  try {
    const convertedValue = await convertCurrency(fromCurrency, toCurrency, value);
    res.json({ result: convertedValue });
  } catch (error) {
    res.status(500).send('Error converting currency');
  }
});

// Volume Conversion Logic
const convertVolume = (fromUnit, toUnit, value) => {
    const conversionRates = {
      liter: 1,
      milliliter: 0.001,
      gallon: 3.78541,
      cubicMeter: 1000,
      cubicFoot: 28.3168,
      cubicInch: 0.0163871,
      // Add more units as needed
    };
  
    return (value * conversionRates[fromUnit]) / conversionRates[toUnit];
  };
  
  router.post('/volume', (req, res) => {
    const { fromUnit, toUnit, value } = req.body;
    const convertedValue = convertVolume(fromUnit, toUnit, value);
    res.json({ result: convertedValue });
  });
  

module.exports = router;
