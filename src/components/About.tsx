import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-6 md:px-12 lg:px-24 py-16 lg:py-24 max-w-7xl mx-auto border-t-4 border-[#1D1D1B] mt-12 bg-[#F84F86]/10 rounded-[60px] mx-4 md:mx-0"
    >
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Text */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[#1D1D1B] tracking-tight mb-6">
              Who am I?
            </h2>
            <p className="font-body text-[#1D1D1B] text-lg font-medium leading-relaxed mb-4">
              I am a passionate Full Stack Developer obsessed with building
              digital experiences that feel alive. I get inspiration from
              the latest trends in technology, and the sheer
              chaos of the creative process.
            </p>
            <p className="font-body text-[#1D1D1B] text-lg font-medium leading-relaxed">
              When I'm not coding, I'm mentoring junior developers or finding the perfect coffee blend.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 flex-wrap"
          >
            <div className="brutal-card bg-accent-yellow px-6 py-4 flex flex-col items-center flex-1 min-w-[120px]">
              <span className="font-heading font-black text-3xl">4+</span>
              <span className="font-body font-bold text-sm uppercase tracking-wider">
                Years Exp
              </span>
            </div>
            <div className="brutal-card bg-[#8DA1FF] px-6 py-4 flex flex-col items-center flex-1 min-w-[120px]">
              <span className="font-heading font-black text-3xl">10+</span>
              <span className="font-body font-bold text-sm uppercase tracking-wider">
                Projects
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visuals */}
        <div className="flex-1 relative w-full h-full min-h-[400px]">
          {/* Main Backdrop */}
          <motion.div
            initial={{ rotate: -5, opacity: 0 }}
            whileInView={{ rotate: 3, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-white brutal-border brutal-shadow"
          >
            {/* Inner Content Grid Placeholder */}
            <div className="w-full h-full p-6 grid grid-cols-2 gap-4">
              <div className="bg-[#9055F4] w-full h-full brutal-border rounded-xl"></div>
              <div className="grid grid-rows-2 gap-4">
                <div className="bg-accent-yellow w-full h-full brutal-border rounded-xl flex items-center justify-center text-5xl">
                  ✌️
                </div>
                <div className="bg-accent-pink w-full h-full brutal-border rounded-xl"></div>
              </div>
            </div>
          </motion.div>
          {/* Floating Decor */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-16 h-16 bg-white brutal-border brutal-shadow rounded-full flex items-center justify-center text-2xl z-10"
          >
            ⚡
          </motion.div>
        </div>
      </div>
    </section>
  );
}
