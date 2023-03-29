import React, { Component } from 'react';

type Props = {
  value?: string;
};

class SearchBar extends Component<Props, { value: string }> {
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
    console.log(`You clicked search.`);
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.value);
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue') || '';
    this.setState({ value: searchValue });
  }
  render() {
    const { value } = this.state;
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
