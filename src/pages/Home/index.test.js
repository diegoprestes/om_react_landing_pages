import { render, screen } from '@testing-library/react';
import Home from './';

test('renders learn sample text', () => {
  render(<Home />);
  const sampleElement = screen.getByText(/Ola/i);
  expect(sampleElement).toBeInTheDocument();
});
