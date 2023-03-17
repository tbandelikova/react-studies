import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    );
  }
}
