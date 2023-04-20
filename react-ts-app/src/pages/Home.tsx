import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader/Loader';
import img from '../assets/nothing.svg';
import { getCardsSuccessAction } from '../redux/searchSlice';
import { useGetCharByNameQuery } from '../redux/searchCardsApi';

export const Home: React.FC = function Home() {
  const { value, searchResult } = useAppSelector((state) => state.search);
  const { data, isError, isLoading } = useGetCharByNameQuery(value);
  const dispatch = useAppDispatch();

  const result = data?.results;

  useEffect(() => {
    if (result) {
      dispatch(getCardsSuccessAction(result));
    }
  }, [result, dispatch]);

  return (
    <main>
      <div className="wrapper center-column">
        <SearchBar />
        <div className="cards">
          {isLoading && <Loader />}
          {!isLoading && isError && <img role="no-matches" src={img} alt="No matches found..." />}
          {!isLoading && !isError && searchResult.map((card) => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </main>
  );
};
