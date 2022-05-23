import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TemperatureConverter from './TemperatureConverter';

test('Test temperature conversion value', () => {
  render(<TemperatureConverter />);
  const inputEl = screen.getByDisplayValue(/0/i);
  const outputEl = screen.getByText(/32/i);

  userEvent.type(inputEl, '10');
  expect(outputEl).toHaveTextContent(/50/i);
});
