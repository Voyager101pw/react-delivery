import React, { useState } from 'react';

interface SizesProps {
  idsSizes: number[];
  valuesAllSize: number[];
  selectSize: (idSize: number) => void;
}

const Sizes: React.FC<SizesProps> = ({ idsSizes, valuesAllSize, selectSize }) => {

  const [activeSize, setActiveSize ] = useState(idsSizes[0]); // activeSize contains index/id initial size value

  const onClick = (idSize: number): void => {
    setActiveSize(idSize);
    selectSize(idSize); // set parent state
  };

  const renderButtons = idsSizes.map((idSize: number) => (
    <li
      key={idSize}
      className={idSize === activeSize ? 'active' : ''}
      onClick={() => onClick(idSize)}
    >
      {valuesAllSize[idSize]}
    </li>
  ));

  return <>{renderButtons}</>;
};

export default Sizes;