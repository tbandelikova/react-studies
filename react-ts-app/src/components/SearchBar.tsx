import React, { useState, useEffect, useCallback } from 'react';
import { SearchPropsType } from '../types/types';

export const SearchBar = function SearchBar(props: SearchPropsType) {
  const [searchValue, setSearchValue] = useState(() => {
    const initialValue = localStorage.getItem('searchValue') || '';
    return initialValue;
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    [searchValue]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.search(searchValue);
  };

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label>
        <input type="text" value={searchValue} onChange={handleChange} />
      </label>
      <button className="btn search-button" type="submit">
        Search
      </button>
    </form>
  );
};
