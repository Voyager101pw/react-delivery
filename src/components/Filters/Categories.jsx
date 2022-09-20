import React, { useState } from 'react';
import cn from 'classnames';
import { useGetAllowedValuesQuery } from '../../store/apiSlice';

function Categories() {
  const [indexActiveCategory, setIndexActiveCategory] = useState(0);
  const { data: categories = [] } = useGetAllowedValuesQuery('categories');

  const content = categories.map((category, index) => (
    <li
      key={category}
      className={cn({ active: index === indexActiveCategory })}
      onClick={() => {
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
