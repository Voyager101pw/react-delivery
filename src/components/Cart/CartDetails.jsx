import React from 'react';

function CartDetails() {
  return (
    <>
      <div>
        Всего пиццы:
        <b>10 шт.</b>
      </div>

      <div>
        Сумма заказа:
        <b className="price">1337 ₽</b>
      </div>
    </>
  );
}

export default CartDetails;
