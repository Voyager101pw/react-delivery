import { createSlice } from '@reduxjs/toolkit';

const filterModSlice = createSlice({
  name: 'filterMod',
  initialState: {
    selectedCategory: 0,
    selectedSort: 0,
  },
  reducers: {
    toggleCategory: (state, { payload: newSelectedCategory }) => {
      state.selectedCategory = newSelectedCategory;
    },
    toggleSort: (state, { payload: newSelectedSort }) => {
      state.selectedSort = newSelectedSort;
    },
  },
});

export const { toggleCategory, toggleSort } = filterModSlice.actions;
export default filterModSlice.reducer;
