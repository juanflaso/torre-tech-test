import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    outer_card: {
      margin: 10
    },
    card_title: {
        color: "#cddc39",
        fontSize: "16px",
    }
  }));

export default function OportunityCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    

    

  return (
      <React.Fragment>
          {console.log("rendering..")}
          {(props.opportunity ? 
                <Grid container justify="center">
                    {(console.log(props.opportunity))}
                    <Grid item xs={6}>
                        <Grid container justify="center">
                            <Grid item xs={12}>
                            <Card className={classes.outer_card} variant="outlined">
                                <CardContent>

                                    <Grid container>

                                        <Grid item xs={1}>
                                            <Avatar alt={`${props.opportunity.organizations[0].name}`} src={`${props.opportunity.organizations[0].picture}`} />
                                        </Grid>

                                        <Grid item xs={8}>
                                            <Grid container justify="flex-start">
                                                <Grid item>
                                                    <Typography align="left" variant="h6" component="h2" className={classes.card_title} color="textSecondary" gutterBottom>
                                                        {props.opportunity.objective}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Grid container justify="flex-end">
                                                
                                            </Grid>
                                        </Grid>
                                
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> :
                <React.Fragment/> 
          )}
      </React.Fragment>
      
    
  );
}