import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mlgzeakl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF6F0] relative overflow-hidden font-body text-text-main selection:bg-accent-yellow selection:text-black p-4 md:p-8">
      {/* Container Layout matching the main app */}
      <div className="max-w-[1400px] mx-auto min-h-screen relative border-4 border-[#1D1D1B] rounded-[40px] md:rounded-[60px] bg-accent-yellow flex flex-col pt-8 overflow-hidden">
        {/* Simple Header */}
        <header className="px-6 md:px-12 flex justify-between items-center z-20">
          <Link
            to="/"
            className="brutal-button px-6 py-2 text-sm bg-white hover:bg-[#8DA1FF]"
          >
            ← Back to Home
          </Link>
          <span className="font-heading font-black text-xl">ndev.web.id</span>
        </header>

        <main className="flex-1 px-6 md:px-12 py-12 lg:py-24 max-w-4xl mx-auto w-full z-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 brutal-border brutal-shadow rounded-[32px] w-full"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[#1D1D1B] mb-8 text-center">
              Let's talk.
            </h1>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-[#0BB195] brutal-border p-8 rounded-2xl text-white text-center"
                >
                  <h2 className="font-heading text-2xl font-bold mb-2">Message Sent!</h2>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 bg-white text-[#1D1D1B] brutal-button px-6 py-2 text-sm"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="font-bold text-sm uppercase tracking-wider"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#F4EDE4] brutal-border px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#1D1D1B] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="font-bold text-sm uppercase tracking-wider"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#F4EDE4] brutal-border px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#1D1D1B] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="font-bold text-sm uppercase tracking-wider"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#F4EDE4] brutal-border px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#1D1D1B] transition-all resize-none"
                      placeholder="Tell me about your amazing project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full ${
                      status === "loading" ? "bg-gray-400" : "bg-[#0BB195]"
                    } brutal-button py-4 text-xl font-black md:text-2xl mt-4 flex items-center justify-center gap-3`}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message 🚀"
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-bold text-center">
                      Oops! Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </main>

        {/* Background Decals */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-pink rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#8DA1FF] rounded-full blur-3xl opacity-50 pointer-events-none" />
      </div>
    </div>
  );
}
