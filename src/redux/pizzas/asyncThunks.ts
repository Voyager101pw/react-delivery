import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { pizzasURL } from '../routes';
import type { Pizzas } from './types';

export const fetchPizzas = createAsyncThunk<Pizzas>(
  'pizzas/fetchPizzas',
  async () => {
    const { data: pizzas } = await axios.get(pizzasURL);
    return pizzas;
  },
);
