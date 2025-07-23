import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

interface Nav {
  title: string;
  path: string;
}

const nav: Nav[] = [
  {
    title: "Shortlet",
    path: "/shortlet",
  },
  {
    title: "Buy",
    path: "/buy",
  },
  {
    title: "Development",
    path: "/development",
  },
];

interface NavbarProps {
  color?: string;
}

const Navbar = ({ color = "#988261" }: NavbarProps) => {
  return (
    <nav
      className={`${HelveticaNeue.className} px-4 lg:px-10 xl:px-14 2xl:px-20 py-5 container w-full mx-auto flex lg:flex-row flex-col gap-y-2 items-center justify-between`}
      style={{ color }}
    >
      <ul className="flex items-center gap-x-5 lg:gap-x-10">
        {nav.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="text-base lg:text-lg font-normal transition-all duration-200 ease-in hover:font-medium"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-x-0.5">
        <Image
          src="/icons/flag.svg"
          alt="flag-icon"
          width={32}
          height={24}
          className="lg:aspect-[32/24] lg:w-8 lg:h-6 w-4 h-3"
        />
        <select name="" id="" className="text-base lg:text-lg font-normal">
          <option value="United Kingdom">United Kingdom</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
