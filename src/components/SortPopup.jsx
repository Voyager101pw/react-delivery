import React from 'react';
import vector from '../assets/img/Vector.svg';
// import selectCurrentSort from ...

function SortPopup() {
  // const currentSort = 'популярности';

  // const currentSort = useSelector(selectCurrentSort)
  const currentSort = 'популярности';

  return (
    <div className="sort">
      <img src={vector} />
      <b>Сортировка по:</b>
      <span>{currentSort}</span>
    </div>
  );
}

export default SortPopup;
