import React from 'react';
import './DarkTheme.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

function DarkTheme(props) {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: cyan,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="DarkTheme">
        {props.children}
      </div>
    </ThemeProvider>
  )
}

export default DarkTheme;
