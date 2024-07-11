import { motion } from "framer-motion";

const messages = [
  {
    title: "A Christian Should Live For The Glory Of God And The Well-Being Of Others.",
    content: "By prioritizing the well-being of others, Christians reflect the divine love that transforms lives and brings glory to God.",
  },
  {
    title: "The Vision is to send JESUS and his message to the World.",
    content: "The vision is to spread the transformative message of Jesus Christ to every corner of the world, illuminating hearts with His love and grace, and ushering in a new era of hope and redemption for all humanity.",
  },
  {
    title: "Empowering Sons to Manifest the Totality of God Through Jesus.",
    content: "JESUS being the totality of GOD means his manifested dimensions must be unveiled in creation through Sons. Diverse programs like seminars, mentorships, and more are set in place for the emergence of Sons across the nations of the world.",
  },
];

const motionProps = {
  style: { zIndex: 999999 },
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  className: "bg-red-500 shadow-lg text-white rounded-lg relative bottom-5 p-5",
};

export const MSG = () => {
  return (
    <div className="sm:px-12 px-3 relative grid gap-4 sm:grid-cols-3">
      {messages.map((message, index) => (
        <motion.div key={index} {...motionProps}>
          <h2 className="text-lg font-semibold">{message.title}</h2>
          <p className="mt-8 text-gray-200">{message.content}</p>
        </motion.div>
      ))}
    </div>
  );
};
