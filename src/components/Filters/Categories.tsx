import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllowedValues } from '../../store/allowedValuesSlice';
import { selectActiveCategory, setCategoryQuery, setIndexActiveCategory } from '../../store/filtersSlice';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  
  const activeCategory = useSelector(selectActiveCategory);
  const { categories } = useSelector(selectAllowedValues);

  const content = categories.map((category, index) => (
    <li
      key={category}
      className={index === activeCategory ? 'active' : ''}
      onClick={() => {
        dispatch(setCategoryQuery(index));
        dispatch(setIndexActiveCategory(index));
      }}
    >
      {category}
    </li>
  ));

  return (
    <div className="filters__wrapper">
      <ul className="filters__categories">{content}</ul>
    </div>
  );
};

export default Categories;
