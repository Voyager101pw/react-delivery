import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: '/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5001/' }),
  tagTypes: ['getCart', 'getCartInfo'],

  endpoints: (builder) => ({
    getPizza: builder.query({
      query: (id) => `/pizzas/${id}`,
    }),
    getPizzas: builder.query({
      query: () => '/pizzas',
    }),
    getCart: builder.query({
      query: () => '/cart',
      providesTags: ['getCart'],
    }),
    addToCart: builder.mutation({
      query: (pizza) => ({
        url: 'cart',
        method: 'POST',
        body: pizza,
      }),
      invalidatesTags: () => [{ type: 'getCart' }],
    }),
  }),
});

export const {
  useGetPizzasQuery,
  useGetCartQuery,
  useAddToCartMutation,
} = apiSlice;

// api for lib "json-server":
// Выборка: https://github.com/typicode/json-server#filter
// Разбритие на страницы (лимит): https://github.com/typicode/json-server#paginate
// Сортировка: https://github.com/typicode/json-server#paginate
