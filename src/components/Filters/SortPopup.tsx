import React, { useState } from 'react';
import cn from 'classnames';
import DropIcon from 'img/drop-icon.svg';
import { setActiveSort } from '../../redux/sorts/slice';
import { selectIndexActiveSort, selectSortNames } from '../../redux/sorts/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/store';

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
