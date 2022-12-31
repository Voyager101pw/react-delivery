import type { RootState } from '../store';

export const selectCategoryNames = (state: RootState): string[] =>
  state.categories.values;

export const selectIndexActiveCategory = (state: RootState): number =>
  state.categories.indexActiveCategory;
