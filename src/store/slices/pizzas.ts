import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import mockdata from '../mock/data.json';

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

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: mockdata.pizzas,
  reducers: {},
});

export const selectPizzas = (state: RootState):IPizza[] => state.pizzas; 


export default pizzasSlice.reducer;
