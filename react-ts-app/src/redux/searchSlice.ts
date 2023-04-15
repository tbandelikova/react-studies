import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { APICardPropsType } from '../types/types';

interface SearchState {
  value: string;
  isError: boolean;
  isLoading: boolean;
  searchResult: Array<APICardPropsType>;
}

const initialState: SearchState = {
  value: '',
  isError: false,
  isLoading: false,
  searchResult: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchValueState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    getCardsRequestAction: (state) => {
      state.isLoading = true;
    },
    getCardsSuccessAction: (state, action: PayloadAction<Array<APICardPropsType>>) => {
      state.isLoading = false;
      state.isError = false;
      state.searchResult = action.payload;
    },
    getCardsFailedAction: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.searchResult = initialState.searchResult;
    },
  },
});

export const {
  searchValueState,
  getCardsRequestAction,
  getCardsSuccessAction,
  getCardsFailedAction,
} = searchSlice.actions;

export default searchSlice.reducer;
