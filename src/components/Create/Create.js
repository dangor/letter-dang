import React, { useEffect, useState } from 'react';
import './Create.css';
import { CircularProgress, Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { createGame } from '../../lib/game.js'

function content(gameId) {
  if (!gameId) {
    return (
      <CircularProgress />
    );
  } else {
    return (
      <Redirect to={"/game/" + gameId} />
    )
  }
}

function Create() {
  const [gameId, setGameId] = useState(undefined);

  useEffect(() => {
    createGame().then((newId) => {
      setGameId(newId);
    });
  }, []);

  return (
    <Grid container direction="column" justify="center" alignItems="center" className="Create">
      <Grid item>
        {content(gameId)}
      </Grid>
    </Grid>
  );
}

export default Create;
