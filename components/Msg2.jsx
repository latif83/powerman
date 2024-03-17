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
          WELCOME TO COFIE BEKOE MINISTRIES
        </h1>
        <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
        <p className="font-semibold mt-5 text-4xl">
          CONNECT, GROW AND SERVE WITH ME
        </p>

        <p className="mt-8">
          Join my community to connect, grow, and serve. Discover a welcoming community
          where faith flourishes and friendships thrive. Together, we explore
          God's love and purpose, making a tangible impact in our world.
        </p>
        <p className="mt-2">
          In our gatherings, experience engaging worship, insightful teachings,
          and opportunities to serve others. Let's journey together, living out
          the love of Christ and making a difference in the lives of those
          around us.
        </p>
        <button className="bg-red-600 mt-10 rounded hover:bg-red-300 p-3">
          LEARN MORE
        </button>
      </motion.div>
    </div>
  );
};
