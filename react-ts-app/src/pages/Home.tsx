import { useState, useCallback, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader/Loader';
import img from '../assets/nothing.svg';
import { APICardPropsType } from '../types/types';
import fetch from 'cross-fetch';

export const Home: React.FC = function Home() {
  const [searchData, setSearchData] = useState<Array<APICardPropsType>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = useCallback(async (value: string | null) => {
    setIsLoading(true);
    const url = `https://rickandmortyapi.com/api/character/?name=${value}`;
    const res = await fetch(url);
    if (!res.ok) {
      setIsLoading(false);
      return setSearchData([]);
    } else {
      const data = await res.json();
      setIsLoading(false);
      setSearchData(data.results);
    }
    setIsLoading(false);
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
          {isLoading && <Loader />}
          {!isLoading && !searchData.length && (
            <img role="no-matches" src={img} alt="No matches found..." />
          )}
          {!isLoading && searchData.map((card) => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </main>
  );
};
