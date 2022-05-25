import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleThemeButton } from './index';

test('Test theme button toggle', () => {
  render(<ToggleThemeButton />);
  const buttonEl = screen.getByText(/🌙/i);

  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/🌞/i);
});
