const host = 'https://639e03343542a26130552410.mockapi.io';

const endpoints = {
  cart: 'cart',
  pizzas: 'pizzas',
};

export const cartURL = [host, endpoints.cart].join('/');
export const pizzasURL = [host, endpoints.pizzas].join('/');
export const getPizzaURL = (id: string): string => [cartURL, id].join('/');
