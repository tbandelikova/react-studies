import { Component } from 'react';
import img from '../assets/404.svg';

class NoMatch extends Component {
  render() {
    return (
      <div className="wrapper-no-match">
        <img src={img} alt="404" />
      </div>
    );
  }
}
export default NoMatch;
