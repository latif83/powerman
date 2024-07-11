"use client";
import {
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBarsStaggered,
  faLocationDot,
  faMapLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

const socialLinks = [
  {
    href: "https://www.facebook.com/share/9eNWmbabT6xSvrDN/?mibextid=WC7FNe",
    iconName: faFacebook,
  },
  {
    href: "https://www.youtube.com/@prophetpowermanbekoe1295",
    iconName: faYoutube,
  },
  {
    href: "https://wa.me/+233556978861",
    iconName: faWhatsapp,
  },
];

const navLinks = [
  { href: "/", label: "HOME", active: true },
  { href: "#about", label: "ABOUT ME" },
  { href: "#mentor", label: "MENTORSHIP PROGRAMS" },
  { href: "#sermons", label: "SERMONS" },
  { href: "#events", label: "EVENTS" },
  { href: "#getInTouch", label: "CONTACT" },
];

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavToggle = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(false);

  return (
    <div className={`absolute top-0 w-full text-white ${styles.container}`} style={{ zIndex: 9999999 }}>
      <div className="sm:flex hidden justify-between sm:px-12 px-3 border-b">
        <span className="flex gap-2 text-sm items-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-md"
            width={20}
            height={20}
          />
          THAGOSPEL CHURCH, Halleluyah Junction, Accra
        </span>
        <div className="flex">
          {socialLinks.map(({ href, iconName }) => (
            <div key={href} className="border-l py-2 px-3 hover:bg-black">
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={iconName} className="text-xl" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <header className="flex relative justify-between sm:px-12 px-3 items-center">
        <Image src="/logo.png" width={200} height={200} alt="Logo" className="w-100" />
        <nav className="sm:flex gap-6 font-semibold hidden">
          {navLinks.map(({ href, label, active }) => (
            <Link
              key={href}
              href={href}
              className={`${active ? "text-red-600 border-b border-red-500" : "hover:text-red-500"} text-xs`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="block sm:hidden">
          <FontAwesomeIcon
            onClick={handleNavToggle}
            icon={faBarsStaggered}
            className="text-2xl"
          />
          {showNav && (
            <div
              className="absolute w-full top-0 left-0"
              style={{ zIndex: 99999999, height: "100svh", backgroundColor: "#956203" }}
            >
              <div className="my-10 mx-3">
                <div className="flex justify-end w-full">
                  <FontAwesomeIcon
                    onClick={closeNav}
                    icon={faXmark}
                    className="text-4xl text-red-400"
                  />
                </div>
                <nav className="flex flex-col">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="hover:text-red-500 mt-5"
                      onClick={closeNav}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
