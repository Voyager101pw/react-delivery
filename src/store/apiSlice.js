import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: '/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5001/' }),
  endpoints: (builder) => ({
    getState: builder.query({
      query: () => '/db',
    }),
    getPizzas: builder.query({
      query: () => '/pizzas',
    }),
    getAllowedValues: builder.query({
      query: (entity) => `/allowedValues${entity}`,
    }),
    getCartState: builder.query({
      query: () => '/cart',
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: '/cart',
        method: 'UPDATE',
        body,
      }),
    }),
  }),
});

export const {
  useGetStateQuery,
  useGetPizzasQuery,
  useGetAllowedValuesQuery,
  useGetCartStateQuery,
  useAddToCartMutation,
} = apiSlice;
