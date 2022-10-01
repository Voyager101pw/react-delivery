import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: '/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5001/' }),
  tagTypes: ['cart'],

  endpoints: (builder) => ({
    getPizza: builder.query({
      query: (id) => `/pizzas/${id}`,
    }),
    getPizzas: builder.query({
      query: (queryString) => (queryString ? `/pizzas?${queryString}` : '/pizzas'),
    }),
    getCartItems: builder.query({
      query: () => '/cartItems',
      providesTags: (res) => (
        res
        // https://redux-toolkit.js.org/rtk-query/usage/mutations#revalidation-example
          ? res.map(({ id }) => ({ type: 'cart', id }))
          : ['cart']),
      // Если произойдет ошибка, то будет выдаваться результат прошлого и успешного запроса.
    }),
    addCartItem: builder.mutation({
      query: (item) => ({
        url: 'cartItems/',
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['cart'],
      // Делает недействительным кэшированный результат запроса с тогом cart
    }),
    updCartItem: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `cartItems/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (res, err, { id }) => [{ type: 'cart', id }],
    }),
    delCartItem: builder.mutation({
      query: (id) => ({
        url: `cartItems/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (res, err, id) => [{ type: 'cart', id }],
    }),
  }),
});

export const {
  useGetPizzasQuery,
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useUpdCartItemMutation,
  useDelCartItemMutation,
} = apiSlice;

// api for lib "json-server":
// Выборка: https://github.com/typicode/json-server#filter
// Разбритие на страницы (лимит): https://github.com/typicode/json-server#paginate
// Сортировка: https://github.com/typicode/json-server#paginate
