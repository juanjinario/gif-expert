import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddCategory from './AddCategory';
import userEvent from '@testing-library/user-event';

describe('<AddCategory />', () => {

  const setCategoriesList = jest.fn();
  const initRender = () => render(<AddCategory setCategoriesList={ setCategoriesList }/>);

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('it should show category form', () => {
    initRender();
    const addCategory = screen.getByTestId('categoryForm');
    expect(addCategory).toBeInTheDocument();
  });

  test('it should call to setCategoriesList if user digit a category', async () => {
    initRender();
    const categoryForm = screen.getByTestId('categoryForm');
    const categoryInput = screen.getByTestId('categoryInput');
    userEvent.type(categoryInput, "Mojica");
    // userEvent.type(input, "abc{enter}");
    await fireEvent.submit(categoryForm);
    expect(setCategoriesList).toHaveBeenCalled();
  });
});