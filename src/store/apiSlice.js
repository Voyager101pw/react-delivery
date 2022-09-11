import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: '/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5001/' }),
  endpoints: (builder) => ({
    getPizzas: builder.query({
      query: () => '/pizzas',
    }),
    getAllowedValues: builder.query({
      query: (entity) => `/allowedValues${entity}`,
    }),
  }),
});

export const {
  useGetPizzasQuery,
  useGetAllowedValuesQuery,
} = apiSlice;
