import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
} from "@headlessui/react";
import { FaHome, FaNewspaper, FaPeopleArrows } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaRegBell } from "react-icons/fa";
import setting from "../assets/setting-5-svgrepo-com.svg";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const navigation = [
  { name: "News feed", icon: <FaNewspaper />, href: "#", current: false },
  { name: "Find loyers", icon: <IoIosPeople />, href: "#", current: false },
  { name: "Home", icon: <FaHome />, href: "#", current: true },
  { name: "Connections", icon: <FaPeopleArrows />, href: "#", current: false },
  { name: "Chats", icon: <BsChatSquareText />, href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="">
      <Disclosure className="bg-gray-200  ">
        {({ open }) => (
          <>
            <div className=" w-full bg-gray-200 px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex ml-15 flex-shrink-0 items-center">
                    <img className="h-6 w-30" src={logo} alt="Your Company" />
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex lg:ml-50 space-x-4 pl-[70px]">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#025BD4] text-white"
                              : "text-gray-800 hover:bg-gray-700 hover:text-white",
                            "flex item-center rounded-full px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <span className="text-xl mr-2">{item.icon}</span>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <img src={setting} alt="not found" className="w-8 " />
                <div className="absolute inset-y-0 right-0 flex items-center  mr-24 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <FaRegBell className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <Menu as="div" className="relative ml-10">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-7 w-7 rounded-full"
                          src={user}
                          alt=""
                        />
                      </MenuButton>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <DisclosurePanel className=" sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-gray-800"
                        : "text-gray-900 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
