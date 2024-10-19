"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Double_qoutes from "../../public/images/double_qoutes.png";
// import { committing } from "@/utils/data-util";
import { Variants, motion } from "framer-motion";

interface ICard {
  img: StaticImageData | string;
  title: string;
  des: string;
}

interface ICommiting {
  committing: {
    commit: string;
    card: {
      img: string;
      title: string;
      des: string;
    }[];
  };
}

const Card = ({ des, img, title }: ICard) => {
  return (
    <div className="max-w-[400px] bg-primary-content rounded-[32px]">
      <div className="relative w-full " style={{ aspectRatio: "438/260" }}>
        <Image
          src={img}
          alt=""
          fill
          className="rounded-t-[32px]"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </div>
      <div className="pt-10 pb-20 px-5">
        <h5 className="md:text-[32px] text-[28px] font-bold text-primary-typography text-center">
          {title}
        </h5>

        <p className="pt-4 md:text-[18px] text-[14px] leading-[24px] font-medium text-secondary-dark text-center">
          {des}
        </p>
      </div>
    </div>
  );
};

function Comitting({ committing }: ICommiting) {
  const cardVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0.5,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        // bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const cardVariantsQoute: Variants = {
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
  const cardVariantsP: Variants = {
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,

      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: 0.5,
      },
    },
  };
  const containerVariants: Variants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.4, // Adjust this value to control the stagger timing
      },
    },
  };

  return (
    <>
      <div className="mt-8 md:mb-[500px] bg-primary md:py-[64px] py-[32px]">
        <motion.div
          className="container md:px-0 px-4 mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <motion.div
            className="relative md:w-[128px] md:h-[128px] w-[64px] h-[64px]"
            style={{ aspectRatio: "2/2" }}
            variants={cardVariantsQoute}
          >
            <Image
              src={Double_qoutes}
              alt="double_qoute"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </motion.div>
          <motion.p
            className="md:text-[24px] text-[18px] text-primary-content font-medium leading-[32px] pb-10"
            variants={cardVariantsP}
          >
            {committing.commit}
          </motion.p>
          <motion.div
            className="md:grid hidden grid-cols-3 gap-5 md:absolute md:left-0 md:right-0 mx-28"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            variants={containerVariants}
          >
            {committing.card.map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card img={item.img} des={item.des} title={item.title} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto mt-8 flex justify-center">
        <div className="grid md:hidden grid-cols-1 gap-5 md:px-0 px-4">
          {committing.card.map((item, index) => (
            <React.Fragment key={index}>
              <Card img={item.img} des={item.des} title={item.title} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Comitting;
