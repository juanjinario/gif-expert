import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GifItem from './GifItem';

describe('<GifItem />', () => {
  test('it should mount', () => {
    render(<GifItem />);
    
    const gifItem = screen.getByTestId('GifItem');

    expect(gifItem).toBeInTheDocument();
  });
});