import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import PersonCard from '../person/PersonCard.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    carouselDivider: {
        margin: "10px 5px 10px 5px"
    },
    signalText: {
        color: "rgba(255, 255, 255, 0.9)",
        fontSize: "1.5rem"
    },
    signalTextExplanation: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: "0.8rem",
        marginBottom: "10px",
        paddingBottom: "10px"
    }
  });


export default function CardsCarousel(props) {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <React.Fragment>

            <Divider className={classes.carouselDivider} variant="middle" />

            <Grid container justify="space-around" >
                <Grid className={classes.cardContainer} item xs={11} md={5}>

                    <Paper>
                        <Typography className={classes.signalText} gutterBottom component="h2">
                            Would you consider working with these people? 
                        </Typography>
                        <Divider className={classes.carouselDivider} variant="middle" />
                        <Typography className={classes.signalTextExplanation} gutterBottom component="h5">
                            Signaling people you'd like working with will improve our job suggestions
                        </Typography>
                    </Paper>
                    
                    
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <PersonCard/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <PersonCard/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <PersonCard/>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
            </Grid>
            
            <Divider className={classes.carouselDivider} variant="middle" />
        </React.Fragment>
      
    );
  }