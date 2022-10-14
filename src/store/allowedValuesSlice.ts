import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface AllowedValuesTypes {
  allowedTypes: string[];
  allowedSizes: number[];
  categories: string[];
  sort: string[];
}

export const fetchData = createAsyncThunk(
  'allowedValues/fetchData',
  async () => {
    const response = await axios.get(
      'http://localhost:5001/allowedValues'
    );
    const allowedValues: AllowedValuesTypes = response.data;
    return allowedValues;
  }
);


const initialState: AllowedValuesTypes = {
  allowedTypes: [],
  allowedSizes: [],
  categories: [],
  sort: [],
};

const allowedValuesSlice = createSlice({
  name: 'allowedValues',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, { payload: allowedValues }: { payload: AllowedValuesTypes}) => {
      Object.entries(allowedValues).forEach(
        ([name, values]: [string, any[]]): void => {
          state[name as keyof AllowedValuesTypes] = values;
        }
      );
    });
  },
  reducers: {},
});

export default allowedValuesSlice.reducer;
