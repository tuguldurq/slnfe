import { render, screen } from '@testing-library/react';
import SalonCard from './Card';

test('Renders learn react link', () => {
  render(<SalonCard/>);
  const linkElement = screen.getByText(/Card title/);
  expect(linkElement).toMatchSnapshot();
});
