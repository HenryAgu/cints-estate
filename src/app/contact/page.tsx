import ContactSection from "@/components/contact/contactSection";
import Banner from "@/components/privacy/banner";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen container w-full mx-auto font-didot">
      <Header />
      <Navbar />
      <Banner
        title="Call Us"
        text="Have questions about buying, selling, or investing in property? Our expert team is just a phone call away."
      />
      <div className="lg:bg-[url(/images/contact-background.png)] bg-no-repeat bg-cover max-h-full mx-4 lg:m-20 rounded-[28px]">
        <div className="lg:px-20 py-15 flex justify-end">
          <ContactSection/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
