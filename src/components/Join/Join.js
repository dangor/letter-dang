import React, { useState } from 'react';
import './Join.css';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Grid, TextField } from '@material-ui/core';

function Join() {
  const [value, setValue] = useState('')
  const toUpper = ({target}) => {
    setValue(target.value.toUpperCase());
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
          <TextField id="room_code" label="Room Code" placeholder="ABCD" inputProps={{maxlength:4}} value={value} onChange={toUpper}/>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Join
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Join;
