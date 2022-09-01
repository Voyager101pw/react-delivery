import React from 'react';
import cn from 'classnames';

import BackIcon from '../../assets/img/arrow-back.svg';

function GetBackBtn({ className }) {
  const classes = cn('btn btn--outline btn--gray cart__btn-back', className);
  return (
    <div className={classes}>
      <BackIcon className='btn__back-icon' />
      Вернуться назад
    </div>
  );
}

export default GetBackBtn;
