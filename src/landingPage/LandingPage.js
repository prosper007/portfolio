import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import greyBackground from '../assets/ourGreyBackground.jpg';
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${greyBackground})`,
  },
  paperRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "16em",
    borderRadius: "0.75em",
  }
})

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid xs={9}>
        <Paper classes={{
          root: classes.paperRoot,
        }}>
          Leggo!
        </Paper>
      </Grid>
    </div>
  )
}

export default LandingPage;