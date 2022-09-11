import React from 'react';

import Categories from './Categories.jsx';
import SortPopup from './SortPopup.jsx';
import { useGetAllowedValuesQuery } from '../../store/apiSlice';

function Filters() {
  const { data: allowedValuesFilters = {} } = useGetAllowedValuesQuery('Filters');
  const { catigories, sort } = allowedValuesFilters;
  return (
    <>
      <div className="filters__wrapper">
        <Categories allowedValues={catigories} />
      </div>
      <div className="filters__sort">
        <SortPopup allowedValues={sort} />
      </div>
    </>
  );
}

export default Filters;
