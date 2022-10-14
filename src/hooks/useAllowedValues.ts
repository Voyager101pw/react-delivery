import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useAllowedValues = () =>
  useSelector((state: RootState) => state.allowedValues);

export default useAllowedValues;
