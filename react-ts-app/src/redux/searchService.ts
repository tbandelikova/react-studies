import fetch from 'cross-fetch';

export const getCards = async (value: string | null) => {
  const url = `https://rickandmortyapi.com/api/character/?name=${value}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('No matches found...');
  }
  const data = await res.json();
  return data.results;
};
