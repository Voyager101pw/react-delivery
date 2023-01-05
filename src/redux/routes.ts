import { CartItem } from './cart/types';

const host = 'https://639e03343542a26130552410.mockapi.io';

const endpoints = {
  cart: 'cart',
  pizzas: 'pizzas',
};

export const urlToCart = [host, endpoints.cart].join('/');
export const urlToPizzaList = [host, endpoints.pizzas].join('/');
export const getUrlToCartItem = (id: CartItem['id']): string =>
  [urlToCart, id].join('/');
