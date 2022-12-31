import { RootState } from '../store';

export const selectSizes = (state: RootState): number[] => state.sizes;