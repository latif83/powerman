import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="mb-16">
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.012481665923!2d-0.2554758!3d5.6765026999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f4df7adcb59%3A0xb277288105e12c4b!2sTHAGOSPEL%20CHURCH!5e0!3m2!1sen!2sgh!4v1687111217817!5m2!1sen!2sgh"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <motion.div
        id="getInTouch"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container px-6 md:px-12 mt-20"
      >
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <h1 className="text-xl font-bold py-5">GET IN TOUCH</h1>
          <div className="flex flex-wrap">
            <div className="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                {[
                  { id: "exampleInput90", label: "Name" },
                  { id: "exampleInput91", label: "Email address" },
                ].map((input) => (
                  <div key={input.id} className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id={input.id}
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor={input.id}
                    >
                      {input.label}
                    </label>
                  </div>
                ))}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  >
                    Message
                  </label>
                </div>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg shadow-yellow-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="flex flex-wrap">
                {[
                  {
                    icon: (
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        width={20}
                        height={20}
                        className="text-lg"
                      />
                    ),
                    title: "Support",
                    content: "info@powerman.com",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    ),
                    title: "Address",
                    content: "THAGOSPEL CHURCH, Halleluyah Junction, Accra",
                  },
                ].map((info, index) => (
                  <div
                    key={index}
                    className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12"
                  >
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-yellow-200 p-4 text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">{info.title}</p>
                        <p className="text-sm text-neutral-500">{info.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
