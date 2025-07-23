import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

interface Mission {
  title: string;
  content: string;
}

const mission: Mission[] = [
  {
    title: "Mission",
    content:
      "At Cints Estate, our mission is to simplify the property journey by connecting people to homes and investments that truly fit their needs. We are committed to delivering trusted, personalized, and innovative real estate solutions that empower individuals, families, and businesses to make confident property decisions.",
  },
  {
    title: "Vision",
    content:
      "Our vision is to become a leading force in the real estate industry by redefining how people discover, evaluate, and secure properties. We aim to create a trusted and innovative platform where technology meets personalized service—making property ownership and investment more accessible, transparent, and rewarding for everyone",
  },
];

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const MissionVision = () => {
  return (
    <section className="lg:my-12 lg:mb-18 mx-4 lg:mx-20 flex lg:flex-row flex-col gap-4 lg:gap-5">
      {mission.map((item) => (
        <div
          className="flex flex-col bg-[url(/images/about.png)] bg-no-repeat bg-cover border border-[#E1E0E0] p-5 py-10 lg:p-10 rounded-3xl"
          key={item.title}
        >
          <Image
            src="/icons/user.svg"
            alt="user_icon"
            width={36}
            height={36}
            className="w-9 h-9 aspect-square"
          />
          <div className="flex flex-col gap-y-4 mt-8">
            <p className="text-brand-neutral-500 text-xl lg:text-[26px] lg:leading-[140%] font-bold">
              {item.title}
            </p>
            <p
              className={`${HelveticaNeue.className} text-[#414141] font-light text-base lg:text-lg`}
            >
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MissionVision;
