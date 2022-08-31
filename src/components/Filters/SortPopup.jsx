import React from 'react';
import DropIcon from '../../assets/img/drop-icon.svg';
// import selectCurrentSort from ...

function SortPopup() {
  // const currentSort = 'популярности';

  // const currentSort = useSelector(selectCurrentSort)
  const currentSort = 'популярности';

  // const popupIsOpen = useSelector(selectPopupStatus);
  const popupIsOpen = true;

  return (
    <>
      <DropIcon className='sort__dropdown-icon'/>
      <b>Сортировка по:</b>
      <span>{currentSort}</span>
      {
        popupIsOpen
          ? (
            <div className='sort__popup'>
              <ul className='sort__list'>
                <li className='sort__active'>популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
              </ul>
            </div>
          )
          : null
      }
    </>
  );
}

export default SortPopup;
