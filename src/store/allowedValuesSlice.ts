import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '.';

interface AllowedValuesTypes {
  allowedTypes: string[];
  allowedSizes: number[];
  categories: string[];
  sort: string[];
}

export const fetchData = createAsyncThunk(
  'allowedValues/fetchData',
  async () => {
    const { data: allowedValues } = await axios.get<AllowedValuesTypes>(
      'http://localhost:5001/allowedValues',
    );
    return allowedValues;
  },
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
    builder.addCase(fetchData.fulfilled, (state, { payload: allowedValues }) => {
      Object.entries(allowedValues).forEach(
        ([name, values]): void => {
          state[name as keyof AllowedValuesTypes] = values;
        },
      );
    });
  },
  reducers: {},
});

export const selectAllowedValues = (state: RootState ) : AllowedValuesTypes => state.allowedValues;

export default allowedValuesSlice.reducer;
