"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
} from "@headlessui/react";
import { TbMenu2 } from "react-icons/tb";
import Drawer from "./Drawer";
import SelectLang from "../SelectLang";
import { IoChevronDown } from "react-icons/io5";
import { languages, navbar } from "@/utils/data-util";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/hooks/useNavigation";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const locale = useLocale();
  const router = useRouter();

  const pathname = usePathname();

  console.log("pathname", pathname);

  const cleanPathname = pathname.replace(`/${locale}`, "") || "/";

  console.log("cleanPathname", cleanPathname);

  console.log("navbar", navbar);

  const [isOpen, setIsOpen] = useState(false);

  const [langs, setLangs] = useState(locale);

  const t = useTranslations("Index");

  const defaultLang = languages.find((item) => item.value === locale)?.lang;

  return (
    <>
      <header className="bg-primary-content py-[8px] sticky top-0 z-20">
        <nav className="container flex items-center justify-between md:px-0 px-4 py-[12px] mx-auto ">
          <Link
            className="relative w-[138px] h-[36px] cursor-pointer"
            href={`/`}
          >
            <Image
              // className="object-cover"
              src={`/images/logo.png`}
              alt="logo"
              priority
              fill
              sizes="(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px"
            />
          </Link>
          <span className="relative items-center hidden space-x-2 md:flex">
            {navbar.map((item) => (
              <React.Fragment key={item.value}>
                <Link href={item.value}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                    // transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={` lg:px-[16px] px-[8px]  text-base ${
                      item.value === cleanPathname
                        ? "text-primary"
                        : " text-secondary-dark"
                    } ${
                      item.value === cleanPathname
                        ? "font-semibold"
                        : "font-medium"
                    } whitespace-nowrap hover:text-primary`}
                  >
                    {t(item.title)}
                  </motion.button>
                </Link>
              </React.Fragment>
            ))}
           
            <SelectLang {...{ langs, setLangs }} />
          </span>
          <button
            className="block md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              initial={false}
              animate={{
                scale: isOpen ? 1 : 1.1,
                rotate: isOpen ? 90 : 0, // Rotate 90 degrees when closing menu
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 90 }}
              // transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {isOpen ? <IoMdClose size={40} /> : <TbMenu2 size={40} />}
            </motion.div>
          </button>
        </nav>
      </header>

      <Drawer {...{ isOpen, setIsOpen }}>
        {navbar.map((m, i) => (
          <Link
            key={i}
            href={m.value}
            className={`${
              cleanPathname === m.value ? "text-primary" : ""
            } flex items-center justify-center h-14 border-b hover:text-primary-hight-light hover:bg-gray-50`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className="text-sm font-semibold">{m.title}</span>
          </Link>
        ))}
        <Menu
          as={"div"}
          className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5 border-b  hover:bg-gray-50"
        >
          <Disclosure as="div" className="p-6 ">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-center ">
                  <span className="flex items-center text-secondary-dark text-sm font-semibold">
                    {defaultLang}{" "}
                    <IoChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180`}
                    />
                  </span>
                </DisclosureButton>
                {languages.map((item) => (
                  <DisclosurePanel
                    key={item.value}
                    className={`mt-4 text-sm/5 items-center justify-center flex cursor-pointer hover:text-primary ${
                      locale === item.value ? "text-primary" : ""
                    }`}
                    onClick={() => {
                      setLangs(item.lang);
                      router.replace(`/${item.value}`);
                      setIsOpen(false);
                    }}
                  >
                    {item.lang}
                  </DisclosurePanel>
                ))}
              </>
            )}
          </Disclosure>
        </Menu>
      </Drawer>
    </>
  );
}

export default Navbar;
