import React, { Component } from 'react';

type Props = {
  value?: string;
};

class SearchBar extends Component<Props, { value: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('You clicked search.');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Site Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
