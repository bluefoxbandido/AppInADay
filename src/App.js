import React from 'react';
import MovieManager from './components/movie-manager';
import Home from './components/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/movieManager">Movie Manager</Link>
        </div>

        <hr />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movieManager" component={MovieManager}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
