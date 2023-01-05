import { CartItems } from '../redux/cart/types';

const calcTotalPrice = (pizzas: CartItems): number => pizzas.reduce(
  (totalPrice, pizza) => totalPrice + pizza.amount * pizza.price,
  0,
);

export default calcTotalPrice;
