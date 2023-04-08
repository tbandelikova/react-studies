import { useState, useCallback, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import img from '../assets/nothing.svg';
import { APICardPropsType } from '../types/types';

export const Home: React.FC = function Home() {
  const [searchData, setSearchData] = useState<Array<APICardPropsType>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = useCallback(async (value: string | null) => {
    setIsLoading(true);
    const url = value
      ? `https://rickandmortyapi.com/api/character/?name=${value}`
      : 'https://rickandmortyapi.com/api/character/';
    const res = await fetch(url);
    let searchedValue;
    if (!res.ok) {
      console.error(res.statusText);
    } else {
      const data = await res.json();
      searchedValue = data.results;
    }
    setIsLoading(false);
    setSearchData(searchedValue);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const saved = localStorage.getItem('searchValue') || '';
    setTimeout(() => search(saved), 1000);
  }, [search]);

  return (
    <main>
      <div className="wrapper center-column">
        <SearchBar search={search} />
        <div className="cards">
          {isLoading && <p className="card-title">Loading...</p>}
          {!isLoading && !searchData.length && <img src={img} alt="No matches found..." />}
          {!isLoading && searchData.map((card) => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </main>
  );
};
