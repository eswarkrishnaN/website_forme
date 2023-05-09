import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./maps.css"
const containerStyle = {
  width: "1000px",
  height: "400px",
  
};

const center = {
  lat: 17.686756,
  lng: 83.246651,
};

function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBAe6UjvVFQv5aMNMdsgPeP7PDIy9vKFYc",
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} zoom={10} center={center}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default function Map() {
  return<div className="main_maps"><Maps ></Maps></div> ;
}
