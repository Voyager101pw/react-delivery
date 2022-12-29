import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '..';

export interface IPizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}
type Pizzas = IPizza[];

enum FetchStatus {
  IDLE = 'Idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAIL = 'fail',
}

interface InitialState {
  pizzas: IPizza[];
  status: FetchStatus;
}

const initialState: InitialState = {
  pizzas: [],
  status: FetchStatus.IDLE,
};

export const fetchPizzas = createAsyncThunk<Pizzas>(
  'pizzas/fetchPizzas',
  async () => {
    const url = 'https://639e03343542a26130552410.mockapi.io/pizzas';
    const res = await axios.get(url);
    return res.data;
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCESS;
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = FetchStatus.FAIL;
      });
  },
});

export const selectPizzas = (state: RootState): Pizzas => state.pizzas.pizzas; // Ээээ БЛЭТ :))

export default pizzasSlice.reducer;
