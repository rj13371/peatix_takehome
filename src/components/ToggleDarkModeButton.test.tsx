import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleDarkModeButton } from './ToggleDarkModeButton';

test('Test theme button toggle', () => {
  render(<ToggleDarkModeButton />);
  const buttonEl = screen.getByText(/🌙/i);

  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/🌞/i);
});
