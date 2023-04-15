import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader/Loader';
import img from '../assets/nothing.svg';
import { fetchCards } from '../redux/searchAction';

export const Home: React.FC = function Home() {
  const { searchResult, isLoading, isError } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    searchResult.length == 0 && dispatch(fetchCards());
  }, [searchResult, dispatch]);

  return (
    <main>
      <div className="wrapper center-column">
        <SearchBar />
        <div className="cards">
          {isLoading && <Loader />}
          {!isLoading && isError && <img role="no-matches" src={img} alt="No matches found..." />}
          {!isLoading && searchResult.map((card) => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </main>
  );
};
