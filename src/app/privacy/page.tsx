import Banner from "@/components/privacy/banner";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import TermsOfUse from "@/components/shared/termsOfUse";
import React from "react";

const PrivacyPage = () => {
  return (
    <main className="min-h-screen container w-full mx-auto font-didot">
      <Header />
      <Navbar/>
      <Banner/>
      <TermsOfUse/>
    </main>
  );
};

export default PrivacyPage;
