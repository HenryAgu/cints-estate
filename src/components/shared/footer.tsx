import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

interface Socials {
  image: string;
  path: string;
}

interface Nav {
  title: string;
  path: string;
}

const socials: Socials[] = [
  {
    image: "/icons/Instagram.svg",
    path: "https://www.instagram.com/Cintsestate",
  },
  {
    image: "/icons/X.svg",
    path: "/",
  },
  {
    image: "/icons/TikTok.svg",
    path: "/",
  },
  {
    image: "/icons/Youtube.svg",
    path: "/",
  },
];

const nav: Nav[] = [
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Properties",
    path: "/properties",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "List a Property",
    path: "/about",
  },
  {
    title: "Terms of Use",
    path: "/terms",
  },
  {
    title: "Privacy policy",
    path: "/privacy",
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-primary-500">
      <div className=" mx-auto w-full px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 2xl:py-14">
        <div className="flex flex-col lg:items-center gap-y-10">
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={104}
            height={79}
            className="lg:w-[104px] lg:h-[79px] w-16 h-12 mx-auto"
          />
          <div
            className={`flex md:flex-row flex-col md:gap-x-10 lg:gap-x-20 xl:gap-x-28 2xl:gap-x-24.5 gap-y-14 ${HelveticaNeue.className}`}
          >
            {/* Contact */}
            <div className="flex flex-col gap-y-3 lg:gap-y-4">
              <p className="text-white font-semibold text-lg lg:text-xl">
                Reach out
              </p>
              <div className="flex flex-col gap-y-2 lg:gap-y-3">
                <Link
                  href="tel:+2345018019595"
                  className="relative w-fit text-white font-light text-base lg:text-lg after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  +234 501-801 9595
                </Link>

                <Link
                  href="mailto:contact@cintsestate.com"
                  className="relative w-fit text-white font-light text-base lg:text-lg after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact@cintsestate.com
                </Link>
              </div>
            </div>

            {/* Main */}
            <div className="flex flex-col gap-y-3 lg:gap-y-4">
              <p className="text-white font-semibold text-lg lg:text-xl">
                Main
              </p>
              <div className="flex flex-col gap-y-2 lg:gap-y-3">
                {nav.slice(0, 4).map((item, index) => (
                  <Link
                    href={item.path}
                    key={index}
                    className="relative w-fit text-white font-light text-base lg:text-lg after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Us */}
            <div className="flex flex-col gap-y-3 lg:gap-y-4">
              <p className="text-white font-semibold text-lg lg:text-xl">
                About Us
              </p>
              <div className="flex flex-col gap-y-2 lg:gap-y-3">
                {nav.slice(4, 8).map((item, index) => (
                  <Link
                    href={item.path}
                    key={index}
                    className="relative w-fit text-white font-light text-base lg:text-lg after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-y-3 lg:gap-y-4">
              <p className="text-white font-semibold text-lg lg:text-xl">
                Location
              </p>
              <p className="text-white font gap-y-2-lg:light text-base lg:text-lg">
                124 Kensington High Street London, <br />
                W8 7RG, United Kingdom
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-y-5 items-center justify-between mt-10">
          <p
            className={`text-white text-base lg:text-lg font-normal ${HelveticaNeue.className}`}
          >
            © 2025, Cints Estate All Rights Reserved.
          </p>
          <div className="flex items-center gap-x-6">
            {socials.map((item, index) => (
              <Link href={item.path} key={index} target="_blank">
                <Image
                  src={item.image}
                  alt="icon"
                  width={56}
                  height={56}
                  className="aspect-square w-12 h-12 lg:w-14 lg:h-14"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
