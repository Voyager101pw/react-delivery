import React from 'react';
import { useAppSelector } from '../../../redux/store';
import { selectSizes } from '../../../redux/sizes/selectors';
import type { SizeIndex, SizeIndexs } from '../../../redux/sizes/types';

interface PropTypes {
  sizes: SizeIndexs;
  activeSize: SizeIndex;
  setPizzaSize: (id: SizeIndex) => void;
}

const Sizes: React.FC<PropTypes> = ({ sizes, activeSize, setPizzaSize }) => {
  const numberSizes = useAppSelector(selectSizes);

  const sizeButtons = sizes.map((size) => (
    <li
      key={size}
      className={activeSize === size ? 'active' : ''}
      onClick={() => setPizzaSize(size)}
    >
      {numberSizes[size]}
    </li>
  ));

  return <ul className="card__list">{sizeButtons}</ul>;
};

export default React.memo(Sizes);
