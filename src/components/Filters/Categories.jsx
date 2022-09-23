import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { toggleCategory } from '../../store/filtersSlice';
import { useSelectAllowedValues } from '../../hooks/useSelect';

function Categories() {
  const dispatch = useDispatch();
  const [indexActiveCategory, setIndexActiveCategory] = useState(0);
  const categories = useSelectAllowedValues('categories');
  const content = categories.map((category, index) => (
    <li
      key={category}
      className={cn({ active: index === indexActiveCategory })}
      onClick={() => {
        dispatch(toggleCategory(index));
        setIndexActiveCategory(index);
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
