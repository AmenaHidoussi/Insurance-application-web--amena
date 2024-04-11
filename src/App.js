import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Boutique from './components/Boutique/boutique';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Contact  from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </Router>
      </div>
    );
  }
}

export default App;


