import { useSelectAllowedValues } from '../../hooks/useSelect';

function Sizes({ createMenuButtons }) {
  const allowedSizes = useSelectAllowedValues('sizes');
  const menuButtons = createMenuButtons({
    menuFor: 'sizes',
    allowedValues: allowedSizes,
  });

  return menuButtons;
}

export default Sizes;
