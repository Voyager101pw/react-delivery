import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Catigories({ allowedValues }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const renderCategories = allowedValues.map((category, index) => (
    <li
      key={category}
      className={cn({ active: index === activeCategory })}
      onClick={() => setActiveCategory(index)}
    >
      {category}
    </li>
  ));

  return (
    <ul className="filters__categories">
      {renderCategories}
    </ul>
  );
}

export default Catigories;

Catigories.propTypes = {
  allowedValues: PropTypes.arrayOf(PropTypes.string),
};

Catigories.defaultProps = {
  allowedValues: ['Все'],
};
