import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../src/components/header/Header';
import Settings from '../src/components/settings/Settings'
import Profile from './components/profile/Profile';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app ui container">
          <Header />
          <Route exact={true} path="/" component={Home} />
          <Route path="/profile" component={Profile}></Route>
          <Route path="/settings" component={Settings}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
