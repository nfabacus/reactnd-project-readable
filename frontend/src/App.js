import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Default from './components/default'
import CategoryView from './components/category-view'
import PostNew from './components/post-new'
import PostEdit from './components/post-edit'
import PostDetailView from './components/post-detail-view'

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/" style={{ textDecoration: 'none' }}><h2 className="App-title">My Readable</h2></Link>
        </div>
        <Switch>
          <Route exact path="/" component={Default}/>
          <Route exact path="/postdetail" render={()=>
            <h1>Post details</h1>
          }/>
          <Route exact path="/:category" component={ CategoryView }/>
          <Route exact path="/post/new" component={ PostNew }/>
          <Route exact path="/:category/:id" component={ PostDetailView }/>
          <Route exact path="/post/edit/:id" component={ PostEdit}/>
        </Switch>
      </div>
    );
  }
}

export default App;
