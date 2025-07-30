import BuyProperties from "@/components/buy/buy-poperties";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import React from "react";

const BuyPage = () => {
  return (
    <main className="min-h-screen  w-full mx-auto font-didot">
      <Header />
      <Navbar />
      <BuyProperties />
    </main>
  );
};

export default BuyPage;
