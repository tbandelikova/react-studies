import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import formSlice from './formSlice';

import { cardsApi } from './searchCardsApi';

const rootReducer = combineReducers({
  search: searchSlice,
  form: formSlice,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
