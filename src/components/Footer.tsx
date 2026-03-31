import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-12 lg:px-24 py-16 lg:py-24 max-w-7xl mx-auto border-t-[6px] border-[#1D1D1B] bg-accent-yellow mt-24 lg:rounded-[60px] lg:mb-12 shadow-[0_-8px_0_0_#1D1D1B]">
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-8 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#1D1D1B] tracking-tight leading-[0.9]"
          >
            LET'S MAKE <br /> SOMETHING <br />{" "}
            <span className="bg-white px-2 mt-2 inline-block brutal-border">
              EPIC.
            </span>
          </motion.h2>

          <a
            href="mailto:hello@ndev.web.id"
            className="inline-block mt-8 font-body font-bold text-2xl md:text-4xl text-[#1D1D1B] hover:text-white hover:drop-shadow-[3px_3px_0px_#1D1D1B] transition-all duration-300"
          >
            hello@ndev.web.id →
          </a>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6 w-full lg:w-auto">
          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/nurul-dev"
              className="w-14 h-14 bg-white rounded-full brutal-border shadow-[4px_4px_0px_#1D1D1B] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D1D1B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/aga_jelekk"
              className="w-14 h-14 bg-white rounded-full brutal-border shadow-[4px_4px_0px_#1D1D1B] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D1D1B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <p className="font-body font-bold mt-4 md:mt-12 text-[#1D1D1B] text-lg lg:text-right">
            © {new Date().getFullYear()} ndev.web.id.
            <br /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
