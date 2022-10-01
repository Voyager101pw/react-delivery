import { createSlice, createSelector } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    indexActiveCategory: 0,
    indexActiveSort: 0,
    categoryQuery: '',
    sortQuery: '',
  },
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
  (state) => state.filters,
  (filters) => filters,
);

export const selectActiveIndex = createSelector(
  (state) => state.filters.indexActiveCategory,
  (state) => state.filters.indexActiveSort,
  (indexActiveCategory, indexActiveSort) => ({ indexActiveCategory, indexActiveSort }),
);

export default filtersSlice.reducer;
