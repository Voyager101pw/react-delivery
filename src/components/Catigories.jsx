import React from 'react';

function Catigories() {
  return (
    <div className="catigories">
      <ul>
        <li className='active'>Все</li>
        <li>Мясные</li>
        <li>Вегатарианская</li>
        <li>Гриль</li>
        <li>Острая </li>
        <li>Гриьные</li>
      </ul>
       </div>
  );
}

export default Catigories;

// import vector from '../assets/img/Vector.svg';
// const currentSort = 'популярности';
//  <div className="sort">
//   <img src={vector} />
//   <span>{`Сортировка по:  ${currentSort}`}</span>
//  </div>