import { joinForm } from "@/utils/partner-util";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { Variants, motion } from "framer-motion";

interface ISubmitForm {
  children: ReactNode;
  title: string;
  des: string;
  img: StaticImageData | string;
}

const SubmitForm = ({ children, des, img, title }: ISubmitForm) => {
  const variants: Variants = {
    offscreen: {
      y: 10,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
    leave: {
      y: -10,
      opacity: 0,
    },
  };
  return (
    <div className="container mx-auto bg-primary-content rounded-[32px]">
      <motion.div
        className="flex md:gap-16 gap-8 lg:flex-row flex-col-reverse justify-center items-center p-[32px]"
        initial="offscreen"
        whileInView="onscreen"
        exit="leave"
        viewport={{ once: true, amount: 0.4 }}
        variants={variants}
      >
        <div className="flex flex-col">
          <h1 className="md:text-[32px] text-[28px] text-primary-typography font-semibold text-center">
            {title}
          </h1>
          <p className="md:text-[20px] text-[16px] text-secondary-grey leading-[28px] text-center">
            {des}
          </p>
          <div className="py-12">{children}</div>
        </div>
        <Image
          src={img}
          alt=""
          width={663}
          height={564}
          className="rounded-[32px]"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </motion.div>
    </div>
  );
};

export default SubmitForm;
