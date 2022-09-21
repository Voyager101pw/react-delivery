import React, { useState } from 'react';
import cn from 'classnames';
import DropIcon from '../../assets/img/drop-icon.svg';
import { useSelectAllowedValues } from '../../hooks/useSelect';

function SortPopup() {
  const [indxSelectedSort, setIndexSelectedSort] = useState(0);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sort = useSelectAllowedValues('sort');

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup);
  const onSelectItem = (indx) => {
    setIndexSelectedSort(indx);
    setVisiblePopup(!visiblePopup);
  };

  const nameCurrentSort = sort[indxSelectedSort];
  const renderSortItems = sort.map((sortName, index) => (
    <li
      key={sortName}
      className={cn({ active: index === indxSelectedSort })}
      onClick={() => onSelectItem(index)}
    >
      {sortName}
    </li>
  ));

  return (
    <>
      <DropIcon className={cn('filters__dropdown-icon', { opened: visiblePopup })} />
      <b>Сортировка по:</b>
      <span onClick={toggleVisiblePopup}>{nameCurrentSort}</span>
      {
        visiblePopup
          ? (
            <div className="filters__popup">
              <ul>
                {renderSortItems}
              </ul>
            </div>
          )
          : null
      }
    </>
  );
}

export default SortPopup;
