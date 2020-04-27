import React, { useState } from 'react';
import './Join.css';
import { Link, Redirect } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { Button, CircularProgress, Grid, TextField } from '@material-ui/core';
import { doesGameExist } from '../../lib/game.js';

function joinButton(buttonEnabled, isCheckingRoom, onClick) {
  if (!isCheckingRoom) {
    return (
      <Button variant="contained" color="primary" disabled={!buttonEnabled} onClick={onClick}>
        Join
      </Button>
    )
  } else {
    return (
      <CircularProgress />
    )
  }
}

function redirectToGame(gameId) {
  if (!gameId) {
    return null;
  } else {
    return (
      <Redirect to={"/game/" + gameId} />
    )
  }
}

function Join() {
  const [roomCode, setRoomCode] = useState('')
  const [isChecking, setChecking] = useState(false)
  const [redirectToGameId, setRedirectToGameId] = useState(undefined);

  const toUpper = ({target}) => {
    setRoomCode(target.value.toUpperCase());
  }

  function onJoinClick() {
    setChecking(true);
    doesGameExist(roomCode).then((exists) => {
      if (exists) {
        setRedirectToGameId(roomCode);
      } else {
        setChecking(false);
      }
    });
  }

  return (
    <div className="Join">
      <header className="Join-header">
        <Link to="/">
          <CloseIcon/>
        </Link>
      </header>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <TextField id="room_code" label="Room Code" placeholder="ABCD" inputProps={{maxLength:4}} value={roomCode} onChange={toUpper}/>
        </Grid>
        <Grid item>
          {joinButton(roomCode.length === 4, isChecking, onJoinClick)}
        </Grid>
        <Grid item>
          {redirectToGame(redirectToGameId)}
        </Grid>
      </Grid>
    </div>
  );
}

export default Join;
