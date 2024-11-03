import { mission } from "@/utils/data-util";
import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="container md:px-0 px-4 mx-auto  md:mt-32">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-primary md:text-3xl text-xl font-bold uppercase ">
          About us
        </h1>
        <h6 className="md:text-3xl text-xl font-bold uppercase">
          Our Mission{" "}
        </h6>
      </div>

      <div className="py-8 flex md:flex-row flex-col justify-between md:gap-0 gap-4">
        {mission.map((item, i) => (
          <div className="max-w-[300px]" key={i}>
            <h1
              className="md:text-6xl text-4xl font-bold text-primary opacity-40"
              key={i}
            >
              0{i + 1}.
            </h1>
            <p className="md:text-lg text-md text-start">{item.des}</p>
          </div>
        ))}
      </div>

      <Image
        src="/images/rb_4388.png"
        alt=""
        width={600}
        height={600}
        className="flex mx-auto"
      />
    </div>
  );
};

export default OurMission;
