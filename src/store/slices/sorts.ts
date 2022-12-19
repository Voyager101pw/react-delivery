import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
import mockdata from '../mock/data.json';

const initialState = {
  values: mockdata.sorts,
  indexActivSort: 0,  
};

const sortsSlice = createSlice({
  name: 'sorts',
  initialState,
  reducers: {
    setActiveSort: (state, { payload: newIndex }) => {
      state.indexActivSort = newIndex;
    },
  },
});

// Reducer
export default sortsSlice.reducer;

// Actions
export const { setActiveSort } = sortsSlice.actions;

// Selectors
export const selectSortNames = (state: RootState): string[] => state.sorts.values;

export const selectIndexActiveSort = (state: RootState): number => state.sorts.indexActivSort;
