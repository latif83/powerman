import { motion } from "framer-motion";
import styles from "./Msg.module.css";

export const MSG2 = () => {
  return (
    <div className={styles.bg3}>
      <motion.div
        initial={{ opacity: 0.4, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={`${styles.bg4} text-white sm:px-12 px-3 py-12`}
      >
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
      </motion.div>
    </div>
  );
};
