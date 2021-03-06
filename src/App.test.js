import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
test('Renders learn react link', () => {
  const el = (<BrowserRouter> 
                <Routes>
                  <Route path="/" element={<Home/>}/>
                </Routes>
              </BrowserRouter>)
  const component = render(el);
  const linkElement = component.getByTestId(/salon/i);
  expect(linkElement.textContent).toBe("Онлайн-д суурилсан \"САЛОН\" захиалгын систем");

  screen.debug();
});
