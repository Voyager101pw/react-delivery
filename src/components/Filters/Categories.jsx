import React, { useState } from 'react';
import cn from 'classnames';
import { useSelectAllowedValues } from '../../hooks/useSelect';

function Categories() {
  const [indexActiveCategory, setIndexActiveCategory] = useState(0);
  const categories = useSelectAllowedValues('categories');
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
