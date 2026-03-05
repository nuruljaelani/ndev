import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FloatingShapes from "../components/FloatingShapes";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF6F0] relative overflow-hidden font-body text-text-main selection:bg-accent-yellow selection:text-black">
      {/* Main Container Outline matching the image style */}
      <div className="mx-auto min-h-screen relative p-4 md:p-8">
        <div className="absolute inset-4 md:inset-8 brutal-border rounded-[40px] md:rounded-[60px] bg-[#F4EDE4] -z-10" />
        <FloatingShapes />
        <Navbar />
        <main className="pb-12">
          <Hero />
          <Services />
          <About />
          <Portfolio />
        </main>
        <Footer />
      </div>
    </div>
  );
}
