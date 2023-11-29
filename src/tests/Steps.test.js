import { render, screen } from '@testing-library/react';
import Steps from '../components/Steps';

test('renders img with alt Card image cap', () => {
  render(<Steps />)
  const cardImg = screen.getByAltText(/Card image cap/i)
  expect(cardImg).toBeInTheDocument();
});