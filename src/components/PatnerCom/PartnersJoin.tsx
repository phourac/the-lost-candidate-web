"use client";
import React from "react";
import { motion } from "framer-motion";
// import { logopatners } from "@/utils/data-util"; // corrected import to include only necessary data
import Image from "next/image";

interface IPartnerJoin {
  logopatners: {
    logo: string;
  }[];
}

function PartnersJoin({ logopatners }: IPartnerJoin) {
  const logopatnersRevers = [...logopatners].reverse(); // Create a copy of the array before reversing
  return (
    <div className="bg-primary-content container mx-auto  rounded-[32px]">
      <div className="flex flex-col p-[32px]">
        <div className="grid grid-cols-6 ">
          {logopatners.map((slide, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={slide.logo}
                alt=""
                width={"0"}
                height={"0"}
                className="object-cover w-[100px] h-auto"
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6">
          {logopatnersRevers.map((slide, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={slide.logo}
                alt=""
                width={"0"}
                height={"0"}
                className="object-cover w-[100px] h-auto"
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnersJoin;
