import React, { useState } from 'react';
import cn from 'classnames';
import DropIcon from 'img/drop-icon.svg';
import { selectIndexActiveSort, selectSortNames, setActiveSort } from '../../store/slices/sorts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const SortPopup: React.FC = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  
  const indexActiveSort = useAppSelector(selectIndexActiveSort);
  const sortNames = useAppSelector(selectSortNames);
  const nameCurrentSort = sortNames[indexActiveSort];
  
  const dispatch = useAppDispatch();
  const changeSortPizzas = (indx: number): void => {
    dispatch(setActiveSort(indx));
    setVisiblePopup(!visiblePopup);
  };

  const sortItems = sortNames.map((sortName, index) => (
    <li
      key={sortName}
      className={cn({ active: index === indexActiveSort })}
      onClick={() => changeSortPizzas(index)}
    >
      {sortName}
    </li>
  ));

  return (
    <div className="filters__sort">
      <DropIcon
        className={cn('filters__dropdown-icon', { opened: visiblePopup })}
      />
      <b>Сортировка по:</b>
      <span onClick={() => setVisiblePopup(!visiblePopup)}>
        {nameCurrentSort}
      </span>
      {visiblePopup && (
        <div className="filters__popup">
          <ul>{sortItems}</ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
