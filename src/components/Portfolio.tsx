import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../products";

export default function Portfolio() {
  return (
    <section
      id="my-work"
      className="relative z-10 px-6 md:px-12 lg:px-24 py-16 lg:py-24 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body font-bold text-gray-500 text-sm md:text-base tracking-widest uppercase"
          >
            Selected Masterpieces
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[#1D1D1B] tracking-tight"
          >
            My Work
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <button className="brutal-button px-8 py-3 text-lg hidden md:block">
            View all projects
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 cursor-pointer">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover="hover"
            className="group relative"
          >
            <Link to={`/project/${project.id}`} className="block">
              {/* The Image Container */}
              <div
                className={`w-full aspect-video ${project.image} brutal-border brutal-shadow rounded-[32px] overflow-hidden relative mb-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_#1D1D1B]`}
              >
                {/* Hover overlay */}
                <motion.div
                  variants={{
                    hover: { opacity: 1 },
                  }}
                  initial={{ opacity: 0 }}
                  className={`absolute inset-0 ${project.color}/90 flex items-center justify-center backdrop-blur-sm z-10 transition-opacity duration-300`}
                >
                  <span className="bg-white px-6 py-2 rounded-full font-heading font-black text-[#1D1D1B] brutal-border drop-shadow-[4px_4px_0px_#1D1D1B]">
                    View Case Study
                  </span>
                </motion.div>
                {/* Decorative structural line simulating wireframe */}
                <div className="absolute inset-4 border-2 border-white/40 rounded-2xl pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 text-8xl font-black font-heading tracking-tighter mix-blend-multiply">
                  <img src={project.src} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </Link>
            {/* Details */}
            <div className="flex justify-between items-start px-2 mt-6">
              <div>
                <Link to={`/project/${project.id}`}>
                  <h3 className="font-heading text-3xl font-black text-[#1D1D1B] mb-2 group-hover:underline decoration-4 underline-offset-4">
                    {project.title}
                  </h3>
                </Link>
                <p className="font-body font-bold text-gray-500 uppercase tracking-wider text-sm">
                  {project.category}
                </p>
              </div>
              <Link
                to={`/project/${project.id}`}
                className={`w-12 h-12 rounded-full ${project.color} brutal-border flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D1D1B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center md:hidden">
        <button className="brutal-button px-8 py-3 text-lg w-full max-w-sm">
          View all projects
        </button>
      </div>
    </section>
  );
}
