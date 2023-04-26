import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchData } from '../types/types';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
  endpoints: (builder) => ({
    getCharByName: builder.query<SearchData, string>({
      query: (value = '') => `?name=${value}`,
    }),
  }),
});

export const { useGetCharByNameQuery } = cardsApi;
