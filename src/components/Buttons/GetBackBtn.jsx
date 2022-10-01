import React from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/img/arrow-back.svg';

function GetBackBtn({ className }) {
  const navigate = useNavigate();

  const classes = cn('btn btn--outline btn--gray cart__btn-back', className);
  return (
    <div className={classes} onClick={() => navigate('/')}>
      <BackIcon className="btn__back-icon" />
      Вернуться назад
    </div>
  );
}

export default GetBackBtn;
