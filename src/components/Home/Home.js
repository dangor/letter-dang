import React, { useEffect, useState } from 'react';
import './Home.css';
import {
  Link
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import { auth, authUi, emailAuthProvider } from '../../services/firebase.js';

function Home() {
  const [isAuthShowing, setAuthShowing] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        authUi.start('#firebaseui-auth-container', {
          signInOptions: [
            emailAuthProvider
          ],
          callbacks: {
            signInSuccessWithAuthResult: () => setAuthShowing(false),
            uiShown: () => setAuthShowing(true)
          },
        });
      }
    })
  }, []);

  return (
    <Grid container direction="column" spacing={3} alignItems="center" justify="center" className="Home">
      <Grid item id="firebaseui-auth-container">
      </Grid>
      { !isAuthShowing && [
        <Grid item key='create'>
          <Link
            className="Home-link"
            to="/create"
          >
            Create
          </Link>
        </Grid>,
        <Grid key='join'>
          <Link
            className="Home-link"
            to="/join"
          >
            Join
          </Link>
        </Grid>
      ]}
    </Grid>
  );
}

export default Home;
