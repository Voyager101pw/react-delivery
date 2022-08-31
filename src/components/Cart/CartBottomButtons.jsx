import React from 'react';
import BackIcon from '../../assets/img/arrow-back.svg';

function CartBottomButtons() {

  return (
    <>
      <div className='btn btn--outline btn--gray cart__btn-back'>
        <BackIcon  className='btn__back-icon' />
        Вернуться назад
      </div>
      <div className='btn cart__btn-pay'>Оплатить сейчас</div>
    </>
  );
}

export default CartBottomButtons;
