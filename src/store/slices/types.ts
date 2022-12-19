import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import mockdata from '../mock/data.json';

const typesSlice = createSlice({
  name: 'types',
  initialState: mockdata.types,
  reducers: {},
});

export const selectTypes = (state:RootState): string[] => state.types;

export default typesSlice.reducer;
