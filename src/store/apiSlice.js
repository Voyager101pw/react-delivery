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
      providesTags: (res = []) => [
        'getCart',
        ...res.map((pizza) => ({ type: 'getCart', id: pizza.id })),
      ],
    }),
    getAllowedValues: builder.query({
      query: (nameValues) => `/allowed${nameValues}`,
    }),
    getCartInfo: builder.query({
      query: () => '/cartInfo',
      providesTags: ['getCartInfo'],
    }),
    updateCartInfo: builder.mutation({
      query: (newInfo) => ({
        url: '/cartInfo',
        method: 'POST',
        body: newInfo,
      }),
      invalidatesTags: () => [{ type: 'getCartInfo' }],
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
  useGetCartInfoQuery,
  useUpdateCartInfoMutation,
} = apiSlice;

// api for lib "json-server":
// Выборка: https://github.com/typicode/json-server#filter
// Разбритие на страницы (лимит): https://github.com/typicode/json-server#paginate
// Сортировка: https://github.com/typicode/json-server#paginate
