import { configureStore } from '@reduxjs/toolkit';
import allowedValuesReducer from './allowedValuesSlice';
import filterModReducer from './filterModSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    allowedValues: allowedValuesReducer,
    filterMod: filterModReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  // Применяем мидлвары с логикой, которые создаются при использовании createApi
});
