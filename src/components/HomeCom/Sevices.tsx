"use client";
import Image from "next/image";
import React from "react";
import Driver from "../../../public/images/driver.png";
import Deliver from "../../../public/images/deliver.png";
import Cooking from "../../../public/images/cooking.png";
import { Variants, motion } from "framer-motion";

import ServiceCom from "../ServiceCom";
// import { serviceA } from "@/utils/data-util";

interface ISerices {
  serviceA: {
    title: string;
    des: string;
  };
}

function Sevices({ serviceA }: ISerices) {
  const cardVariants: Variants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  return (
    <div className="container md:px-0 px-4 mx-auto py-8">
      <div className="flex flex-col gap-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          variants={cardVariants}
          className="relative"
        >
          <motion.div className="relative">
            <Image
              src={"/images/driver.png"}
              alt="Driver Image"
              // fill
              width={400}
              height={400}
              className="xl:w-[663px] md:w-[400px]  h-full"
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </motion.div>
          <div className="md:absolute top-20 right-0 my-5 md:my-0">
            <ServiceCom title={serviceA.title} des={serviceA.des} />
          </div>
        </motion.div>

        <motion.div
          className="relative md:flex md:flex-row-reverse"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          variants={cardVariants}
        >
          <Image
            src={"/images/deliver.png"}
            alt="Driver Image"
            // fill
            width={400}
            height={400}
            className="xl:w-[663px] md:w-[400px]  h-full"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <div className="md:absolute top-20 md:left-0 right-0 my-5 md:my-0 z-10">
            <ServiceCom title={serviceA.title} des={serviceA.des} />
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          variants={cardVariants}
        >
          <Image
            src={"/images/cooking.png"}
            alt="Driver Image"
            // fill
            width={400}
            height={400}
            className="xl:w-[663px] md:w-[400px]  h-full"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <div className="md:absolute top-20 right-0 my-5 md:my-0">
            <ServiceCom title={serviceA.title} des={serviceA.des} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sevices;
