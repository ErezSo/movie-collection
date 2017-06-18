import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {loadMovies} from './actions/movie_actions';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();
store.dispatch(loadMovies());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </ Provider>,
  document.getElementById('root')
);
registerServiceWorker();
