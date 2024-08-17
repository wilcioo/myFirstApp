import { render, screen, fireEvent } from '@testing-library/react';
import VolumeConverter from './VolumeConverter';

test('renders Volume Converter component', () => {
  render(<VolumeConverter />);
  const headingElement = screen.getByText(/Volume Converter/i);
  expect(headingElement).toBeInTheDocument();
});

test('converts volume correctly', async () => {
  render(<VolumeConverter />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '1000' } });
  fireEvent.change(screen.getByLabelText(/From unit/i), { target: { value: 'liter' } });
  fireEvent.change(screen.getByLabelText(/To unit/i), { target: { value: 'gallon' } });
  fireEvent.click(screen.getByText(/Convert/i));
  const result = await screen.findByText(/Result:/);
  expect(result).toHaveTextContent('264.172'); // Adjust based on your conversion logic
});
