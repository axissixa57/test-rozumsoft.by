import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { Location } from "../../redux/types/locations";


const YandexMap = ({ currentItem }: {currentItem: Location}) => {
  return (
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
  );
};

export default YandexMap;
