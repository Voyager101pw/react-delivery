import { createSlice } from '@reduxjs/toolkit';
import { PizzasSliceState, Status } from './types';
import { fetchPizzas } from './asyncThunks';

const initialState: PizzasSliceState = {
  pizzas: [],
  status: Status.IDLE,
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export default pizzasSlice.reducer;
