import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "100%",
      margin: theme.spacing(0, 0, 2, 0),
      "&:last-child": {
        marginBottom: 1
      }
    }
  })
);

const CardItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
