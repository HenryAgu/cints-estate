"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import { useEffect } from "react";

// Fix leaflet marker icons
import "../../../leaflet.config";

interface MapViewProps {
  coords: { lat: number; lng: number };
  location: string;
}

// Extend the Icon.Default interface to include _getIconUrl
interface CustomIconDefault extends L.Icon.Default {
  _getIconUrl?: () => string;
}

const MapView = ({ coords, location }: MapViewProps) => {
  useEffect(() => {
    const defaultIcon = L.Icon.Default.prototype as CustomIconDefault;

    // Safely delete _getIconUrl if it exists
    if (defaultIcon._getIconUrl) {
      delete defaultIcon._getIconUrl;
    }

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
      iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
      shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
    });
  }, []);

  return (
    <MapContainer
      center={[coords.lat, coords.lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.lat, coords.lng]}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;