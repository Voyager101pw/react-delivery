import { configureStore } from '@reduxjs/toolkit';
import * as reducer from './slices';

export const store = configureStore({ reducer });

// Выводим типы `RootState` и `AppDispatch` из самого хранилища
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;