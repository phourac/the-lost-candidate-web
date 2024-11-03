import { vision } from "@/utils/data-util";
import Image from "next/image";
import React from "react";

const OurVision = () => {
  return (
    <div className="container md:px-0 px-4 mx-auto pb-8 ">
      <div className="flex flex-col gap-4 items-end">
        <h1 className="text-primary md:text-3xl text-xl font-bold uppercase ">
          About us
        </h1>
        <h6 className="md:text-3xl text-xl font-bold uppercase">Our Vision </h6>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 gap-4">
        <Image
          src="/images/rb_2616.png"
          alt=""
          width={500}
          height={500}
          className=""
        />
        <div className="flex flex-col gap-2">
          {vision.map((item, i) => (
            <div className="max-w-[600px]" key={i}>
              <h1
                className="md:text-6xl text-4xl font-bold text-primary opacity-40 md:text-start  text-center"
                key={i}
              >
                0{i + 1}.
              </h1>
              <p className="md:text-lg text-md md:text-start  text-center">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurVision;
