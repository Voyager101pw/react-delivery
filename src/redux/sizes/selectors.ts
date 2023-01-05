import { RootState } from '../store';
import type { Size, SizeIndex, Sizes } from './types';

export const selectNumberActiveSize = (state: RootState, id: SizeIndex): Size =>
  state.sizes[id];

export const selectSizes = (state: RootState): Sizes => state.sizes;
