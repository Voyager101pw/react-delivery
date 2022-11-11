import React from 'react';
import axios from 'axios';
import { apiSlice } from '../../store/apiSlice';
import { Pizza, CartItem } from '../../store/types';

// interface AddToCartProps {
//   pizza: Pizza;
//   nameSelectedTypeRef: {
//     current: string;
//   };
//   valueSelectedSizeRef: {
//     current: number;
//   };
// }
interface AddToCartProps {
  pizza: Pizza;
  nameSelectedTypeRef: string;
  valueSelectedSizeRef: number;
}

type CartItemsType =  CartItem[] | [];

const getPizzaById = async (id: string): Promise<CartItem | undefined> => {
  const { data: [searchedPizza] } = await axios.get<CartItemsType>(`http://localhost:5001/cartItems?id=${id}`);
  return searchedPizza;
};

const AddToCart: React.FC<AddToCartProps> = (props): JSX.Element => {
  const { pizza, nameSelectedTypeRef, valueSelectedSizeRef } = props;
  const [updateCart] = apiSlice.useUpdCartItemMutation();
  const [addToCart] = apiSlice.useAddCartItemMutation();
  

  
  const addPizzaToCart = async (): Promise<void> => {
    // extendedId: pizza type + pizza size + id
    // const extendedId =  nameSelectedTypeRef.current + valueSelectedSizeRef.current + pizza.id;
    const extendedId =  nameSelectedTypeRef + valueSelectedSizeRef + pizza.id;
    const pizzaFromCart = await getPizzaById(extendedId);

    pizzaFromCart // ternar.expres. for "pizza exist in cart?"
      ? updateCart({ ...pizzaFromCart, amount: pizzaFromCart.amount + 1 }) // exist
      : addToCart({ // not exist
        ...pizza,
        id: extendedId, 
        // type: nameSelectedTypeRef.current,
        type: nameSelectedTypeRef,
        // size: valueSelectedSizeRef.current,
        size: valueSelectedSizeRef,
        amount: 1,
      });
  }; 

  return (
    <button
        type="button"
        className="btn btn--add btn--outline btn--positive card__add"
        onClick={addPizzaToCart}
      >
        Добавить
      </button>
  );
  
};

export default React.memo(AddToCart);
