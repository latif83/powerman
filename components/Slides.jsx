"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Banner.module.css";

const videos = [
  "fwmJdayxMS4",
  "zZgm3S7eTxM",
  "SbDb2gSsWpM",
  "kTWazgJHl0Q",
  "5W4i0VhY_tc",
  "L9z_zu2pvwA",
];

const images = [
  "/powerman1.jpg",
  "/powerman2.jpg",
  "/powerman3.jpg",
  "/powerman4.jpg",
  "/powerman5.jpg",
  "/powerman6.jpg",
  "/powerman7.jpg",
];

const initialSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1000,
  autoplaySpeed: 1500,
  cssEase: "linear",
  lazyLoad: true,
};

export const Slides = () => {
  const [settings1, setSettings1] = useState({
    ...initialSettings,
    autoplay: false,
  });

  const [settings2, setSettings2] = useState({
    ...initialSettings,
    autoplay: true,
  });

  useEffect(() => {
    const updateSettings = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth < 500) {
        setSettings1((s) => ({ ...s, slidesToShow: 1.2 }));
        setSettings2((s) => ({ ...s, slidesToShow: 1.2 }));
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  return (
    <>
      <div id="sermons" className="bg-gray-800 py-12 sm:px-12 px-3 text-white">
        <h1 className="text-red-500 text-semibold">OUR SERMONS</h1>
        <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
        <p className="text-bold text-3xl sm:text-4xl sm:w-1/2">
          WATCH AND LISTEN TO OUR SERMONS
        </p>
        <div className="slider-container mt-5">
          <Slider {...settings1}>
            {videos.map((video, index) => (
              <div key={index} className="swiper-slide pr-3">
                <iframe
                  style={{ width: "100%", height: "280px" }}
                  className="rounded"
                  src={`https://www.youtube.com/embed/${video}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-5">
          <Link
            href="https://www.youtube.com/@prophetpowermanbekoe1295"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-800 text-white p-3 rounded"
          >
            Join our YouTube Channel for more
          </Link>
        </div>
      </div>
      <div className="bg-gray-800 py-12 text-white">
        <div className="slider-container w-full overflow-hidden">
          <Slider {...settings2}>
            {images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <Image
                  src={image}
                  width={500}
                  height={500}
                  className="w-full object-cover object-top"
                  style={{ height: "300px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
