import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  values: ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'],
  indexActiveCategory: 0,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (
      state,
      { payload: newIndex }: PayloadAction<number>,
    ) => {
      state.indexActiveCategory = newIndex;
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
