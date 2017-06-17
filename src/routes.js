import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import Collection from './components/Collection';
import './index.css';


 const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/collection" component={Collection}/>
    </div>
  </Router>
);

export default Routes;