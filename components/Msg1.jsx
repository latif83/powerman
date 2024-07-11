import { faChurch, faHandsPraying, faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const messages = [
  {
    icon: faChurch,
    title: "WORSHIP",
    subtitle: "Embrace the Sacred",
    content: "In the sacred act of worship, we surrender our hearts, lifting our voices in praise and adoration to the Almighty. Through melody and reverence, we commune with the Divine, drawing closer to the source of all life and light.",
  },
  {
    icon: faHandsPraying,
    title: "CONNECT",
    subtitle: "Join the Community",
    content: "As believers, we are called to forge bonds of fellowship, connecting with one another in the spirit of love and unity. Through shared faith and mutual support, we find strength, encouragement, and a deeper understanding of God's purpose for our lives.",
  },
  {
    icon: faShieldHeart,
    title: "GOD'S LOVE",
    subtitle: "Experience Divine Grace",
    content: "God's love is an everlasting embrace, enfolding us in its boundless warmth and grace. It is a love that knows no bounds, reaching into the depths of our souls and healing every wound. In the embrace of His love, we find solace, redemption, and the promise of eternal joy.",
  },
];

const motionProps = {
  initial: { opacity: 0.4, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
  className: "sm:px-12 px-3 mt-10 relative grid gap-4 sm:grid-cols-3",
};

const cardClassNames = "rounded p-5 shadow border sm:shadow-none sm:border-none";

export const MSG1 = () => {
  return (
    <motion.div {...motionProps}>
      {messages.map((message, index) => (
        <div key={index} className={cardClassNames}>
          <div className="pl-2">
            <FontAwesomeIcon icon={message.icon} className="text-4xl" />
          </div>
          <h1 className="text-xl p-0 m-0">{message.title}</h1>
          <p className="text-red-500">{message.subtitle}</p>
          <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
          <p>{message.content}</p>
        </div>
      ))}
    </motion.div>
  );
};
