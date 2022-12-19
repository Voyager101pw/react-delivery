import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import mockdata from '../mock/data.json';

const initialState = {
  values: mockdata.categories,
  indexActiveCategory: 0,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (
      state,
      { payload: newIndex }: PayloadAction<number>,
    ) => {
      state.indexActiveCategory = newIndex;
    },
  },
});

// Reducer
export default categoriesSlice.reducer;

// Actions
export const { setActiveCategory } = categoriesSlice.actions;

// Selectors
export const selectCategoryNames = (state: RootState): string[] =>
  state.categories.values;
export const selectIndexActiveCategory = (state: RootState): number =>
  state.categories.indexActiveCategory;
