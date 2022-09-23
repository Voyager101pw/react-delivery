import { createSlice, createSelector } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    categoryFilter: '',
    sortFilter: '',
  },
  reducers: {
    toggleCategory: (state, { payload: numberCategory }) => {
      state.categoryFilter = numberCategory ? `category=${numberCategory}&` : '';
    },
    toggleSort: (state, { payload: numberSort }) => {
      switch (numberSort) {
        case 0: {
          state.sortFilter = '_sort=rating&_order=desc';
          break;
        }
        case 1: {
          state.sortFilter = '_sort=rating';
          break;
        }
        case 2: {
          state.sortFilter = '_sort=price&_order=desc';
          break;
        }
        case 3: {
          state.sortFilter = '_sort=price';
          break;
        }
        case 4: {
          state.sortFilter = '_sort=name&_order=desc';
          break;
        }
        default: {
          state.sortFilter = '_sort=name';
          break;
        }
      }
    },
  },
});

export const { toggleCategory, toggleSort } = filtersSlice.actions;

export const selectFilters = createSelector(
  (state) => state.filters,
  (filters) => filters,
);

export default filtersSlice.reducer;
