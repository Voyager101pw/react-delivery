import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import pizzas from './pizzas/slice';
import cart from './cart/slice';
import categories from './categories/slice';
import sorts from './sorts/sorts';
import sizes from './sizes/sizes';
import types from './types/slice';

export const store = configureStore({
  reducer: {
    pizzas,
    cart,
    categories,
    sorts,
    sizes,
    types,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Используйте во всем приложении вместо простых `useDispatch` и `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
