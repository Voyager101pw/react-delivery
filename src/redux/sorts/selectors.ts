import type { RootState } from '../store';

export const selectSortNames = (state: RootState): string[] =>
  state.sorts.values;

export const selectIndexActiveSort = (state: RootState): number =>
  state.sorts.indexActivSort;
