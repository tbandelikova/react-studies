import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserCardPropsType } from '../types/types';

interface FormState {
  users: Array<UserCardPropsType>;
  isLoading: boolean;
}

const initialState: FormState = {
  users: [],
  isLoading: false,
};

export const formSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getCardsAction: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getCardsSuccessAction: (state, action: PayloadAction<UserCardPropsType>) => {
      state.isLoading = false;
      state.users = [...state.users, action.payload];
    },
    getCardsDeletedAction: (state) => {
      state.users = initialState.users;
    },
  },
});

export const { getCardsAction, getCardsSuccessAction, getCardsDeletedAction } = formSlice.actions;

export default formSlice.reducer;
