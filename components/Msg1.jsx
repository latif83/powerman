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
    </motion.div>
    )
}