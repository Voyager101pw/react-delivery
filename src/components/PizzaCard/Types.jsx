import { useGetAllowedValuesQuery } from '../../store/apiSlice';

function Types({ createMenuButtons }) {
  const { data: allowedTypes = [] } = useGetAllowedValuesQuery('types');
  const menuButtons = createMenuButtons({
    menuFor: 'types',
    allowedValues: allowedTypes,
  });
  return menuButtons;
}

export default Types;
