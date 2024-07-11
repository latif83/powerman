import styles from './Banner.module.css';
import { Header } from './Header';
import Slider from "react-slick";
import { motion } from "framer-motion";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const slideContent = (
    <>
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
    </>
  );

  return (
    <div className="flex flex-col relative text-white h-screen">
      <Header />
      <div className="slider-container relative overflow-hidden h-full text-white">
        <Slider {...settings}>
          {[styles.bg1, styles.bg2].map((bgClass, index) => (
            <div key={index} className={`${bgClass} relative`}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="h-full w-full flex flex-col justify-center sm:px-12 px-3"
              >
                {slideContent}
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
