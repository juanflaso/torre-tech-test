import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  noResultsOuterCard: {
    maxWidth: 345,
    margin: "30px auto",
    padding: "auto",
    paddingBottom: "40px",
    
  },
  noResultsText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1rem"
  }
});

export default function NoResultsCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Card className={classes.noResultsOuterCard}>
            <Typography className={classes.noResultsText} gutterBottom component="h2">
                Sorry! No results for your search
            </Typography>
        </Card>
    </React.Fragment>
    
  );
}