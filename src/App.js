import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DarkTheme from './components/DarkTheme'

import Create from './components/Create';
import Game from './components/Game';
import Home from './components/Home';
import Join from './components/Join';

function App() {
  return (
    <DarkTheme>
      <Router>
        <Switch>
          <Route path="/game/:gameId">
            <Game />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </DarkTheme>
  );
}

export default App;
