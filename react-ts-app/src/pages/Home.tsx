import { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import data from '../assets/data.json';

class Home extends Component {
  render() {
    return (
      <main>
        <div className="wrapper center-column">
          <SearchBar />
          <div className="cards">
            {data.map((card) => (
              <Card {...card} key={card.id} />
            ))}
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
