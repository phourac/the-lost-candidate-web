import Image from "next/image";
import React from "react";
import Contact from "@/components/CntactUsCom/Contact";
import BusinessForm from "@/components/CntactUsCom/BusinessForm";
import Download from "@/components/Download";
import Features from "@/components/Features";
import { useTranslations } from "next-intl";
import Header from "@/components/AboutusCom/Header";
import { Metadata } from "next";
import { businessForm, contactus } from "@/utils/contactUs-util";
import HeaderContactUs from "@/components/CntactUsCom/HeaderContactUs";

export const metadata: Metadata = {
  openGraph: {
    title: "Contact us - TK Express",
    description:
      "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  },
  title: "Contact us - TK Express",
  description:
    "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  keywords:
    "cambodia, delivery, grocery, food, baverage, drink, stationary, baby mart, flowers, health, bakery",
};

function ContactUs() {
  const t = useTranslations("Index");

  return (
    <div className="w-full">
      <HeaderContactUs title={t("Contact us")} />
      <div className="px-4">
        <Contact contactus={contactus} />
      </div>
      <div className="px-4 py-8">
        <BusinessForm businessForm={businessForm} />
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

export default ContactUs;
