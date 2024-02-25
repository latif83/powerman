"use client";
import styles from "./Banner.module.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Slides = () => {
  const [settings1, setSettings1] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    lazyLoad: true,
  });

  const [settings2,setSettings2] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    lazyLoad: true,
  })

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 500) {
      setSettings1((s) => {
        return { ...s, slidesToShow: 1.2 };
      });
      setSettings2((s) => {
        return { ...s, slidesToShow: 1.2 };
      });
    }
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
            <div class="swiper-slide pr-3">
              <iframe
                style={{ width: "100%", height: "280px" }}
                class="rounded"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fwmJdayxMS4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="swiper-slide pr-3">
              <iframe
                style={{ width: "100%", height: "280px" }}
                class="rounded"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zZgm3S7eTxM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="swiper-slide pr-3">
              <iframe
                style={{ width: "100%", height: "280px" }}
                class="rounded"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SbDb2gSsWpM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="swiper-slide pr-3">
              <iframe
                style={{ width: "100%", height: "280px" }}
                class="rounded"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kTWazgJHl0Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="swiper-slide pr-3">
              <iframe
                style={{ width: "100%", height: "280px" }}
                class="rounded"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5W4i0VhY_tc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="swiper-slide pr-3">
              <iframe
                style={{ width: "100%", height: "280px" }}
                class="rounded"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/L9z_zu2pvwA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Slider>
        </div>
        <div className="mt-5">
          <Link href="https://www.youtube.com/@prophetpowermanbekoe1295" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-800 text-white p-3 rounded">
            Join our YouTube Channel for more
          </Link>
        </div>
      </div>
      <div className="bg-gray-800 py-12 text-white">
        <div className="slider-container w-full overflow-hidden">
          <Slider {...settings2}>
            <div class="swiper-slide">
              <Image
                src="/powerman1.jpg"
                width={500}
                height={500}
                className="w-full object-cover object-top"
                style={{ height: "300px" }}
              />
            </div>
            <div class="swiper-slide">
              <Image
                src="/powerman2.jpg"
                width={500}
                height={500}
                className="w-full object-cover object-top"
                style={{ height: "300px" }}
              />
            </div>
            <div class="swiper-slide">
              <Image
                src="/powerman3.jpg"
                width={500}
                height={500}
                className="w-full object-cover object-top"
                style={{ height: "300px" }}
              />
            </div>
            <div class="swiper-slide">
              <Image
                src="/powerman4.jpg"
                width={500}
                height={500}
                className="w-full object-cover object-top"
                style={{ height: "300px" }}
              />
            </div>
            <div class="swiper-slide">
              <Image
                src="/powerman5.jpg"
                width={500}
                height={500}
                className="w-full object-cover object-top"
                style={{ height: "300px" }}
              />
            </div>
            <div class="swiper-slide">
              <Image
                src="/powerman6.jpg"
                width={500}
                height={500}
                className="w-full object-cover object-top"
                style={{ height: "300px" }}
              />
            </div>
            <div class="swiper-slide">
              <Image
                src="/powerman7.jpg"
                width={500}
                height={500}
                className="w-full object-cover object-top"
                style={{ height: "300px" }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
