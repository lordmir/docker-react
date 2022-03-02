import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hase', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hase/i);
  expect(linkElement).toBeInTheDocument();
});
