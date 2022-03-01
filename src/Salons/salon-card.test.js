import { render, screen } from '@testing-library/react';
import SalonCard from './salon-card';

const salonList = [
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
]

test('Renders learn react link', () => {
  render(<SalonCard  salons={salonList}/>);
  const a = screen.findAllByRole('button');
  expect(a).toHaveLength(1);
});
