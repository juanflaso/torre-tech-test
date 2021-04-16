import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles({
  personOuterCard: {
    maxWidth: 345,
    width:"100%",
    paddingBottom: "40px"
  },
  media: {
    height: 300,
  },
  signal: {
    margin: 'auto',
    backgroundColor: "#cddc39",
  },
  carouselDivider: {
      margin: "10px 5px 10px 5px"
  },
  personName: {
    color: "rgba(255, 255, 255, 0.9)",
    marginRight: "20px",
    marginLeft: "20px"
  },
  organizationMembers: {
    width: "144px",
    margin: "auto"
  }
});

export default function OrganizationCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Card className={classes.personOuterCard}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/torre-technologies-co/image/upload/v1600927140/origin/bio/organizations/Recursion_Pharmaceuticals_bihtmc.png"
                title="Recursion Pharmaceuticals"
                />
                <CardContent>
                <Typography className={classes.personName} gutterBottom variant="h5" component="h2">
                    Recursion Pharmaceuticals
                </Typography>
                <Typography className={classes.personDescription} variant="body2" color="textSecondary" component="p">
                    You would be working with:
                </Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://starrgate.s3.amazonaws.com:443/users/ec195af433c2879de35cb637ac4fbea97ac23cc2/profile_sU8F6Lj.jpg" />
                    <Avatar alt="Travis Howard" src="https://starrgate.s3.amazonaws.com:443/users/a8e34d9217baaf5f66637de98a1b56d6a5ac369f/profile_vJZUpFo.jpg" />
                    <Avatar alt="Cindy Baker" src="https://starrgate.s3.amazonaws.com:443/users/0f4d75512b5a65bf510125f5117e9164da892571/profile_vtg9xny.jpg" />
                    <Avatar alt="Agnes Walker" src="https://starrgate.s3.amazonaws.com:443/users/64a28630601d18fb973853c3f8314a2784002cfc/profile_bC0gQCZ.jpg" />
                </AvatarGroup>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.signal} variant="contained">Signal</Button>
            </CardActions>
        </Card>
    </React.Fragment>
    
  );
}