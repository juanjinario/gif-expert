import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GifGrid from './GifGrid';

describe('<GifGrid />', () => {
  test('it should show title', () => {
    render(<GifGrid />);
    
    const gifGridTitle = screen.getByTestId('GifGridTitle');
    const gifGridWrapper = screen.getByTestId('GifGridWrapper');

    expect(gifGridTitle).toBeInTheDocument();
    expect(gifGridWrapper).toBeInTheDocument();
  });
});