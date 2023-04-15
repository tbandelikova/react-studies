import React, { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { searchValueState } from '../redux/searchSlice';
import { fetchCards } from '../redux/searchAction';

export const SearchBar: React.FC = function SearchBar() {
  const searchValue = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(searchValueState(event.target.value));
    },
    [dispatch]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchCards());
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search by character name"
        />
      </label>
      <button className="btn search-button" type="submit">
        Search
      </button>
    </form>
  );
};
