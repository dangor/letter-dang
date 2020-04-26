import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Join from './components/Join';
import DarkTheme from './components/DarkTheme'

function App() {
  return (
    <DarkTheme>
      <Router>
        <Switch>
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
