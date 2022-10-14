import { configureStore } from '@reduxjs/toolkit';
import allowedValuesReducer from './allowedValuesSlice';
import filterModReducer from './filtersSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    allowedValues: allowedValuesReducer,
    filters: filterModReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  // Применяем мидлвары с логикой, которые создаются при использовании createApi
});

export type RootState = ReturnType<typeof store.getState>;