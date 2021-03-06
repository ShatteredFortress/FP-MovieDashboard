import React from "react";
import Sidebar from "./components/Sidebar";

import Homepage from "./components/Homepage";
import Moviespage from "./components/Moviespage";
import Showspage from "./components/Showspage";
import Authorspage from "./components/Authorspage";
import Features from './components/Features';
import Favorites from './components/FavoriteMovies';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <Homepage /> */}
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/movies" component={Moviespage} exact />
          <Route path="/shows" component={Showspage} exact />
          <Route path="/authors" component={Authorspage} exact />
          <Route path="/features" component={Features} exact />
          <Route path="/favoritemovies" component={Favorites} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
