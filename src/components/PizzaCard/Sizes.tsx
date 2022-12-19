import React from 'react';

interface PropTypes {
  pizzaSizes: number[];
  valuesAllSize: number[];
  selectSize: (idSize: number) => void;
  activeSize: number;
}

const Sizes: React.FC<PropTypes> = (props): JSX.Element => {
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
