import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { searchValueState } from '../redux/searchSlice';

export const SearchBar: React.FC = function SearchBar() {
  const searchValue = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(searchValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchValueState(value));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={value}
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
