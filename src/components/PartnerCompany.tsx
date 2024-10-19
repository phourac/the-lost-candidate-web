"use client";
// import { patnerscompany } from "@/utils/data-util";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface IPartnerCompany {
  patnerscompany: {
    logo: string;
  }[];
}

//infinite slider
const PartnerCompany = ({ patnerscompany }: IPartnerCompany) => {
  const duplicatedSlides = [...patnerscompany, ...patnerscompany];

  return (
    <div className="relative md:py-10 py-5 bg-primary-content overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-primary-content via-primary-content/50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-primary-content via-primary-content/50 to-transparent z-10"></div>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center items-center"
            style={{ width: `${100 / patnerscompany.length}%` }}
          >
            <div className="flex justify-center items-center">
              <Image
                src={slide.logo}
                alt=""
                width={132}
                height={132}
                className="object-cover"
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnerCompany;
