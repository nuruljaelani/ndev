import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Fast, scalable, and modern websites built to support real business growth.",
    icon: (
      <img src="/icons/web-dev.svg" alt="" className="w-10 h-10" />
    ),
    color: "bg-[#8DA1FF]", // blue
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps designed for performance and smooth user experience.",
    icon: (
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
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="5"></circle>
        <circle cx="12" cy="12" r="2" fill="#1D1D1B"></circle>
        <line x1="3" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="21" y2="12"></line>
      </svg>
    ),
    color: "bg-accent-green", // green
  },
  {
    title: "System Architecture",
    description: "Scalable, reliable, and cost-efficient cloud-native solutions.",
    icon: (
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
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="12" y1="3" x2="12" y2="21"></line>
      </svg>
    ),
    color: "bg-accent-pink", // pink
  },
];

export default function Services() {
  return (
    <section
      id="what-i-do"
      className="relative z-10 px-6 md:px-12 lg:px-24 py-16 lg:py-24 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body font-bold text-gray-500 text-sm md:text-base tracking-widest uppercase"
        >
          Passion led us here
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[#1D1D1B] tracking-tight"
        >
          How I Can Help
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="brutal-card flex flex-col items-start gap-8 group hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-300"
          >
            <div
              className={`w-20 h-20 rounded-2xl ${service.color} brutal-border flex items-center justify-center shadow-[4px_4px_0px_#1D1D1B] group-hover:shadow-[6px_6px_0px_#1D1D1B] transition-shadow duration-300`}
            >
              {service.icon}
            </div>
            <div className="space-y-4 px-2">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1D1D1B]">
                {service.title}
              </h3>
              <p className="font-body text-[#4A4A4A] text-lg font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
