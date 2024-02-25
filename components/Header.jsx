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
          <div className="border-l p-2">
            <FontAwesomeIcon
              icon={faFacebook}
              width={20}
              height={20}
              className="text-xl"
            />
          </div>
          <div className="border-l p-2">
            <FontAwesomeIcon
              icon={faYoutube}
              width={20}
              height={20}
              className="text-xl"
            />
          </div>
          <div className="border-l p-2">
            <FontAwesomeIcon
              icon={faWhatsapp}
              width={20}
              height={20}
              className="text-xl"
            />
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
          <Link className="text-red-400 border-b" href="/">HOME</Link>
          <Link href="/">MINISTRIES</Link>
          <Link href="/">SERMONS</Link>
          <Link href="/">EVENTS</Link>
          <Link href="/">CONTACT</Link>
        </nav>
      </header>
    </div>
  );
};
