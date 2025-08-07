import localFont from "next/font/local";
import React from "react";
import "../../../leaflet.config";
import { ApartmentResponse } from "../type";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const Location = ({ apartment }: ApartmentResponse) => {
  return (
    <section className="mt-10">
      <p
        className={`${HelveticaNeue.className} text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}
      >
        Location
      </p>

      {/* Wrap your MapContainer inside a styled div */}
      <div className="w-full h-[350px] lg:h-[816px] rounded-[20px] overflow-hidden mt-5">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Location;
