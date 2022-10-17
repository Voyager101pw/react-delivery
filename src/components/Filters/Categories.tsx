import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryQuery, selectActiveIndex, setIndexActiveCategory } from '../../store/filtersSlice';
import { selectAllowedValues } from '../../store/allowedValuesSlice';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const { indexActiveCategory } = useSelector(selectActiveIndex);
  const { categories } = useSelector(selectAllowedValues);

  const content = categories.map((category, index) => (
    <li
      key={category}
      className={index === indexActiveCategory ? 'active' : ''}
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
};

export default Categories;
