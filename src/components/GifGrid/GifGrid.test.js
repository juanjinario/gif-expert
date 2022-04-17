import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GifGrid from './GifGrid';

describe('<GifGrid />', () => {
  test('it should mount', () => {
    render(<GifGrid />);
    
    const gifGrid = screen.getByTestId('GifGrid');

    expect(gifGrid).toBeInTheDocument();
  });
});