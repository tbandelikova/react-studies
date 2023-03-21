import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Forms from './pages/Forms';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    );
  }
}