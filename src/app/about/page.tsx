import Hero from "@/components/about/hero";
import ImageGrid from "@/components/about/imageGrid";
import MissionVision from "@/components/about/missionVision";
import Testimonial from "@/components/about/testimonial";
import MakeRequest from "@/components/home/makeRequest";
import Header from "@/components/shared/header";
import KeyService from "@/components/shared/keyService";
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen container w-full mx-auto font-didot">
      <Header />
      <Hero />
      <Testimonial/>
      <MissionVision/>
      <ImageGrid/>
      <KeyService />
      <MakeRequest />
    </main>
  );
};

export default AboutPage;
