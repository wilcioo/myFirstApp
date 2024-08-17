import { render, screen, fireEvent } from '@testing-library/react';
import LengthConverter from './LengthConverter';

test('renders Length Converter', () => {
  render(<LengthConverter />);
  const linkElement = screen.getByText(/Length Converter/i);
  expect(linkElement).toBeInTheDocument();
});

test('converts length correctly', async () => {
  render(<LengthConverter />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '100' } });
  fireEvent.click(screen.getByText(/Convert/i));
  const result = await screen.findByText(/Result:/);
  expect(result).toHaveTextContent('0.1'); // Adjust according to conversion logic
});
