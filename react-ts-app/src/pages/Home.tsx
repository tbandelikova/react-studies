import { useState, useCallback, useMemo } from 'react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import data from '../assets/data.json';
import img from '../assets/nothing.svg';
import { CardPropsType } from '../types/types';

export const Home: React.FC = function Home() {
  const [searchData, setSearchData] = useState<Array<CardPropsType>>([]);

  const search = useCallback((value: string) => {
    const searchValue = data.filter((item) => item.title.includes(value));
    setSearchData(searchValue);
  }, []);

  useMemo(() => {
    const saved = localStorage.getItem('searchValue') || '';
    return search(saved);
  }, [search]);

  return (
    <>
      <Header />
      <main>
        <div className="wrapper center-column">
          <SearchBar search={search} />
          <div className="cards">
            {!searchData.length && <img src={img} alt="No matches found..." />}
            {searchData.map((card) => (
              <Card {...card} key={card.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
