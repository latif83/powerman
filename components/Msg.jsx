import { motion } from "framer-motion";

export const MSG = ()=>{
    return (
        <div className="sm:px-12 px-3 relative grid gap-4 sm:grid-cols-3">
        <motion.div style={{ zIndex: 999999 }} initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }} className="bg-red-500 shadow-lg text-white rounded-lg relative bottom-5 p-5">
          <h2 className="text-lg font-semibold">
            A Christian Should Live For The Glory Of God And The Well-Being Of
            Others.
          </h2>
          <p className="mt-8 text-gray-200">
            By prioritizing the well-being of others, Christians reflect the
            divine love that transforms lives and brings glory to God.
          </p>
        </motion.div>
        <motion.div style={{ zIndex: 999999 }} initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }} className="bg-red-500 shadow-lg text-white rounded-lg relative bottom-5 p-5">
          <h2 className="text-lg font-semibold">
            The Vision is to send JESUS and his message to the World.
          </h2>
          <p className="mt-8 text-gray-200">
            The vision is to spread the transformative message of Jesus Christ
            to every corner of the world, illuminating hearts with His love and
            grace, and ushering in a new era of hope and redemption for all
            humanity.
          </p>
        </motion.div>
        <motion.div style={{ zIndex: 999999 }} initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }} className="bg-red-500 shadow-lg text-white rounded-lg relative bottom-5 p-5">
          <h2 className="text-lg font-semibold">
            Empowering Sons to Manifest the Totality of God Through Jesus.
          </h2>
          <p className="mt-8 text-gray-200">
            JESUS being the totality of GOD means his manifested dimensions must
            be unveiled in creation through Sons. Diverse programs like seminars
            , mentorships and more are set in place for the emergence of Sons
            across the nations of the world.
          </p>
        </motion.div>
      </div>
    )
}