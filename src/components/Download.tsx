"use client";
import Image from "next/image";
import React from "react";

import { Variants, motion, useScroll, useTransform } from "framer-motion";

export const download = {
  img: "/images/bloc_round.png",
  title: "Download and try it now!",
  des: "Where to download the app, how to register and add your address, how to place your first order and much more. With these tips, everything becomes clear",
  iphone: "/images/iphone.png",
  store: [
    {
      logo: "/images/appstore.png",
      value: "https://apps.apple.com/kh/app/bloc-delivery/id1459499838",
      appId: '1459499838"',
    },
    {
      logo: "/images/googleplay.png",
      value:
        "https://play.google.com/store/apps/details?id=com.bongtk.bloc&hl=en_US",
      appId: 'com.bongtk.bloc&hl=en_US"',
    },
  ],
};

function Download() {
    const { scrollYProgress } = useScroll();
    const translateX = useTransform(scrollYProgress, [0.2, 1], ["-6%", "3%"]);
    const translateXIphone = useTransform(scrollYProgress, [0.2, 1], ["6%", "-3%"]);

  const variant: Variants = {
    offscreen: {
      y: -50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: 0.2,
      },
    },
  };

  const variantIphone: Variants = {
    offscreen: {
      y: 100,
      opacity: 1,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      className="container mx-auto my-8 rounded-[32px] bg-primary-content flex md:flex-row flex-col  md:px-[58px] px-4 overflow-hidden md:relative md:py-[120px] py-16"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="flex flex-col lg:max-w-[406px] xl:max-w-[646px] gap-4"
        variants={variant}
        style={{
          translateX,
        }}
      >
        <Image
          src={download.img}
          alt=""
          width={88}
          height={88}
          sizes="(min-width: 808px) 50vw, 100vw"
        />
        <h1 className="text-primary-typography font-bold md:text-[48px] text-[32px] leading-[32px] lg:leading-none">
          {download.title}
        </h1>
        <p className="md:text-[18px] text-[14px] leading-[24px] text-secondary-grey">
          {download.des}
        </p>
        <div className="flex gap-4 flex-wrap">
          {download.store.map((item, index) => (
            <button
              key={index}
              aria-label="Store"
              onClick={() => window.open(item.value)}
            >
              <div className="relative w-[205px] h-[60px]">
                <Image
                  src={item.logo}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px"
                />
              </div>
            </button>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="-right-64 -top-12 md:absolute lg:block hidden"
        variants={variantIphone}
        style={{
          translateX: translateXIphone,
        }}
      >
        <Image
          src={download.iphone}
          alt=""
          width={"0"}
          height={"0"}
          className="object-fill h-auto w-[1084px]"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </motion.div>
    </motion.div>
  );
}

export default Download;
