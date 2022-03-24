import { render, screen } from '@testing-library/react';
import App from "./App";

test('Renders learn react link', () => {
  const component = render(<App/>);
  const linkElement = component.getByTestId(/salon/i);
  expect(linkElement.textContent).toBe("There are many variations of passages of Lorem Ipsum available");

  screen.debug();
});
