import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Default from './components/default'
import CategoryView from './components/category-view'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Readable</h2>
        </div>
        <Switch>
          <Route exact path="/" component={Default}/>
          <Route path="/postdetail" render={()=>
            <h1>Post details</h1>
          }/>
          <Route path="/category/:url" component={ CategoryView }/>
        </Switch>
      </div>
    );
  }
}

export default App;
