import styles from './Banner.module.css'
import { Header } from './Header'
import Slider from "react-slick";
import { motion } from "framer-motion";

export const Banner = ()=>{

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

    return (
        <div
        className="flex flex-col relative text-white"
        style={{ height: "100svh" }}
      >
        <Header />

        <div style={{ zIndex: 99999 }} className="slider-container relative overflow-hidden h-full text-white">
          <Slider {...settings}>
            <div style={{ zIndex: 99999 }} className={`${styles.bg1} relative`}>
              <motion.div style={{ zIndex: 99999 }} initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }} className="h-full relative w-full flex flex-col justify-center sm:px-12 px-3">
                <h1 className="font-semibold text-xl sm:text-red-600 text-red-400 mb-4">
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
                  className="bg-red-600 hover:bg-red-400 shadow mt-6 p-3 rounded text-white"
                >
                  Connect with Faith
                </button>
              </motion.div>
            </div>
            <div className={styles.bg2}></div>
          </Slider>
        </div>
      </div>
    )
}