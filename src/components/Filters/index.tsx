import React from 'react';
import Categories from './Categories';
import SortPopup from './SortPopup';
import { Outlet } from 'react-router-dom';

const Filters: React.FC = () => (
  <>
    <div className="filters">
        <Categories />
        <SortPopup />
    </div>
    <Outlet />
  </>
);

export default Filters;
