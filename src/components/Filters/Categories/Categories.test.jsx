import { screen, render, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import Categories from './Categories';
import * as actions from '../../../store/filtersSlice';

const mockState = {
  allowedValues: {
    categories: [
      'Все',
      'Мясные',
      'Вегетарианские',
      'Гриль',
      'Острые',
      'Закрытые',
    ],
  },
  filters: {
    activeCategory: 0,
  },
};

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedUseSeletor = jest.spyOn(reduxHooks, 'useSelector');
const mockSetActiveCategory = jest.spyOn(actions, 'setIndexActiveCategory');

describe('Corner cases', () => {
  it('List categories without items', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    mockedUseSeletor.mockImplementation(cb => cb({
      ...mockState,
      allowedValues: {
        categories: [],
      },
    }));
    
    render(<Categories />);
    expect(screen.queryByRole('list')).toBeNull();
  });
});


describe('Normal cases', () => {
  beforeEach(()=> {
    mockedDispatch.mockReturnValue(jest.fn());
    mockedUseSeletor.mockImplementation(
      cb => cb(mockState),
    );
    render(<Categories />);
  });

  it('Component "Categoriеs" has be render', () => {
    const length = mockState.allowedValues.categories.length;
    const categoriyItems = screen.getAllByRole('listitem');
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(categoriyItems).toHaveLength(length);
  });
  
  it('Category names should be displayed', () => {
    const { categories } = mockState.allowedValues;
    categories.forEach((categoryName) => {
      expect(screen.getByText(categoryName)).toBeInTheDocument();
    });
  });
  
  it('The "click" event should dispatch actions', () => {
    const btns = screen.getAllByRole('listitem');
    btns.forEach((btn, id) => {
      fireEvent.click(btn);
      expect(mockSetActiveCategory).toHaveBeenCalledWith(id);
    });
    expect(mockSetActiveCategory).toHaveBeenCalledTimes(btns.length);    
  });
});

