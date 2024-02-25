import {
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div style={{ zIndex: 99999 }} className={`absolute top-0 w-full text-white ${styles.container}`}>
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
            <Link href="/">
            <FontAwesomeIcon
              icon={faFacebook}
              width={20}
              height={20}
              className="text-xl"
            />
            </Link>
          </div>
          <div className="border-l py-2 px-3 hover:bg-black">
            <Link href="https://www.youtube.com/@prophetpowermanbekoe1295" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faYoutube}
              width={20}
              height={20}
              className="text-xl"
            />
            </Link>
          </div>
          <div className="border-l py-2 px-3 hover:bg-black">
            <Link href="/">
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

      <header className="flex justify-between sm:px-12 px-3 items-center">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Logo"
          className="w-100"
        />
        <nav className="sm:flex gap-4 font-semibold hidden">
          <Link className="text-red-500 border-b border-red-500" href="/">HOME</Link>
          <Link className="hover:text-red-500" href="/">MINISTRIES</Link>
          <Link className="hover:text-red-500" href="/">SERMONS</Link>
          <Link className="hover:text-red-500" href="/">EVENTS</Link>
          <Link className="hover:text-red-500" href="/">CONTACT</Link>
        </nav>
      </header>
    </div>
  );
};
