"use client";
// import { contactus } from "@/utils/contactUs-util";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaFacebook, FaTelegram } from "react-icons/fa";

const libraries: ("places" | "visualization" | "drawing" | "geometry")[] = [
  "places",
  "visualization",
];

interface ICOntact {
  contactus: {
    title: string;
    contact: {
      icon: string;
      title: string;
      des: string;
    }[];
  };
}

export const social = {
  title: "Social Media",
  socialMedia: [
    {
      title: "Facebook",
      icon: FaFacebook,
      value: "https://www.facebook.com/blocdelivery",
    },
    {
      title: "Telegram",
      icon: FaTelegram,
      value: "https://t.me/Bloconlinemall",
    },
  ],
};

function Contact({ contactus }: ICOntact) {
  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "32px",
  };
  const mapOptions = {
    zoom: 17,
    center: {
      lat: 11.56282444441826,
      lng: 104.90647311831124,
    },
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });
  return (
    <div className="container mx-auto bg-primary-content rounded-[32px]">
      <div className="flex md:flex-row flex-col-reverse md:px-16 px-8 py-20 md:gap-20 gap-8">
        {/* <div>hi</div> */}
        <motion.div
          className="flex flex-col gap-4 md:w-[600px] w-auto"
          initial={{ opacity: 0, x: 200 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              staggerChildren: 0.4,
            },
          }}
        >
          <h1 className="text-[18px] text-primary-typography font-semibold text-start">
            {contactus.title}
          </h1>
          {contactus.contact.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="flex items-center gap-4">
                <Image
                  src={item.icon}
                  alt=""
                  width={"0"}
                  height={"0"}
                  className="w-[16px] h-auto"
                  sizes="(min-width: 808px) 50vw, 100vw"
                />
                <h1 className="text-primary font-semibold">{item.title}</h1>
              </div>
              <p className="leading-[24px] text-primary-typography">
                {item.des}
              </p>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] text-primary-typography font-semibold">
              {social.title}
            </h1>
            <div className="flex items-center gap-4">
              {social.socialMedia.map((item, index) => (
                <Link
                  href={item.value}
                  target="_blank"
                  className="flex items-center gap-2"
                  key={index}
                >
                  <item.icon size={32} className="text-primary" />
                  <h1 className="text-primary font-semibold hover:underline">
                    {item.title}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
        {isLoaded ? (
          <motion.div
            className="w-full"
            style={{ aspectRatio: "788/464" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={mapOptions.center}
              zoom={mapOptions.zoom}
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/place/BLOC+DELIVERY/@11.5628105,104.9058254,19z/data=!3m1!4b1!4m6!3m5!1s0x31095196506f55bf:0xe729884e2ab3966!8m2!3d11.5628105!4d104.9064691!16s%2Fg%2F11qr9cqth0?entry=ttu",
                  "_blank"
                );
              }}
            >
              <Marker
                position={mapOptions.center}
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/place/BLOC+DELIVERY/@11.5628105,104.9058254,19z/data=!3m1!4b1!4m6!3m5!1s0x31095196506f55bf:0xe729884e2ab3966!8m2!3d11.5628105!4d104.9064691!16s%2Fg%2F11qr9cqth0?entry=ttu",
                    "_blank"
                  );
                }}
              />
            </GoogleMap>
          </motion.div>
        ) : (
          <div
            className="w-full rounded-[32px] flex items-center justify-center"
            style={{ aspectRatio: "788/464" }}
          >
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
