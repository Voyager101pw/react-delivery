import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pizza, CartItem } from './types'

export const apiSlice = createApi({
  reducerPath: '/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5001/' }),
  tagTypes: ['cart'],

  endpoints: (builder) => ({
    getPizza: builder.query<Pizza, (number | string)>({
      query: (id) => `/pizzas/${id}`,
    }),

    getPizzas: builder.query<(Pizza[] | []), string>({
      query: (queryString) => (queryString ? `/pizzas?${queryString}` : '/pizzas'),
    }),

    getCartItems: builder.query<(CartItem[] | []), void>({
      query: () => '/cartItems',
      providesTags: (cartItems): any => (
        cartItems
        // https://redux-toolkit.js.org/rtk-query/usage/mutations#revalidation-example
          ? [...cartItems.map(({ id } : { id: string }) => ({ type: 'cart', id })), 'cart']
          : ['cart']),
      // Если произойдет ошибка, то будет выдаваться результат прошлого и успешного запроса.
    }),

    addCartItem: builder.mutation<void, CartItem>({
      query: (item) => ({
        url: 'cartItems/',
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['cart'],
      // Делает недействительным кэшированный результат запроса с тогом cart
    }),

    updCartItem: builder.mutation<void, CartItem>({
      query: ({ id, ...body }) => ({
        url: `cartItems/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (res, err, { id }) => [{ type: 'cart', id }],
    }),

    delCartItem: builder.mutation<void, (number | string)>({
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


// TS endpoints "build.query<...>" 
//https://redux-toolkit.js.org/rtk-query/usage-with-typescript#typing-query-and-mutation-endpoints

