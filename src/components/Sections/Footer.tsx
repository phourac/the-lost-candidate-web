"use client";
import { Link } from "@/hooks/useNavigation";
import { footer, languages } from "@/utils/data-util";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Footer() {
  const t = useTranslations("Index");
  const locale = useLocale();
  const defaultLang = languages.find((item) => item.value === locale);

  return (
    <footer className="bg-primary">
      <div className="mx-auto w-full py-6 lg:py-8 container md:px-0 px-4">
        <div className="md:flex md:justify-start ">
          <div className="mb-6 md:mb-0 md:pr-28 lg:pr-72">
            <div className="relative md:w-[233px] md:h-[35px] w-[133px] h-[25px]">
              <Image
                src={"/images/logo1.png"}
                alt="logo"
                fill
                sizes="(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px"
              />
            </div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium pt-4">
              {footer.tkexpress.map((item, index) => (
                <li
                  key={index}
                  className="my-3 text-base text-primary-content font-medium whitespace-nowrap"
                >
                  {item.p}
                </li>
              ))}
            </ul>{" "}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-36 sm:grid-cols-3 mt-5">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {footer.company.title}
              </h2>
              <ul>
                {footer.company.list.map((item, index) => (
                  <Link href={item.value} key={index}>
                    <li className="my-3 text-base text-primary-content font-medium whitespace-nowrap hover:underline">
                      {t(item.p)}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white whitespace-nowrap">
                {footer.follow.title}
              </h2>
              <ul>
                {footer.follow.list.map((item, index) => (
                  <Link href={item.value} target="_blank" key={index}>
                    <li className="my-3 text-base text-primary-content font-medium flex items-center gap-4">
                      <span>{<item.icon size={32} />}</span>
                      <p className="hover:underline"> {item.title}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <div className="md:flex sm:items-center sm:justify-start mt-5 ">
          <span className="text-base text-primary-content font-medium sm:text-center md:pr-20 lg:pr-64 sm:whitespace-nowrap">
            {t(footer.copyright)}
          </span>

          <ul className="flex items-center text-base text-primary-content font-medium sm:text-center mt-4 md:mt-0">
            {footer.privacy.map((item, index) => (
              <React.Fragment key={index}>
                <span>|</span>
                <li className="mx-5 sm:whitespace-nowrap">{t(item.p)}</li>
              </React.Fragment>
            ))}
            <span>|</span>
            <li className="mx-5 sm:whitespace-nowrap flex items-center gap-2">
              <Image
                src={defaultLang?.flag || ""}
                alt=""
                width={"0"}
                height={"0"}
                className="w-[24px] h-auto"
                sizes="(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px"
              />

              {defaultLang?.lang}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
