import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Beauties/);
  expect(linkElement).toMatchSnapshot();
});
