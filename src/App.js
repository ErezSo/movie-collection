import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Collection from './components/Collection';
import MovieItem from './components/MovieItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Movie Collection</h2>
          <Link to="/">Home</Link>
        </div>
        <div className="container">
          <Route exact path="/" component={Collection} />
          <Route path="/collection" component={Collection} />
          <Route path="/movie/:id" component={MovieItem} />
        </div>
      </div>
    );
  }
}

export default App;