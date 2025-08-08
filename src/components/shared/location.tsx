"use client";

import localFont from "next/font/local";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApartmentResponse } from "../type";
import MapSkeleton from "../map/map-skeleton";

const MapView = dynamic(() => import("../map/map-view"), {
  ssr: false,
});

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const Location = ({ apartment }: ApartmentResponse) => {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null
  );

  useEffect(() => {
    const fetchCoords = async () => {
      if (!apartment?.location) return;

      try {
        const res = await fetch(
          `https://api.positionstack.com/v1/forward?access_key=${process.env.NEXT_PUBLIC_POSITIONSTACK_KEY}&query=${encodeURIComponent(
            apartment.location
          )}`
        );

        const data = await res.json();

        if (data?.data?.length > 0) {
          const { latitude, longitude } = data.data[0];
          setCoords({ lat: latitude, lng: longitude });
        } else {
          console.warn(
            "No coordinates found for location:",
            apartment.location
          );
        }
      } catch (error) {
        console.error("Failed to fetch coordinates", error);
      }
    };

    fetchCoords();
  }, [apartment?.location]);

  return (
    <section className="mt-10">
      <p
        className={`${HelveticaNeue.className} text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}
      >
        Location
      </p>

      <div className="w-full h-[350px] lg:h-[816px] rounded-[20px] overflow-hidden mt-5">
        {coords ? (
          <MapView coords={coords} location={apartment.location} />
        ) : (
          <MapSkeleton/>
        )}
      </div>
    </section>
  );
};

export default Location;
