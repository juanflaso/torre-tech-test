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
  personOuterCard: {
    maxWidth: 345,
    minHeight:615,
    width:"100%",
    paddingBottom: "40px"
  },
  media: {
    height: 280,
  },
  signal: {
    margin: 'auto',
    backgroundColor: "#cddc39",
  },
  carouselDivider: {
      margin: "10px 5px 10px 5px"
  },
  personName: {
    color: "rgba(255, 255, 255, 0.9)"
  },
  personDescription: {
      textAlign: 'left',
      height: "140px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "initial",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical"
  }
});

export default function PersonCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Card className={classes.personOuterCard}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://starrgate.s3.amazonaws.com:443/users/5782a70d576d656e7c32341da803307f93792696/profile_jvxh0wK.jpg"
                title="Juan Francisco Laso Delgado"
                />
                <CardContent>
                <Typography className={classes.personName} gutterBottom variant="h5" component="h2">
                    Juan Francisco Laso Delgado
                </Typography>
                <Typography className={classes.personDescription} variant="body2" color="textSecondary" component="p">
                    Computer Engineer graduate currently working in my thesis using data analysis and machine learning for predictions. 
                    With experience in scientific projects, data analytics, machine learning and software development. 
                    Experience with data visualization tools such as Tableau and Power BI.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.signal} variant="contained">Signal</Button>
            </CardActions>
        </Card>
    </React.Fragment>
    
  );
}