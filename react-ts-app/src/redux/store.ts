import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchSlice from './searchSlice';
import formSlice from './formSlice';

import { cardsApi } from './searchCardsApi';

const rootReducer = combineReducers({
  search: searchSlice,
  form: formSlice,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
