import { Component } from 'react';
import Header from '../components/Header';

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="wrapper center-column">
          <p>Welcome to React!</p>
        </div>
      </>
    );
  }
}
export default About;
