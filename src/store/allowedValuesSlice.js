import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'allowedValues/fetchData',
  async () => {
    const { data: allowedValues } = await axios.get('http://localhost:5001/allowedValues');
    return allowedValues;
  },
);

const allowedValuesSlice = createSlice({
  name: 'allowedValues',
  initialState: {
    categories: [],
    sort: [],
    types: [],
    sizes: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const allowedValues = action.payload;
      Object.entries(allowedValues).forEach(([name, values]) => {
        state[name] = values;
      });
    });
  },
});

export default allowedValuesSlice.reducer;

export const selectAllowedValues = createSelector(
  (state, name) => state.allowedValues[name],
  (allowedValues) => allowedValues,
);
