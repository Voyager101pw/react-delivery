import { useGetAllowedValuesQuery } from '../../store/apiSlice';

function Sizes({ createMenuButtons }) {
  const { data: allowedSizes = [] } = useGetAllowedValuesQuery('sizes');
  // setSelectedSize(allowedSizes[indexActiveSize]);
  const menuButtons = createMenuButtons({
    menuFor: 'sizes',
    allowedValues: allowedSizes,
  });

  return menuButtons;
}

export default Sizes;
