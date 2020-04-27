import React from 'react';
import './Home.css';
import {
  Link
} from "react-router-dom";
import { Grid } from '@material-ui/core'

function Home() {
  return (
    <Grid container direction="column" spacing={3} alignItems="center" justify="center" className="Home">
      <Grid item>
        <Link
          className="Home-link"
          to="/create"
        >
          Create
        </Link>
      </Grid>
      <Grid>
        <Link
          className="Home-link"
          to="/join"
        >
          Join
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
