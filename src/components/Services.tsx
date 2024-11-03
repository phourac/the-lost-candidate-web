"use client";
import Image from "next/image";
import React from "react";

import { Variants, motion } from "framer-motion";

import { purpose, team } from "@/utils/data-util";
// import { serviceA } from "@/utils/data-util";

interface ISerices {
  introduction: {
    title: string;
    des: string;
    img: string;
  };
}

function Sevices({ introduction }: ISerices) {
  // const cardVariants: Variants = {
  //   offscreen: {
  //     y: 200,
  //   },
  //   onscreen: {
  //     y: 0,
  //     // rotate: -10,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 1.5,
  //     },
  //   },
  // };

  // const {
  //   data: listReference,
  //   loading: loadingListReference,
  //   error: errorListReference,
  //   refresh: refreshListReference,
  // } = useRequest(
  //   () => REFERENCE_API.getListReference() // API expects 1-based indexing
  // );
  // console.log("listReference", listReference);

  return (
    <div className="container md:px-0 px-4 mx-auto py-8">
      <div className="flex flex-col gap-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          // variants={cardVariants}
          className="relative"
        >
          <motion.div className="relative">
            <Image
              src={introduction.img}
              alt="Driver Image"
              width={400}
              height={400}
              className="xl:w-[663px] md:w-[400px]  h-full"
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </motion.div>
          <div className="md:absolute top-20 right-0 my-5 md:my-0">
            <ServiceCom title={introduction.title} des={introduction.des} />
          </div>
        </motion.div>

        <motion.div
          className="relative md:flex md:flex-row-reverse"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          // variants={cardVariants}
        >
          <Image
            src={team.img}
            alt="Driver Image"
            // fill
            width={400}
            height={400}
            className="xl:w-[663px] md:w-[400px]  h-full rounded-2xl"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <div className="md:absolute top-20 md:left-0 right-0 my-5 md:my-0 z-10">
            <ServiceCom title={team.title} des={team.des} />
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          // variants={cardVariants}
        >
          <Image
            src={purpose.img}
            alt="Driver Image"
            // fill
            width={400}
            height={400}
            className="xl:w-[663px] md:w-[400px]  h-full"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <div className="md:absolute top-20 right-0 my-5 md:my-0">
            <ServiceCom title={purpose.title} des={purpose.des} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface IService {
  title: string;
  des: string;
}

const ServiceCom = ({ des, title }: IService) => {
  return (
    <div className="bg-primary-content py-[32px] px-[38px] rounded-[32px] max-w-[698px]">
      <h1 className="text-primary-typography md:text-[32px] text-[28px] font-semibold">
        {title}
      </h1>
      <p className="text-primary-typography md:text-[18px] text-[14px]">
        {des}
      </p>
    </div>
  );
};

export default Sevices;
