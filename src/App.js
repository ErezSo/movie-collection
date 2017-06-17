import React, { Component } from 'react';
import './index.css';

import Collection from './components/Collection';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>My Movie Collection</h2>
            <Link to="/">Home</Link>
          </div>

          <div className="container">
            <Match exactly pattern="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;