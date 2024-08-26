
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home component', () => {
  it('renders "home" text', () => {
    render(<Home />);
    expect(screen.getByText('This is Home Page !')).toBeInTheDocument();
  });
});