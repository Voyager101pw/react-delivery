import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import mockdata from '../mock/data.json';

const sizesSlice = createSlice({
  name: 'sizes',
  initialState: mockdata.sizes,
  reducers: {},
});

export const selectSizes = (state: RootState): number[] => state.sizes;

export default sizesSlice.reducer;
