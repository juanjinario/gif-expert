import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GifExpertApp from './GifExpertApp';

describe('<GifExpertApp />', () => {
  test('it should mount', () => {
    render(<GifExpertApp />);
    
    const gifExpertApp = screen.getByTestId('GifExpertApp');

    expect(gifExpertApp).toBeInTheDocument();
  });
});