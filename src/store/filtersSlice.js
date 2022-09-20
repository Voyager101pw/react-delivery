/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/no-let */
import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const [fetchCategories, fetchSort] = ['Categories', 'Sort'].map((name) => createAsyncThunk(
  `filters/fetch${name}`,
  async () => {
    const { data } = await axios.get(`http://localhost:5001/allowed${name}`);
    return data;
  },
));

// const filtersAdapter = createEntityAdapter();

const initialState = {
  categories: {},
  idsCategories: [],
  selectedCategory: null,

  sort: {},
  idsSort: [],
  selectedSort: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      const newSelectedCategory = action.payload;
      state.selectedCategory = newSelectedCategory;
    },
    setSelectedSort: (state, action) => {
      const newSelectedSort = action.payload;
      state.selectedSort = newSelectedSort;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCategories.fulfilled, (state, { payload: categories }) => {
      for (let i = 0; i < categories.length; i += 1) {
        state.idsCategories.push(i);
        state.categories[i] = { id: i, name: categories[i] };
      }
    });
    builder.addCase(fetchSort.fulfilled, (state, { payload: sort }) => {
      for (let i = 0; i < sort.length; i += 1) {
        state.idsSort.push(i);
        state.sort[i] = { id: i, name: sort[i] };
      }
    });
  },
});

export const { setSelectedCategory, setSelectedSort } = filtersSlice.actions;

export default filtersSlice.reducer;
