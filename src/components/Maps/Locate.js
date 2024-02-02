import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

export default function MapWithCoordinates() {
  const [clickedPosition, setClickedPosition] = useState(null);
  const markerIcon = L.icon({
    iconUrl: "loc.png", // Replace 'marker-icon.png' with your marker icon image file path
    popupAnchor: [1, -34], // Set the popup anchor point
  });

  return (
    <div>
      <MapContainer
        className="container"
        center={[7, 80.09]}
        zoom={8}
        style={{ height: "800px" }}
      >
        <MapClickHandler setClickedPosition={setClickedPosition} />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        {/* Display marker at clicked position */}
        {clickedPosition && (
          <Marker position={clickedPosition} icon={markerIcon}></Marker>
        )}
      </MapContainer>

      {/* Output coordinates */}
      {clickedPosition && (
        <div>
          <p>Latitude: {clickedPosition.lat}</p>
          <p>Longitude: {clickedPosition.lng}</p>
        </div>
      )}
    </div>
  );
}

// Custom hook to handle map click events
function MapClickHandler({ setClickedPosition }) {
  const map = useMapEvents({
    click(e) {
      setClickedPosition(e.latlng); // Set clicked position coordinates
    },
  });

  return null; // No need to render anything extra
}
