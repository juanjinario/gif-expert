import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GifItem from './GifItem';

describe('<GifItem />', () => {

  const title= 'Un título';
  const url = 'https://media0.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=306c52b58wilr771cqrn24ml8ze1vxnqps0kolsjmeqmyqj9&rid=giphy.gif&ct=g';
  const initRender = () => { render(<GifItem title={ title } url={ url } />); };

  test('it should show a Gift Card', () => {
    initRender();
    const gifItem = screen.getByTestId('GifItem');
    expect(gifItem).toBeInTheDocument();
  });

  test('it should Card have a correct title', () => {
    initRender();
    const gifItem = screen.getByTestId('GifItemTitle');
    expect(gifItem).toHaveTextContent(title);
  });

});