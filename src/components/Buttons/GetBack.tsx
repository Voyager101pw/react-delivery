import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from 'img/arrow-back.svg';

const GetBackBtn: React.FC = () => {
  return (
    <Link className="btn btn--outline btn--gray cart__btn-back" to='/'>
      <BackIcon className="btn__back-icon" />
      Вернуться назад
    </Link>
  );
};

export default GetBackBtn;
