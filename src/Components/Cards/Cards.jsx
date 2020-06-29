import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

// import CountUp from 'countup';
import { styles } from './Cards.module.css'
const Cards = ( {data : {confirmed , recovered , deaths  } }) => {
    if(!confirmed) {
      return 'loading'
    }
    return (
    <div >
    <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography color="textSecondary">
            {confirmed.value}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography color="textSecondary">
            {recovered.value}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography color="textSecondary">
            {deaths.value}

            </Typography>
            <Typography variant="body2" component="p">
              Numbers of deaths
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
    )
}

export default Cards
