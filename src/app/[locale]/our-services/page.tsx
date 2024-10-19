import Image from "next/image";
import React from "react";
import Services_banner from "../../../../public/images/services_banner.png";
import CardWithBlueFrame from "@/components/CardWithBlueFrame";
import { services, servicesprogress } from "@/utils/services-util";
import StepProgress from "@/components/StepProgress";
import Download from "@/components/Download";
import Features from "@/components/Features";
import { useTranslations } from "next-intl";
import Header from "@/components/AboutusCom/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Our services - TK Express",
    description:
      "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  },
  title: "Our services - TK Express",
  description:
    "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  keywords:
    "cambodia, delivery, grocery, food, baverage, drink, stationary, baby mart, flowers, health, bakery",
};

function OurServices() {
  const t = useTranslations("Index");

  return (
    <div className="w-full">
      <Header img={Services_banner} title={t("Our Services")} />

      <CardWithBlueFrame
        des={services.des}
        img={services.img}
        title={services.title}
      />
      <StepProgress
        des={servicesprogress.des}
        step={servicesprogress.step}
        title={servicesprogress.title}
        width={"max-w-[700px]"}
      />
      <div className="px-4">
        <Download />
      </div>
      <div className="px-4 my-16">
        <Features />
      </div>
    </div>
  );
}

export default OurServices;
