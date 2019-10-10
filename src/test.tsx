import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { CardItem } from "./components";
import { any } from "prop-types";
import { locationActions } from "./redux/actions";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  //   image: {
  //     backgroundImage: "url(https://source.unsplash.com/random)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover",
  //     backgroundPosition: "center"
  //   },
  paper: {
    margin: theme.spacing(1, 1),
    padding: theme.spacing(0, 1),
    height: "100%",
    overflow: "auto"
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  sidebar: {
    height: "calc(100% - 16px)"
  }
}));

const App = ({ items, currentItem, setLocationData }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item sm={12} md={8}>
        <YMaps
          query={{
            ns: "use-load-option",
            load:
              "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon"
          }}
        >
          <Map
            width="100wh"
            height="100vh"
            state={{
              center: currentItem.coodrs,
              zoom: 11,
              controls: ["zoomControl", "fullscreenControl"]
            }}
          >
            <Placemark
              geometry={currentItem.coodrs}
              properties={{
                balloonContentBody: currentItem.name
              }}
            />
          </Map>
        </YMaps>
      </Grid>
      <Grid item sm={12} md={4} className={classes.sidebar}>
        <div className={classes.paper}>
          {items.map((item, i) => (
            <CardItem
              key={i}
              item={item}
              coodrs={item.coodrs}
              name={item.name}
              setLocationData={setLocationData}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default connect(
  ({ locations }) => ({
    items: locations.items,
    currentItem: locations.currentItem
  }),
  locationActions
)(App);
