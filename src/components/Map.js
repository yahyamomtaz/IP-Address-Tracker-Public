import React, { useEffect, useState, useRef } from "react";
import GoogleMap from 'google-maps-react-markers'

const Marker = () => (
  <div className="loader"></div>
);


export default function Map({ coordinates, markerCoordinates }) {

  const [newCoordinates, setNewCoordinates] = useState({
    lat: coordinates[0],
    lng: coordinates[1],
  });
  const mapRef = useRef(null)

  const onGoogleApiLoaded = ({ map }) => {
    mapRef.current = map;
  };

  const defaultProps = {
    center: {
      lat: 40.8522,
      lng: 14.2681
    },
    zoom: 11
  };

  useEffect(() => {
    if (coordinates.length === 2) {
      setNewCoordinates({ lat: coordinates[0], lng: coordinates[1] });
    }
  }, [coordinates]);

  useEffect(() => {
    if (mapRef.current && newCoordinates) {
      mapRef.current.setCenter(newCoordinates);
    }
  }, [newCoordinates]);

  return (
    <div
      className="relative w-full h-screen"
    >
      <GoogleMap
        apiKey="" //enter your google maps api key here
        defaultCenter={{ lat: defaultProps.center.lat, lng: defaultProps.center.lng }}
        defaultZoom={defaultProps.zoom}
        center={newCoordinates}
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        <Marker
          lat={coordinates[0]}
          lng={coordinates[1]}
        />
      </GoogleMap>
    </div>
  );
}
