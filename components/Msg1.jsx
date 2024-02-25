import { faChurch, faHandsPraying, faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const MSG1 = ()=>{
    return (
      <motion.div initial={{ opacity: 0.4, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }} className="sm:px-12 px-3 mt-10 relative grid gap-4 sm:grid-cols-3">
      <div className="rounded p-5 shadow border sm:shadow-none sm:border-none">
        <div className="pl-2">
          <FontAwesomeIcon icon={faChurch} className="text-4xl" />
        </div>
        <h1 className="text-xl p-0 m-0">WORSHIP</h1>
        <p className="text-red-500">Embrace the Sacred</p>
        <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
        <p>
        In the sacred act of worship, we surrender our hearts, lifting our voices in praise and adoration to the Almighty. Through melody and reverence, we commune with the Divine, drawing closer to the source of all life and light.
        </p>
      </div>
      <div className="rounded p-5 shadow border sm:shadow-none sm:border-none">
        <div className="pl-2">
          <FontAwesomeIcon icon={faHandsPraying} className="text-4xl" />
        </div>
        <h1 className="text-xl p-0 m-0">CONNECT</h1>
        <p className="text-red-500">Join the Community</p>
        <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
        <p>
        As believers, we are called to forge bonds of fellowship, connecting with one another in the spirit of love and unity. Through shared faith and mutual support, we find strength, encouragement, and a deeper understanding of God's purpose for our lives.
        </p>
      </div>
      <div className="rounded p-5">
        <div className="pl-2">
          <FontAwesomeIcon icon={faShieldHeart} className="text-4xl" />
        </div>
        <h1 className="text-xl p-0 m-0">GOD'S LOVE</h1>
        <p className="text-red-500"> Experience Divine Grace</p>
        <hr className="w-16 h-1 my-2 bg-red-500 border-0 rounded" />
        <p>
        God's love is an everlasting embrace, enfolding us in its boundless warmth and grace. It is a love that knows no bounds, reaching into the depths of our souls and healing every wound. In the embrace of His love, we find solace, redemption, and the promise of eternal joy.
        </p>
      </div>
    </motion.div>
    )
}