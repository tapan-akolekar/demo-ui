import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';


describe('Header component', () => {
  it('renders the header title', () => {
    render(<Header />);
    expect(screen.getByText('Simple Header')).toBeInTheDocument();
  });

  it('renders the navigation menu', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the dropdown menu', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: 'Application' })).toBeInTheDocument();
  });
 
});