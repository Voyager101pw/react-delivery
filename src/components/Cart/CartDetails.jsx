import React from 'react';

function CartDetails() {
  return (
    <>
      <span>
        Всего пиццы:
        <b>10 шт.</b>
      </span>

      <span>Сумма заказа:
        <b className='price'>1337 ₽</b>
      </span>
    </>
  );
}

export default CartDetails;
