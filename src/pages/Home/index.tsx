import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";

import { Location, LocationActionTypes } from "../../redux/types/locations";
import { CardItem, YandexMap } from "../../components";
import { locationActions } from "../../redux/actions";
import { AppState } from "../../redux/reducers";

interface Props {
  currentItem: Location;
  setCurrentItem: (data: Location) => LocationActionTypes;
  fetchLocationData: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  paper: {
    margin: theme.spacing(1, 1),
    padding: theme.spacing(0, 1),
    height: "100%",
    overflow: "auto"
  },
  sidebar: {
    height: "calc(100% - 16px)"
  }
}));

const Home = ({ currentItem, setCurrentItem, fetchLocationData }: Props) => {
  const classes = useStyles();
  const items = useSelector((state: AppState) => state.locations.items);

  useEffect(() => {
    fetchLocationData();

    const id = setInterval(() => {
      fetchLocationData();
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item sm={12} md={8}>
        <YandexMap currentItem={currentItem} />
      </Grid>
      <Grid item sm={12} md={4} className={classes.sidebar}>
        <div className={classes.paper}>
          {items.map((item: Location, i: number) => (
            <CardItem
              key={i}
              item={item}
              name={item.name}
              setCurrentItem={setCurrentItem}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default connect(
  (state: AppState) => ({
    currentItem: state.locations.currentItem
  }),
  locationActions
)(Home);
