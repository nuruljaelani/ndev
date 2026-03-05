import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Center Figma Logo Approximation */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-1/3 w-16 h-16 bg-[#A084E8] rounded-2xl brutal-border hidden md:flex items-center justify-center drop-shadow-[4px_4px_0px_#1D1D1B]"
      >
        <span className="text-3xl font-bold text-white">F</span>
      </motion.div>

      {/* Top Right Blue Triangle */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-12 md:right-32 hidden lg:block drop-shadow-[4px_4px_0px_#1D1D1B]"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2L38 38H2L20 2Z"
            fill="#8DA1FF"
            stroke="#1D1D1B"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Center Left Pink Basketball */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -left-8 md:pl-0 transform -translate-y-1/2 hidden md:flex w-32 h-32 bg-accent-pink rounded-full brutal-border flex-col items-center justify-center drop-shadow-[6px_6px_0px_#1D1D1B]"
      >
        <div className="w-full h-full border-4 border-transparent border-t-black border-b-black rounded-full absolute rotate-45" />
        <div className="w-full h-full border-4 border-transparent border-t-black border-b-black rounded-full absolute -rotate-45" />
        <div className="w-full h-1 bg-black absolute" />
        <div className="w-1 h-full bg-black absolute" />
      </motion.div>

      {/* Top Left Teal Semicircle Arc */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -left-4 hidden md:block drop-shadow-[4px_4px_0px_#1D1D1B]"
      >
        <svg
          width="60"
          height="80"
          viewBox="0 0 60 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2C31.5 2 58 28.5 58 60V80H0V2Z"
            fill="#0BB195"
            stroke="#1D1D1B"
            strokeWidth="3"
          />
        </svg>
      </motion.div>

      {/* Bottom Right Pink Quarter */}
      <motion.div className="absolute bottom-32 -right-4 hidden lg:block drop-shadow-[5px_5px_0px_#1D1D1B]">
        <svg
          width="80"
          height="120"
          viewBox="0 0 80 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 2C36.9218 2 2 36.9218 2 80V120H80V2Z"
            fill="#F84F86"
            stroke="#1D1D1B"
            strokeWidth="3"
          />
        </svg>
      </motion.div>

      {/* Bottom Left Purple Shape */}
      <motion.div
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#9055F4] rounded-full brutal-border drop-shadow-[6px_6px_0px_#1D1D1B]"
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          clipPath: "inset(0 0 30% 0)",
        }}
      />

      {/* Bottom Right Yellow Arc */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 right-[10%] hidden md:block drop-shadow-[4px_4px_0px_#1D1D1B] z-20"
      >
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 60C2 27.9675 27.9675 2 60 2H80V60H2Z"
            fill="#FFC03F"
            stroke="#1D1D1B"
            strokeWidth="3"
          />
        </svg>
      </motion.div>
    </div>
  );
}
