import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Movies from "./components/Movies";
import MoviePage from "./components/MoviePage";
import "./index.css";

const Routes = () =>
  <Route path="/" component={App}>
    <div className="container">
      <Route exact path="/" component={Movies} />
      <Route path="movies" component={Movies} />
      <Route path="movies/:id" component={MoviePage} />
    </div>
  </Route>;

export default Routes;
