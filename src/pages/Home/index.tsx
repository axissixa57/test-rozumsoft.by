import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";

import { Location, LocationActionTypes } from "../../redux/types/locations";
import { CardItem } from "../../components";
import { locationActions } from "../../redux/actions";
import { AppState } from "../../redux/reducers";

interface Props {
  currentItem: Location,
  setCurrentItem: (data: Location) => LocationActionTypes,
  fetchLocationData: () => void,
}

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

const Home = ({
  currentItem,
  setCurrentItem,
  fetchLocationData
}: Props) => {
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
