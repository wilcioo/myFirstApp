import { render, screen, fireEvent } from '@testing-library/react';
import AreaConverter from './AreaConverter';

test('renders Area Converter component', () => {
  render(<AreaConverter />);
  const headingElement = screen.getByText(/Area Converter/i);
  expect(headingElement).toBeInTheDocument();
});

test('converts area correctly', async () => {
  render(<AreaConverter />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText(/From unit/i), { target: { value: 'square meter' } });
  fireEvent.change(screen.getByLabelText(/To unit/i), { target: { value: 'square kilometer' } });
  fireEvent.click(screen.getByText(/Convert/i));
  const result = await screen.findByText(/Result:/);
  expect(result).toHaveTextContent('0.0001'); // Adjust based on your conversion logic
});
