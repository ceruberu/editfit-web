import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from './components/Header';
import Home from './containers/Home';
import AddButton from './components/AddButton';

import "./App.css";

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Header user={user}/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Route exact path="/" component={AddButton} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer
});

export default withRouter(connect(mapStateToProps)(App));
