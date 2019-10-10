import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface Props {
  coodrs: number[],
  name: string,
  setCurrentItem: any,
  item: any
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

const CardItem: React.FunctionComponent<Props> = ({item, coodrs, name, setCurrentItem}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={setCurrentItem.bind(Card, item)}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
