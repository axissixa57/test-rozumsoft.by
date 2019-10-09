import React from "react";
import Grid from "@material-ui/core/Grid";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { Sidebar } from "../";

export default function FullWidthGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <YMaps
          query={{
            ns: "use-load-option",
            load:
              "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon"
          }}
        >
          <Map
            defaultState={{
              center: [55.75, 37.57],
              zoom: 9,
              controls: ["zoomControl", "fullscreenControl"]
            }}
          >
            <Placemark
              defaultGeometry={[55.75, 37.57]}
              properties={{
                balloonContentBody:
                  "This is balloon loaded by the Yandex.Maps API module system"
              }}
            />
          </Map>
        </YMaps>
      </Grid>
      <Grid item xs={4} sm={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
