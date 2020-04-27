import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { doesGameExist } from '../../lib/game.js';

function content(gameId, isGameValid) {
  if (isGameValid) {
    return (
      <div>
        You are in game: {gameId}
      </div>
    );
  } else {
    console.log('Game ' + gameId + ' is not valid');
    return (
      <Redirect to='/' />
    )
  }
}

function Game() {
  const [isGameValid, setGameValid] = useState(true);
  const { gameId } = useParams();

  useEffect(() => {
    doesGameExist().then((valid) => {
      setGameValid(valid);
    })
  }, []);

  return (
    <div>
      {content(gameId, isGameValid)}
    </div>
  )
}

export default Game;
