import { createSlice } from '@reduxjs/toolkit';

const typesSlice = createSlice({
  name: 'types',
  initialState: ['тонкая', 'традиционная', 'итальянская'],
  reducers: {},
});

export default typesSlice.reducer;
