import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: '/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5001/' }),
  tagTypes: ['getCart'],

  endpoints: (builder) => ({
    getPizzas: builder.query({
      query: () => '/pizzas',
    }),
    getAllowedValues: builder.query({
      query: (entity) => `/allowedValues${entity}`,
    }),
    getCartState: builder.query({
      query: () => '/cart',
      providesTags: () => [{ type: 'getCart' }],
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: '/cart',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [{ type: 'getCart' }],
    }),
  }),
});

export const {
  useGetPizzasQuery,
  useGetAllowedValuesQuery,
  useGetCartStateQuery,
  useAddToCartMutation,
} = apiSlice;
