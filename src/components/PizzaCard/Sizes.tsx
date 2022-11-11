import React from 'react';

interface SizesProps {
  pizzaSizes: number[];
  valuesAllSize: number[];
  activeSize: number;
  selectSize: (idSize: number) => void;
}

const Sizes: React.FC<SizesProps> = (props): JSX.Element => {
  const { pizzaSizes, valuesAllSize, activeSize, selectSize } = props;

  const renderButtons = pizzaSizes.map((idSize: number) => (
    <li
      key={idSize}
      className={idSize === activeSize ? 'active' : ''}
      onClick={() => selectSize(idSize)}
    >
      {valuesAllSize[idSize]}
    </li>
  ));

  return <ul className="card__list">{renderButtons}</ul>;
};

export default React.memo(Sizes);
