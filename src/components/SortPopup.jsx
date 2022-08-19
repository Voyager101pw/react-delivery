import React from 'react';
import vector from '../assets/img/Vector.svg';
// import selectCurrentSort from ...

function SortPopup() {
  // const currentSort = 'популярности';

  // const currentSort = useSelector(selectCurrentSort)
  const currentSort = 'популярности';

  // const popupIsOpen = useSelector(selectPopupStatus);
  const popupIsOpen = true;

  return (
    <>
      <div className="sort">
        <img src={vector} />
        <b>Сортировка по:</b>
        <span>{currentSort}</span>
      {
        popupIsOpen
          ? (
          <div className="sort__popup">
            <ul>
              <li className="active">популярности</li>
              <li>цене</li>
              <li>алфавиту</li>
            </ul>
          </div>
          )
          : null
        }
      </div>
  </>
  );
}

export default SortPopup;
