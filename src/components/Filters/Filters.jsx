import React from 'react';
import Categories from './Categories.jsx';
import SortPopup from './SortPopup.jsx';

function Filters() {
  return (
    <>
      <div className="filters__wrapper">
        <Categories />
      </div>
      <div className="filters__sort">
        <SortPopup />
      </div>
    </>
  );
}

export default Filters;
