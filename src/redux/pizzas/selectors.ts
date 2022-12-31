import type { RootState } from '../store';
import type { Pizzas } from './types';

export const selectPizzas = (state: RootState): Pizzas => state.pizzas.pizzas; // Ээээ БЛЭТ :))
