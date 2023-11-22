import React from "react";

import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import { useEffect, useRef } from "react";
import { geosearch } from "esri-leaflet-geocoder";
import "../../App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const defaultCenter = [80.0, 7.0];
const defaultZoom = 5;

export default function Map(props) {
  const markerPosition = [props.xcoord,props.ycoord]; // Replace with the coordinates of the location you want to mark
  // 51.505, -0.09
  return (
    <div>
      <MapContainer
        className="container"
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: "800px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        <Marker position={markerPosition}></Marker>
      </MapContainer>
    </div>
  );
}
