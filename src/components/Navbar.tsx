import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
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
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#8DA1FF] text-[#1D1D1B] px-8 py-3 rounded-full brutal-border brutal-shadow font-heading text-2xl font-bold"
        >
          Contact Me
        </motion.button>
      </Link>

      {/* Mobile Menu Icon (Placeholder) */}
      <div className="md:hidden">
        <div className="w-8 h-8 brutal-border bg-accent-yellow flex flex-col justify-center items-center gap-1 cursor-pointer">
          <div className="w-4 h-0.5 bg-black" />
          <div className="w-4 h-0.5 bg-black" />
          <div className="w-4 h-0.5 bg-black" />
        </div>
      </div>
    </nav>
  );
}
