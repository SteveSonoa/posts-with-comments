import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders page title', () => {
  render(<App />, {
    wrapper: MemoryRouter
  });
  const linkElement = screen.getByText(/My Wonderful Blog/i);
  expect(linkElement).toBeInTheDocument();
});
