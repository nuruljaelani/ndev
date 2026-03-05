import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between py-8 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex -space-x-1">
            <div
              className="w-5 h-10 bg-[#A084E8] brutal-border"
              style={{ borderRadius: "10px" }}
            />
            <div
              className="w-5 h-10 bg-[#8DA1FF] brutal-border translate-y-2"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <Link
            to="/"
            className="font-heading font-bold text-xl md:text-2xl mt-1"
          >
            ndev.web.id
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 font-bold text-lg">
          <a
            href="#about"
            className="hover:-translate-y-1 transition-transform relative group"
          >
            About
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded" />
          </a>
          <a
            href="#what-i-do"
            className="hover:-translate-y-1 transition-transform relative group"
          >
            What I Do
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded" />
          </a>
          <a
            href="#my-work"
            className="hover:-translate-y-1 transition-transform relative group"
          >
            My Work
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded" />
          </a>
        </div>

        {/* Profile Button */}
        <Link to="/contact" className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8DA1FF] text-[#1D1D1B] px-8 py-3 rounded-full brutal-border brutal-shadow font-heading text-2xl font-bold"
          >
            Contact Me
          </motion.button>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative z-50">
          <div
            className="w-8 h-8 brutal-border bg-accent-yellow flex flex-col justify-center items-center gap-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-4 h-0.5 bg-black"
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-4 h-0.5 bg-black"
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-4 h-0.5 bg-black"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#FFFDF6] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <motion.a
              variants={itemVariants}
              href="#about"
              onClick={() => setIsOpen(false)}
              className="font-heading text-3xl font-bold hover:text-[#8DA1FF] transition-colors"
            >
              About
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#what-i-do"
              onClick={() => setIsOpen(false)}
              className="font-heading text-3xl font-bold hover:text-[#8DA1FF] transition-colors"
            >
              What I Do
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#my-work"
              onClick={() => setIsOpen(false)}
              className="font-heading text-3xl font-bold hover:text-[#8DA1FF] transition-colors"
            >
              My Work
            </motion.a>
            <motion.div variants={itemVariants}>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#8DA1FF] text-[#1D1D1B] mt-4 px-8 py-3 rounded-full brutal-border brutal-shadow font-heading text-2xl font-bold"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
