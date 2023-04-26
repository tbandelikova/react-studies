import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { APICardPropsType } from '../types/types';

export interface SearchState {
  value: string;
  searchResult: Array<APICardPropsType>;
}

const initialState: SearchState = {
  value: '',
  searchResult: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchValueState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    getCardsSuccessAction: (state, action: PayloadAction<Array<APICardPropsType>>) => {
      state.searchResult = action.payload;
    },
  },
});

export const { searchValueState, getCardsSuccessAction } = searchSlice.actions;

export default searchSlice.reducer;
