import { useRef } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { ClipLoader } from "react-spinners";
import mapProvider from "./Map-Provider";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const markerIcon = new L.Icon({
  iconUrl: require("../../marker-icon.png"),
  iconSize: [35, 45],
});

const BasicMap = () => {
  const weatherDetails = useSelector((state) => {
    if (state.weather.loading) {
      return "Loading...";
    } else {
      return state.weather.data;
    }
  });

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
  };

  const ZOOM_LEVEL = 12;
  const mapRef = useRef();

  return weatherDetails.location !== undefined ? (
    <MapContainer
      center={{
        lat: weatherDetails.location.lat,
        lng: weatherDetails.location.lon,
      }}
      zoom={ZOOM_LEVEL}
      ref={mapRef}
    >
      <TileLayer
        url={mapProvider.maptiler.url}
        attribution={mapProvider.maptiler.attribution}
        maxZoom={10}
      />
      <Marker
        position={[weatherDetails.location.lat, weatherDetails.location.lon]}
        icon={markerIcon}
      />
    </MapContainer>
  ) : (
    <ClipLoader
      color="#ffffff"
      loading={true}
      cssOverride={override}
      size={80}
    />
  );
};

export default BasicMap;
