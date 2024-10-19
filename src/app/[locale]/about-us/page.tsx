import Image from "next/image";
import React from "react";
import CardWithBlueFrame from "@/components/CardWithBlueFrame";
import StepProgress from "@/components/StepProgress";
import Comitting from "@/components/Comitting";
import Map from "../../../../public/images/map.png";
import Download from "@/components/Download";
import Features from "@/components/Features";
import Message from "@/components/AboutusCom/Message";
import Slide from "@/components/AboutusCom/Slide";
import {
  aboutus,
  aboutusprogress,
  award,
  committing,
  message,
} from "@/utils/data-util";
import { useTranslations } from "next-intl";
import Header from "@/components/AboutusCom/Header";
import Aboutus_banner from "../../../../public/images/aboutus_banner.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "About us - TK Express",
    description:
      "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  },
  title: "About us - TK Express",
  description:
    "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  keywords:
    "cambodia, delivery, grocery, food, baverage, drink, stationary, baby mart, flowers, health, bakery",
};

function AboutUs() {
  const t = useTranslations("Index");
  return (
    <div className="w-full">
      <Header img={Aboutus_banner} title={t("About us")} />
      <CardWithBlueFrame
        des={aboutus.des}
        img={aboutus.img}
        title={aboutus.title}
      />
      <div className="bg-primary my-8 py-[64px] px-4">
        <Message message={message} />
      </div>
      <Slide award={award} />
      <StepProgress
        des={aboutusprogress.des}
        step={aboutusprogress.step}
        title={aboutusprogress.title}
        width={"max-w-[550px]"}
      />
      <Comitting committing={committing} />
      <div className="py-8">
        <div className="relative w-full" style={{ aspectRatio: "1600/900" }}>
          <Image
            src={Map}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px"
          />
        </div>
      </div>
      <div className="px-4">
        <Download />
      </div>
      <div className="px-4 my-16">
        <Features />
      </div>
    </div>
  );
}

export default AboutUs;
