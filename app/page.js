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

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    cssEase: "linear",
  };

  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    lazyLoad: true,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    lazyLoad: true,
  };

  return (
    <main>
      <div
        className="flex flex-col relative text-white"
        style={{ height: "100svh" }}
      >
        <Header />

        <div className="slider-container overflow-hidden h-full text-white">
          <Slider {...settings}>
            <div className={`${styles.bg1}`}>
              <div className="h-full w-full flex flex-col justify-center sm:px-12 px-3">
                <h1 className="font-semibold text-xl text-red-600 mb-4">
                  FOLLOWING CHRIST'S PATH -{" "}
                </h1>
                <p className="font-bold text-4xl mb-6">A MAN'S DEVOTION</p>
                <p className="sm:w-1/2 font-bold sm:font-normal">
                  Walking alongside Jesus, I've learned the true essence of
                  compassion and sacrifice. Every step I take is guided by His
                  love, shaping me into a vessel of His grace.
                </p>
                <button
                  style={{ width: "max-content" }}
                  className="bg-red-600 shadow mt-6 p-3 rounded text-white"
                >
                  Connect with Faith
                </button>
              </div>
            </div>
            <div className={styles.bg2}></div>
          </Slider>
        </div>
      </div>
      <div className="sm:px-12 px-3 relative grid gap-4 sm:grid-cols-3">
        <div className="bg-red-500 shadow-lg text-white rounded-lg relative bottom-5 p-5">
          <h2 className="text-lg font-semibold">
            A Christian Should Live For The Glory Of God And The Well-Being Of
            Others.
          </h2>
          <p className="mt-8 text-gray-200">
            By prioritizing the well-being of others, Christians reflect the
            divine love that transforms lives and brings glory to God.
          </p>
        </div>
        <div className="bg-red-500 shadow-lg text-white rounded-lg relative bottom-5 p-5">
          <h2 className="text-lg font-semibold">
            The Vision is to send JESUS and his message to the World.
          </h2>
          <p className="mt-8 text-gray-200">
            The vision is to spread the transformative message of Jesus Christ
            to every corner of the world, illuminating hearts with His love and
            grace, and ushering in a new era of hope and redemption for all
            humanity.
          </p>
        </div>
        <div className="bg-red-500 shadow-lg text-white rounded-lg relative bottom-5 p-5">
          <h2 className="text-lg font-semibold">
            Empowering Sons to Manifest the Totality of God Through Jesus.
          </h2>
          <p className="mt-8 text-gray-200">
            JESUS being the totality of GOD means his manifested dimensions must
            be unveiled in creation through Sons. Diverse programs like seminars
            , mentorships and more are set in place for the emergence of Sons
            across the nations of the world.
          </p>
        </div>
      </div>
      <div className="sm:px-12 px-3 mt-10 relative grid gap-4 sm:grid-cols-3">
        <div className="rounded p-5 shadow border sm:shadow-none sm:border-none">
          <div className="pl-2">
            <FontAwesomeIcon icon={faChurch} className="text-4xl" />
          </div>
          <h1 className="text-xl p-0 m-0">WORSHIP</h1>
          <p className="text-red-500">What to expect</p>
          <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="rounded p-5 shadow border sm:shadow-none sm:border-none">
          <div className="pl-2">
            <FontAwesomeIcon icon={faHandsPraying} className="text-4xl" />
          </div>
          <h1 className="text-xl p-0 m-0">CONNECT</h1>
          <p className="text-red-500">Become a member</p>
          <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="rounded p-5">
          <div className="pl-2">
            <FontAwesomeIcon icon={faShieldHeart} className="text-4xl" />
          </div>
          <h1 className="text-xl p-0 m-0">GOD'S LOVE</h1>
          <p className="text-red-500">Beliefs and History</p>
          <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className={styles.bg3}>
        <div className={`${styles.bg4} text-white sm:px-12 px-3 py-12`}>
          <h1 className="font-semibold text-lg text-red-500">
            WELCOME TO SALVATION CHURCH
          </h1>
          <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
          <p className="font-semibold mt-5 text-4xl">
            CONNECT, GROW AND SERVE WITH US
          </p>

          <p className="mt-8">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <button className="bg-red-600 mt-10 rounded hover:bg-red-300 p-3">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="bg-gray-800 py-12 sm:px-12 px-3 text-white">
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
          <button className="bg-red-600 hover:bg-red-800 text-white p-3 rounded">
            Join our YouTube Channel for more
          </button>
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
      <div className="bg-gradient-to-r from-gray-800 to-red-800 py-12 sm:px-12 px-3 text-white">
        <h3 className="text-4xl font-bold">UPCOMING EVENTS</h3>
        <p>No upcoming events, Stay tuned for exciting updates.</p>
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
