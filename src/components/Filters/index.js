import React from 'react';

import Catigories from './Catigories.jsx';
import SortPopup from './SortPopup.jsx';

function Filters() {
  return (
    <>
      <div className="catigories filters__catigories">
        <Catigories />
      </div>
      <div className="sort filters__sort">
        <SortPopup />
      </div>
    </>
  );
}

export default Filters;
