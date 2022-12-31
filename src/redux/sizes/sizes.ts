import { createSlice } from '@reduxjs/toolkit';

const sizesSlice = createSlice({
  name: 'sizes',
  initialState: [26, 30, 40],
  reducers: {},
});

export default sizesSlice.reducer;
