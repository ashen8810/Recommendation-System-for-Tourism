import React from "react";

import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import { useEffect, useRef } from "react";
import { geosearch } from "esri-leaflet-geocoder";
import "../../App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const defaultCenter = [7.0, 80.0];
const defaultZoom = 9;

export default function Map(props) {
  const markerIcon = L.icon({
    iconUrl: "loc.png", // Replace 'marker-icon.png' with your marker icon image file path
    popupAnchor: [1, -34], // Set the popup anchor point
  });

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

        <Marker
          position={[props.xcoord, props.ycoord]}
          icon={markerIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
}
