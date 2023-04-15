import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import formSlice from './formSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
