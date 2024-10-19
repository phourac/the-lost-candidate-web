"use client";
import { languages } from "@/utils/data-util";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { FaCaretDown } from "react-icons/fa";

interface ISeletecLang {
  langs: string;
  setLangs: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectLang({ langs, setLangs }: ISeletecLang) {
  const router = useRouter();

  const locale = useLocale();

  const pathname = usePathname();

  console.log("pathname", pathname.split("/")[2]);

  const defaultPathname =
    pathname.split("/")[2] === undefined ? "" : pathname.split("/")[2];

  console.log("defaultPathname", defaultPathname);

  const defaultLang = languages.find((item) => item.value === locale)?.lang;

  console.log("defaultLang", defaultLang);
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <MenuButton className="text-base text-secondary-dark flex items-center gap-1">
          {defaultLang}
          <span>
            <FaCaretDown />
          </span>
        </MenuButton>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems className="bg-primary-content absolute right-0 w-20 mt-2 origin-top-right rounded-xl border border-white/5 0 p-1 text-sm/6 text-secondary-dark shadow-lg focus:outline-none">
          {languages.map((item) => (
            <MenuItem key={item.value}>
              <button
                onClick={() => {
                  setLangs(item.lang);
                  router.replace(`/${item.value}/${defaultPathname}`);
                }}
                className={`bg-white/10 group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:text-primary ${
                  item.value === locale ? "text-primary" : ""
                }`}
              >
                {item.lang}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
