import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Location, LocationActionTypes } from "../../redux/types/locations";

interface Props {
  item: Location,
  name: string,
  setCurrentItem: (data: Location) => LocationActionTypes
}

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

const CardItem = ({item, name, setCurrentItem}: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={setCurrentItem.bind(Card, item)}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
