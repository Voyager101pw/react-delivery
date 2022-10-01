import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryQuery, selectActiveIndex, setIndexActiveCategory } from '../../store/filtersSlice';
import { useSelectAllowedValues } from '../../hooks/useSelect';

function Categories() {
  const dispatch = useDispatch();
  const { indexActiveCategory } = useSelector(selectActiveIndex);
  const categories = useSelectAllowedValues('categories');

  const content = categories.map((category, index) => (
    <li
      key={category}
      className={cn({ active: index === indexActiveCategory })}
      onClick={() => {
        dispatch(setCategoryQuery(index));
        dispatch(setIndexActiveCategory(index));
      }}
    >
      {category}
    </li>
  ));

  return (
    <ul className="filters__categories">
      {content}
    </ul>
  );
}

export default Categories;
