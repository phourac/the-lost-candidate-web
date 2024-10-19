import Image from "next/image";
import React from "react";
import Partners_banner from "../../../../public/images/partners_banner.png";
import JoinUs from "@/components/PatnerCom/JoinUs";
import CorePatners from "@/components/CorePatners";
import PartnersJoin from "@/components/PatnerCom/PartnersJoin";
import JoinUsForm from "@/components/PatnerCom/JoinUsForm";
import Download from "@/components/Download";
import Features from "@/components/Features";
import { useTranslations } from "next-intl";
import Header from "@/components/AboutusCom/Header";
import { Metadata } from "next";
import { corepatners, logopatners } from "@/utils/data-util";
import { joinForm, joinus } from "@/utils/partner-util";

export const metadata: Metadata = {
  openGraph: {
    title: "Partners - TK Express",
    description:
      "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  },
  title: "Partners - TK Express",
  description:
    "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  keywords:
    "cambodia, delivery, grocery, food, baverage, drink, stationary, baby mart, flowers, health, bakery",
};

function Partners() {
  const t = useTranslations("Index");

  return (
    <div className="w-full">
      <Header img={Partners_banner} title={t("Partners")} />

      <JoinUs joinus={joinus} />
      <CorePatners corepatners={corepatners} />
      <div className="px-4">
        <PartnersJoin logopatners={logopatners} />
      </div>
      <div className="px-4 py-8">
        <JoinUsForm joinForm={joinForm} />
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

export default Partners;
