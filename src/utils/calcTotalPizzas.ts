import type { CartItems } from '../redux/cart/types';

const calcTotalPizzas = (pizzas: CartItems): number =>
  pizzas.reduce((totalPizzas, pizza) => totalPizzas + pizza.amount, 0);

export default calcTotalPizzas;
