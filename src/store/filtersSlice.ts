import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FiltersSliceState {
  indexActiveCategory: number;
  indexActiveSort: number;
  categoryQuery: string;
  sortQuery: string;
}

const initialState: FiltersSliceState = {
  indexActiveCategory: 0,
  indexActiveSort: 0,
  categoryQuery: '',
  sortQuery: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setIndexActiveCategory: (state, { payload: newIndex }) => {
      state.indexActiveCategory = newIndex;
    },
    setIndexActiveSort: (state, { payload: newIndex }) => {
      state.indexActiveSort = newIndex;
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

export const selectActiveIndex = createSelector(
  (state: RootState) => state.filters.indexActiveCategory,
  (state: RootState) => state.filters.indexActiveSort,
  (indexActiveCategory, indexActiveSort) => ({ indexActiveCategory, indexActiveSort }),
);

export default filtersSlice.reducer;
