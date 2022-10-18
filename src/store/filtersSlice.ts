import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FiltersSliceState {
  activeCategory: number;
  activeSort: number;
  categoryQuery: string;
  sortQuery: string;
}

const initialState: FiltersSliceState = {
  activeCategory: 0,
  activeSort: 0,
  categoryQuery: '',
  sortQuery: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setIndexActiveCategory: (state, { payload: newIndex }) => {
      state.activeCategory = newIndex;
    },
    setIndexActiveSort: (state, { payload: newIndex }) => {
      state.activeSort = newIndex;
    },
    setCategoryQuery: (state, { payload: numberCategory }) => {
      state.categoryQuery = numberCategory ? `category=${numberCategory}&` : '';
    },
    setSortQuery: (state, { payload: numberSort }) => {
      switch (numberSort) {
        case 0: {
          state.sortQuery = '_sort=rating&_order=desc';
          break;
        }
        case 1: {
          state.sortQuery = '_sort=rating';
          break;
        }
        case 2: {
          state.sortQuery = '_sort=price&_order=desc';
          break;
        }
        case 3: {
          state.sortQuery = '_sort=price';
          break;
        }
        case 4: {
          state.sortQuery = '_sort=name&_order=desc';
          break;
        }
        default: {
          state.sortQuery = '_sort=name';
          break;
        }
      }
    },
  },
});

export const {
  setCategoryQuery, setSortQuery, setIndexActiveCategory, setIndexActiveSort,
} = filtersSlice.actions;

export const selectQuery = createSelector(
  (state: RootState) => state.filters,
  (filters) => filters,
);

export const selectActiveCategory = (state: RootState): number => state.filters.activeCategory;
export const selectActiveSort = (state: RootState): number => state.filters.activeSort;

export default filtersSlice.reducer;
