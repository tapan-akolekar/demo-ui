import React from 'react';
import { render, screen } from '@testing-library/react';
import Application from '../components/Application';

describe('Application component', () => {
  it('renders "application" text', () => {
    render(<Application />);
    expect(screen.getByText('This is application page!')).toBeInTheDocument();
  });
});