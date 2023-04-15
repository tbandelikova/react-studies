import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { getCards } from './searchService';
import { RootState } from './store';
import { getCardsRequestAction, getCardsSuccessAction, getCardsFailedAction } from './searchSlice';

export const fetchCards = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const value = getState().search.value;
    try {
      dispatch(getCardsRequestAction());
      const response = await getCards(value);
      dispatch(getCardsSuccessAction(response));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      reportError(message);
      dispatch(getCardsFailedAction());
    }
  };
};
