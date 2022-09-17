import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: '/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5001/' }),
  tagTypes: ['getCart', 'getTotalDue'],

  endpoints: (builder) => ({
    getPizza: builder.query({
      query: (id) => `/pizzas/${id}`,
    }),
    getPizzas: builder.query({
      query: () => '/pizzas',
    }),
    getCart: builder.query({
      query: () => '/cart',
      providesTags: (res = []) => [
        'getCart',
        ...res.map((pizza) => ({ type: 'getCart', id: pizza.id })),
      ],
    }),
    getAllowedValues: builder.query({
      query: (typeValues) => `/allowed${typeValues}`,
    }),
    getTotalDue: builder.query({
      query: () => '/totalDue',
      providesTags: () => [{ type: 'getTotalDue' }],
    }),
    updateTotalDue: builder.mutation({
      query: (newTotalDue) => ({
        url: '/totalDue',
        method: 'PATCH',
        body: newTotalDue,
      }),
      invalidatesTags: () => [{ type: 'getTotalDue' }],
    }),
    addToCart: builder.mutation({
      query: (pizza) => ({
        url: 'cart',
        method: 'POST',
        body: pizza,
      }),
      invalidatesTags: () => [{ type: 'getCart' }],
    }),
    incrementAmount: builder.mutation({
      query: (pizza) => ({
        url: `cart/${pizza.id}`,
        method: 'PATCH',
        body: pizza,
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'getCart', id: arg.id }],
    }),
  }),
});

export const {
  useGetAllowedValuesQuery,
  useGetPizzasQuery,
  useGetCartQuery,
  useAddToCartMutation,
  useIncrementAmountMutation,
  useGetTotalDueQuery,
  useUpdateTotalDueMutation,
} = apiSlice;
