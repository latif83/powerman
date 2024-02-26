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

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      style={{ zIndex: 9999999 }}
      className={`absolute top-0 w-full text-white ${styles.container}`}
    >
      <div className="sm:flex hidden justify-between sm:px-12 px-3 border-b">
        <span className="flex gap-2 text-sm items-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            Bounce
            width={20}
            height={20}
            className="text-md"
          />
          THAGOSPEL CHURCH, Halleluyah Junction, Accra
        </span>
        <div className="flex">
          <div className="border-l py-2 px-3 hover:bg-black">
            <Link
              href="https://www.facebook.com/share/9eNWmbabT6xSvrDN/?mibextid=WC7FNe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                width={20}
                height={20}
                className="text-xl"
              />
            </Link>
          </div>
          <div className="border-l py-2 px-3 hover:bg-black">
            <Link
              href="https://www.youtube.com/@prophetpowermanbekoe1295"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                width={20}
                height={20}
                className="text-xl"
              />
            </Link>
          </div>
          <div className="border-l py-2 px-3 hover:bg-black">
            <Link
              href="https://wa.me/+233556978861"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                width={20}
                height={20}
                className="text-xl"
              />
            </Link>
          </div>
        </div>
      </div>

      <header className="flex relative justify-between sm:px-12 px-3 items-center">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Logo"
          className="w-100"
        />
        <nav className="sm:flex gap-6 font-semibold hidden">
          <Link className="text-red-600 text-xs border-b border-red-500" href="/">
            HOME
          </Link>
          <Link className="hover:text-red-500 text-xs" href="/">
            ABOUT ME
          </Link>
          <Link className="hover:text-red-500 text-xs" href="/">
            MENTORSHIP PROGRAMS
          </Link>
          <Link className="hover:text-red-500 text-xs" href="#sermons">
            SERMONS
          </Link>
          <Link className="hover:text-red-500 text-xs" href="#events">
            EVENTS
          </Link>
          <Link className="hover:text-red-500 text-xs" href="#getInTouch">
            CONTACT
          </Link>
        </nav>
        <div className="block sm:hidden">
          <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBarsStaggered}
            className="text-2xl"
          />
          {showNav && (
            <div
              style={{
                zIndex: 99999999,
                height: "100svh",
                backgroundColor: "#956203",
              }}
              className="absolute w-full top-0 left-0"
            >
              <div className="my-10 mx-3">
                <div className="flex justify-end w-full">
                  <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faXmark}
                    className="text-4xl text-red-400"
                  />
                </div>
                <nav className="flex flex-col">
                  <Link
                    className="hover:text-red-500 mt-5"
                    href="/"
                    onClick={() => setShowNav(false)}
                  >
                    HOME
                  </Link>
                  <Link
                    className="hover:text-red-500 mt-5"
                    href="/"
                    onClick={() => setShowNav(false)}
                  >
                    MINISTRIES
                  </Link>
                  <Link
                    className="hover:text-red-500 mt-5"
                    href="#sermons"
                    onClick={() => setShowNav(false)}
                  >
                    SERMONS
                  </Link>
                  <Link
                    className="hover:text-red-500 mt-5"
                    href="#events"
                    onClick={() => setShowNav(false)}
                  >
                    EVENTS
                  </Link>
                  <Link
                    className="hover:text-red-500 mt-5"
                    href="#getInTouch"
                    onClick={() => setShowNav(false)}
                  >
                    CONTACT
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
