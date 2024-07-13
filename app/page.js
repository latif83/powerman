"use client";
import { Header } from "@/components/Header";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faHandsPraying,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Banner } from "@/components/Banner";
import { MSG } from "@/components/Msg";
import { MSG1 } from "@/components/Msg1";
import { MSG2 } from "@/components/Msg2";
import { Slides } from "@/components/Slides";
import { Events } from "@/components/events/Events";

export default function Home() {
  return (
    <main>
      <Banner />
      <MSG />
      <MSG1 />
      <MSG2 />
      <Events />
      <Slides />
      {/* <div id="events" className="bg-gradient-to-r from-gray-800 to-red-800 py-12 sm:px-12 px-3 text-white">
        <h3 className="text-4xl font-bold">UPCOMING EVENTS</h3>
        <p>No upcoming events, Stay tuned for exciting updates.</p>
      </div> */}

      <Contact />
      <Footer />
    </main>
  );
}
