import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/footer";

// Import sponsor slides
const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace("./", "")] = r(key);
  });
  return images;
};

const sponsorSlides = importAll(
  require.context("../assets/sponsors", false, /Sponsorspage.*\.(png|jpe?g|jpg)$/)
);

const sponsors = [
  "ARM_logo.png",
  "Accenture_logo.png",
  "BP_logo.png",
  "Dell_logo.png",
  "LPL_Financial_logo.png",
  "Micron_logo.png",
  "PG_logo.png",
  "Spectrum_logo.png",
  "Tesla_logo.png",
  "Texas_Instruments_logo.png",
  "lockheedmartin_logo.png",
];

function Sponsorship() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Object.values(sponsorSlides);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCF0D6] text-[#001F5B]">

      {/* HERO */}
      <section className="relative w-full py-28 px-6 bg-gradient-to-br from-[#001F5B] via-[#72A9BE] to-[#001F5B] flex flex-col md:flex-row items-center justify-center overflow-hidden">

        {/* Floating shapes */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-white/20 rounded-full blur-2xl"
            style={{ top: `${10 + i * 10}%`, left: `${i * 15}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3], x: [0, 15, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity }}
          />
        ))}

        {/* Left text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            Thank You to Our Sponsors!
          </h1>
          <p className="text-lg md:text-xl text-[#FCF0D6] leading-relaxed">
            A special thank you to all companies who have supported us this year! Your commitment in empowering Hispanics in STEM provides countless opportunities for our members.
          </p>
        </motion.div>

        {/* Right slideshow */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 relative z-10 max-w-lg rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt="Sponsor event"
            className="w-full h-96 object-cover rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#001F5B] text-center mb-10">
          Our Sponsors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {sponsors.map((logo, i) => (
            <motion.div
              key={i}
              className="relative bg-white p-6 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden cursor-pointer"
              whileHover={{
                scale: 1.15,
                rotate: [0, 1, -1, 0],
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                transition: { type: "tween", duration: 0.5 }
                }}

            >
              <img
                src={require(`../assets/sponsors/${logo}`)}
                alt={logo}
                className="max-h-28 object-contain"
              />
              <motion.div
                className="absolute inset-0 bg-[#001F5B]/80 text-white flex items-center justify-center text-center text-lg font-semibold rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
              >
                {logo.replace("_logo.png", "").replace(/_/g, " ")}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 flex justify-center">
        <motion.div
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-2xl border-2 border-[#72A9BE]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-bold text-[#001F5B] mb-4">
            Become a Sponsor Today
          </h2>
          <hr className="border-[#72A9BE] mb-4" />
          <p className="text-[#001F5B] mb-6">
            Contact our Corporate Director at{" "}
            <a
              href="mailto:utshpe@gmail.com"
              className="text-[#72A9BE] underline"
            >
              utshpe@gmail.com
            </a>{" "}
            to learn how your company can support UT SHPE students.
          </p>
          <a
            href={require("../assets/aboutus/UT-SHPE 25-26 Corporate Solicitation Packet.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#72A9BE] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#001F5B] transition-transform transform hover:scale-105"
          >
            <i className="fa-solid fa-file-pdf mr-2"></i>
            View Sponsorship Packet
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Sponsorship;
