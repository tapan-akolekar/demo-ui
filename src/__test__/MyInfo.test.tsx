import React from 'react';
import { render, screen } from '@testing-library/react';
import MyInfo from '../components/MyInfo';

describe('MyInfo component', () => {
  it('renders "myInfo" text', () => {
    render(<MyInfo />);
    expect(screen.getByText('This is My Info Page!')).toBeInTheDocument();
  });
});