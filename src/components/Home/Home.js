import React from 'react';
import './Home.css';
import createGame from '../../lib/game.js'
import {
  Link
} from "react-router-dom";


function onGameCreated() {
  alert('ho');
}

function Home() {
  return (
    <div className="Home">
      <Link
        className="Home-link"
        onClick={() => createGame(onGameCreated)}
      >
        Create
      </Link>
      <Link
        className="Home-link"
        to="/join"
      >
        Join
      </Link>
    </div>
  );
}

export default Home;
