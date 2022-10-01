import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setSortQuery, setIndexActiveSort, selectActiveIndex } from '../../store/filtersSlice';
import DropIcon from '../../assets/img/drop-icon.svg';
import { useSelectAllowedValues } from '../../hooks/useSelect';

function SortPopup() {
  const dispatch = useDispatch();
  const { indexActiveSort } = useSelector(selectActiveIndex);

  const [visiblePopup, setVisiblePopup] = useState(false);
  const sort = useSelectAllowedValues('sort');

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (indx) => {
    dispatch(setSortQuery(indx));
    dispatch(setIndexActiveSort(indx));
    setVisiblePopup(!visiblePopup);
  };

  const nameCurrentSort = sort[indexActiveSort];
  const renderSortItems = sort.map((sortName, index) => (
    <li
      key={sortName}
      className={cn({ active: index === indexActiveSort })}
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
