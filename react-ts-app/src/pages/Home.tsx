import { useState, useCallback, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import { KEY } from '../const/const';
import dummyData from '../assets/data.json';
import img from '../assets/nothing.svg';
import { APICardPropsType } from '../types/types';

export const Home: React.FC = function Home() {
  const [searchData, setSearchData] = useState<Array<APICardPropsType>>([]);
  const [isLoading, setisLoading] = useState(false);

  const search = useCallback(async (value: string | null) => {
    setisLoading(true);
    const url = `https://api.unsplash.com/search/users?page=1&query=${
      value || 'a'
    }&client_id=${KEY}`;
    const res = await fetch(url);
    let searchedValue;
    if (!res.ok) {
      searchedValue = value ? dummyData.filter((item) => item.title.includes(value)) : dummyData;
    } else {
      const data = await res.json();
      searchedValue = data.results;
    }
    setisLoading(false);
    setSearchData(searchedValue);
  }, []);

  useEffect(() => {
    setisLoading(true);
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
          {!isLoading &&
            searchData.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                profile_image={card.profile_image}
                total_photos={card.total_photos}
                bio={card.bio}
                location={card.location}
                id={''}
              />
            ))}
        </div>
      </div>
    </main>
  );
};
