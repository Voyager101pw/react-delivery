import { useSelector } from 'react-redux';
import { selectAllowedValues } from '../store/allowedValuesSlice';

export const useSelectAllowedValues = (...names) => useSelector((state) => (
  names.length === 1
    ? selectAllowedValues(state, names[0])
    : names.map((name) => selectAllowedValues(state, name))
));
export default useSelectAllowedValues;
