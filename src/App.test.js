import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders img with alt Card image cap', () => {
  render(<App />);
  const img = screen.getByRole('img', {alt: "Card image cap"})
  expect(img).toBeInTheDocument();
});
