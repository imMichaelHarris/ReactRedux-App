import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Description from "./Description";

const Mission = ({ mission }) => {
  const { mission_name } = mission;
  const [show, setShow] = useState();

  const useStyles = makeStyles({
    root: {
      position: "absolute",
      bottom: 0,
      right: 0

    },
    title: {
        height: 60
    },
    card: {
      position: "relative",
      maxWidth: 345,
      minHeight: 345
    },
    media: {
      height: 140
    }
  });

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {mission_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.root}>
 
          <Button size="small" color="primary" onClick={() => setShow(!show)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      {/* <button onClick={() => setShow(!show)}>Show more</button> */}
      {show && <Description description={mission.description} />}
    </div>
  );
};

export default Mission;
