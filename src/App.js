import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from './components/Header';
import Home from './containers/Home';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
