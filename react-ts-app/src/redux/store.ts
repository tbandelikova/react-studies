import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import formSlice from './formSlice';

const rootReducer = combineReducers({
  search: searchSlice,
  form: formSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
