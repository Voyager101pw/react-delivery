import { RootState } from '../store';
import type { TypeIndex, TypeName } from './types';

export const selectNameActiveType = (
  state: RootState,
  id: TypeIndex,
): TypeName => state.types[id];

export const selectTypes = (state: RootState): string[] => state.types;
