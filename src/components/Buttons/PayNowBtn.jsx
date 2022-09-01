import React from 'react';
import cn from 'classnames';

function PayNowBtn({ className }) {
  const classes = cn('btn', className);
  return (
    <div className={classes}>Оплатить сейчас</div>
  );
}

export default PayNowBtn;
