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
    getCart: builder.query({
      query: () => '/cart',
    }),
    getTotalDue: builder.query({
      query: () => '/totalDue',
    }),
    editTotalDue: builder.mutation({
      query: (newTotalDue) => ({
        url: '/totalDue',
        method: 'POST',
        body: newTotalDue,
      }),
    }),
    addToCart: builder.mutation({
      query: (product) => ({
        url: `/cart/${product.id}`,
        method: 'POST',
        body: product,
      }),
      invalidatesTags: () => [{ type: 'getCart' }],
    }),
  }),
});

export const {
  useGetPizzasQuery,
  useGetCartQuery,
  useGetTotalDueQuery,
  useEditTotalDueMutation,
  useGetAllowedValuesQuery,
  useAddToCartMutation,
} = apiSlice;
