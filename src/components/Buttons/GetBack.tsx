import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/img/arrow-back.svg';

const GetBackBtn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="btn btn--outline btn--gray cart__btn-back" onClick={() => navigate('/')}>
      <BackIcon className="btn__back-icon" />
      Вернуться назад
    </div>
  );
}

export default GetBackBtn;
