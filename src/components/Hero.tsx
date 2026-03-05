import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 lg:py-24 max-w-7xl mx-auto gap-12 min-h-[70vh]">
      {/* Left Text Content */}
      <div className="flex-1 space-y-6 lg:max-w-xl">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-body text-xl font-medium text-[#1D1D1B]"
        >
          Hi, I'm Jay.
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-6xl md:text-[5rem] lg:text-[6rem] font-black leading-[1.05] tracking-tight text-[#1D1D1B]"
        >
          I BUILD FOR <br />
          <span className="relative inline-block mt-2 lg:mt-4">
            GROWTH.
            {/* The underlying yellow highlight */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-2 md:bottom-3 left-0 h-4 md:h-6 bg-accent-yellow -z-10"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-body text-lg md:text-xl max-w-lg leading-relaxed text-[#1D1D1B] font-medium pt-4"
        >
          I'm a Full Stack Developer with a background in building scalable web and mobile applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-6"
        >
          <button className="brutal-button text-2xl px-10 py-4 font-black tracking-wide">
            Start growing
          </button>
        </motion.div>
      </div>

      {/* Right Image Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex-1 relative w-full max-w-md mx-auto aspect-4/5 lg:aspect-square flex items-end justify-center mt-12 lg:mt-0 z-20"
      >
        {/* Pink Custom Backdrop */}
        <div className="absolute inset-x-8 lg:inset-x-12 top-10 bottom-0 bg-accent-pink brutal-border shadow-brutal rounded-t-3xl rounded-b-[40px] overflow-hidden">
          {/* Inner Image Placeholder */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[85%] bg-[#EAECF0] rounded-t-3xl border-3 border-b-0 border-[#1D1D1B] flex items-center justify-center flex-col gap-4 overflow-hidden">
            <svg
              className="w-24 h-24 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <div className="font-heading font-bold text-gray-500 text-xl tracking-wide uppercase text-center absolute">
              <img src="/images/gm1.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Floating Icons around the portrait */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 md:-left-4 bg-accent-green px-4 py-2 brutal-border shadow-brutal rounded-2xl flex items-center justify-center z-30"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1D1D1B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-32 -right-4 lg:-right-10 bg-accent-yellow w-20 h-20 brutal-border shadow-brutal rounded-full flex items-center justify-center z-30"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1D1D1B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </motion.div>

        {/* Availability Badge */}
        <div className="absolute -bottom-4 right-0 bg-accent-green text-[#1D1D1B] px-5 py-2 brutal-border shadow-[4px_4px_0px_#1D1D1B] rounded-full flex items-center gap-3 font-bold text-sm lg:text-base z-30 whitespace-nowrap">
          <div className="w-3 h-3 bg-white rounded-full border-2 border-[#1D1D1B] shadow-[1px_1px_0px_#1D1D1B]" />
          Available for Freelance
        </div>
      </motion.div>
    </section>
  );
}
