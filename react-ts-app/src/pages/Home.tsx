import { Component } from 'react';
import Card from '../components/Card';
import data from '../assets/data.json';

type Props = {
  value?: string;
};

class Home extends Component<Props, { value: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchValue') || '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(`You clicked search. ${data[0].tags}`);
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.value);
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue') || '';
    this.setState({ value: searchValue });
  }

  render() {
    return (
      <div className="wrapper">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
export default Home;
