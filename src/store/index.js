import { configureStore } from '@reduxjs/toolkit';
import allowedValuesReducer from './allowedValuesSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    allowedValues: allowedValuesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  // Применяем мидлвары с логикой, которые создаются при использовании createApi
});
