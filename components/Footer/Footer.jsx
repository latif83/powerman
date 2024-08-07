"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/share/9eNWmbabT6xSvrDN/?mibextid=WC7FNe",
      icon: faFacebook,
    },
    {
      href: "https://www.youtube.com/@prophetpowermanbekoe1295",
      icon: faYoutube,
    },
    {
      href: "https://wa.me/+233556978861",
      icon: faWhatsapp,
    },
  ];

  const usefulLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Ministries" },
    { href: "/portfolio", label: "Sermons" },
    { href: "/", label: "Events" },
  ];

  const contacts = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
      label: "THAGOSPEL CHURCH, Halleluyah Junction, Accra",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
      label: "info@powerman.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: "+233 55 697 8861",
    },
  ];

  return (
    <footer className="text-center bg-neutral-800 text-neutral-200 lg:text-left">
      <div className="flex sm:flex-row sm:gap-0 gap-4 flex-col items-center justify-center border-b-2 border-neutral-500 p-6 lg:justify-between">
        <div className="mr-12 block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          {socialLinks.map(({ href, icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6 text-neutral-200"
            >
              <FontAwesomeIcon icon={icon} className="text-xl" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-12 sm:gap-8 md:grid-cols-3 lg:grid-cols-3">
          <div>
            <h6 className="mb-4 flex flex-col gap-4 justify-center font-semibold uppercase md:justify-start">
              <Image
                src="/logo.png"
                width={300}
                height={300}
                className="bg-white p-3 rounded"
              />
            </h6>
          </div>
          <div className="sm:text-center text-start flex flex-col sm:items-center items-start">
            <h6 className="mb-4 underline-offset-8 flex justify-start font-semibold uppercase">
              Useful links
            </h6>
            {usefulLinks.map(({ href, label }, index) => (
              <p key={index} className="mb-4">
                <Link href={href} className="text-neutral-200">
                  {label}
                </Link>
              </p>
            ))}
          </div>
          <div className="sm:text-center sm:flex flex-col justify-center">
            <h6 className="mb-4 flex font-semibold uppercase justify-start">
              Contact
            </h6>
            {contacts.map(({ icon, label }, index) => (
              <p key={index} className="mb-4 flex justify-start">
                {icon}
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 text-center bg-black">
        <p className="mb-5">© 2024 Copyright</p>
      </div>
    </footer>
  );
};
