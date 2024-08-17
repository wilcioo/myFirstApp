import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CurrencyConverter from './CurrencyConverter';
import axios from 'axios';

// Mock axios
jest.mock('axios');

test('renders Currency Converter component', () => {
  render(<CurrencyConverter />);
  const headingElement = screen.getByText(/Currency Converter/i);
  expect(headingElement).toBeInTheDocument();
});

test('converts currency correctly', async () => {
  // Mock API response
  axios.get.mockResolvedValue({ data: { rates: { USD: 1, EUR: 0.85 } } });
  
  render(<CurrencyConverter />);
  
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText(/From currency/i), { target: { value: 'USD' } });
  fireEvent.change(screen.getByLabelText(/To currency/i), { target: { value: 'EUR' } });
  fireEvent.click(screen.getByText(/Convert/i));

  // Wait for the result to appear
  const result = await waitFor(() => screen.getByText(/Result:/));
  expect(result).toHaveTextContent('85'); // Adjust based on mock data
});
