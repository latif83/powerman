import { motion } from "framer-motion";
import styles from "./Msg.module.css";

const mentorshipPrograms = [
  "Rise of the Eagles",
  "The Wealth Project",
  "Word of the Spirit",
  "The Power of Jesus",
  "Hour of Prophesies",
  "Healing School Conference",
  "Prophetic Horn",
  "Back to Church Crusades",
  "Schools Outreaches",
  "Pastors Seminar",
];

const motionProps = {
  initial: { opacity: 0.4, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
  className: `${styles.bg4} text-white sm:px-12 px-3 py-12`,
};

const buttonClassNames = "bg-red-600 mt-10 rounded hover:bg-red-300 p-3";

export const MSG2 = () => {
  return (
    <>
      <div id="about" className={styles.bg3}>
        <motion.div {...motionProps}>
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
          <button className={buttonClassNames}>
            LEARN MORE
          </button>
        </motion.div>
      </div>

      <div id="mentor" className="py-10 px-5">
        <h1 className="font-bold text-xl">MENTORSHIP PROGRAMMES</h1>
        <div className="grid sm:grid-cols-3 gap-2 mt-3">
          {mentorshipPrograms.map((program, index) => (
            <div key={index} className="shadow bg-gray-800 text-white rounded p-3">
              <p className="text-lg">{program}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
