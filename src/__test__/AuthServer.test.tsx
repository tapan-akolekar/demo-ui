import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthServer from '../components/AuthServer';

describe('AuthServer  component', () => {
  it('renders "authServer" text', () => {
    render(<AuthServer />);
    expect(screen.getByText('This is Auth Server Page!')).toBeInTheDocument();
  });
});