import { RootState } from '../store';

export const selectTypes = (state: RootState): string[] => state.types;