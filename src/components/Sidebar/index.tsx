import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import { CardItem } from "../";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: "100%",
      height: "98vh",
      transform: "translateZ(0)"
    }
  })
);

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </GridList>
    </div>
  );
};

export default Sidebar;
