import React from 'react';
import Categories from './Categories';
import SortPopup from './SortPopup';

const Filters: React.FC = () => (
  <>
    <div className="filters__wrapper">
      <Categories />
    </div>
    <div className="filters__sort">
      <SortPopup />
    </div>
  </>
);

export default Filters;
