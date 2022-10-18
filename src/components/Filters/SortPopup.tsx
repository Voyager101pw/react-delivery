import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setSortQuery, setIndexActiveSort, selectActiveSort } from '../../store/filtersSlice';
import DropIcon from '../../assets/img/drop-icon.svg';
import { selectAllowedValues } from '../../store/allowedValuesSlice';

const SortPopup: React.FC = () => {
  const dispatch = useDispatch();

  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeSort = useSelector(selectActiveSort);
  const { sort } = useSelector(selectAllowedValues);

  const toggleVisiblePopup = (): void => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (indx: number): void => {
    dispatch(setSortQuery(indx));
    dispatch(setIndexActiveSort(indx));
    setVisiblePopup(!visiblePopup);
  };

  const nameCurrentSort = sort[activeSort];
  const renderSortItems = sort.map((sortName, index) => (
    <li key={sortName} className={cn({ active: index === activeSort })} onClick={() => onSelectItem(index)}>
      {sortName}
    </li>
  ));

  return (
    <div className="filters__sort">
      <DropIcon className={cn('filters__dropdown-icon', { opened: visiblePopup })} />
      <b>Сортировка по:</b>
      <span onClick={toggleVisiblePopup}>{nameCurrentSort}</span>
      {visiblePopup && (
        <div className="filters__popup">
          <ul>{renderSortItems}</ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
