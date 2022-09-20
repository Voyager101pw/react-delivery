import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  // Применяем мидлвары с логикой, которые создаются при использовании createApi
});
