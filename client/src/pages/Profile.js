import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TeamMembers } from '../components/Charts';





function Profile() {
    return (
     <>
    <Grid container>
        <Grid item xs={3}>
            <Paper>item 1</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper></Paper>
        </Grid>
        <Grid item xl={6}>
            <Paper><TeamMembers /></Paper>
        </Grid>
    </Grid>

     </>
    )
}

export default Profile
