import { useSelectAllowedValues } from '../../hooks/useSelect';

function Types({ createMenuButtons }) {
  const allowedTypes = useSelectAllowedValues('types');
  const menuButtons = createMenuButtons({
    menuFor: 'types',
    allowedValues: allowedTypes,
  });
  return menuButtons;
}

export default Types;
