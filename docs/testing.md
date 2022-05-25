---
description: Example of tests and how to write them
---

# Testing

Here is an example of a test for the Theme toggle button. When making a new test or spec you should place the test file in the same folder as the component itself.&#x20;

**ToggleThemeButton.test.tsx**

```
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleDarkModeButton from './ToggleThemeButton';

test('Test theme button toggle', () => {
  render(<ToggleDarkModeButton />);
  const buttonEl = screen.getByText(/🌙/i);

  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/🌞/i);
});

```

1. Import the component you wish to test (line 3)
2. call the render method on the component (line 4)
3. declare a const for which part of the component you want to test (line 7)
4. call the appropriate method for how you wish to test the component (line 9)
5. use expect with your expected result(line 10)
6. run 'npm test' to run your tests

See more [here](https://testing-library.com/docs/) in the testing library docs

