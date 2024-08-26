import React from 'react';
import { render, screen } from '@testing-library/react';
import Support from '../components/Support';

describe('Support component', () => {
  it('renders "support" text', () => {
    render(<Support />);
    expect(screen.getByText('This is Support page!')).toBeInTheDocument();
  });
});