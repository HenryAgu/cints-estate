import localFont from "next/font/local";
import React from "react";

interface Testimony {
  title: string;
  number: string;
}

const testimony: Testimony[] = [
  {
    title: "Client Satisfaction",
    number: "5.0",
  },
  {
    title: "Trusted Clients",
    number: "2k+",
  },
  {
    title: "Property Purchase",
    number: "9000",
  },
  {
    title: "Improved Business",
    number: "90%",
  },
];

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const Testimonial = () => {
  return (
    <section className="relative mx-4 lg:mx-20 my-10 lg:my-24 bg-[url(/images/testimonial.png)] bg-no-repeat bg-cover h-full py-35 lg:py-20 rounded-4xl">
      <div className="absolute inset-0 bg-[#354737]/75 rounded-4xl">
        <div className="relative z-10 flex flex-wrap gap-x-5 lg:gap-x-[90px] justify-center items-center h-full">
          {testimony.map((item) => (
            <div
              className="flex flex-col lg:gap-y-1.5 text-white text-center"
              key={item.title}
            >
              <p className="text-3xl lg:text-[52px] font-bold lg:leading-[140%]">
                {item.number}
              </p>
              <span
                className={`${HelveticaNeue.className} lg:text-xl text-lg font-light lg:leading-[140%]`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
