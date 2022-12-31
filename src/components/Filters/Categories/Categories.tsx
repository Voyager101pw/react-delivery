import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { setActiveCategory } from '../../../redux/categories/slice';
import {
  selectCategoryNames,
  selectIndexActiveCategory,
} from '../../../redux/categories/selectors';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector(selectIndexActiveCategory);
  const categoryNames = useAppSelector(selectCategoryNames);

  const content = categoryNames.map((categoryName, index) => (
    <li
      key={categoryName}
      className={index === activeCategory ? 'active' : undefined}
      onClick={() => {
        dispatch(setActiveCategory(index));
      }}
    >
      {categoryName}
    </li>
  ));

  return categoryNames.length ? (
    <div className="filters__wrapper">
      <ul className="filters__categories">{content}</ul>
    </div>
  ) : null;
};

export default Categories;
