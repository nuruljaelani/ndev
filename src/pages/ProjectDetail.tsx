import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#FDF6F0] relative overflow-hidden font-body text-text-main selection:bg-accent-yellow selection:text-black p-4 md:p-8">
      {/* Container Layout matching the main app */}
      <div className="max-w-[1400px] mx-auto min-h-screen relative border-4 border-[#1D1D1B] rounded-[40px] md:rounded-[60px] bg-[#F4EDE4] flex flex-col pt-8">
        {/* Simple Header */}
        <header className="px-6 md:px-12 flex justify-between items-center z-20">
          <Link
            to="/"
            className="brutal-button px-6 py-2 text-sm bg-white hover:bg-accent-yellow"
          >
            ← Back to Home
          </Link>
          <span className="font-heading font-black text-xl">ndev.digital</span>
        </header>

        <main className="flex-1 px-6 md:px-12 py-12 lg:py-24 max-w-5xl mx-auto w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 mb-16 text-center"
          >
            <p className="font-bold text-gray-500 uppercase tracking-widest">
              Case Study
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-black text-[#1D1D1B] capitalize">
              Project: {id?.replace("-", " ")}
            </h1>
          </motion.div>

          {/* Hero Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full aspect-video bg-[#8DA1FF] brutal-border brutal-shadow rounded-[32px] mb-24 flex items-center justify-center overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
            <span className="font-heading text-4xl lg:text-8xl font-black text-black/30 rotate-12">
              FEATURED IMAGE
            </span>
          </motion.div>

          {/* Details Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-12">
              <section className="space-y-4">
                <h2 className="font-heading text-3xl font-black">
                  The Challenge
                </h2>
                <p className="text-lg leading-relaxed font-medium text-[#1D1D1B]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </section>
              <section className="space-y-4">
                <h2 className="font-heading text-3xl font-black">
                  The Solution
                </h2>
                <p className="text-lg leading-relaxed font-medium text-[#1D1D1B]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              <div className="brutal-card p-6 bg-accent-pink">
                <h3 className="font-heading font-black text-xl mb-2">Role</h3>
                <p className="font-bold">Lead Product Designer</p>
              </div>
              <div className="brutal-card p-6 bg-accent-yellow">
                <h3 className="font-heading font-black text-xl mb-2">
                  Timeline
                </h3>
                <p className="font-bold">12 Weeks</p>
              </div>
              <div className="brutal-card p-6 bg-accent-green">
                <h3 className="font-heading font-black text-xl mb-2">
                  Platform
                </h3>
                <p className="font-bold">iOS & Web</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
