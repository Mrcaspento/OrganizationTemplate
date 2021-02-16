import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TeamMembers } from '../components/Charts';
import { Members } from '../components/Members'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Profile() {
    const classes = useStyles();
    return (
     <div className={classes.root}>
         <Container fixed>
    <Grid
     container
     spacing={3}
     direction="row"
     justify="space-around"
     alignItems='flex-start' >
        <Grid item xs={5}>
            <Paper><Members /></Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper><TeamMembers /></Paper>
        </Grid>
    </Grid>
    </Container>
     </div>
    )
}

export default Profile
