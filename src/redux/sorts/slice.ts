import { createSlice } from '@reduxjs/toolkit';

const sortsSlice = createSlice({
  name: 'sorts',
  initialState: {
    values: [
      'популярности (DESC)',
      'популярности (ASC)',
      'цене (DESC)',
      'цене (ASC)',
      'алфавиту (DESC)',
      'алфавиту (ASC)',
    ],
    indexActivSort: 0,
  },
  reducers: {
    setActiveSort: (state, { payload: newIndex }) => {
      state.indexActivSort = newIndex;
    },
  },
});

export const { setActiveSort } = sortsSlice.actions;
export default sortsSlice.reducer;
