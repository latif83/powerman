import { motion } from "framer-motion";
import styles from "./Msg.module.css";

export const MSG2 = () => {
  return (
    <>
      <div id="about" className={styles.bg3}>
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
            Join my community to connect, grow, and serve. Discover a welcoming
            community where faith flourishes and friendships thrive. Together,
            we explore God's love and purpose, making a tangible impact in our
            world.
          </p>
          <p className="mt-2">
            In our gatherings, experience engaging worship, insightful
            teachings, and opportunities to serve others. Let's journey
            together, living out the love of Christ and making a difference in
            the lives of those around us.
          </p>
          <button className="bg-red-600 mt-10 rounded hover:bg-red-300 p-3">
            LEARN MORE
          </button>
        </motion.div>
      </div>

      <div id="mentor" className="py-10 px-5">
        <h1 className="font-bold text-xl">MENTORSHIP PROGRAMMES</h1>
        <div className="grid sm:grid-cols-3 gap-2 mt-3">
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <h3 className="text-lg">Rise of the Eagles</h3>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <p className="text-lg">The Wealth Project</p>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <p className="text-lg">Word of the Spirit</p>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <h3 className="text-lg">The Power of Jesus</h3>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <p className="text-lg">Hour of Prophesies</p>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <p className="text-lg">Healing School Conference</p>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <p className="text-lg">Prophetic Horn</p>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <p className="text-lg">Back to Church Crusades</p>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <p className="text-lg">Schools Outreaches</p>
          </div>
          <div className="shadow bg-gray-800 text-white rounded p-3">
            <p className="text-lg">Pastors Seminar</p>
          </div>
        </div>
      </div>
    </>
  );
};
